import React from 'react';
import Link from 'next/link';

import '@/styles/header/menu.scss';
import 'animate.css';

export default function Menu({ open }) {
  return (
    <nav className={open ? 'open' : 'hidden'}>
      <Link href="/" className="animate-fadeIn">
        <p>Work</p>
      </Link>
      <Link href="/about" className="animate-fadeIn">
        <p>About</p>
      </Link>
    </nav>
  );
}
