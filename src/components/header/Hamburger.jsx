import React from "react";
import {a} from '@react-spring/web'

import "@/styles/header/hamburger.scss";

export default function Burger({open, setOpen, fill}) {
    return (
        <button className={open ? "open" : ""} onClick={() => setOpen(!open)}>
            <a.div style={{background: fill}}/>
            <a.div style={{background: fill}}/>
            <a.div style={{background: fill}}/>
        </button>
    );
}