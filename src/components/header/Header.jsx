// javascript
import React, { useEffect, useRef, useState } from 'react';

export default function GlassHeader({
  logo = null,
  navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ],
  shrinkAt = 40, // start shrinking after this many px scrolled
  shrinkRange = 400, // amount of scroll over which it shrinks to min
  minWidth = 600, // minimum pill width
  maxWidthCap = 1280, // maximum logical pill width
}) {
  const [path, setPath] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );
  const [scrolled, setScrolled] = useState(false);
  const [pillWidth, setPillWidth] = useState(null);
  const ticking = useRef(false);

  // compute width based on current scroll
  const updateWidth = () => {
    if (typeof window === 'undefined') return;
    const viewportAvailable = Math.max(window.innerWidth - 48, 0);
    const containerMax = Math.min(viewportAvailable, maxWidthCap);
    const y = window.scrollY || 0;
    const start = shrinkAt;
    const range = Math.max(1, shrinkRange);
    const rawProgress = (y - start) / range;
    const progress = Math.max(0, Math.min(1, rawProgress)); // 0..1
    // linear interpolation from containerMax -> minWidth
    const widthPx = Math.max(
      minWidth,
      Math.round(containerMax - progress * (containerMax - minWidth))
    );
    setPillWidth(widthPx);
    setScrolled(y > 0);
  };

  useEffect(() => {
    // initial set on mount
    updateWidth();

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(() => {
          updateWidth();
          ticking.current = false;
        });
      }
    };
    const onResize = () => {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(() => {
          updateWidth();
          ticking.current = false;
        });
      }
    };
    const onPop = () => setPath(window.location.pathname);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    window.addEventListener('popstate', onPop);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('popstate', onPop);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // fallback width when not measured yet
  const pillStyle = {
    width: pillWidth ? `${pillWidth}px` : '100%',
    transition: 'width 180ms cubic-bezier(.2,.9,.2,1), box-shadow 160ms',
    // additional inline glass accents (keeps Tailwind + inline for finer control)
    background:
      'linear-gradient(180deg, rgba(255,255,255,0.62), rgba(255,255,255,0.28))',
    boxShadow: scrolled
      ? '0 6px 18px rgba(12,14,20,0.08), inset 0 1px 0 rgba(255,255,255,0.45)'
      : '0 8px 30px rgba(12,14,20,0.06), inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -6px 20px rgba(0,0,0,0.06)',
    backdropFilter: 'blur(12px) saturate(140%)',
    WebkitBackdropFilter: 'blur(12px) saturate(140%)',
  };

  return (
    <header
      role="banner"
      className={`fixed left-0 right-0 z-50 flex justify-center pointer-events-none ${scrolled ? 'top-2' : 'top-4'} transition-all duration-200`}
    >
      <div className="relative w-[calc(100%-48px)] max-w-[1280px] pointer-events-auto box-border">
        <div
          className="mx-auto flex items-center justify-between rounded-full px-6 py-4"
          aria-hidden={false}
          style={pillStyle}
        >
          {/* Logo (glass) */}
          <button
            onClick={() => (window.location.href = '/')}
            type="button"
            aria-label="Home"
            className="flex items-center gap-3 pointer-events-auto bg-transparent p-0"
            style={{ marginRight: 6 }}
          >
            <img
              src="/logo.svg"
              alt="Logo"
              className="w-6 h-6 object-contain"
            />
          </button>

          {/* Nav */}
          <nav aria-label="Primary" className="flex-1 mx-6">
            <ul className="flex items-center justify-center gap-8">
              {navItems.map((it) => {
                const active = path === it.href;
                return (
                  <li key={it.href} className="list-none">
                    <a
                      href={it.href}
                      onClick={() => setPath(it.href)}
                      className={`text-sm transition-colors duration-150 ${active ? 'font-semibold text-black' : 'font-medium text-gray-700'}`}
                    >
                      <span className="inline-flex items-center gap-2">
                        {it.label}
                        {active && (
                          <span className="w-2 h-2 bg-emerald-500 rounded-full block" />
                        )}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/6 hover:bg-white/12 transition pointer-events-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1M12 20v1M4.2 4.2l.7.7M18.1 18.1l.7.7M1 12h1M22 12h1M4.2 19.8l.7-.7M18.1 5.9l.7-.7M12 7a5 5 0 100 10 5 5 0 000-10z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
