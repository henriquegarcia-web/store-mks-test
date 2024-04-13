import styles from './styles.module.scss'
import { IoCloseCircle } from 'react-icons/io5'

import { Button } from '@/components'

interface IMiniCartMenu {
  handleCloseCart: () => void
}

const MiniCartMenu = ({ handleCloseCart }: IMiniCartMenu) => {
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
      <div className={styles.minicart_menu__content}></div>
      <div className={styles.minicart_menu__footer}>
        <div className={styles.minicart_menu__subtotal}>
          <p className={styles.minicart_menu__subtotalLabel}>Total:</p>
          <b className={styles.minicart_menu__subtotalValue}>R$ 700</b>
        </div>
        <div className={styles.minicart_menu__cta}>
          <Button label="Finalizar Compra" type="secondary" />
        </div>
      </div>
    </div>
  )
}

export default MiniCartMenu
