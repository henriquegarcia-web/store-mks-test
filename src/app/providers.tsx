'use client'

import { StoreProvider } from '@/contexts/StoreProvider'

export default function Providers({ children }: { children: React.ReactNode }) {
  return <StoreProvider>{children}</StoreProvider>
}
