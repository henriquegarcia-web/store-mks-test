'use client'

import styles from './styles.module.scss'

import { ProductCard } from '@/components'
import { useGetProducts } from '@/hooks/getProducts'

import { IProduct } from '@/@types/store'

const ProductList = () => {
  const { data: posts, error: postError, fetchStatus } = useGetProducts()

  console.log(posts)

  return (
    <div className={styles.product_list}>
      <div className={styles.product_list__wrapper}>
        {posts?.map((product: IProduct) => (
          <ProductCard key={product.id} productData={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
