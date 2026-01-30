// src/components/VideoBackground.js
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'react-feather';
import { metropolis } from '@/app/utils/local-font';

const CLOUD_NAME = 'dzpdf5ygh';
const PUBLIC_ID = 'background';

// Video: keep it reasonable size + auto quality/codec
const VIDEO_MP4 = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/f_auto,q_auto,vc_auto,w_1920/${PUBLIC_ID}.mp4`;

// Poster: make it lightweight and fast
const POSTER = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/so_0,f_jpg,q_auto,w_1600/${PUBLIC_ID}.jpg`;

const VideoBackground = ({ children }) => {
  const [ready, setReady] = useState(false);

  // Optional: ensure we never show black while swapping
  useEffect(() => {
    const img = new Image();
    img.src = POSTER;
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 bg-black">
      {/* Poster layer (visible instantly) */}
      <div
        className={`absolute inset-0 bg-center bg-cover transition-opacity duration-500 ${
          ready ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ backgroundImage: `url(${POSTER})` }}
      />

      {/* Video layer (fade in only when playable) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={POSTER}
        onCanPlay={() => setReady(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          ready ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src={VIDEO_MP4} type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
        {children}
      </div>

      <div
        className={`${metropolis.className} text-sm opacity-50 absolute top-8 left-8 lg:top-16 lg:left-16 text-white z-10`}
      >
        <Link className="inline-flex gap-1 hover:underline" href="/">
          <ArrowLeft width={20} height={20} strokeWidth={2} />
          Go back
        </Link>
      </div>
    </div>
  );
};

export default VideoBackground;
