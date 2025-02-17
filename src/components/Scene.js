import * as THREE from 'three';
import { DirectionalLightHelper } from 'three';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import {
  ContactShadows,
  Environment,
  MeshDistortMaterial,
  PerspectiveCamera,
} from '@react-three/drei';
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/three';

// React-spring animates native elements, in this case <mesh/> etc,
// but it can also handle 3rd–party objs, just wrap them in "a".
const AnimatedMaterial = a(MeshDistortMaterial);

export default function Scene({ setBg }) {
  const sphere = useRef();
  const light = useRef();
  const [mode, setMode] = useState(false);
  const [down, setDown] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { scene } = useThree();
  const directionalLight = useRef(); // Reference for the directional light

  // useEffect(() => {
  //     if (light.current) {
  //         const helper = new PointLightHelper(light.current, 1);
  //         scene.add(helper);
  //         return () => scene.remove(helper);
  //     }
  // }, [light, scene]);

  useEffect(() => {
    if (directionalLight.current) {
      const helper = new DirectionalLightHelper(directionalLight.current, 1); // Size of 1
      scene.add(helper);

      // Clean up the helper on unmount
      return () => scene.remove(helper);
    }
  }, [directionalLight, scene]);

  // Change cursor on hovered state
  useEffect(() => {
    document.body.style.cursor = hovered
      ? 'none'
      : `url('data:image/svg+xml;base64,${btoa(
          '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="10" fill="#E8B059"/></svg>'
        )}'), auto`;
  }, [hovered]);

  // Make the bubble float and follow the mouse
  // This is frame-based animation, useFrame subscribes the component to the render-loop
  useFrame((state) => {
    light.current.position.x = state.mouse.x * 20;
    light.current.position.y = state.mouse.y * 20;
    if (sphere.current) {
      sphere.current.position.x = THREE.MathUtils.lerp(
        sphere.current.position.x,
        hovered ? state.mouse.x / 2 : 0,
        0.2
      );
      sphere.current.position.y = THREE.MathUtils.lerp(
        sphere.current.position.y,
        Math.sin(state.clock.elapsedTime / 1.5) / 6 +
          (hovered ? state.mouse.y / 2 : 0),
        0.2
      );
    }
  });

  // Springs for color and overall looks, this is state-driven animation
  // React-spring is physics based and turns static props into animated values
  const [{ wobble, coat, color, ambient, env }] = useSpring(
    {
      wobble: down ? 1.2 : hovered ? 1.05 : 1,
      coat: mode && !hovered ? 0.04 : 0.5,
      ambient: mode && !hovered ? 1.5 : 2,
      env: mode && !hovered ? 0.4 : 0.8,
      color: hovered ? '#E8B059' : mode ? '#202020' : '#fff',
      config: (n) =>
        n === 'wobble' && hovered && { mass: 2, tension: 1000, friction: 10 },
    },
    [mode, hovered, down]
  );

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={75}>
        <a.ambientLight intensity={ambient} />
        <a.pointLight
          ref={light}
          position={[0, 2, -10]}
          intensity={env}
          color="#F8C069"
        />
      </PerspectiveCamera>
      <Suspense fallback={null}>
        <a.mesh
          ref={sphere}
          scale={wobble}
          castShadow
          receiveShadow
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onPointerDown={() => setDown(true)}
          onPointerUp={() => {
            setDown(false);
            // Toggle mode between dark and bright
            setMode(!mode);
            setBg({
              background: !mode ? '#202020' : '#fff',
              fill: !mode ? '#fff' : '#202020',
            });
          }}
        >
          <sphereGeometry args={[1, 64, 64]} />
          <AnimatedMaterial
            color={color}
            envMapIntensity={env}
            clearcoat={coat}
            clearcoatRoughness={0}
            metalness={0.1}
          />
        </a.mesh>
        <Environment preset="warehouse" />
        <ContactShadows
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -1.5, 0]}
          opacity={mode ? 0.8 : 0.4}
          width={15}
          height={15}
          blur={2.5}
          far={1}
        />
      </Suspense>
    </>
  );
}
