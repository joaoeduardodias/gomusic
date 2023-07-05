'use client'
import { Input } from '@/components/Input'
import { MusicType } from '@/types/MusicType'
import { MusicNotesPlus, Trash } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { SearchMusic } from './components/SearchMusic'

export default function Edit() {
  const [music, setMusic] = useState<MusicType>()
  const [nameMusic, setNameMusic] = useState<string>()
  const [artist, setArtist] = useState<string>()
  function handleSetMusic(musicSearch: MusicType): void {
    setMusic(musicSearch)
  }

  useEffect(() => {
    if (music) {
      setNameMusic(music.name)
      setArtist(music.artist)
    }
  }, [music])

  return (
    <main className="flex h-full w-full flex-col bg-white p-14">
      <h1 className="flex  items-end gap-3 text-3xl font-bold text-black">
        Editar uma música <MusicNotesPlus size={36} />
      </h1>
      <SearchMusic musicSelected={!!music} onSetMusic={handleSetMusic} />
      <form
        className={`mt-12  w-full ${
          music ? 'grid' : 'hidden'
        } grid-cols-2 gap-4`}
      >
        <div>
          <Input
            label="Nome"
            placeholder="Digite o nome da música..."
            name="name"
            value={nameMusic}
            onChange={(e) => setNameMusic((e.target as HTMLInputElement).value)}
          />
        </div>
        <div>
          <Input
            label="Artista"
            placeholder="Digite o nome do artista..."
            name="artist"
            value={artist}
            onChange={(e) => setArtist((e.target as HTMLInputElement).value)}
          />
        </div>
        <div className="flex-2 mt-4 flex w-1/2 gap-4">
          <button
            type="submit"
            className=" w-full cursor-pointer rounded-md bg-green-500 py-2 text-xl font-medium text-white transition-colors hover:bg-green-600"
          >
            Editar
          </button>
          <button
            type="submit"
            className=" w-full cursor-pointer rounded-md border border-red-600 bg-transparent py-2 text-xl font-medium text-red-600  transition-colors  hover:bg-red-500 hover:text-white"
          >
            Cancelar
          </button>
        </div>
        <button className="ml-auto mt-4 flex w-1/2 cursor-pointer items-center justify-center gap-2 rounded-md  bg-red-600  p-3 text-xl font-medium text-white  transition-colors  hover:bg-red-700">
          Apagar Música
          <Trash size={23} />
        </button>
      </form>
    </main>
  )
}
