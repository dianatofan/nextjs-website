// Drop-in replacement for your Background section (xl:col-span-9 content)
// - More scannable layout (short paragraphs + 3 cards)
// - Figure w/ well-defined caption (border-left editorial caption)
// - Toggle to switch between Ideal flow / Error flow
// Assumes Tailwind is available. Uses Next <Image />.

import { useMemo, useState } from 'react';
import { LiveOpsDiagramCard } from '@/app/project/notifications-system/liveops-diagram-card';

export function BackgroundBlock({ metropolis }) {
  const [mode, setMode] = useState('ideal'); // "ideal" | "error"

  // Update these paths to your actual exported assets
  const images = useMemo(
    () => ({
      ideal: {
        src: '/images/notifications/LiveOps-ideal.png',
        alt: 'Ideal LiveOps flow: configuration to backend to players.',
        captionTitle: 'Ideal flow',
        captionBody:
          'A typical LiveOps flow: a creator configures a feature in the Dashboard, backend systems process it, and the result reaches players.',
      },
      error: {
        src: '/images/notifications/LiveOps-error.png', // <-- create / export your error version here
        alt: 'Error LiveOps flow: backend failure impacts players without Dashboard visibility.',
        captionTitle: 'Error flow',
        captionBody:
          'The same setup can still fail in production. Backend issues may surface only after launch, and creators often won’t see the signals inside the Dashboard while players are already affected.',
      },
    }),
    []
  );

  const active = images[mode];

  return (
    <div className="xl:col-span-9">
      {/* Section kicker */}

      {/* Headline */}
      <h2
        className={`text-2xl md:text-3xl leading-snug font-semibold text-primary max-w-3xl ${metropolis.className}`}
      >
        Live mobile games rely on continuous updates after release.
      </h2>

      {/* Intro copy (short + scannable) */}
      <div className="mt-6 max-w-3xl space-y-4">
        <p
          className={`text-base md:text-lg leading-relaxed text-gray-900 ${metropolis.className}`}
        >
          At Tactile, updates are managed through an internal{' '}
          <span className="font-medium">LiveOps Dashboard</span>, where teams
          configure events, experiments, player targeting, and feature rollouts
          without shipping new app versions.
        </p>

        <p
          className={`text-base md:text-lg leading-relaxed text-gray-900 ${metropolis.className}`}
        >
          The flow looks simple, but it depends on multiple backend systems
          staying in sync. When something breaks, the impact often appears first
          in the live game.
        </p>
      </div>

      <LiveOpsDiagramCard metropolis={metropolis} />

      {/* Problem statement */}
      <div className="mt-14">
        <div
          className={`text-xs font-semibold uppercase tracking-[0.24em] text-gray-500 ${metropolis.className}`}
        >
          The problem
        </div>

        <h3
          className={`mt-4 text-2xl md:text-3xl leading-snug font-semibold text-primary max-w-3xl ${metropolis.className}`}
        >
          Failures were detected by backend systems, but not surfaced in the
          LiveOps Dashboard.
        </h3>

        <p
          className={`mt-6 text-base md:text-lg leading-relaxed text-gray-900 max-w-3xl ${metropolis.className}`}
        >
          As a result, creators had no indication that a live feature was
          failing until players or support teams raised the issue.
        </p>
      </div>
    </div>
  );
}
