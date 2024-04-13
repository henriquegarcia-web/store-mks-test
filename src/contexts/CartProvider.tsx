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
import { IProduct } from '@/@types/store'

export const CartContext = createContext<ICartContextData>(
  {} as ICartContextData
)

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  // ========================================================================

  const [isOpenCart, setIsOpenCart] = useState<boolean>(true)
  const [cartProducts, setCartProducts] = useState<IProduct[]>([])

  const handleToggleCart = () => setIsOpenCart(!isOpenCart)
  const handleOpenCart = () => setIsOpenCart(true)
  const handleCloseCart = () => setIsOpenCart(false)

  const cartQuantity = useMemo(() => {
    return cartProducts.length
  }, [cartProducts])

  // ========================================================================

  const CartContextData: ICartContextData = useMemo(() => {
    return {
      isOpenCart,
      cartProducts,
      cartQuantity,
      handleToggleCart,
      handleOpenCart,
      handleCloseCart
    }
  }, [isOpenCart, cartProducts, cartQuantity])

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
