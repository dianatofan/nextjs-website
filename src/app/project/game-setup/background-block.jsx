// Drop-in replacement for your Background section (xl:col-span-9 content)
// - More scannable layout (short paragraphs + 3 cards)
// - Figure w/ well-defined caption (border-left editorial caption)
// - Toggle to switch between Ideal flow / Error flow
// Assumes Tailwind is available. Uses Next <Image />.

import { useMemo, useState } from 'react';
import { LiveOpsDiagramCard } from '@/app/project/game-setup/liveops-diagram-card';

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
      <p
        className={`text-base md:text-lg leading-relaxed text-gray-900 max-w-3xl ${metropolis.className}`}
      >
        At Tactile, game teams ship and operate multiple live games in parallel.
      </p>

      <h2
        className={`mt-6 text-2xl md:text-3xl leading-snug font-semibold text-primary max-w-3xl ${metropolis.className}`}
      >
        To ship more games per quarter and quickly learn what players love,
        teams needed a faster path from concept to live release.
      </h2>

      {/* Intro copy (short + scannable) */}
      <div className="mt-6 max-w-3xl space-y-4">
        <p
          className={`text-base md:text-lg leading-relaxed text-gray-900 ${metropolis.className}`}
        >
          Before launch, each game had to be manually registered across LiveOps,
          analytics, build pipelines, permissions, and infrastructure — work
          tightly coupled to the Core Team. As a result, game setup became a
          scaling bottleneck, slowing releases and increasing risk.
        </p>

        <p
          className={`text-base md:text-lg leading-relaxed text-gray-900 ${metropolis.className}`}
        >
          The Game Canvas Setup Tool enables teams to set up new games
          independently while preserving infrastructure guarantees and
          operational safety.
        </p>
      </div>

      <LiveOpsDiagramCard metropolis={metropolis} />
    </div>
  );
}
