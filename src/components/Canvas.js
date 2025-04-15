'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import '@/styles/styles.scss';

const Scene3D = dynamic(() => import('@/components/Scene'), { ssr: false });

export default function CanvasComponent({ setBg }) {
  return (
    <Canvas
      className="canvas animate-fadeIn2s w-full h-[100vh]"
      dpr={[1, 2]}
      shadows
    >
      <Scene3D setBg={setBg} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}
