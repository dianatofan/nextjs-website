"use client";

import React from "react";
import {OrbitControls} from "@react-three/drei";
import Scene from "@/components/Scene";
import {Canvas} from "@react-three/fiber";

export default function CanvasComponent ({ setBg })  {
    console.log("canvas")
    return (
        <Canvas className="canvas" dpr={[1, 2]}>
            <Scene setBg={setBg} />
            <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        </Canvas>);
};