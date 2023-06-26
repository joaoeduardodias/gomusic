'use client'
import { Heart, UserCircle } from '@phosphor-icons/react'
import Image from 'next/image'

export function Music() {
  return (
    <li className="flex cursor-pointer items-center justify-between bg-zinc-400/30  p-4 transition-colors first:rounded-t-lg last:rounded-b-lg hover:bg-zinc-400/50">
      <div className="flex items-center justify-center gap-2">
        <Image
          src="/album.png"
          alt="Imagem do álbum"
          width={56}
          height={56}
          className="h-14 w-14 rounded-sm object-cover"
        />
        <strong className="text-xl font-normal ">O Nome de Jesus é doce</strong>
      </div>
      <div className="flex items-center justify-center gap-2 font-light text-zinc-500">
        <UserCircle size={28} weight="light" />
        <p>Padre Marcelo Rossi</p>
      </div>
      <button>
        <Heart size={33} weight="light" className="text-red-500" />
      </button>
    </li>
  )
}
