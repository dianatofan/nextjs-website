"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import {useSpring} from '@react-spring/core';
import {a} from '@react-spring/web';
import Overlay from '@/components/Overlay';
import Header from '@/components/header/Header';
import "@/styles/styles.scss"
import "animate.css";

const NoSSRCanvas = dynamic(() => import('@/components/Canvas'), {ssr: false});

export default function App() {
    const [{background, fill}, set] = useSpring({
        background: '#f0f0f0',
        fill: '#202020',
    }, []);
    console.log("heyyy")

    return (
        <div className="app flex flex-col">
            <Header fill={fill}/>
            <a.main style={{background}} className="overflow-x-hidden items-center md:flex-row ">
                <section
                    className="container mx-auto max-w-screen-xl lg:max-w-screen-lg h-full flex flex-col  md:flex-row items-center">
                    <NoSSRCanvas setBg={set}/>
                    <Overlay fill={fill}/>
                </section>
            </a.main>
        </div>

    );
}