import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
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
      <body
        className={`${ubuntu.className} flex h-screen  bg-neutral-300 text-zinc-700 `}
        suppressHydrationWarning={true}
      >
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Header />
          <main className="flex flex-1 ">{children}</main>
        </div>
      </body>
    </html>
  )
}
