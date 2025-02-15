import React from 'react';

export default function LinkItem({ quote, author, company }) {
  return (
    <figure className="max-w-screen-md mx-auto text-center w-full pb-2">
      <blockquote>
        <p className="text-lg italic font-regular text-gray-900 dark:text-white">
          {quote}
        </p>
      </blockquote>
    </figure>
  );
}
