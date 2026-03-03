import { useEffect } from 'react';
import { useGLTF, Clone } from '@react-three/drei';

const Top3DModel = ({Top3DModelName, ...props}) => {
  // publicフォルダにある model.glb を読み込む
  const { scene } = useGLTF(Top3DModelName);

  useEffect(() => {
    useGLTF.preload(Top3DModelName);
  }, [Top3DModelName]);
  
  // primitiveコンポーネントを使って読み込んだシーン(3Dオブジェクト)を描画
  return <Clone object={scene} {...props} />;
}


export default Top3DModel