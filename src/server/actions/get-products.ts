'use server'

import { createSafeActionClient } from 'next-safe-action'

import { api } from '@/server'

import { IProduct } from '@/@types/store'

export const action = createSafeActionClient()

const fetchProducts = async (): Promise<IProduct[] | null> => {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))

  try {
    await delay(5000)

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
