'use client'

import { useCallback, useState } from 'react'
import Image from 'next/image'

import styles from './styles.module.scss'
import { IoCloseCircle } from 'react-icons/io5'

import { InputCounter } from '@/components'

import { useCart } from '@/contexts/CartProvider'
import { formatCurrency } from '@/utils/functions/formatCurrency'

import { ICartProduct } from '@/@types/store'
interface IMiniCartCard {
  productData: ICartProduct
}

const MiniCartCard = ({ productData }: IMiniCartCard) => {
  const { handleDeleteCartItem, updateCartProductQuantity } = useCart()

  const [addingProductToCart, setUpdatingProductQuantity] = useState(false)

  const handleIncreaseProductQuantity = useCallback(() => {
    setUpdatingProductQuantity(true)
    setTimeout(() => {
      updateCartProductQuantity(productData.id, 1)
      setUpdatingProductQuantity(false)
    }, 1000)
  }, [productData])

  const handleDecreaseProductQuantity = useCallback(() => {
    setUpdatingProductQuantity(true)
    setTimeout(() => {
      updateCartProductQuantity(productData.id, -1)
      setUpdatingProductQuantity(false)
    }, 1000)
  }, [productData])

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
          <InputCounter
            initialQuantity={productData.quantity}
            addingProductToCart={addingProductToCart}
            handleDecreaseQuantity={handleDecreaseProductQuantity}
            handleIncreaseQuantity={handleIncreaseProductQuantity}
          />
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
