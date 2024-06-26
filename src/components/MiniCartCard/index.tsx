'use client'

import Image from 'next/image'

import styles from './styles.module.scss'
import { IoCloseCircle } from 'react-icons/io5'

import { InputCounter } from '@/components'
import { motion } from 'framer-motion'

import { formatCurrency } from '@/utils/functions/formatCurrency'

import { ICartProduct, IProduct } from '@/@types/store'
interface IMiniCartCard {
  updatingCart: boolean
  productData: ICartProduct
  handleDecreaseQuantity: () => void
  handleIncreaseQuantity: () => void
  handleDeleteCartItem: (product: IProduct) => void
}

const MiniCartCard = ({
  updatingCart,
  productData,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
  handleDeleteCartItem
}: IMiniCartCard) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeOut', duration: 1 }}
    >
      <div className={styles.minicart_card}>
        <div className={styles.minicart_card__image}>
          <Image
            src={productData.photo}
            alt={`Image do produto ${productData.name} no carrinho`}
            width={100}
            height={100}
          />
        </div>
        <div className={styles.minicart_card__details}>
          <div className={styles.minicart_card__name}>{productData.name}</div>
          <div className={styles.minicart_card__details_wrapper}>
            <div className={styles.minicart_card__counter}>
              <InputCounter
                initialQuantity={productData.quantity}
                updatingCart={updatingCart}
                handleDecreaseQuantity={handleDecreaseQuantity}
                handleIncreaseQuantity={handleIncreaseQuantity}
              />
            </div>
            <div className={styles.minicart_card__price}>
              {formatCurrency(
                productData.quantity * parseFloat(productData.price)
              ).slice(0, -3)}
            </div>
          </div>
        </div>
        <button
          className={styles.minicart_card__close}
          onClick={() => handleDeleteCartItem(productData)}
          data-testid="mini-cart-cart-close"
        >
          <IoCloseCircle />
        </button>
      </div>
    </motion.div>
  )
}

export default MiniCartCard
