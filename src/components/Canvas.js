"use client";

import React from "react";
import {OrbitControls} from "@react-three/drei";
import Scene from "@/components/Scene";
import {Canvas} from "@react-three/fiber";
import "@/styles/styles.scss"

export default function CanvasComponent({setBg}) {
    console.log("canvas")

    return (
        <Canvas className="canvas animate-fadeIn2s w-full h-full" dpr={[1, 2]}
                shadows>
            <Scene setBg={setBg}/>
            <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2}
                           minPolarAngle={Math.PI / 2}/>
        </Canvas>);
};