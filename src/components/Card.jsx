import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import '../styles/card.scss';

export default function Card({
  image,
  title,
  description,
  role,
  url,
  inProgress,
}) {
  const [icon, showIcon] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  useEffect(() => {
    function handleHoverChange() {
      console.log('Hover state changed:', isHovered);
      // Add your custom logic here
      // Change cursor on hovered state
      document.body.style.cursor = !isHovered
        ? `url('data:image/svg+xml;base64,${btoa(
            '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16,6 a10,10 0 1,0 0,20 a10,10 0 1,0 0,-20" fill="#E8B059"/></svg>'
          )}'), auto`
        : `url('data:image/svg+xml;base64,${btoa(
            '<svg width="32" height="32" class="morphing-cursor" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4,4 h24 a4,4 0 0,1 4,4 v16 a4,4 0 0,1 -4,4 h-24 a4,4 0 0,1 -4,-4 v-16 a4,4 0 0,1 4,-4" fill="#E8B059"/><</svg>'
          )}'), auto`;
    }

    // handleHoverChange();
  }, [isHovered]);

  return (
    <div className="rectangle bg-white rounded-xl relative">
      <div
        style={{
          position: 'relative',
          width: 'auto',
          height: '320px',
          overflow: 'hidden',
        }}
      >
        <Image
          src={image}
          alt={description}
          layout="fill"
          style={{ objectFit: 'cover' }}
          className="rounded-t-xl object-cover transform transition-transform duration-500 hover:scale-110"
          unoptimized
          priority
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
      <div className="p-4">
        <div className="mb-1 text-xl font-semibold text-primary">{title}</div>
        <div className="block mb-1 text-md text-primary">{description}</div>
      </div>
    </div>
  );
}
