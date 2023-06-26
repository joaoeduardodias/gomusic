'use client'
import logoImage from '@/assets/logo.svg'
import { THEME_OPTIONS } from '@/data/themeOptions'
import { ThemeOptions } from '@/types/ThemeType'
import Image from 'next/image'
import { useState } from 'react'
import { Option } from './Option'

export function Sidebar() {
  const [currentTheme, setCurrentTheme] = useState<ThemeOptions>(
    ThemeOptions.LOVE,
  )

  function AlterThemeSelected(theme: ThemeOptions) {
    setCurrentTheme(theme)
  }

  return (
    <aside className="relative flex w-64 flex-col items-start border-r border-r-slate-400 py-6">
      <Image
        src={logoImage}
        alt="Logo Escrita GoMusic"
        priority
        className="mx-auto h-[11.25rem] w-[11.25rem]"
      />
      <div className="mt-8 w-full justify-start pl-7">
        <h3 className="text-lg font-medium uppercase text-gray-500">Temas</h3>
        <ul className="w-[inherit] cursor-pointer space-y-4 pt-2">
          {Object.entries(THEME_OPTIONS).map(([key, name]: any) => (
            <Option
              key={key}
              title={name}
              currentTheme={currentTheme}
              theme={name}
              onAlterSelectedTheme={AlterThemeSelected}
            />
          ))}
        </ul>
      </div>
    </aside>
  )
}
