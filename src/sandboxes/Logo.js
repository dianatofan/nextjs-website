import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export default function Logo(props) {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  const { scene } = useGLTF('/logo.glb');

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.5;
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      {...props}
      scale={0.6}
      onClick={(e) => {
        e.stopPropagation();
        click(!clicked);
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        hover(true);
      }}
      onPointerOut={() => hover(false)}
    />
  );
}

useGLTF.preload('/logo.glb');
