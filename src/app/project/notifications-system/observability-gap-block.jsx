// ObservabilityGapBlock.jsx
// Scannable + portfolio-polished: short narrative + “signal gap” cards.
// Also includes an optional visual placeholder component you can drop in.

import React from 'react';
import Image from 'next/image';

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600">
    {children}
  </span>
);

const SectionKicker = ({ children, fontClass = '' }) => (
  <div
    className={[
      'text-xs font-semibold uppercase tracking-[0.24em] text-gray-500',
      fontClass,
    ].join(' ')}
  >
    {children}
  </div>
);

const Card = ({ title, icon, children, fontClass = '' }) => (
  <div className="rounded-2xl border border-gray-200 bg-white p-6">
    <div className="flex items-start gap-3">
      <div className="mt-0.5 shrink-0 rounded-xl bg-gray-50 p-2 ring-1 ring-gray-200">
        <span className="text-sm">{icon}</span>
      </div>
      <div>
        <div
          className={[
            'text-xs font-semibold uppercase tracking-[0.22em] text-gray-500',
            fontClass,
          ].join(' ')}
        >
          {title}
        </div>
        <div
          className={[
            'mt-3 text-sm md:text-base leading-relaxed text-gray-800',
            fontClass,
          ].join(' ')}
        >
          {children}
        </div>
      </div>
    </div>
  </div>
);

const Callout = ({ title, children, fontClass = '' }) => (
  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-7">
    <div
      className={[
        'text-xs font-semibold uppercase tracking-[0.22em] text-gray-500',
        fontClass,
      ].join(' ')}
    >
      {title}
    </div>
    <div
      className={[
        'mt-3 text-base md:text-lg leading-relaxed text-gray-900',
        fontClass,
      ].join(' ')}
    >
      {children}
    </div>
  </div>
);

export default function ObservabilityGapBlock({ metropolis }) {
  return (
    <div className="xl:col-span-9 ">
      {/* Header */}
      <div className="max-w-3xl">
        <h3
          className={[
            'text-2xl md:text-3xl font-semibold leading-snug text-primary',
            metropolis.className,
          ].join(' ')}
        >
          Critical signals lived outside the LiveOps Dashboard
        </h3>

        {/* Scannable narrative (not a wall of text) */}
        <div className="mt-6 space-y-4">
          <p
            className={[
              'text-base md:text-lg leading-relaxed text-gray-900',
              metropolis.className,
            ].join(' ')}
          >
            I worked closely with LiveOps creators, backend engineers, and
            support teams to understand how production issues were detected and
            handled in practice.
          </p>

          <p
            className={[
              'text-base md:text-lg leading-relaxed text-gray-900',
              metropolis.className,
            ].join(' ')}
          >
            While backend systems reliably flagged failures at runtime through
            monitoring and logs, creators had{' '}
            <span className="font-medium">no direct visibility</span> in the
            LiveOps Dashboard. Instead, they relied on indirect signals: Slack
            messages from engineers, support tickets, or noticing anomalies in
            player metrics.
          </p>
        </div>
      </div>

      {/* Optional visual placeholder */}
      {/* Optional visual */}
      <div className="mt-10 max-w-5xl ">
        <Image
          src="/images/notifications/observability-gap.png"
          alt="Observability gap: alerts appear in engineering tools while the LiveOps Dashboard shows no alerts."
          width={1920}
          height={1080}
          className="h-auto w-full"
          priority={false}
        />

        <div
          className={[
            'mt-3 text-xs md:text-sm text-gray-400',
            metropolis.className,
          ].join(' ')}
        >
          Failures were detectable in engineering tools, but creators worked in
          the Dashboard, creating an observability gap
        </div>
      </div>
    </div>
  );
}
