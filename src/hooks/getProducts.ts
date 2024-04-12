import { fetchProducts } from '@/server/actions/get-products'
import { useQuery } from '@tanstack/react-query'

export function useGetProducts() {
  return useQuery({
    queryFn: async () => fetchProducts(),
    queryKey: ['products']
  })
}
