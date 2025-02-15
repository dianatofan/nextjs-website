import React from 'react';
import { Lock } from 'react-feather';

export default function Chip({ label, isPasswordProtected }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-normal bg-gray-100 text-gray-600">
      {label}
      {isPasswordProtected && (
        <Lock size={16} className="text-sm font-normal text-gray-600" />
      )}
    </span>
  );
}
