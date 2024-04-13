import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import '@/utils/styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'

import Providers from './providers'

export const metadata: Metadata = {
  title: 'Loja de Roupas | Teste MKS',
  description: ''
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const montserrat = Montserrat({ subsets: ['latin'] })

  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
