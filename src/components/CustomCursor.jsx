'use client';

import React, { useContext, useEffect, useState } from 'react';
import { CursorContext } from '@/context/CursorContext';
import { ArrowUpRight } from 'react-feather';

export default function CustomCursor() {
  const { isHovered } = useContext(CursorContext);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hideCursor, setHideCursor] = useState(false);

  const size = 24;

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const interactiveSelector =
      '#copyEmail, .image-compare, .header-logo, a, button, input, textarea, select, li, [tabindex]:not([tabindex="-1"])';
    const checkPointer = (e) => {
      const interactive = e.target.closest(interactiveSelector);
      if (interactive && !interactive.classList.contains('card-link')) {
        setHideCursor(true);
      } else {
        setHideCursor(false);
      }
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mousemove', checkPointer);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousemove', checkPointer);
    };
  }, []);

  if (hideCursor) return null;

  return (
    <div
      style={{
        position: 'fixed',
        left: pos.x - size / 2,
        top: pos.y - size / 2,
        pointerEvents: 'none',
        zIndex: 9999,
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: isHovered ? 'scale(2)' : 'scale(1)',
        transition:
          'transform 0.35s cubic-bezier(.4,1.4,.6,1), background 0.2s, box-shadow 0.2s, backdrop-filter 0.2s',
        borderRadius: '50%',
        background: isHovered ? 'rgba(232, 176, 89, 0.25)' : '#E8B059',
        boxShadow: isHovered ? '0 4px 24px 0 rgba(232, 176, 89, 0.15)' : 'none',
        backdropFilter: isHovered ? 'blur(8px)' : 'none',
        WebkitBackdropFilter: isHovered ? 'blur(8px)' : 'none',
      }}
    >
      {isHovered && (
        <ArrowUpRight
          size={12}
          color="#fff"
          style={{
            position: 'relative',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        />
      )}
    </div>
  );
}
