import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="lg:hidden flex w-full fixed bottom-0">
      <button className="bg-primary text-white flex items-center justify-center gap-2 w-full py-4">
        <Image src="/user.png" width={19} height={24} alt="boneco" />
      </button>
      <button className="bg-white flex items-center justify-center w-full py-4">
        <Image src="/fav-gray.png" width={19} height={24} alt="coração" />
      </button>
    </footer>
  )
}
