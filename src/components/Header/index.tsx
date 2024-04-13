import styles from './styles.module.scss'

import { Logo, MiniCart } from '@/components'

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <MiniCart />
    </header>
  )
}

export default Header
