import { Suspense, useSyncExternalStore } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls, Stars } from '@react-three/drei'
import Top3DModel from './Top3DModel.jsx'

const mobileQuery = '(max-width: 820px)'

function subscribeToMobileWidth(callback) {
  const mediaQuery = window.matchMedia(mobileQuery)
  mediaQuery.addEventListener('change', callback)
  return () => mediaQuery.removeEventListener('change', callback)
}

function isMobileWidth() {
  return window.matchMedia(mobileQuery).matches
}

function ModelStage({ modelPath, caption }) {
  const isMobile = useSyncExternalStore(subscribeToMobileWidth, isMobileWidth, () => false)

  return (
    <div className="model-stage" aria-label="インタラクティブな3D作品">
      <Canvas
        camera={{ position: [0, 0.5, 5.2], fov: 42 }}
        dpr={[1, 1.5]}
        style={{ pointerEvents: isMobile ? 'none' : 'auto' }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[4, 5, 3]} intensity={2} />
        <directionalLight position={[-4, 1, 2]} intensity={0.8} />
        <Stars radius={18} depth={20} count={450} factor={2} saturation={0} fade speed={0.5} />
        <Suspense fallback={null}>
          <Float speed={1.3} rotationIntensity={0.24} floatIntensity={0.45}>
            <Top3DModel
              top3DModelName={modelPath}
              position={[0, -0.3, 0]}
              scale={0.66}
              rotation={[0.1, -0.75, 0]}
            />
          </Float>
        </Suspense>
        <OrbitControls enablePan={false} enableRotate={!isMobile} minDistance={3.8} maxDistance={7} autoRotate autoRotateSpeed={0.45} />
      </Canvas>
      <div className="stage-caption">
        {caption.map((line) => <span key={line}>{line}</span>)}
      </div>
    </div>
  )
}

export default ModelStage
