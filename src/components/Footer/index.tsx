import Link from 'next/link'
import styles from './styles.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="https://www.mkssistemas.com.br/" target="_blank">
        MKS sistemas
      </Link>
      © Todos os direitos reservados
    </footer>
  )
}

export default Footer
