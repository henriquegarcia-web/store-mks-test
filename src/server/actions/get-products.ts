'use server'

import { api } from '@/server'

import { IProduct } from '@/@types/store'

const fetchProducts = async (): Promise<IProduct[] | null> => {
  try {
    const response = await api.get('/products', {
      params: {
        page: 1,
        rows: 12,
        sortBy: 'id',
        orderBy: 'ASC'
      }
    })
    const data = await response.data
    return data.products || null
  } catch (error) {
    console.log(error)
    return null
  }
}

export { fetchProducts }
