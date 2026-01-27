'use client';

import React, { useEffect, useState } from 'react';
import { a } from '@react-spring/web';
import 'animate.css';
import { metropolis } from '@/app/utils/local-font';
import { useUIStore } from '@/stores/uiStore';

export default function Overlay({ fill }) {
  const [scrollTop, setScrollTop] = useState(0);
  const mode = useUIStore((s) => s.mode);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset !== undefined
          ? window.pageYOffset
          : (
              document.documentElement ||
              document.body.parentNode ||
              document.body
            ).scrollTop;

      setScrollTop(scrollTop);
      const el = document.getElementById('scroll-to-explore');
      if (el) el.style.opacity = 1 - scrollTop / 400;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overlay animate__animated animate__fadeIn w-full lg:w-2/3 lg:p-4 mx-8">
      <div
        className={`${metropolis.className} inline-block mt-4 mb-4 lg:text-xl md:mb-6 md:text-base opacity-100 tracking-tighter font-semibold`}
        style={{ color: mode ? '#7f7f7f' : '#4b5563' }} // text-gray-600
      >
        <span
          className={`${metropolis.className} inline-block origin-[70%_70%] animate-wave`}
          style={{ color: fill }}
        >
          👋
        </span>{' '}
        Hello! I&apos;m Diana Tofan
      </div>

      <a.h1
        className={`${metropolis.className} lg:text-6xl md:text-6xl text-5xl antialiased tracking-[-0.05em] lg:leading-headers font-semibold lg:max-w-xl`}
        style={{ color: fill }}
      >
        I&apos;m a UX designer with frontend superpowers
      </a.h1>
    </div>
  );
}
