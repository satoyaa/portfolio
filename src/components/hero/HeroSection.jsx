import { useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { site } from '../../data/siteContent.js'
import ModelStage from './ModelStage.jsx'

function HeroSection() {
  const { hero } = site
  const [modelPath] = useState(() => hero.modelPaths[Math.floor(Math.random() * hero.modelPaths.length)])

  return (
    <section id="top" className="hero">
      <div className="hero-copy">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1>{hero.name}</h1>
        <p className="hero-lede">{hero.lead}</p>
      </div>
      <ModelStage modelPath={modelPath} caption={hero.modelCaption} />
    </section>
  )
}

export default HeroSection
