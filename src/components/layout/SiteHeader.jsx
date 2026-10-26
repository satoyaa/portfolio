import { site } from '../../data/siteContent.js'
import { scrollToSection } from '../../utils/scrollToSection.js'

function SiteHeader() {
  return (
    <header className="site-header">
      <span className="brand" aria-label="トップへ戻る">
        {site.brand}<span>!!</span>
      </span>
      <nav aria-label="メインナビゲーション">
        {site.navigation.map(({ label, sectionId }) => (
          <button key={sectionId} onClick={() => scrollToSection(sectionId)}>{label}</button>
        ))}
      </nav>
    </header>
  )
}

export default SiteHeader
