import { Footer } from '@/components/footer'
import { Menu } from '@/components/menu'
import { NoUserFound } from '@/components/no-user-found'
import { SearchScreen } from '@/components/search-screen'

export default function Home() {
  return (
    <div className="lg:max-w-screen-2xl w-full mx-auto">
      <Menu />
      <SearchScreen />
      <Footer />
    </div>
  )
}
