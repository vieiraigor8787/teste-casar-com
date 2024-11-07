import Image from 'next/image'

export const NoUserFound = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-12 lg:h-screen">
      <div className="lg:max-w-[570px] w-full text-center text-greyNeutral">
        <p className="lg:text-xl text-primary font-semibold">"asdasdas"</p>
        <p className="lg:text-xl font-semibold ">Nenhum usuário encontrado </p>
        <span className="text-sm lg:text-base">
          Verifique se a escrita está correta ou tente novamente{' '}
        </span>
      </div>
      <div className="hidden lg:block w-[230px] h-[257px] relative">
        <Image src="/not-found.png" fill alt="procurando" />
      </div>
    </div>
  )
}
