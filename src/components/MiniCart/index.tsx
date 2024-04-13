'use client'

import Image from 'next/image'

import styles from './styles.module.scss'

import { useCart } from '@/contexts/CartProvider'

const MiniCart = () => {
  const {
    isOpenCart,
    cartQuantity,
    handleToggleCart,
    handleOpenCart,
    handleCloseCart
  } = useCart()

  return (
    <div className={styles.minicart}>
      <div className={styles.minicart__button} onClick={handleToggleCart}>
        <Image
          src="/minicart.svg"
          alt="Ícone do Carrinho"
          width={18}
          height={18}
        />
        {cartQuantity !== 0 && <p>{cartQuantity}</p>}
      </div>
    </div>
  )
}

export default MiniCart
