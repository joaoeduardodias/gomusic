import { MusicType } from '@/types/MusicType'
import { MagnifyingGlass, UserCircle } from '@phosphor-icons/react'
import Image from 'next/image'

interface SearchMusicProps {
  onSetMusic: (music: MusicType) => void
  musicSelected: boolean
}

const listMusic = [
  {
    id: 1,
    name: 'O nome de Jesus é doce',
    artist: 'Padre Marcelo Rossi',
  },
  {
    id: 2,
    name: 'O amor de Deus é maravilhoso',
    artist: 'Jake',
  },
  {
    id: 3,
    name: 'O nome de Jesus é doce',
    artist: 'Padre Marcelo Rossi',
  },
  {
    id: 4,
    name: 'O amor de Deus é maravilhoso',
    artist: 'Jake',
  },
  {
    id: 5,
    name: 'O nome de Jesus é doce',
    artist: 'Padre Marcelo Rossi',
  },
  {
    id: 6,
    name: 'O amor de Deus é maravilhoso',
    artist: 'Jake',
  },
]

export function SearchMusic({ onSetMusic, musicSelected }: SearchMusicProps) {
  return (
    <>
      <div className="relative mt-4 flex w-full items-center ">
        <input
          type="text"
          placeholder="Digite o nome da música!"
          className={`h-full w-full rounded-md border border-zinc-400  p-4 outline-blue-700`}
        />
        <MagnifyingGlass className="absolute right-3 " size={24} />
      </div>
      <div>
        {!musicSelected && (
          <ul className=" w-full divide-y  divide-zinc-400">
            {listMusic.length >= 0 ? (
              listMusic.map((music) => (
                <li
                  key={music.id}
                  onClick={() => onSetMusic(music)}
                  className="flex cursor-pointer items-center  bg-zinc-400/30  p-2 transition-colors first:rounded-t-none last:rounded-b-lg hover:bg-zinc-400/50"
                >
                  <div className=" flex flex-1 items-center justify-start gap-2 ">
                    <Image
                      src="/album.png"
                      alt="Imagem do álbum"
                      width={44}
                      height={44}
                      className="h-11 w-11 rounded-sm object-cover"
                    />
                    <strong className="text-base font-normal ">
                      {music.name}
                    </strong>
                  </div>
                  <div className="flex w-40 items-center justify-start gap-2 font-light text-zinc-500">
                    <UserCircle size={20} weight="light" />
                    <p className="text-xs">{music.artist}</p>
                  </div>
                </li>
              ))
            ) : (
              <p>Música não encontrada</p>
            )}
          </ul>
        )}
      </div>
    </>
  )
}
