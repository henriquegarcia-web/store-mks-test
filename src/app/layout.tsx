import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import '@/utils/styles/globals.scss'
import '@/utils/styles/variables.module.scss'

import Providers from './providers'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Loja de Roupas | Teste MKS',
  description: ''
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
