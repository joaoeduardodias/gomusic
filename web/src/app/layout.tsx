import { Ubuntu } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const ubuntu = Ubuntu({ weight: ['300', '400', '700'], subsets: ['latin'] })

export const metadata = {
  title: 'GoMusic',
  description: 'Encontrar músicas para o grupo de oração',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={ubuntu.className}>{children}</body>
    </html>
  )
}
