import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Chip from './Chip';

export default function Card({
                               image,
                               title,
                               description,
                               role,
                               url,
                               inProgress,
                             }) {
  const [icon, showIcon] = useState(false);
  const router = useRouter();

  return (
    <div className="rectangle bg-white rounded-xl relative">
      <div style={{ position: 'relative', width: 'auto', height: '320px', overflow:'hidden' }}>
        <Image
          src={image}
          alt={description}
          layout="fill"
          style={{ objectFit: 'cover' }}
          className="rounded-t-xl object-cover transform transition-transform duration-500 hover:scale-110"
          unoptimized
          priority
        />
      </div>
      <div className="p-4">
        <div className="mb-1 text-xl font-semibold text-primary">{title}</div>
        <div className="block mb-1 text-md text-primary">{description}</div>
      </div>
    </div>
  );
}