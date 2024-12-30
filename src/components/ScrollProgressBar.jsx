import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const ScrollProgressBar = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScroll(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const props = useSpring({ width: `${scroll}%` });

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '4px',
        zIndex: 1000,
      }}
    >
      <animated.div style={{ ...props, height: '100%', background: '#000' }} />
    </div>
  );
};

export default ScrollProgressBar;
