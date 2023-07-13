import { THEME_OPTIONS } from '@/data/themeOptions'
import { ThemeOptionsType } from '@/types/ThemeType'
import { useState } from 'react'
import { Option } from './Option'

export function ThemeOptions() {
  const [currentTheme, setCurrentTheme] = useState<ThemeOptionsType>(
    ThemeOptionsType.LOVE,
  )

  function AlterThemeSelected(theme: ThemeOptionsType) {
    setCurrentTheme(theme)
  }

  return (
    <section>
      <h3 className="text-lg font-medium uppercase text-gray-500">Temas</h3>
      <ul className="ml-2 w-[inherit] cursor-pointer space-y-4 pt-2">
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
    </section>
  )
}
