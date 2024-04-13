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

export const CartContext = createContext<ICartContextData>(
  {} as ICartContextData
)

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  // ========================================================================

  const [isOpenCart, setIsOpenCart] = useState<boolean>(false)
  const [cartProducts, setCartProducts] = useState<ICartProduct[]>([])

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

      // INFORMATIVO: Item já existe no carrinho. Quantidade aumentada em 1.
    } else {
      const newProduct: ICartProduct = {
        ...product,
        quantity: 1
      }
      storedCart.push(newProduct)

      // SUCESSO: Produto adicionado ao carrinho.
    }

    localStorage.setItem('mksCartItems', JSON.stringify(storedCart))

    handleGetCartItems()
  }

  const handleDeleteCartItem = useCallback(
    (productId: number) => {
      const itemIndex = cartProducts.findIndex(
        (item: IProduct) => item.id === productId
      )

      if (itemIndex !== -1) {
        cartProducts.splice(itemIndex, 1)
        localStorage.setItem('mksCartItems', JSON.stringify(cartProducts))

        handleGetCartItems()
      } else {
        console.error(`Item não encontrado no carrinho: ${productId}`)
      }
    },
    [cartProducts]
  )

  // ========================================================================

  useEffect(() => {
    handleGetCartItems()
  }, [])

  useEffect(() => {
    console.log(cartProducts)
  }, [cartProducts])

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
      handleToggleCart,
      handleOpenCart,
      handleCloseCart,
      handleAddProductToCart,
      handleDeleteCartItem
    }
  }, [isOpenCart, cartDetails, handleDeleteCartItem])

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
