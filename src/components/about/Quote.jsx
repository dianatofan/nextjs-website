import React from 'react';
import { metropolis } from '@/app/utils/local-font';

export default function LinkItem({ quote, author, company }) {
  return (
    <figure className="max-w-screen-md mx-auto text-center w-full pb-2">
      <blockquote>
        <p
          className={`${metropolis.className} text-lg italic font-regular text-gray-900`}
        >
          {quote}
        </p>
      </blockquote>
    </figure>
  );
}
