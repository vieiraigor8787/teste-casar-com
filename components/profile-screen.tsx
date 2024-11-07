import Image from 'next/image'

export const ProfileSreen = () => {
  return (
    <div className="w-full px-4 lg:py-6 lg:flex gap-10">
      <div className="flex flex-col lg:justify-between lg:items-center gap-4 lg:gap-6 border px-4 py-4 lg:py-9 lg:w-[448px] lg:text-center">
        <div className="lg:space-y-6 flex lg:block gap-4 border-b pb-2 lg:pb-0 lg:border-none">
          <Image
            className="hidden lg:block object-cover rounded-full"
            src="/profile-example.png"
            width={200}
            height={200}
            alt="foto do perfil github"
          />
          <Image
            className="lg:hidden object-cover rounded-full"
            src="/profile-example.png"
            width={48}
            height={48}
            alt="foto do perfil github"
          />
          <div>
            <p className="lg:text-xl lg:leading-8 font-semibold">
              Elliot Alderson
            </p>
            <span className="text-sm lg:leading-5">@mr_robot</span>
          </div>
        </div>
        <p className="text-xs lg:text-sm lg:leading-5 w-[248px] lg:w-full">
          Trabalha com segurança cibernética, experiencia em empresas
          multinacionais.
        </p>
      </div>
      <div className="space-y-4 lg:max-w-[896px] w-full">
        <h2 className="lg:text-xl text-primary font-bold lg:leading-8">
          Repositórios
        </h2>

        <div className="relative border p-4">
          <div className="space-y-2 lg:max-w-[564px]">
            <p className="lg:text-lg font-bold">Pokepicker</p>
            <p className="text-sm text-placeholderText">
              Aplicativo de visualização de Pokémon utilizando o PokeAPI.co -
              Construído em React Native (Expo)
            </p>
          </div>
          <div className="mt-4 lg:space-x-10 lg:flex items-center  lg:leading-[18px]">
            <div className="flex items-center text-xs">
              <Image
                src="/ellipse-blue.png"
                width={16}
                height={16}
                alt="elipse"
                className="mr-2"
              />
              Typescript
            </div>
            <span className="block lg:inline mt-1 lg:mt-0 text-xs">
              Updated on 17 Apr 2021
            </span>
          </div>

          <button className="absolute right-4 top-4 w-[32px] lg:w-[40px] h-[32px] lg:h-[40px]">
            <Image src="/favorited.png" fill alt="favoritado" />
          </button>
        </div>

        <div className="relative border p-4">
          <div className="space-y-2 lg:max-w-[564px]">
            <p className="lg:text-lg font-bold">Pokepicker</p>
            <p className="text-sm text-placeholderText">
              Aplicativo de visualização de Pokémon utilizando o PokeAPI.co -
              Construído em React Native (Expo)
            </p>
          </div>
          <div className="mt-4 lg:space-x-10 lg:flex items-center  lg:leading-[18px]">
            <div className="flex items-center text-xs">
              <Image
                src="/ellipse-blue.png"
                width={16}
                height={16}
                alt="elipse"
                className="mr-2"
              />
              Typescript
            </div>
            <span className="block lg:inline mt-1 lg:mt-0 text-xs">
              Updated on 17 Apr 2021
            </span>
          </div>

          <button className="absolute right-4 top-4 w-[32px] lg:w-[40px] h-[32px] lg:h-[40px]">
            <Image src="/unfavorited.png" fill alt="favoritado" />
          </button>
        </div>
      </div>
    </div>
  )
}
