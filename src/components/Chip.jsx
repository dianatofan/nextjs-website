import React from 'react';
import { Lock } from 'react-feather';
import { metropolis } from '@/app/utils/local-font';

export default function Chip({ label, isPasswordProtected }) {
  return (
    <span
      className={`${metropolis.className} lg:inline-flex items-center px-3 py-1 h-7 rounded-full text-sm font-normal bg-gray-100 text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis`}
    >
      {label}
      {isPasswordProtected && (
        <Lock
          size={16}
          className={`${metropolis.className} text-sm font-normal text-gray-600`}
        />
      )}
    </span>
  );
}
