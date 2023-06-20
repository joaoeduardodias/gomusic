'use client'
import * as Avatar from '@radix-ui/react-avatar'

export function Header() {
  return (
    <header className="flex h-20 items-center border-b border-b-slate-400 px-6">
      <h2 className="mx-auto text-lg font-bold">
        Encontre a música para o seu grupo de oração!
      </h2>

      <div className="flex h-2/3 items-center border-l border-slate-400">
        <Avatar.Root className="ml-3 inline-flex h-12 w-12 select-none items-center justify-center overflow-hidden rounded-full bg-zinc-500 align-middle">
          <Avatar.Image
            className="h-full w-full rounded-[inherit] object-cover"
            src="https://github.com/joaoeduardodias.png"
            alt="João Dias"
          />
          <Avatar.Fallback
            className="leading-1 flex h-full w-full items-center justify-center bg-zinc-500 text-[15px] font-medium text-violet-100"
            delayMs={600}
          >
            JD
          </Avatar.Fallback>
        </Avatar.Root>
      </div>
    </header>
  )
}
