import { useEffect, useRef, useState } from 'react';

function SegmentedToggle({ value, onChange, fontClass = '' }) {
  return (
    <div
      className={[
        'inline-flex rounded-full bg-gray-100 p-1 ring-1 ring-gray-200',
        fontClass,
      ].join(' ')}
    >
      {['before', 'after'].map((key) => {
        const active = value === key;
        return (
          <button
            key={key}
            type="button"
            onClick={() => onChange(key)}
            aria-pressed={active}
            className={[
              'rounded-full px-4 py-1.5 text-sm font-medium transition',
              active
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900',
            ].join(' ')}
          >
            {key === 'before' ? 'Before' : 'After'}
          </button>
        );
      })}
    </div>
  );
}

export function BeforeAfterVideoCard({ metropolis }) {
  const [mode, setMode] = useState('before');

  const beforeRef = useRef(null);
  const afterRef = useRef(null);

  useEffect(() => {
    const before = beforeRef.current;
    const after = afterRef.current;
    if (!before || !after) return;

    const active = mode === 'before' ? before : after;
    const inactive = mode === 'before' ? after : before;

    // stop the hidden one
    inactive.pause();
    inactive.currentTime = 0;

    // restart the visible one
    active.currentTime = 0;
    active.play().catch(() => {});
  }, [mode]);

  return (
    <div className="mt-12">
      <div className="mb-4 flex items-center justify-between">
        <SegmentedToggle
          value={mode}
          onChange={setMode}
          fontClass={metropolis.className}
        />
      </div>

      <div className="mt-8 w-full bg-[#E3E8F1] p-8 rounded-2xl">
        {/* Wrapper defines layout + positioning context */}
        <div className="relative inline-block overflow-hidden rounded-xl max-w-full">
          {/* Base video defines layout size */}
          <video
            ref={beforeRef}
            src="/images/canvas/everything-expanded.mp4"
            muted
            loop
            playsInline
            preload="metadata"
            className={[
              'block h-auto max-w-full object-contain transition-opacity duration-500',
              mode === 'before' ? 'opacity-100' : 'opacity-0',
            ].join(' ')}
          />

          {/* Overlay video fills the base video's box */}
          <video
            ref={afterRef}
            src="/images/canvas/mostly-collapsed.mp4"
            muted
            loop
            playsInline
            preload="metadata"
            className={[
              'absolute inset-0 h-full w-full object-contain transition-opacity duration-500',
              mode === 'after' ? 'opacity-100' : 'opacity-0',
            ].join(' ')}
          />
        </div>
      </div>
    </div>
  );
}
