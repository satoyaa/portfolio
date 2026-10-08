import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls, Stars } from '@react-three/drei'
import { FiArrowRight, FiExternalLink, FiGithub, FiMail } from 'react-icons/fi'
import './App.css'
import Top3DModel from './components/Top3DModel.jsx'

const projects = [
  {
    id: '01',
    title: 'PDF Dark Mode',
    kicker: 'PDFを、見やすく美しく',
    summary: 'PDFの文字・画像・グラフを判別し、閲覧体験を崩さずダークモードへ変換するChrome拡張機能。',
    image: '/images/PDFdark0.png',
    tags: ['React', 'Chrome Extension', 'Image Processing'],
    href: 'https://chromewebstore.google.com/detail/invert-pdf-viewer/klndmcomjnjmcappeiibgklmlhdcihhe?hl=ja',
  },
  {
    id: '02',
    title: '面接質問ジェネレーター',
    kicker: 'AIで深い質問を生成',
    summary: '就職活動の記録を解析し、企業ごとの想定面接質問を届けるリサーチ支援プロダクト。',
    image: '/images/Interview1.png',
    tags: ['LLM', 'PDF Parsing', 'Notion'],
    href: 'https://www.notion.so/16-25-34b927cead3d804389f7e838401260f7?source=copy_link',
  },
  {
    id: '03',
    title: 'Ninoshima Guide',
    kicker: '地域の記憶を、歩ける体験に',
    summary: '似島の歴史を、現地で使いやすい観光ガイドとして再構成したWebサイト。',
    image: '/images/Ninoshima1.png',
    tags: ['Web Design', 'Map', 'Content'],
    href: 'https://hiroshima-cu.ninoshima.org/index.html',
  },
  {
    id: '04',
    title: 'Seminar Reminder Bot',
    kicker: '予定を逃さない仕組み',
    summary: '研究室Wikiから予定を取得し、必要な日にDiscordへリマインドを送る自動化Bot。',
    image: '/images/remainderBOT.png',
    tags: ['Node.js', 'Discord', 'Automation'],
    href: 'https://github.com/satoyaa/zemi-reminder',
  },
]

function ModelStage({ modelPath }) {
  return (
    <div className="model-stage" aria-label="インタラクティブな3D作品">
      <Canvas camera={{ position: [0, 0.5, 5.2], fov: 42 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.42} />
        <directionalLight position={[4, 5, 3]} intensity={3.2} color="#b49cff" />
        <pointLight position={[-4, -1, 3]} intensity={24} color="#c7ff4c" />
        <pointLight position={[2, 3, 2]} intensity={16} color="#7f4dff" />
        <Stars radius={18} depth={20} count={450} factor={2} saturation={0} fade speed={0.5} />
        <Suspense fallback={null}>
          <Float speed={1.3} rotationIntensity={0.24} floatIntensity={0.45}>
            <Top3DModel
              top3DModelName={modelPath}
              position={[0, -0.3, 0]}
              scale={0.66}
              rotation={[0.1, -0.75, 0]}
              inject={<meshStandardMaterial color="#6942b9" metalness={0.78} roughness={0.24} flatShading />}
            />
          </Float>
        </Suspense>
        <OrbitControls enablePan={false} minDistance={3.8} maxDistance={7} autoRotate autoRotateSpeed={0.45} />
      </Canvas>
      <div className="stage-caption">
        <span>IDEA</span>
        <span>CODE</span>
        <span>INTERACTION</span>
        <span>EXPERIENCE</span>
      </div>
    </div>
  )
}

function App() {
  const [selectedId, setSelectedId] = useState('01')
  const [modelPath] = useState(() => (
    Math.random() < 0.5 ? '/Creature.glb' : '/PolarBear.glb'
  ))
  const selected = projects.find((project) => project.id === selectedId) ?? projects[0]

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      <header className="site-header">
        <button className="brand" onClick={() => scrollTo('top')} aria-label="トップへ戻る">
          R<span>.</span>
        </button>
        <p className="brand-copy">
          つくることで、
          <br />
          まだ見ぬ体験を探しにいく。
        </p>
        <nav aria-label="メインナビゲーション">
          <button onClick={() => scrollTo('top')}>Index</button>
          <button onClick={() => scrollTo('work')}>Work</button>
          <button onClick={() => scrollTo('profile')}>Profile</button>
          <button onClick={() => scrollTo('contact')}>Contact</button>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">CREATIVE TECHNOLOGIST / FRONTEND ENGINEER</p>
          <h1>岩室 怜弥</h1>
          <p className="hero-lede">複雑な問題を、直感的で心地よい体験に変える。</p>
          <p className="hero-description">
            フロントエンドとインタラクティブ技術で、
            <br />
            アイデアを動くプロダクトにします。
          </p>
          <button className="primary-button" onClick={() => scrollTo('work')}>
            プロジェクトを探索 <FiArrowRight />
          </button>
        </div>
        <ModelStage modelPath={modelPath} />
      </section>

      <section id="work" className="work-section" aria-labelledby="work-heading">
        <div className="project-rail" aria-label="制作物一覧">
          {projects.map((project) => (
            <button
              key={project.id}
              className={['rail-item', selectedId === project.id && 'is-active'].filter(Boolean).join(' ')}
              onClick={() => setSelectedId(project.id)}
            >
              <span className="rail-dot" />
              <img src={project.image} alt="" />
              <span>
                <strong>{project.title}</strong>
                <small>{project.kicker}</small>
              </span>
              <FiArrowRight />
            </button>
          ))}
        </div>

        <article className="project-feature">
          <div className="feature-copy">
            <p className="project-number">
              {selected.id} <span />
            </p>
            <h2 id="work-heading">{selected.title}</h2>
            <p>{selected.summary}</p>
            <div className="tag-list">
              {selected.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <a href={selected.href} target="_blank" rel="noreferrer">
              プロジェクトを見る <FiExternalLink />
            </a>
          </div>
          <div className="feature-image">
            <img src={selected.image} alt={selected.title + ' の画面'} />
          </div>
        </article>
      </section>

      <section id="profile" className="profile-section" aria-labelledby="profile-heading">
        <div className="profile-photo">
          <img src="/images/Profile.jpg" alt="VRヘッドセットを装着する岩室怜弥" />
        </div>
        <div className="profile-intro">
          <p className="eyebrow">PROFILE / ABOUT ME</p>
          <h2 id="profile-heading">
            岩室 怜弥 <span>IWAMURO SATOYA</span>
          </h2>
          <p className="profile-lede">
            技術の面白さを、誰もが自然に使える体験へ翻訳することを大切にしています。
          </p>
          <p>
            Reactを軸に、3D表現やAIを組み合わせながら、課題を見つけ、形にし、改善するところまで一貫して取り組みます。実験的な表現と、日常で役立つ道具づくりの両方が好きです。
          </p>
          <div className="profile-meta">
            <div>
              <h3>TECH STACK</h3>
              <ul>
                <li>React / Vite / JavaScript</li>
                <li>Three.js / React Three Fiber</li>
                <li>Python / Java / C</li>
                <li>HTML / CSS / UI Engineering</li>
              </ul>
            </div>
            <div>
              <h3>CERTIFICATION</h3>
              <p>基本情報技術者試験 合格</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="site-footer">
        <div>
          <p className="eyebrow">LET&apos;S MAKE SOMETHING</p>
          <h2>新しい体験を、一緒に。</h2>
        </div>
        <a className="contact-link" href="mailto:mm68003@e.hiroshima-cu.ac.jp">
          連絡する <FiMail />
        </a>
        <a
          className="github-link"
          href="https://github.com/satoyaa"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FiGithub />
        </a>
      </footer>
    </main>
  )
}

export default App
