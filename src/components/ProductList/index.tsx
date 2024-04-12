'use client'

import { useGetProducts } from '@/hooks/getProducts'

const ProductList = () => {
  const { data: posts, error: postError, fetchStatus } = useGetProducts()

  console.log(posts)

  return <></>
}

export default ProductList
