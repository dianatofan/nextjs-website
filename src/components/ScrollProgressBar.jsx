import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import { animated, useSpring } from '@react-spring/web';

const BAR_H = 4;

const ScrollProgressBar = () => {
  const [scroll, setScroll] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const calc = useCallback(() => {
    // progress
    const el = document.scrollingElement || document.documentElement;
    const scrollTop = window.scrollY ?? el.scrollTop ?? 0;
    const docHeight = el.scrollHeight - el.clientHeight;

    if (docHeight > 0) {
      const pct = (scrollTop / docHeight) * 100;
      setScroll(Math.min(100, Math.max(0, pct)));
    } else {
      setScroll(0);
    }

    // color: pick whatever is underneath the bar
    const x = Math.min(window.innerWidth / 2, 10); // near left but not exactly 0
    const y = Math.min(BAR_H / 2, 2); // inside the bar area

    const node = document.elementFromPoint(x, y);
    const section = node?.closest?.('[data-bg]');
    const bg = section?.getAttribute('data-bg');

    // default to light if unknown (prevents random flips over untagged areas)
    setIsDark(bg === 'dark');
  }, []);

  useLayoutEffect(() => {
    calc();
  }, [calc]);

  useEffect(() => {
    const el = document.scrollingElement || document.documentElement;

    calc();
    requestAnimationFrame(calc);

    el.addEventListener('scroll', calc, { passive: true });
    window.addEventListener('scroll', calc, { passive: true }); // fallback
    window.addEventListener('resize', calc);
    window.addEventListener('load', calc);

    const ro = new ResizeObserver(calc);
    ro.observe(document.body);

    return () => {
      el.removeEventListener('scroll', calc);
      window.removeEventListener('scroll', calc);
      window.removeEventListener('resize', calc);
      window.removeEventListener('load', calc);
      ro.disconnect();
    };
  }, [calc]);

  const spring = useSpring({ width: `${scroll}%` });

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: BAR_H,
        zIndex: 2147483647,
        pointerEvents: 'none',
      }}
    >
      <animated.div
        style={{
          height: '100%',
          width: `${scroll}%`,
          background: isDark ? '#fff' : '#000',
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;
