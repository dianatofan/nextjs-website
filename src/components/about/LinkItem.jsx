import React from 'react';
import { CldImage } from 'next-cloudinary';
import { metropolis } from '@/app/utils/local-font';

export default function LinkItem({ title, description, image, link }) {
  return (
    <li
      className="flex items-center justify-between p-4 border-b border-dashed border-gray-200 hover:bg-gray-100 cursor-pointer"
      onClick={() => window.open(link, '_blank')}
    >
      <div className="flex items-center">
        {image && (
          <CldImage
            src={image}
            alt={`${title} logo`}
            width={32}
            height={32}
            className="w-8 h-8 rounded-full mr-4"
          />
        )}

        <span
          className={`${metropolis.className} text-sm md:text-base font-semibold`}
        >
          {title}
        </span>
      </div>

      <div className="flex items-center">
        <span
          className={`${metropolis.className} text-gray-500 text-sm md:text-base mr-2`}
        >
          {description}
        </span>

        <svg
          className="w-4 h-4 text-gray-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3zM5 5h4V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4h-2v4H5V5z" />
        </svg>
      </div>
    </li>
  );
}
