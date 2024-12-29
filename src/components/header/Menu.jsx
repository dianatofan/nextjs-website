import React from "react";
import Link from "next/link";

import "@/styles/header/menu.scss";
import "animate.css";

export default function Menu({open}) {
    return (
        <nav className={open ? "open" : "hidden"}>
            <Link href="/" className="animate__animated animate__fadeIn">
                <p>Projects</p>
            </Link>
            <Link href="/about" className="animate__animated animate__fadeIn">
                <p>About</p>
            </Link>
        </nav>
    );
}