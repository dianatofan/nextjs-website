import { useState } from 'react';
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
        { key: 'issues', label: 'Critical issues' },
        { key: 'updates', label: 'Latest updates' },
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

export function ListViewsSection({ metropolis }) {
  const [view, setView] = useState('issues');

  const content = {
    issues: {
      title: 'Critical issues',
      description:
        'A structured list that makes failures actionable: what’s broken, where it occurs, who it affects, and how it was detected, with quick actions to resolve or reopen.',
      image: '/images/notifications/list-critical-issues.png', // placeholder
      alt: 'Critical Issues list view showing issue context and actions.',
    },
    updates: {
      title: 'Latest updates',
      description:
        'A lightweight feed for awareness, relevant changes scoped to the creator, without requiring action or adding noise.',
      image: '/images/notifications/list-latest-updates.png', // placeholder
      alt: 'Latest Updates list view showing non-critical changes.',
    },
  };

  const active = content[view];

  return (
    <section
      id="list-views"
      className="bg-gray-50 py-20 flex justify-center w-screen px-6 md:px-8"
    >
      <div className="w-full max-w-screen-xl">
        {/* Title row */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2
              className={`text-xl md:text-3xl font-semibold tracking-tight text-primary ${metropolis.className}`}
            >
              List views: from awareness to action
            </h2>

            <p
              className={`mt-4 max-w-3xl text-base md:text-lg leading-relaxed text-gray-700 ${metropolis.className}`}
            >
              Clicking into <span className="font-medium">Critical issues</span>{' '}
              or <span className="font-medium">Latest updates</span> opens a
              structured view with the right level of context, depending on
              whether action is required.
            </p>
          </div>

          {/* Toggle */}
          <div className="md:pb-1">
            <SegmentedToggle
              value={view}
              onChange={setView}
              fontClass={metropolis.className}
            />
          </div>
        </div>

        {/* Content row */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Text */}
          <div className="max-w-xl">
            <div
              className={`text-xs font-semibold uppercase tracking-[0.22em] text-gray-400 ${metropolis.className}`}
            >
              {active.title}
            </div>

            <p
              className={`mt-4 text-base md:text-lg leading-relaxed text-gray-900 ${metropolis.className}`}
            >
              {active.description}
            </p>

            {view === 'issues' ? (
              <ul className="mt-8 space-y-3">
                {[
                  'What’s broken and severity',
                  'Where it occurs + affected resources',
                  'Detection source (monitoring / logs)',
                  'Resolve or reopen with one click',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-red-500 shrink-0" />
                    <p className={`text-gray-700 ${metropolis.className}`}>
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="mt-8 space-y-3">
                {[
                  'Relevant changes scoped to ownership / follows',
                  'No action required (awareness-only)',
                  'Prevents noise by filtering to what matters',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-500 shrink-0" />
                    <p className={`text-gray-700 ${metropolis.className}`}>
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Right: Visual (placeholder now) */}
        <div className="w-full">
          <div className="rounded-2xl bg-white p-3 ring-1 ring-gray-200 shadow-sm">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-gray-100">
              <Image
                src={active.image}
                alt={active.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div
            className={`mt-3 text-center text-xs md:text-sm text-gray-400 ${metropolis.className}`}
          >
            {view === 'issues'
              ? 'Critical Issues lists failures with context and actions.'
              : 'Latest Updates surfaces relevant changes without noise.'}
          </div>
        </div>
      </div>
    </section>
  );
}
