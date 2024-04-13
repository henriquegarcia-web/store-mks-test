import Image from 'next/image'

import styles from './styles.module.scss'

import { AddProductToCart, ProductPrice } from '@/components'

import { IProduct } from '@/@types/store'

interface IProductCard {
  productData: IProduct
}

const ProductCard = ({ productData }: IProductCard) => {
  return (
    <div className={styles.product_card}>
      <div className={styles.product_card__wrapper}>
        <div className={styles.product_card__image}>
          <div className={styles.product_card__image_wrapper}>
            <Image
              src={productData.photo}
              alt={`Imagem do produto - ${productData.name}`}
              width={250}
              height={250}
            />
          </div>
        </div>
        <div className={styles.product_card__main_infos}>
          <p className={styles.product_card__name}>{productData.name}</p>
          <span>
            <ProductPrice price={productData.price} />
          </span>
        </div>
        <p className={styles.product_card__description}>
          {productData.description}
        </p>
      </div>
      <div className={styles.product_card__cta}>
        <AddProductToCart productData={productData} />
      </div>
    </div>
  )
}

export default ProductCard
