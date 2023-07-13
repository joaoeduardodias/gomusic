'use client'
import logoImage from '@/assets/logo.svg'

import Image from 'next/image'
import Link from 'next/link'
import { AccountOptions } from './AccountOptions'
import { LibraryOptions } from './LibraryOptions'
import { ThemeOptions } from './ThemeOptions'

export function Sidebar() {
  return (
    <aside className="flex w-64 flex-col items-start border-r border-r-slate-400 py-6">
      <Link href="/" className="cursor-pointer">
        <Image
          src={logoImage}
          alt="Logo Escrita GoMusic"
          priority
          className="mx-auto w-[11.25rem]"
        />
      </Link>
      <div className="mt-8 w-full justify-start pl-7">
        <ThemeOptions />
        <LibraryOptions />
        <AccountOptions />
      </div>
    </aside>
  )
}
