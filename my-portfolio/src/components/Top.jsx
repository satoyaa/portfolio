/*
 * Component: Top
 * Props:
 *  - pageFlag: 現在のページフラグ（未使用だが親コンポーネントから渡される）
 * Description:
 *  - 3D カンバスを表示し、`Models` の配列から現在のモデルを選択して `Top3DModel` を描画する。
 *  - `ModelFlag` のインクリメント/デクリメントで表示モデルを切り替える UI（左右ボタン）を提供する。
 * Dependencies:
 *  - @react-three/fiber, @react-three/drei
 */
import {useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Top3DModel from './Top3DModel.jsx';

const Models = ['/PolarBear.glb', '/Creature.glb'];

const Top = ({pageFlag}) => {
  const [modelFlag, setModelFlag] = useState(0);

  const changeModel = (operation) =>{
    if(operation === "add"){
      //可算の結果，要素数を超えるかどうか
      if(modelFlag+1 > Models.length-1){
        setModelFlag(0)
      }else{
        setModelFlag(modelFlag => modelFlag+1)
      }
    }
    if(operation === "minus"){
      //減算の結果，負の値になるかどうか
      if(modelFlag-1 < 0){
        setModelFlag(Models.length-1)
      }else{
        setModelFlag(modelFlag => modelFlag-1) 
      }
    }    
  };

  return (
    <article className="topVisual">
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />
        <Top3DModel key={modelFlag} top3DModelName={Models[modelFlag]} position={[0, 0.5, 0]} scale={0.3} rotation={[0, 5 * Math.PI / 6, 0]} />
        <OrbitControls />
      </Canvas>
      <button className='modelChangeButton modelChangeButtonA' onClick={() => changeModel("add")}></button>
      <button className='modelChangeButton modelChangeButtonM' onClick={() => changeModel("minus")}></button>
    </article>
  )
}

export default Top