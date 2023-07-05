import { HTMLProps } from 'react'

interface InputProps extends HTMLProps<HTMLInputElement> {
  label: string
}

export function Input({ label, ...props }: InputProps) {
  return (
    <div className="flex flex-col items-start ">
      <label htmlFor={props.name} className="ml-1 font-medium text-zinc-600">
        {label}
      </label>
      <input
        type="text"
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        className="w-full rounded-md border border-zinc-400 px-4 py-3 outline-blue-700 placeholder:text-zinc-500"
        {...props}
      />
    </div>
  )
}
