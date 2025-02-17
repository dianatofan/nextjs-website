import React from 'react';
import { a } from '@react-spring/web';

import '@/styles/header/hamburger.scss';
import { metropolis } from '@/app/utils/local-font';

export default function Burger({ open, setOpen, fill }) {
  return (
    <button className={open ? 'open' : ''} onClick={() => setOpen(!open)}>
      <a.div
        style={{ background: open ? '#fff' : fill || '#202020' }}
        className={`${metropolis.className}`}
      />
      <a.div
        style={{ background: open ? '#fff' : fill || '#202020' }}
        className={`${metropolis.className}`}
      />
      <a.div
        style={{ background: open ? '#fff' : fill || '#202020' }}
        className={`${metropolis.className}`}
      />
    </button>
  );
}
