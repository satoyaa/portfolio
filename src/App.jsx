import SiteHeader from './components/layout/SiteHeader.jsx'
import HeroSection from './components/hero/HeroSection.jsx'
import WorkSection from './components/work/WorkSection.jsx'
import ProfileSection from './components/profile/ProfileSection.jsx'
import SiteFooter from './components/layout/SiteFooter.jsx'
import './styles/base.css'
import './styles/header.css'
import './styles/hero.css'
import './styles/work.css'
import './styles/profile.css'
import './styles/footer.css'

function App() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <WorkSection />
      <ProfileSection />
      <SiteFooter />
    </main>
  )
}

export default App
