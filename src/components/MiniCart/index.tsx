import Image from 'next/image'

import styles from './styles.module.scss'

const MiniCart = () => {
  const cartQuantity = 10

  return (
    <div className={styles.minicart}>
      <Image
        src="/minicart.svg"
        alt="Ícone do Carrinho"
        width={18}
        height={18}
      />
      {cartQuantity && <p>{cartQuantity}</p>}
    </div>
  )
}

export default MiniCart
