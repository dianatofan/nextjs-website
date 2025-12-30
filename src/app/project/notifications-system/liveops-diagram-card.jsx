import { useMemo, useState } from 'react';
import Image from 'next/image';

function SegmentedToggle({ value, onChange, fontClass = '' }) {
  return (
    <div
      className={[
        'inline-flex rounded-full bg-gray-100 p-1 ring-1 ring-gray-200',
        fontClass,
      ].join(' ')}
    >
      {[
        { key: 'ideal', label: 'Ideal' },
        { key: 'error', label: 'Error' },
      ].map((opt) => {
        const active = value === opt.key;
        return (
          <button
            key={opt.key}
            type="button"
            onClick={() => onChange(opt.key)}
            className={[
              'rounded-full px-3 py-1.5 text-xs md:text-sm font-medium transition',
              active
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900',
            ].join(' ')}
            aria-pressed={active}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

export function LiveOpsDiagramCard({ metropolis }) {
  const [mode, setMode] = useState('ideal');

  // Update these paths to your actual files
  const diagrams = useMemo(
    () => ({
      ideal: {
        src: '/images/notifications/LiveOps-ideal.png',
        alt: 'Ideal LiveOps flow: Dashboard configuration processed by backend systems and delivered to players.',
        caption:
          'Ideal: Dashboard configuration is processed by backend systems and reaches players as expected.',
        badge: 'Expected behavior',
      },
      error: {
        src: '/images/notifications/LiveOps-error.png', // <-- create/export this
        alt: 'Error LiveOps flow: backend failure impacts players while the dashboard shows no issue.',
        caption:
          'Error: A backend dependency fails — players may see errors while creators see no signal in the Dashboard.',
        badge: 'Failure can be invisible',
      },
    }),
    []
  );

  const active = diagrams[mode];

  return (
    <div className="mt-12 w-full">
      <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
        {/* Header (inside card) */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between px-5 py-4 md:px-6 border-b border-gray-100">
          <div>
            <div
              className={`text-xs font-semibold uppercase tracking-[0.22em] text-gray-400 ${metropolis.className}`}
            >
              LiveOps flow (simplified)
            </div>
            <div
              className={`mt-1 text-sm text-gray-600 ${metropolis.className}`}
            >
              Toggle to compare the ideal path vs. what happens when a backend
              system fails.
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span
              className={`hidden md:inline-flex text-xs font-medium px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-gray-600 ${metropolis.className}`}
            >
              {active.badge}
            </span>

            <SegmentedToggle
              value={mode}
              onChange={setMode}
              fontClass={metropolis.className}
            />
          </div>
        </div>

        {/* Image area */}
        <div className="bg-gray-50 p-8">
          {/* Padding wrapper */}
          <div className="relative">
            {/* Ideal */}
            <Image
              src={diagrams.ideal.src}
              alt={diagrams.ideal.alt}
              width={1920}
              height={1080}
              className={[
                'absolute inset-0 w-full h-auto transition-opacity duration-500 ease-in-out',
                mode === 'ideal' ? 'opacity-100' : 'opacity-0',
              ].join(' ')}
            />

            {/* Error */}
            <Image
              src={diagrams.error.src}
              alt={diagrams.error.alt}
              width={1920}
              height={1080}
              className={[
                'absolute inset-0 w-full h-auto transition-opacity duration-500 ease-in-out',
                mode === 'error' ? 'opacity-100' : 'opacity-0',
              ].join(' ')}
            />

            {/* Layout spacer */}
            <div className="invisible">
              <Image
                src={diagrams.ideal.src}
                alt=""
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Caption (inside card footer, not below) */}
        <div
          className={[
            'relative overflow-hidden',
            'px-5 py-4 md:px-6 border-t border-gray-100',
            mode === 'ideal' ? 'bg-emerald-50' : 'bg-red-50',
          ].join(' ')}
        >
          {/*/!* Left accent that follows border radius *!/*/}
          {/*<span*/}
          {/*  className={[*/}
          {/*    'pointer-events-none absolute inset-y-0  left-0 w-1',*/}
          {/*    '',*/}
          {/*    mode === 'ideal' ? 'bg-emerald-400' : 'bg-red-400',*/}
          {/*  ].join(' ')}*/}
          {/*/>*/}

          <div className="flex items-center gap-3">
            {/* Status icon */}
            {mode === 'ideal' ? (
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500">
                <svg
                  className="h-3 w-3 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 011.42-1.42l2.79 2.79 6.79-6.79a1 1 0 011.42 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            ) : (
              <svg
                className="h-5 w-5 text-red-500"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 3a1 1 0 01.87.5l9 16a1 1 0 01-.87 1.5H3a1 1 0 01-.87-1.5l9-16A1 1 0 0112 3z" />
                <path
                  d="M12 9v4"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="16" r="1.25" fill="white" />
              </svg>
            )}

            {/* Caption */}
            <p
              className={`text-xs md:text-sm leading-relaxed text-gray-800 ${metropolis.className}`}
            >
              {active.caption}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
