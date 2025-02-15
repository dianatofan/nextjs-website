import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Chip from '@/components/Chip';
import React, { useEffect, useState } from 'react';
import '../styles/card.scss';

export default function Card({
  image,
  title,
  description,
  label,
  isPasswordProtected,
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
    <div className="rectangle rounded-xl relative">
      <Link href="project/google-travel">
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
            className="rounded-xl object-cover transform transition-transform duration-500 hover:scale-110"
            unoptimized
            priority
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
      </Link>
      <div className="py-4">
        <div className="flex align-center mb-2 gap-2">
          <div className="text-xl font-semibold text-primary">{title}</div>
          <Chip label={label} />
          {isPasswordProtected && <Chip isPasswordProtected />}
        </div>
        <div className="block text-base text-gray-500">{description}</div>
      </div>
    </div>
  );
}
