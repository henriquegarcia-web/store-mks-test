import { ICartDetails, ICartProduct, IProduct } from './store'

// ======================================= STORE CONTEXT

export interface ICartContextData {
  isOpenCart: boolean
  cartDetails: ICartDetails
  handleToggleCart: () => void
  handleOpenCart: () => void
  handleCloseCart: () => void
  handleAddProductToCart: (product: IProduct) => void
  handleDeleteCartItem: (product: IProduct) => void
  updateCartProductQuantity: (
    product: IProduct,
    quantityModifier: number
  ) => void
  handleFinalizePurchases: () => void
}
