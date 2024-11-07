import { Footer } from '@/components/footer'
import { Menu } from '@/components/menu'
import { MyFavorite } from '@/components/my-favorite'
import { NoUserFound } from '@/components/no-user-found'
import { ProfileSreen } from '@/components/profile-screen'
import { SearchScreen } from '@/components/search-screen'

export default function Home() {
  return (
    <div className="lg:max-w-screen-2xl w-full mx-auto text-greyNeutral">
      <Menu />
      {/* <SearchScreen />
      <Footer /> */}

      {/* <ProfileSreen /> */}
      <MyFavorite />
    </div>
  )
}
