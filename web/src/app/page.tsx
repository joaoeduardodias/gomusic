import { Header } from '@/components/Header'
import { ListMusics } from '@/components/ListMusics'
import { Moments } from '@/components/Moments'
import { Sidebar } from '@/components/Sidebar'

export default function Home() {
  return (
    <div className="flex h-screen ">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1">
          <Moments />
          <ListMusics />
        </main>
      </div>
    </div>
  )
}
