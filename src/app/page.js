"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import {useSpring} from '@react-spring/core';
import {a} from '@react-spring/web';
import Overlay from '@/components/Overlay';
import Header from '@/components/header/Header';
import "@/styles/styles.css"

const NoSSRCanvas = dynamic(() => import('@/components/Canvas'), {ssr: false});

export default function App() {
    const [{background, fill}, set] = useSpring({
        background: '#f0f0f0',
        fill: '#202020',
    }, []);
    console.log("heyyy")
    return (
        <a.main style={{background}}>
            <Header fill={fill}/>
            <div className="content">
                <NoSSRCanvas setBg={set}/>
                <Overlay fill={fill}/>
            </div>
        </a.main>
    );
}