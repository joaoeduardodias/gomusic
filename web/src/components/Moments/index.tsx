'use client'
import { FormEvent, useState } from 'react'

export function Moments() {
  const [selected, setSelected] = useState<string>('animation')

  const handleChangeMoment = (e: FormEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target as HTMLInputElement
    setSelected(inputValue)
    console.log(inputValue)
  }

  return (
    <ul className="ml-12 mt-5 flex gap-4">
      <li>
        <input
          type="radio"
          className="peer hidden"
          id="animation"
          name="moment"
          value="animation"
          checked={selected === 'animation'}
          onChange={handleChangeMoment}
        />
        <label
          htmlFor="animation"
          className="cursor-pointer border-b-blue-700 py-1 text-xl transition-colors hover:text-blue-700 peer-checked:border-b-2 peer-checked:text-blue-700 "
        >
          Animação
        </label>
      </li>
      <li>
        <input
          type="radio"
          className="peer hidden"
          id="prayer"
          name="moment"
          value="prayer"
          checked={selected === 'prayer'}
          onChange={handleChangeMoment}
        />
        <label
          htmlFor="prayer"
          className="cursor-pointer border-b-blue-700 py-1 text-xl transition-colors hover:text-blue-700 peer-checked:border-b-2 peer-checked:text-blue-700 "
        >
          Oração
        </label>
      </li>
      <li>
        <input
          type="radio"
          className="peer hidden"
          id="holySpirit"
          name="moment"
          value="holySpirit"
          checked={selected === 'holySpirit'}
          onChange={handleChangeMoment}
        />
        <label
          htmlFor="holySpirit"
          className="cursor-pointer border-b-blue-700 py-1 text-xl transition-colors hover:text-blue-700 peer-checked:border-b-2 peer-checked:text-blue-700 "
        >
          Espírito Santo
        </label>
      </li>
    </ul>
  )
}
