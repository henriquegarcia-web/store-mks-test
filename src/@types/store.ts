export interface IProduct {
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: string
  createdAt: string
  updatedAt: string
}

export interface ICartProduct {
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: string
  createdAt: string
  updatedAt: string
  quantity: number
}

export interface ICartDetails {
  cartTotalCount: number
  cartTotalPrice: number
  cartProducts: ICartProduct[]
}
