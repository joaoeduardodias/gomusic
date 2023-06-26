import { Heart, MusicNotesPlus, Pencil, Trash } from '@phosphor-icons/react'
import Link from 'next/link'

export function LibraryOptions() {
  return (
    <section>
      <h3 className="text-lg font-medium uppercase text-gray-500">
        Biblioteca
      </h3>
      <nav className="ml-2 cursor-pointer space-y-2 pt-2">
        <button className="flex h-full w-full items-center gap-2 transition duration-150 ease-in-out hover:text-blue-700 ">
          <Heart size={24} />
          <p className="text-lg font-medium">Favoritos</p>
        </button>
        <Link
          href="#"
          className={`flex h-full w-full items-center gap-2 transition duration-150 ease-in-out hover:text-blue-700 `}
        >
          <MusicNotesPlus size={24} />
          <p className="text-lg font-medium">Adicionar</p>
        </Link>
        <Link
          href="#"
          className={`flex h-full w-full items-center gap-2 transition duration-150 ease-in-out hover:text-blue-700 `}
        >
          <Pencil size={24} />
          <p className="text-lg font-medium">Editar</p>
        </Link>
        <Link
          href="#"
          className={`flex h-full w-full items-center gap-2 transition duration-150 ease-in-out hover:text-blue-700 `}
        >
          <Trash size={24} />
          <p className="text-lg font-medium">Apagar</p>
        </Link>
      </nav>
    </section>
  )
}
