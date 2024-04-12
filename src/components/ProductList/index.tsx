'use client'

import styles from './styles.module.scss'

import { useGetProducts } from '@/hooks/getProducts'

const ProductList = () => {
  const { data: posts, error: postError, fetchStatus } = useGetProducts()

  console.log(posts)

  return <div className={styles.product_list}>Product List</div>
}

export default ProductList
