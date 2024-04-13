'use client'

import { useRef } from 'react'
import Image from 'next/image'

import styles from './styles.module.scss'

import { MiniCartMenu } from '@/components'
import { AnimatePresence, motion } from 'framer-motion'

import useClickOutside from '@/hooks/useClickOutside'
import { useCart } from '@/contexts/CartProvider'

const MiniCart = () => {
  const {
    isOpenCart,
    cartDetails,
    handleToggleCart,
    handleCloseCart,
    handleDeleteCartItem
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
        {cartDetails.cartTotalCount !== 0 && (
          <p>{cartDetails.cartTotalCount}</p>
        )}
      </div>
      <AnimatePresence>
        {isOpenCart && (
          <motion.div
            initial={{ opacity: 1, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: '100%' }}
            transition={{ ease: 'easeOut', duration: 0.3 }}
            className={styles.minicart__animation}
          >
            <MiniCartMenu
              handleCloseCart={handleCloseCart}
              cartDetails={cartDetails}
              handleDeleteCartItem={handleDeleteCartItem}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MiniCart
