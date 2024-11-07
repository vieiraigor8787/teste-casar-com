import Image from 'next/image'

export const MyFavorite = () => {
  return (
    <div className="space-y-4 lg:max-w-[896px] w-full mx-auto mt-6 px-4">
      <h2 className="text-xl lg:text-center lg:text-primary font-bold lg:leading-8">
        Meus favoritos
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
    </div>
  )
}
