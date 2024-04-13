import Link from 'next/link'

import styles from './styles.module.scss'

const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      <b>MKS</b>
      <p>Sistemas</p>
    </Link>
  )
}

export default Logo
