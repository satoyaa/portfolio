/*
 * Component: Top3DModel
 * Props:
 *  - top3DModelName: string (GLB ファイルのパス、public 配下の相対パス)
 *  - その他: three.js 用の transform props（position, scale, rotation など）をスプレッド受け取り
 * Description:
 *  - `useGLTF` を用いて指定の GLB を読み込み、`Clone`（@react-three/drei）でシーンを描画する。
 *  - `useEffect` 内で `useGLTF.preload` を呼び、事前読み込みを行うことで描画時の遅延を低減する。
 * Dependencies:
 *  - @react-three/drei の `useGLTF` と `Clone`
 */
import { useEffect } from 'react';
import { useGLTF, Clone } from '@react-three/drei';

const Top3DModel = ({top3DModelName, ...props}) => {
  // publicフォルダにある model.glb を読み込む
  const { scene } = useGLTF(top3DModelName);

  useEffect(() => {
    useGLTF.preload(top3DModelName);
  }, [top3DModelName]);
  
  // primitiveコンポーネントを使って読み込んだシーン(3Dオブジェクト)を描画
  return <Clone object={scene} {...props} />;
}


export default Top3DModel