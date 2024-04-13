import styles from './styles.module.scss'

import { Footer, Header, ProductList } from '@/components'

import {
  QueryClient,
  HydrationBoundary,
  dehydrate
} from '@tanstack/react-query'

import { fetchProducts } from '@/server/actions/get-products'

export default async function StorePage() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  })

  return (
    <main className={styles.store_page}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Header />
        <ProductList />
        <Footer />
      </HydrationBoundary>
    </main>
  )
}
