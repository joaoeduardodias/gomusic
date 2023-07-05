'use client'
import { Input } from '@/components/Input'
import { MusicNotesPlus } from '@phosphor-icons/react'

export default function Edit() {
  return (
    <main className="flex h-full w-full flex-col bg-white p-14">
      <h1 className="flex  items-end gap-3 text-3xl font-bold text-black">
        Adicionar uma música <MusicNotesPlus size={36} />
      </h1>
      <form className="mt-8  w-1/2  space-y-6">
        <div className="space-y-4">
          <Input
            label="Nome"
            placeholder="Digite o nome da música..."
            name="name"
          />
          <Input
            label="Artista"
            placeholder="Digite o nome do artista..."
            name="artist"
          />
        </div>
        <div className="flex-2 flex w-1/2 gap-4">
          <button
            type="submit"
            className="w-full cursor-pointer rounded-md bg-blue-700 py-3 text-xl font-medium text-white transition-colors hover:bg-blue-800"
          >
            Adicionar
          </button>
          <button
            type="submit"
            className="w-full cursor-pointer rounded-md   bg-red-600 py-3 text-xl font-normal  text-white transition-colors hover:bg-red-700"
          >
            Cancelar
          </button>
        </div>
      </form>
    </main>
  )
}
