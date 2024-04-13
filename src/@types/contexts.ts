import { IProduct } from './store'

// ======================================= STORE CONTEXT

export interface ICartContextData {
  isOpenCart: boolean
  cartProducts: IProduct[]
  cartQuantity: number
  handleToggleCart: () => void
  handleOpenCart: () => void
  handleCloseCart: () => void
}
