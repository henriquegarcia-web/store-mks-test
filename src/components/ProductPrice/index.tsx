import styles from './styles.module.scss'

import { formatCurrency } from '@/utils/functions/formatCurrency'

interface IProductPrice {
  price: string
}

const ProductPrice = ({ price }: IProductPrice) => {
  return (
    <div className={styles.product_price}>
      {formatCurrency(parseFloat(price)).slice(0, -3)}
    </div>
  )
}

export default ProductPrice
