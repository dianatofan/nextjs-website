import React from 'react';

import '@/styles/header/hamburger.scss';
import { metropolis } from '@/app/utils/local-font';

export default function Burger({ open, setOpen, fill }) {
  return (
    <button className={open ? 'open' : ''} onClick={() => setOpen(!open)}>
      <div
        style={{ background: open ? '#fff' : fill || '#202020' }}
        className={`${metropolis.className}`}
      />
      <div
        style={{ background: open ? '#fff' : fill || '#202020' }}
        className={`${metropolis.className}`}
      />
      <div
        style={{ background: open ? '#fff' : fill || '#202020' }}
        className={`${metropolis.className}`}
      />
    </button>
  );
}
