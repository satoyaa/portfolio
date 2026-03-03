import {useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Top3DModel from './Top3DModel.jsx';

const Models = ['/PolarBear.glb', '/Creature.glb'];

const Top = ({pageFlag}) => {
  const [ModelFlag, setModelFlag] = useState(0);

  const changeModel = (operation) =>{
    if(operation === "add"){
      //可算の結果，要素数を超えるかどうか
      if(ModelFlag+1 > Models.length-1){
        setModelFlag(0)
      }else{
        setModelFlag(ModelFlag => ModelFlag+1)
      }
    }
    if(operation === "minus"){
      //減算の結果，負の値になるかどうか
      if(ModelFlag-1 < 0){
        setModelFlag(Models.length-1)
      }else{
        setModelFlag(ModelFlag => ModelFlag-1) 
      }
    }    
  };

  return (
    <article className="topVisual">
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />
        <Top3DModel key={ModelFlag} Top3DModelName={Models[ModelFlag]} position={[0, 0.5, 0]} scale={0.3} rotation={[0, 5 * Math.PI / 6, 0]} />
        <OrbitControls />
      </Canvas>
      <button className='modelChangeButton modelChangeButtonA' onClick={() => changeModel("add")}></button>
      <button className='modelChangeButton modelChangeButtonM' onClick={() => changeModel("minus")}></button>
    </article>
  )
}

export default Top