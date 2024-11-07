import Image from 'next/image'

export const Menu = () => {
  return (
    <div className="lg:h-20 flex flex-col lg:flex-row lg:items-center justify-between lg:border-b lg:border-l lg:pl-4">
      <div className="relative p-5 lg:p-0">
        <div className="lg:hidden text-greyNeutral">
          <p className="text-xl font-semibold">
            Procure pelo Nome ou Nome de Usuário
          </p>
          <span className="block my-2">
            Encontre os repositórios de algum usuário digitando no campo acima
          </span>
        </div>
        <input
          className="w-full lg:w-[668px] placeholder:text-placeholderText border text-sm py-2 px-4 mt-2 lg:mt-0"
          placeholder="Buscar usuário"
        />
        <Image
          src="/lupa.png"
          width={24}
          height={20}
          alt="lupa"
          className="absolute right-7 bottom-7 lg:right-2 lg:bottom-2"
        />
      </div>
      {/* botão desk */}
      <button className="hidden lg:flex bg-primary text-white w-[145px] lg:h-full items-center justify-center gap-2">
        <Image src="/fav.png" width={24} height={20} alt="coração" />
        Favoritos
      </button>
    </div>
  )
}
