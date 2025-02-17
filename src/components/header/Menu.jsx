import React from 'react';
import Link from 'next/link';
import { metropolis } from '@/app/utils/local-font';

import '@/styles/header/menu.scss';
import 'animate.css';

export default function Menu({ open }) {
  return (
    <nav className={open ? 'open' : 'hidden'}>
      <Link href="/" className="animate__animated animate__fadeIn">
        <p className={`${metropolis.className}`}>Work</p>
      </Link>
      <Link href="/about" className="animate__animated animate__fadeIn">
        <p className={`${metropolis.className}`}>About</p>
      </Link>
    </nav>
  );
}
