import styles from './styles.module.scss'

import { Logo, MiniCart } from '@/components'

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo data-testid="logo" />
      <MiniCart data-testid="mini-cart" />
    </header>
  )
}

export default Header
