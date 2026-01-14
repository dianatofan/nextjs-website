// Drop-in replacement for your Background section (xl:col-span-9 content)
// - More scannable layout (short paragraphs + 3 cards)
// - Figure w/ well-defined caption (border-left editorial caption)
// - Toggle to switch between Ideal flow / Error flow
// Assumes Tailwind is available. Uses Next <Image />.

import React, { useMemo, useState } from 'react';
import { BeforeAfterVideoCard } from '@/app/project/notifications-system/before-after-video-card';
import Image from 'next/image';

export function TradeoffsBlock({ metropolis }) {
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
        Progressive expansion
      </h2>
      {/* Intro copy (short + scannable) */}
      <div className="mt-6 max-w-3xl space-y-4">
        <p
          className={`text-base md:text-lg leading-relaxed text-gray-900 ${metropolis.className}`}
        >
          Showing all service cards expanded by default made the setup long and
          overwhelming as more services were added. We moved to a progressive
          expansion model where only the core services stay open by default,
          while the rest can be expanded as needed, with each user’s preference
          saved locally.
        </p>
      </div>
      <BeforeAfterVideoCard metropolis={metropolis} />
      {/* Headline */}
      <h2
        className={`mt-16 text-2xl md:text-3xl leading-snug font-semibold text-primary max-w-3xl ${metropolis.className}`}
      >
        Fewer, clearer module states
      </h2>
      {/* Intro copy (short + scannable) */}
      <div className="mt-6 max-w-3xl space-y-4">
        <p
          className={`text-base md:text-lg leading-relaxed text-gray-900 ${metropolis.className}`}
        >
          Early designs exposed many granular states, which were accurate but
          hard to scan. We reduced these to a small, consistent set that clearly
          communicates readiness and required action at a glance.
        </p>
      </div>
      <div className="width-full mt-8 bg-[#E3E8F1] p-8 rounded-2xl max-w-6xl justify-center flex">
        <Image
          src="/images/canvas/module-statuses.png"
          alt="Module statuses"
          width={520}
          height={320}
        />
      </div>{' '}
      <h2
        className={`mt-16 text-2xl md:text-3xl leading-snug font-semibold text-primary max-w-3xl ${metropolis.className}`}
      >
        Inherited access
      </h2>
      {/* Intro copy (short + scannable) */}
      <div className="mt-6 max-w-3xl space-y-4">
        <p
          className={`text-base md:text-lg leading-relaxed text-gray-900 ${metropolis.className}`}
        >
          Restricting access to the game creator quickly became a bottleneck. We
          introduced inherited access so users with global LiveOps permissions
          are automatically added to new games, reducing manual permission
          management while keeping ownership explicit.
        </p>
      </div>
      <div className="mt-8 w-full bg-[#E3E8F1] p-8 rounded-2xl">
        <Image
          src="/images/canvas/inherited-access.png"
          alt="Inherited access"
          width={1600}
          height={900}
          className="w-full h-auto rounded-xl"
        />
      </div>
    </div>
  );
}
