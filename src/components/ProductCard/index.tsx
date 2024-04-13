import styles from './styles.module.scss'

import { IProduct } from '@/@types/store'

interface IProductCard {
  productData: IProduct
}

const ProductCard = ({ productData }: IProductCard) => {
  return <div className={styles.product_card}>ProductCard</div>
}

export default ProductCard
