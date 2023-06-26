import { SignOut } from '@phosphor-icons/react'

export function AccountOptions() {
  return (
    <section className=" space-y-2 pt-2">
      <h3 className="text-lg font-medium uppercase text-gray-500">Conta</h3>
      <button
        className={` ml-2 flex h-full w-full cursor-pointer items-center gap-2 transition duration-150 ease-in-out hover:text-blue-700`}
      >
        <SignOut size={24} className="rotate-180" />
        <p className="text-lg font-medium">Sair</p>
      </button>
    </section>
  )
}
