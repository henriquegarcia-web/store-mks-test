'use server'

import { createSafeActionClient } from 'next-safe-action'

import { api } from '@/server'

import { Products } from '@/@types/store'

export const action = createSafeActionClient()

const fetchProducts = async (): Promise<Products[] | null> => {
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
