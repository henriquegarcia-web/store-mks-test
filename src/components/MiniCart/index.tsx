'use client'

import { useRef } from 'react'
import Image from 'next/image'

import styles from './styles.module.scss'

import { AnimatePresence, motion } from 'framer-motion'

import useClickOutside from '@/hooks/useClickOutside'
import { useCart } from '@/contexts/CartProvider'

const MiniCart = () => {
  const {
    isOpenCart,
    cartQuantity,
    handleToggleCart,
    handleOpenCart,
    handleCloseCart
  } = useCart()

  const miniCartMenuRef = useRef(null)

  useClickOutside({
    active: isOpenCart,
    containerRef: miniCartMenuRef,
    onClickOutside: handleCloseCart
  })

  return (
    <div className={styles.minicart} ref={miniCartMenuRef}>
      <div className={styles.minicart__button} onClick={handleToggleCart}>
        <Image
          src="/minicart.svg"
          alt="Ícone do Carrinho"
          width={18}
          height={18}
        />
        {cartQuantity !== 0 && <p>{cartQuantity}</p>}
      </div>
      <AnimatePresence>
        {isOpenCart && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className={styles.minicart__menu}
          >
            <div></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MiniCart
