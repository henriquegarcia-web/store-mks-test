import styles from './styles.module.scss'
import { IoCloseCircle } from 'react-icons/io5'

import { Button, MiniCartCard } from '@/components'
import { IProduct } from '@/@types/store'

interface IMiniCartMenu {
  handleCloseCart: () => void
}

const mocked = [
  {
    id: 1,
    name: 'Iphone 11 128 GB',
    brand: 'Apple',
    description:
      'Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.',
    photo:
      'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp',
    price: '5000.00',
    createdAt: '2023-10-30T16:25:01.093Z',
    updatedAt: '2023-10-30T16:25:01.093Z'
  },
  {
    id: 2,
    name: 'AirPods',
    brand: 'Apple',
    description:
      'Criados pela Apple Ligam e se conectam automaticamente Configuração com apenas um toque para todos seus aparelhos Apple.',
    photo:
      'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp',
    price: '1200.00',
    createdAt: '2023-10-30T16:25:01.093Z',
    updatedAt: '2023-10-30T16:25:01.093Z'
  },
  {
    id: 3,
    name: 'Macbook Air',
    brand: 'Apple',
    description:
      'Processador intel Core i5 de dois núcleos e 1,8 GHz (Turbo Boost de até 2,9 GHz) com cache L3 compartilhado de 3 MB.',
    photo:
      'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/macbookair.webp',
    price: '8200.00',
    createdAt: '2023-10-30T16:25:01.093Z',
    updatedAt: '2023-10-30T16:25:01.093Z'
  },
  {
    id: 4,
    name: 'iPhone 12 64 GB',
    brand: 'Apple',
    description:
      'Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.',
    photo:
      'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone12x64.webp',
    price: '6500.00',
    createdAt: '2023-10-30T16:25:01.093Z',
    updatedAt: '2023-10-30T16:25:01.093Z'
  },
  {
    id: 5,
    name: 'Apple Watch Series 7',
    brand: 'Apple',
    description:
      'O Apple Watch faz coisas que outros aparelhos não conseguem porque ele fica no seu pulso.',
    photo:
      'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp',
    price: '3200.00',
    createdAt: '2023-10-30T16:25:01.093Z',
    updatedAt: '2023-10-30T16:25:01.093Z'
  },
  {
    id: 6,
    name: 'iPad',
    brand: 'Apple',
    description:
      'iPad é uma linha de tablets projetada, desenvolvida e comercializada pela Apple, que funciona com o sistema operacional móvel iOS e iPadOS.',
    photo:
      'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/ipadair.webp',
    price: '4200.00',
    createdAt: '2023-10-30T16:25:01.093Z',
    updatedAt: '2023-10-30T16:25:01.093Z'
  },
  {
    id: 7,
    name: 'Headset Cloud Revolver',
    brand: 'HyperX',
    description:
      'A linha HyperX Cloud Revolver foi projetada para atender as exigências dos gamers de PC ou de console.',
    photo:
      'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperx-cloudrevolver.webp',
    price: '1000.00',
    createdAt: '2023-10-30T16:25:01.093Z',
    updatedAt: '2023-10-30T16:25:01.093Z'
  },
  {
    id: 8,
    name: 'Headset Cloud Stinger',
    brand: 'HyperX',
    description:
      'O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.',
    photo:
      'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp',
    price: '600.00',
    createdAt: '2023-10-30T16:25:01.093Z',
    updatedAt: '2023-10-30T16:25:01.093Z'
  }
]

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
      <div className={styles.minicart_menu__content}>
        <div className={styles.minicart_menu__content_wrapper}>
          <div className={styles.minicart_menu__content_products}>
            {mocked.map((product: IProduct) => (
              <MiniCartCard key={product.id} productData={product} />
            ))}
          </div>
        </div>
      </div>
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
