import React from "react";

import "@/styles/header/hamburger.scss";

export default function Burger({open, setOpen}) {
    return (
        <button className={open ? "open" : ""} onClick={() => setOpen(!open)}>
            <div/>
            <div/>
            <div/>
        </button>
    );
}