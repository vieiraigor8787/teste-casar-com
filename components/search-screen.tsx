import Image from 'next/image'

import { NoUserFound } from './no-user-found'

export const SearchScreen = () => {
  return (
    <div className="hidden lg:flex flex-col justify-center items-center gap-12 h-screen">
      <div className="lg:max-w-[570px] w-full text-center">
        <p className="text-xl font-semibold">
          Procure pelo Nome ou Nome de Usuário
        </p>
        <span>
          Encontre os repositórios de algum usuário digitando no campo acima
        </span>
      </div>
      <div className="w-[230px] h-[257px] relative">
        <Image src="/search.png" fill alt="procurando" />
      </div>
    </div>
  )
}
