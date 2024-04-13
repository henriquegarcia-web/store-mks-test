import Image from 'next/image'

import styles from './styles.module.scss'
import { IoCloseCircle } from 'react-icons/io5'

import { InputCounter } from '@/components'

import { ICartProduct } from '@/@types/store'
import { formatCurrency } from '@/utils/functions/formatCurrency'
import { useState } from 'react'

interface IMiniCartCard {
  productData: ICartProduct
  handleDeleteCartItem: (productId: number) => void
}

const MiniCartCard = ({ productData, handleDeleteCartItem }: IMiniCartCard) => {
  // const [tesete, ete] = useState()

  return (
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
        <div className={styles.minicart_card__counter}>
          <InputCounter initialQuantity={productData.quantity} />
        </div>
        <div className={styles.minicart_card__price}>
          {formatCurrency(parseFloat(productData.price)).slice(0, -3)}
        </div>
      </div>
      <button
        className={styles.minicart_card__close}
        onClick={() => handleDeleteCartItem(productData.id)}
      >
        <IoCloseCircle />
      </button>
    </div>
  )
}

export default MiniCartCard
