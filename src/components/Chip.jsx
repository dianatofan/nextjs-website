import React from 'react';

export default function Chip({ label }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800">
      {label}
    </span>
  );
}
