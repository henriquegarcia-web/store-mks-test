'use client'

import { useEffect, useRef, useState } from 'react'

import styles from './styles.module.scss'
import { IoCloseCircle } from 'react-icons/io5'
import { TbShoppingCartQuestion } from 'react-icons/tb'

import { Button, MiniCartCard } from '@/components'

import { formatCurrency } from '@/utils/functions/formatCurrency'
import useScrollbar from '@/hooks/useScrollbar'
import { useCart } from '@/contexts/CartProvider'

import { ICartDetails, ICartProduct, IProduct } from '@/@types/store'

interface IMiniCartMenu {
  handleCloseCart: () => void
  cartDetails: ICartDetails
}

const MiniCartMenu = ({ handleCloseCart, cartDetails }: IMiniCartMenu) => {
  const {
    updatingCart,
    handleDeleteCartItem,
    updateCartProductQuantity,
    handleFinalizePurchases
  } = useCart()

  const miniCartWrapperRef = useRef(null)

  const [containerHasScrollbar] = useScrollbar(miniCartWrapperRef)

  return (
    <div className={styles.minicart_menu}>
      <div className={styles.minicart_menu__header}>
        <p className={styles.minicart_menu__title}>Carrinho de compras</p>
        <button
          className={styles.minicart_menu__close}
          onClick={handleCloseCart}
          data-testid="mini-cart-close"
        >
          <IoCloseCircle />
        </button>
      </div>
      <div className={styles.minicart_menu__content}>
        <div
          className={`
            ${styles.minicart_menu__content_wrapper}
            ${containerHasScrollbar && styles.with_padding}
          `}
          ref={miniCartWrapperRef}
        >
          <div className={styles.minicart_menu__content_products}>
            {!cartDetails.cartProducts.length ? (
              <div className={styles.minicart_menu__content_empty}>
                <TbShoppingCartQuestion />
                Carrinho vazio. Adicione um produto.
              </div>
            ) : (
              cartDetails.cartProducts.map((product: ICartProduct) => (
                <MiniCartCard
                  key={product.id}
                  updatingCart={updatingCart}
                  productData={product}
                  handleDecreaseQuantity={() =>
                    updateCartProductQuantity(product, -1)
                  }
                  handleIncreaseQuantity={() =>
                    updateCartProductQuantity(product, 1)
                  }
                  handleDeleteCartItem={handleDeleteCartItem}
                />
              ))
            )}
          </div>
        </div>
      </div>
      <div className={styles.minicart_menu__footer}>
        <div className={styles.minicart_menu__subtotal}>
          <p className={styles.minicart_menu__subtotalLabel}>Total:</p>
          <b className={styles.minicart_menu__subtotalValue}>
            {updatingCart ? (
              <span className={`${styles.skeleton_subtotalValue} skeleton`} />
            ) : (
              formatCurrency(cartDetails.cartTotalPrice).slice(0, -3)
            )}
          </b>
        </div>
        <div
          className={styles.minicart_menu__cta}
          data-testid="mini-cart-buy-button"
        >
          <Button
            label="Finalizar Compra"
            type="secondary"
            loading={updatingCart}
            onClick={handleFinalizePurchases}
          />
        </div>
      </div>
    </div>
  )
}

export default MiniCartMenu
