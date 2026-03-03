import { useGLTF, Clone } from '@react-three/drei';

const Top3DModel = ({Top3DModelName, ...props}) => {
  // publicフォルダにある model.glb を読み込む
  const { scene } = useGLTF(Top3DModelName);
  
  // primitiveコンポーネントを使って読み込んだシーン(3Dオブジェクト)を描画
  return <Clone object={scene} {...props} />;
}

// モデルの事前読み込み（パフォーマンス向上のため）
useGLTF.preload('/model.glb');

export default Top3DModel