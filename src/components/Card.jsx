import React, { useContext, useState } from 'react';
import { CursorContext } from '@/context/CursorContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import '../styles/card.scss';
import Chip from '@/components/Chip';

export default function Card({
  image,
  title,
  label,
  isPasswordProtected,
  fill,
  project,
  height,
  company,
}) {
  const [icon, showIcon] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  const { setIsHovered } = useContext(CursorContext);

  //
  // useEffect(() => {
  //   function handleHoverChange() {
  //     const size = isHovered ? 64 : 32;
  //     const svg = isHovered
  //       ? `<svg width="${size}" height="${size}" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="28" fill="#E8B059"/></svg>`
  //       : `<svg width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="10" fill="#E8B059"/></svg>`;
  //     document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(svg)}'), auto`;
  //   }
  //
  //   handleHoverChange();
  // }, [isHovered]);

  return (
    <Link href={`project/${project}`} className="card-link">
      <div className="rectangle rounded-xl relative">
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: height || '320px',
            overflow: 'hidden',
          }}
          className="rounded-xl group"
          onMouseEnter={() => {
            setIsHovered(true);
            setIsActive(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            setIsActive(false);
          }}
        >
          <Image
            src={image}
            alt={title}
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'top',
            }}
            className="rounded-xl object-fill transform transition-transform duration-500 group-hover:scale-110"
            unoptimized
            priority
          />

          <div
            className={`absolute left-0 bottom-0 w-full flex items-center justify-center
    transition-all duration-300
    ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
  `}
          >
            <span className="w-full px-6 py-4 text-lg font-medium text-white flex justify-between items-center rounded-b-xl relative bg-gradient-to-t from-black/80 to-transparent">
              <span>{title}</span>
              <span className="inline-flex gap-2 items-center">
                <Chip label={label} />
                {company && <Chip label={company} />}
                {isPasswordProtected && <Chip isPasswordProtected />}
              </span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
