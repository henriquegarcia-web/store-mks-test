import styles from './styles.module.scss'

import { ProductCardSkeleton } from '@/components'

const ProductListSkeleton = () => {
  const renderProductListSkeleton = () => {
    const productCards = []
    for (let i = 0; i < 12; i++) {
      productCards.push(<ProductCardSkeleton key={`product-cards-${i}`} />)
    }
    return productCards
  }

  return (
    <div className={styles.product_list}>
      <div className={styles.product_list__wrapper}>
        {renderProductListSkeleton()}
      </div>
    </div>
  )
}

export default ProductListSkeleton
