import styles from './styles.module.scss'
import { IoCloseCircle } from 'react-icons/io5'

import { Button, MiniCartCard } from '@/components'

import { ICartDetails, ICartProduct } from '@/@types/store'
import { formatCurrency } from '@/utils/functions/formatCurrency'

interface IMiniCartMenu {
  handleCloseCart: () => void
  cartDetails: ICartDetails
  handleDeleteCartItem: (productId: number) => void
}

const MiniCartMenu = ({
  handleCloseCart,
  cartDetails,
  handleDeleteCartItem
}: IMiniCartMenu) => {
  return (
    <div className={styles.minicart_menu}>
      <div className={styles.minicart_menu__header}>
        <p className={styles.minicart_menu__title}>Carrinho de compras</p>
        <button
          className={styles.minicart_menu__close}
          onClick={handleCloseCart}
        >
          <IoCloseCircle />
        </button>
      </div>
      <div className={styles.minicart_menu__content}>
        <div className={styles.minicart_menu__content_wrapper}>
          <div className={styles.minicart_menu__content_products}>
            {cartDetails.cartProducts.map((product: ICartProduct) => (
              <MiniCartCard
                key={product.id}
                productData={product}
                handleDeleteCartItem={handleDeleteCartItem}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.minicart_menu__footer}>
        <div className={styles.minicart_menu__subtotal}>
          <p className={styles.minicart_menu__subtotalLabel}>Total:</p>
          <b className={styles.minicart_menu__subtotalValue}>
            {formatCurrency(cartDetails.cartTotalPrice).slice(0, -3)}
          </b>
        </div>
        <div className={styles.minicart_menu__cta}>
          <Button label="Finalizar Compra" type="secondary" />
        </div>
      </div>
    </div>
  )
}

export default MiniCartMenu
