import { Header } from '@/components/Header'

export default function Home() {
  return (
    <div className="flex h-screen ">
      <aside className="w-64 border-r border-r-slate-400">sidebar</aside>
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1">main</main>
      </div>
    </div>
  )
}
