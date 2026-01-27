import React from 'react';
import { Lock } from 'react-feather';
import { metropolis } from '@/app/utils/local-font';
import { useUIStore } from '@/stores/uiStore';

export default function Chip({ label, isPasswordProtected, icon }) {
  const mode = useUIStore((s) => s.mode);

  return (
    <span
      className={`
        ${metropolis.className}
        lg:inline-flex items-center px-3 py-1 h-7 rounded-full text-sm font-normal
        whitespace-nowrap overflow-hidden
        ${mode ? 'bg-[#202020] text-white' : 'bg-gray-100 text-gray-600'}
      `}
    >
      {icon && (
        <span
          className={`
            flex items-center justify-center w-5 h-5 rounded-full mr-2 shrink-0
            ${mode ? 'bg-white/20 text-white' : 'bg-gray-300 text-gray-700'}
          `}
        >
          {icon}
        </span>
      )}

      {label && <span className="truncate">{label}</span>}

      {isPasswordProtected && (
        <Lock size={16} className={mode ? 'text-white' : 'text-gray-600'} />
      )}
    </span>
  );
}
