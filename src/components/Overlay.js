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
            <span className="inline-block mt-4 mb-2 text-sm md:mb-3 md:text-base text-tertiary font-normal">✨ Hello! I&apos;m Diana
                Tofan</span>
            <a.h1
                className="text-4xl antialiased tracking-tighter lg:leading-headers md:text-5xl text-primary font-semibold lg:max-w-sm"
                style={{color: fill}}>Transforming
                the world one pixel at a time
            </a.h1>
            <a.span className="role inline-block mt-4 mb-2 text-sm md:mb-3 md:text-base font-normal text-primary"
                    id="scroll-to-explore" style={{color: fill}}>
                Scroll to explore <a.div className="icon-scroll"/>
            </a.span>
        </div>
    )
}
