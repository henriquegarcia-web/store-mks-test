import { ICartDetails, ICartProduct, IProduct } from './store'

// ======================================= STORE CONTEXT

export interface ICartContextData {
  isOpenCart: boolean
  cartDetails: ICartDetails
  handleToggleCart: () => void
  handleOpenCart: () => void
  handleCloseCart: () => void
  handleAddProductToCart: (product: IProduct) => void
  handleDeleteCartItem: (productId: number) => void
  updateCartProductQuantity: (
    productId: number,
    quantityModifier: number
  ) => void
}
