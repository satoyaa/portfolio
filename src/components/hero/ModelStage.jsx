import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls, Stars } from '@react-three/drei'
import Top3DModel from './Top3DModel.jsx'

function ModelStage({ modelPath, caption }) {
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
        {caption.map((line) => <span key={line}>{line}</span>)}
      </div>
    </div>
  )
}

export default ModelStage
