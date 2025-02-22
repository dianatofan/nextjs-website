// src/components/VideoBackground.js
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'react-feather';
import { metropolis } from '@/app/utils/local-font';

const VideoBackground = ({ children }) => {
  return (
    <div className="animated animate-fadeIn fixed top-0 left-0 w-full h-full overflow-hidden z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover z-[-1]"
      >
        <source src="/images/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
        {children}
      </div>
      <div
        className={`${metropolis.className} text-sm opacity-50 absolute top-8 left-8 lg:top-16 lg:left-16 text-white z-10`}
      >
        <Link
          className={`${metropolis.className} inline-flex gap-1 hover:underline`}
          href="/"
        >
          <ArrowLeft width={20} height={20} strokeWidth={2} />
          Go back
        </Link>
      </div>
    </div>
  );
};

export default VideoBackground;
