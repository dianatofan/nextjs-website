'use client';

import React, { useEffect, useState } from 'react';
import { a } from '@react-spring/web';
import 'animate.css';
import { metropolis, nauryz } from '@/app/utils/local-font';

export default function Overlay({ fill }) {
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
      document.getElementById('scroll-to-explore').style.opacity =
        1 - scrollTop / 400;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="overlay animate__animated animate__fadeIn lg:w-1/2 lg:p-4 mx-8">
      <span
        className={`${metropolis.className} inline-block mt-4 mb-4 lg:text-3xl md:mb-6 md:text-base text-primary opacity-70 tracking-tighter font-semibold`}
      >
        Hello! I&apos;m Diana Tofan
      </span>
      <a.h1
        className={`${nauryz.className} lg:text-8xl md:text-7xl text-6xl antialiased tracking-tighter lg:leading-headers text-primary font-medium lg:max-w-lg`}
        style={{ color: fill }}
      >
        UX Designer & Frontend Engineer
      </a.h1>
    </div>
  );
}
