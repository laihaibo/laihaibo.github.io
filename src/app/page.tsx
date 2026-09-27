import Hero from '@/components/Hero'
import RepoList from '@/components/RepoList'
import FeaturedCards from '@/components/FeaturedCards'
import TechStack from '@/components/TechStack'

export default function HomePage() {
  return (
    <>
      <Hero />
      <div id="repos" className="scroll-mt-24">
        <RepoList />
      </div>
      <FeaturedCards />
      <TechStack />
    </>
  )
}
