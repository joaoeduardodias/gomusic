import { ListMusics } from '@/components/ListMusics'
import { Moments } from '@/components/Moments'

export default function Home() {
  return (
    <main className="flex flex-1 flex-col ">
      <Moments />
      <ListMusics />
    </main>
  )
}
