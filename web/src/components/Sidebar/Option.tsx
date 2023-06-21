import { THEME_OPTIONS } from '@/data/themeOptions'
import { ThemeOptions } from '@/types/ThemeType'
import {
  CircleNotch,
  Dress,
  HandHeart,
  HandsPraying,
  Heart,
  Smiley,
  Star,
  TwitterLogo,
  UsersThree,
} from '@phosphor-icons/react'
import React, { useEffect, useState } from 'react'
interface OptionProps {
  title: string
  theme: ThemeOptions
  currentTheme: string
  onAlterSelectedTheme: (theme: ThemeOptions) => void
}

export function Option({
  title,
  theme,
  currentTheme,
  onAlterSelectedTheme,
}: OptionProps) {
  const [Icon, setIcon] = useState<React.ElementType>(CircleNotch)

  useEffect(() => {
    switch (theme) {
      case THEME_OPTIONS.LOVE:
        setIcon(Heart)

        break
      case THEME_OPTIONS.COMMUNITY:
        setIcon(UsersThree)

        break
      case THEME_OPTIONS.FAITH_AND_CONVERSION:
        setIcon(HandsPraying)

        break
      case THEME_OPTIONS.HOLY_SPIRIT:
        setIcon(TwitterLogo)
        break
      case THEME_OPTIONS.JESUS_SAVIOR:
        setIcon(Smiley)
        break
      case THEME_OPTIONS.LORDSHIP_OF_JESUS:
        setIcon(Star)
        break
      case THEME_OPTIONS.MARIA:
        setIcon(Dress)
        break
      case THEME_OPTIONS.SIN_AND_SALVATION:
        setIcon(HandHeart)
        break
    }
  }, [theme])

  return (
    <li>
      <button
        onClick={() => onAlterSelectedTheme(theme)}
        className={`flex h-full w-full items-center gap-2 transition duration-150 ease-in-out hover:text-blue-700 ${
          currentTheme === theme
            ? ' cursor-not-allowed text-blue-700'
            : 'cursor-pointer text-zinc-700'
        }  `}
      >
        <Icon size={24} weight={currentTheme === theme ? 'fill' : 'regular'} />

        <p className="text-lg font-medium">{title}</p>
        {currentTheme === theme && (
          <div className="ml-auto block h-full w-1 rounded-l-md bg-blue-700 py-3" />
        )}
      </button>
    </li>
  )
}
