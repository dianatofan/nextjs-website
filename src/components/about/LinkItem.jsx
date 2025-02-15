import React from 'react';

export default function LinkItem({ title, description, image, link }) {
  return (
    <li
      className="flex items-center justify-between p-4 border-b border-dashed border-gray-200 hover:bg-gray-100 cursor-pointer"
      onClick={() => window.open(link, '_blank')}
    >
      <div className="flex items-center">
        <img src={image} alt="Profile" className="w-8 h-8 rounded-full mr-4" />
        <span className="font-semibold">{title}</span>
      </div>
      <div className="flex items-center">
        <span className="text-gray-500 mr-2">{description}</span>
        <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 underline"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3zM5 5h4V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4h-2v4H5V5z" />
          </svg>
        </a>
      </div>
    </li>
  );
}
