'use client'
import { MusicNotesPlus } from '@phosphor-icons/react'
import { Input } from './components/Input'

export default function Edit() {
  return (
    <div className=" mx-auto flex w-[37.5rem] flex-col justify-center justify-items-center self-center rounded-md bg-white p-8">
      <h1 className="flex  items-end gap-3 text-3xl font-bold text-black">
        Adicionar uma música <MusicNotesPlus size={36} />
      </h1>
      <form className="mt-4 w-full space-y-6">
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
          <Input
            label="Link do YouTube"
            placeholder="Digite o link do youtube..."
            name="youtube"
          />
          <Input
            label="Link da cifra"
            placeholder="Digite o link da cifra..."
            name="cipher"
          />
        </div>
        <button
          type="submit"
          className=" w-full cursor-pointer rounded-md bg-blue-700 py-3 text-xl font-medium text-white transition-colors hover:bg-blue-800"
        >
          Adicionar
        </button>
      </form>
    </div>
  )
}
