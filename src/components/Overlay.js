"use client";

import React, {useState, useEffect} from 'react'
import {a} from '@react-spring/web'
import "animate.css";

export default function Overlay({fill}) {
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = (event) => {
            const scrollTop =
                window.pageYOffset !== undefined
                    ? window.pageYOffset
                    : (
                        document.documentElement ||
                        document.body.parentNode ||
                        document.body
                    ).scrollTop;

            setScrollTop(scrollTop);
            console.log(scrollTop);
            document.getElementById("scroll-to-explore").style.opacity =
                1 - scrollTop / 400;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <div className="overlay animate-fadeIn lg:w-1/2 lg:p-4 mx-8">
            <span className="inline-block mt-4 mb-2 text-sm md:mb-3 md:text-base text-tertiary">✨ Hello! I&apos;m Diana
                Tofan</span>
            <a.h1
                className="text-4xl antialiased tracking-normal lg:leading-headers md:text-5xl text-primary font-black lg:max-w-96"
                style={{color: fill}}>Transforming
                the world one pixel at a time
            </a.h1>
            <a.span className="role inline-block mt-4 mb-2 text-sm md:mb-3 md:text-base text-primary"
                    id="scroll-to-explore" style={{color: fill}}>
                Scroll to explore <a.div className="icon-scroll"/>
            </a.span>

            {/*<a.svg viewBox="0 0 583 720" fill={fill} xmlns="http://www.w3.org/2000/svg">*/}
            {/*    <text fill="#E8B059" style={{whiteSpace: 'pre'}} fontFamily="Inter" fontSize={15} fontWeight="500"*/}
            {/*          letterSpacing="0em">*/}
            {/*        <tspan x={0} y={257.909}>✨ Hello! I&apos;m Diana Tofan</tspan>*/}
            {/*    </text>*/}
            {/*    <text style={{whiteSpace: 'pre'}} fontSize={12} fontWeight="300" letterSpacing="0em">*/}
            {/*        <tspan x={0} y={270.909}/>*/}
            {/*    </text>*/}
            {/*    <text style={{whiteSpace: 'pre'}} fontSize={48} fontWeight="600" letterSpacing="-0.5">*/}
            {/*        <tspan x={0} y={321.909}>Transforming the</tspan>*/}
            {/*        <tspan x={0} y={372.909}>world one pixel</tspan>*/}
            {/*        <tspan x={0} y={423.909}>at a time</tspan>*/}
            {/*    </text>*/}
            {/*    <text style={{whiteSpace: 'pre', textTransform: "uppercase"}} fontSize={10.5} fontWeight={500}*/}
            {/*          letterSpacing="0em">*/}
            {/*        <tspan x={0} y={494.909}>Scroll to explore</tspan>*/}
            {/*        <tspan x={100} y={494.909} className="icon-scroll"/>*/}
            {/*    </text>*/}
            {/*</a.svg>*/}
        </div>
    )
}
