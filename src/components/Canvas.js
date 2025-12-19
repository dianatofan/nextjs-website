'use client';

import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  CameraControls,
  Center,
  Environment,
  Lightformer,
  MeshTransmissionMaterial,
  Preload,
  RenderTexture,
  Text3D,
} from '@react-three/drei';
import { CuboidCollider, Physics, RigidBody } from '@react-three/rapier';

import Turtle from '../sandboxes/Turtle';
import Basic from '../sandboxes/Basic';
import PingPong from '../sandboxes/PingPong';
import Shoe from '../sandboxes/Shoe';
import Logo from '../sandboxes/Logo';

export default function CanvasComponent() {
  return (
    <Canvas
      gl={{
        antialias: false,
        stencil: false,
        depth: true,
        preserveDrawingBuffer: false,
      }}
      dpr={1}
      camera={{ position: [-20, 40, 30], fov: 45, near: 1, far: 300 }}
    >
      <Physics gravity={[0, -60, 0]}>
        <LogoLetter char="H" position={[1, 50, -1]}>
          <Turtle />
        </LogoLetter>

        <Letter char="E" position={[2, 60, -2]}>
          <Shoe scale={5} />
        </Letter>

        <Letter char="L" position={[3, 70, 2]}>
          {/*<Rocket scale={0.6} />*/}
        </Letter>

        <Letter char="L" position={[-1, 80, 3]}>
          <Basic scale={3} />
        </Letter>

        <Letter char="O" position={[-2, 90, 2]}>
          <PingPong />
        </Letter>

        {/* Walls */}
        <CuboidCollider position={[0, -6, 0]} args={[100, 1, 100]} />
        <CuboidCollider position={[0, 0, -30]} args={[30, 100, 1]} />
        <CuboidCollider position={[0, 0, 10]} args={[30, 100, 1]} />
        <CuboidCollider position={[-30, 0, 0]} args={[1, 100, 30]} />
        <CuboidCollider position={[30, 0, 0]} args={[1, 100, 30]} />
      </Physics>

      <Environment
        files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/dancing_hall_1k.hdr"
        resolution={512}
      >
        <group rotation={[-Math.PI / 3, 0, 0]}>
          <Lightformer
            intensity={4}
            position={[0, 5, -9]}
            scale={[10, 10, 1]}
          />
          <Lightformer
            intensity={2}
            position={[-5, 1, -1]}
            scale={[50, 2, 1]}
          />
          <Lightformer intensity={2} position={[10, 1, 0]} scale={[50, 2, 1]} />
        </group>
      </Environment>

      <CameraControls
        makeDefault
        dollyToCursor
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />

      <Preload all />
    </Canvas>
  );
}

function Letter({ char, children, ...props }) {
  const main = useRef();
  const contents = useRef();
  const events = useThree((s) => s.events);
  const controls = useThree((s) => s.controls);

  useFrame(() => {
    if (main.current && contents.current) {
      contents.current.matrix.copy(main.current.matrixWorld);
    }
  });

  return (
    <RigidBody restitution={0.1} colliders="cuboid" {...props}>
      <Center ref={main}>
        <Text3D
          font="/bold.blob"
          scale={0.125}
          size={80}
          height={4}
          curveSegments={10}
          bevelEnabled
          bevelThickness={10}
          bevelSize={2}
          bevelSegments={5}
          onDoubleClick={(e) => {
            e.stopPropagation();
            controls.fitToBox(main.current, true);
          }}
        >
          {char}

          <MeshTransmissionMaterial
            samples={1}
            thickness={20}
            anisotropy={0.3}
            clearcoat={1}
          >
            <RenderTexture
              attach="buffer"
              width={256}
              height={256}
              compute={events.compute}
            >
              <color attach="background" args={['#fff']} />
              <group ref={contents} matrixAutoUpdate={false}>
                {children}
              </group>
            </RenderTexture>
          </MeshTransmissionMaterial>
        </Text3D>
      </Center>
    </RigidBody>
  );
}

function LogoLetter(props) {
  return <Logo />;
}
