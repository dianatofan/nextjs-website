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
        Homepage as preview
      </h2>
      {/* Intro copy (short + scannable) */}
      <div className="mt-6 max-w-3xl space-y-4">
        <p
          className={`text-base md:text-lg leading-relaxed text-gray-900 ${metropolis.className}`}
        >
          Early versions showed only unread updates, causing items to disappear
          once marked as read. I changed this to show all updates from the last
          10 days, treating the homepage as a preview while the full Updates
          view remains the source of truth.
        </p>
      </div>
      <BeforeAfterVideoCard metropolis={metropolis} />
      {/* Headline */}
      <h2
        className={`mt-16 text-2xl md:text-3xl leading-snug font-semibold text-primary max-w-3xl ${metropolis.className}`}
      >
        One badge per game
      </h2>
      {/* Intro copy (short + scannable) */}
      <div className="mt-6 max-w-3xl space-y-4">
        <p
          className={`text-base md:text-lg leading-relaxed text-gray-900 ${metropolis.className}`}
        >
          Separate badges for issues and updates created visual noise and were
          hard to scan at scale. I consolidated to a single, severity-based
          badge per game: red for critical issues, blue for updates only.
        </p>
      </div>
      <div className="width-full mt-8 bg-[#E3E8F1] p-8 rounded-2xl max-w-3xl justify-center flex">
        <Image
          src="/images/notifications/one-badge.png"
          alt="Sidebar showing persistent issue indicators"
          width={160}
          height={320}
        />
      </div>{' '}
      <h2
        className={`mt-16 text-2xl md:text-3xl leading-snug font-semibold text-primary max-w-3xl ${metropolis.className}`}
      >
        No email notifications
      </h2>
      {/* Intro copy (short + scannable) */}
      <div className="mt-6 max-w-3xl space-y-4">
        <p
          className={`text-base md:text-lg leading-relaxed text-gray-900 ${metropolis.className}`}
        >
          Although email was initially considered, we removed it to avoid
          delayed responses and alert fatigue. The system focuses on
          in-dashboard alerts as the source of truth, with Slack used only for
          time-sensitive awareness.
        </p>
      </div>
      <div className="mt-8 w-full bg-[#E3E8F1] p-8 rounded-2xl">
        <Image
          src="/images/notifications/email-notifications-removed.png"
          alt="Email notifications removed from settings"
          width={1600}
          height={900}
          className="w-full h-auto rounded-xl"
        />
      </div>
    </div>
  );
}
