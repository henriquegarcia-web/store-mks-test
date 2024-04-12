'use server'

import { createSafeActionClient } from 'next-safe-action'

import { api } from '@/server'

import { Products } from '@/@types/store'

export const action = createSafeActionClient()

export async function fetchProducts(): Promise<Products[] | undefined> {
  try {
    const response = await api.get(
      'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=5&sortBy=id&orderBy=ASC'
    )
    const data = await response.data
    return data.products
  } catch (error) {
    console.log(error)
  }
}
