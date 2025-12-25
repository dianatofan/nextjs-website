'use client';

import React from 'react';

export default function GlassToggleButton({
  open = false,
  onClick,
  className = '',
  ariaLabel = 'Toggle projects',
}) {
  return (
    <button
      type="button"
      aria-pressed={open}
      aria-label={ariaLabel}
      onClick={onClick}
      className={
        `relative z-50 inline-flex items-center justify-center
         w-14 h-10 sm:w-16 sm:h-11 rounded-full
         bg-white/6 backdrop-blur-md border border-white/10
         text-white font-medium shadow-[0_10px_30px_rgba(2,6,23,0.45)]
         transition-transform duration-200 ease-out
         hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/25 ` +
        className
      }
    >
      {/* decorative soft blob (liquid) */}
      <span
        aria-hidden
        className="absolute -left-4 -top-4 w-20 h-20 rounded-full bg-white/8 blur-2xl opacity-40 transform rotate-12 pointer-events-none"
      />

      {/* glossy sheen */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent opacity-30 rounded-full pointer-events-none"
      />

      {/* thin inner border highlight */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-full ring-1 ring-white/6 pointer-events-none"
      />

      {/* icon + label */}
      <span className="relative z-10 flex items-center gap-2">
        {/* Icon: + (when closed) or - (when open) */}
        {open ? (
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <rect
              x="4"
              y="11"
              width="16"
              height="2"
              rx="1"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <rect
              x="11"
              y="4"
              width="2"
              height="16"
              rx="1"
              fill="currentColor"
            />
            <rect
              x="4"
              y="11"
              width="16"
              height="2"
              rx="1"
              fill="currentColor"
            />
          </svg>
        )}
        <span className="hidden sm:inline-block text-sm">
          {open ? 'Show less' : 'See more'}
        </span>
      </span>
    </button>
  );
}
