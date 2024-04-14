'use client'

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

import { ICartContextData } from '@/@types/contexts'
import { ICartProduct, IProduct } from '@/@types/store'
import { handleNotify } from '@/utils/functions/notify'

export const CartContext = createContext<ICartContextData>(
  {} as ICartContextData
)

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  // ========================================================================

  const [isOpenCart, setIsOpenCart] = useState<boolean>(false)
  const [cartProducts, setCartProducts] = useState<ICartProduct[]>([])
  const [updatingCart, setUpdatingCard] = useState(false)

  const handleToggleCart = () => setIsOpenCart(!isOpenCart)
  const handleOpenCart = () => setIsOpenCart(true)
  const handleCloseCart = () => setIsOpenCart(false)

  // ========================================================================

  const handleGetCartItems = () => {
    let cartItems = []
    const storedCart = localStorage.getItem('mksCartItems')
    if (storedCart) {
      cartItems = JSON.parse(storedCart)
    }
    setCartProducts(cartItems)
  }

  const handleAddProductToCart = (product: IProduct) => {
    const storedCart = JSON.parse(localStorage.getItem('mksCartItems') || '[]')

    const existingIndex = storedCart.findIndex(
      (item: IProduct) => item.id === product.id
    )

    if (existingIndex !== -1) {
      storedCart[existingIndex].quantity++

      handleNotify(
        'Item já existe no carrinho. Quantidade aumentada em 1.',
        'info'
      )
    } else {
      const newProduct: ICartProduct = {
        ...product,
        quantity: 1
      }
      storedCart.push(newProduct)

      const noitfyMessage = `${product.name} adicionado ao carrinho.`
      handleNotify(noitfyMessage, 'success')
    }

    localStorage.setItem('mksCartItems', JSON.stringify(storedCart))

    handleGetCartItems()
  }

  const handleDeleteCartItem = useCallback(
    (product: IProduct) => {
      const itemIndex = cartProducts.findIndex(
        (item: IProduct) => item.id === product.id
      )

      if (itemIndex !== -1) {
        cartProducts.splice(itemIndex, 1)
        localStorage.setItem('mksCartItems', JSON.stringify(cartProducts))

        const noitfyMessage = `${product.name} removido do carrinho.`
        handleNotify(noitfyMessage, 'warning')

        handleGetCartItems()
      } else {
        handleNotify(
          'Falha ao remover produto do carrinho. Tente novamente.',
          'error'
        )
      }
    },
    [cartProducts]
  )

  const handleFinalizePurchases = () => {
    setUpdatingCard(true)
    setTimeout(() => {
      setCartProducts([])
      localStorage.removeItem('mksCartItems')

      handleNotify(
        'Compra finalizada com sucesso! O carrinho foi esvaziado.',
        'success'
      )

      setUpdatingCard(false)
    }, 1000)
  }

  const updateCartProductQuantity = useCallback(
    (product: IProduct, quantityModifier: number) => {
      setUpdatingCard(true)

      setTimeout(() => {
        const updatedCartProducts = cartProducts
          .map((item: ICartProduct) => {
            if (item.id === product.id) {
              const newQuantity = Math.max(item.quantity + quantityModifier, 0)
              if (newQuantity === 0) {
                const noitfyMessage = `${product.name} removido do carrinho.`
                handleNotify(noitfyMessage, 'warning')

                return null
              } else {
                return {
                  ...item,
                  quantity: newQuantity
                }
              }
            }
            return item
          })
          .filter((item): item is ICartProduct => item !== null)

        setCartProducts(updatedCartProducts)
        localStorage.setItem(
          'mksCartItems',
          JSON.stringify(updatedCartProducts.filter(Boolean))
        )

        setUpdatingCard(false)
      }, 1000)
    },
    [cartProducts]
  )

  // ========================================================================

  useEffect(() => {
    handleGetCartItems()
  }, [])

  const cartDetails = useMemo(() => {
    const total = cartProducts.reduce((acc, product: any) => {
      return acc + parseFloat(product.price) * product.quantity
    }, 0)

    return {
      cartTotalCount: cartProducts.length,
      cartTotalPrice: parseFloat(total.toFixed(2)),
      cartProducts
    }
  }, [cartProducts])

  // ========================================================================

  const CartContextData: ICartContextData = useMemo(() => {
    return {
      isOpenCart,
      cartDetails,
      updatingCart,
      handleToggleCart,
      handleOpenCart,
      handleCloseCart,
      handleAddProductToCart,
      handleDeleteCartItem,
      updateCartProductQuantity,
      handleFinalizePurchases
    }
  }, [
    isOpenCart,
    cartDetails,
    updatingCart,
    handleDeleteCartItem,
    updateCartProductQuantity
  ])

  return (
    <CartContext.Provider value={CartContextData}>
      {children}
    </CartContext.Provider>
  )
}

function useCart(): ICartContextData {
  const context = useContext(CartContext)

  if (!context) throw new Error('useAuth must be used within a UserProvider')

  return context
}

export { CartProvider, useCart }
