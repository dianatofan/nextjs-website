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

    if (mode === 'before') {
      after.pause();
      before.currentTime = 0;
      before.play().catch(() => {});
    } else {
      before.pause();
      after.currentTime = 0;
      after.play().catch(() => {});
    }
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

      {/* Shrink-wrap container */}
      <div className="inline-block relative overflow-hidden rounded-xl  max-w-3xl">
        {/* Base video defines layout size (NOT absolute) */}
        <video
          ref={beforeRef}
          src="/images/notifications/only-unread.mp4"
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
          src="/images/notifications/read-and-unread.mp4"
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
  );
}
