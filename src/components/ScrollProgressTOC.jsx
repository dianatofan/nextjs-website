'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';

export default function ScrollProgressTOC({ items, offsetTop = 96 }) {
  const [activeId, setActiveId] = useState(items?.[0]?.id ?? '');
  const [progress, setProgress] = useState(0);
  const [openMobile, setOpenMobile] = useState(false);

  const ids = useMemo(() => items.map((i) => i.id), [items]);
  const latestActiveRef = useRef(activeId);
  latestActiveRef.current = activeId;

  // Scroll progress (page-level)
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const p = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      setProgress(Math.min(1, Math.max(0, p)));
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    if (!ids.length) return;

    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);

    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          );

        if (
          visible[0]?.target?.id &&
          visible[0].target.id !== latestActiveRef.current
        ) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: `-${offsetTop + 24}px 0px -60% 0px`,
        threshold: [0.1, 0.2, 0.35, 0.5, 0.65, 0.8],
      }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, offsetTop]);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - offsetTop;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop TOC */}
      {/* Desktop TOC – sliding active segment like screenshot */}
      <div
        className="hidden lg:block fixed top-36 z-40"
        style={{
          left: `calc(50% - ${1280 / 2}px - 56px)`, // align to max-w-screen-xl
        }}
      >
        <div className="relative flex items-start gap-5">
          {/* Left rail */}
          <div className="relative w-[2px] h-[360px] bg-gray-200 rounded-full">
            {/* Active segment that slides */}
            <div
              className="absolute left-0 w-[2px] bg-gray-900 rounded-full transition-all duration-300 ease-out"
              style={{
                top: `${
                  Math.max(
                    0,
                    items.findIndex((i) => i.id === activeId)
                  ) * 44
                }px`,
                height: '44px',
              }}
            />
          </div>

          {/* Labels */}
          <nav aria-label="Table of contents" className="w-[220px]">
            <ul className="flex flex-col">
              {items.map((item) => {
                const isActive = item.id === activeId;

                return (
                  <li key={item.id} className="h-[44px] flex items-center">
                    <button
                      type="button"
                      onClick={() => scrollToId(item.id)}
                      className={[
                        'w-full text-left',
                        'transition-all duration-300 ease-out',
                        'focus:outline-none', // remove blue focus ring
                        isActive
                          ? 'text-gray-900 font-semibold'
                          : 'text-gray-300 hover:text-gray-500 font-medium',
                      ].join(' ')}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden fixed bottom-5 right-5 z-50">
        <button
          type="button"
          onClick={() => setOpenMobile(true)}
          className="rounded-full bg-gray-900 text-white px-4 py-3 shadow-lg active:scale-[0.99] transition-transform"
        >
          Contents
        </button>
      </div>

      {openMobile ? (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setOpenMobile(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-[360px] bg-white shadow-xl p-5">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-gray-900">
                Contents
              </div>
              <button
                type="button"
                onClick={() => setOpenMobile(false)}
                className="text-sm text-gray-500"
              >
                Close
              </button>
            </div>

            <div className="mt-4">
              <div className="relative h-[2px] w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-gray-900 transition-[width] duration-200 ease-out"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
            </div>

            <ul className="mt-5 flex flex-col gap-2">
              {items.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => {
                        scrollToId(item.id);
                        setOpenMobile(false);
                      }}
                      className={[
                        'w-full text-left rounded-xl px-3 py-2 text-sm transition-colors',
                        isActive
                          ? 'bg-gray-100 text-gray-900 font-semibold'
                          : 'text-gray-600 hover:bg-gray-50',
                      ].join(' ')}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}
