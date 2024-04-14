'use client'

import { useState } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { Slide, ToastContainer } from 'react-toastify'

import { CartProvider } from '@/contexts/CartProvider'

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // staleTime: 4 * 1000,
            // refetchInterval: 4 * 1000
          }
        }
      })
  )

  return (
    <CartProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <ToastContainer
          position="bottom-left"
          pauseOnHover={false}
          transition={Slide}
        />
        {children}
      </QueryClientProvider>
    </CartProvider>
  )
}
