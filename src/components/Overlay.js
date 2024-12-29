"use client";

import React from 'react'
import {a} from '@react-spring/web'

export default function Overlay({fill}) {
    // Just app Figma export, the fill is animated
    return (
        <div className="overlay">
            <a.svg viewBox="0 0 583 720" fill={fill} xmlns="http://www.w3.org/2000/svg">
                <text fill="#E8B059" style={{whiteSpace: 'pre'}} fontFamily="Inter" fontSize={15} fontWeight="500"
                      letterSpacing="0em">
                    <tspan x={0} y={257.909}>✨ Hello! I&apos;m Diana Tofan</tspan>
                </text>
                <text style={{whiteSpace: 'pre'}} fontSize={12} fontWeight="300" letterSpacing="0em">
                    <tspan x={0} y={270.909}/>
                </text>
                <text style={{whiteSpace: 'pre'}} fontSize={48} fontWeight="600" letterSpacing="-0.5">
                    <tspan x={0} y={321.909}>Transforming the</tspan>
                    <tspan x={0} y={372.909}>world one pixel</tspan>
                    <tspan x={0} y={423.909}>at a time</tspan>
                </text>
                <text style={{whiteSpace: 'pre', textTransform: "uppercase"}} fontSize={10.5} fontWeight={500}
                      letterSpacing="0em">
                    <tspan x={0} y={494.909}>Scroll to explore</tspan>
                    <tspan x={100} y={494.909} className="icon-scroll"/>
                </text>
            </a.svg>
        </div>
    )
}
