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
        {/* Scannable narrative (not a wall of text) */}
        <div className="space-y-4">
          <p
            className={[
              'text-base md:text-lg leading-relaxed text-gray-900',
              metropolis.className,
            ].join(' ')}
          >
            We ran a{' '}
            <span className="font-semibold">cross-functional workshop</span>{' '}
            with Product, Core Team, and platform engineers to map the current
            setup process, surface hidden dependencies, and align on
            constraints.
          </p>

          <p
            className={[
              'text-base md:text-lg leading-relaxed text-gray-900',
              metropolis.className,
            ].join(' ')}
          >
            The goal was to clarify when a game is first provisioned across core
            systems and define a single, safe automation path.
          </p>
        </div>
      </div>

      {/* Optional visual */}

      <div className="mt-10 max-w-5xl rounded-2xl border border-gray-200 bg-white overflow-hidden">
        <Image
          src="/images/canvas/workshop.png"
          alt="Observability gap: alerts appear in engineering tools while the LiveOps Dashboard shows no alerts."
          width={1920}
          height={1080}
          className="h-auto w-full"
          priority={false}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBUQEBIVFhUVFRUVFRUVFRUVFRUVFRUYFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAJ8BPgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAwQCB//EAD4QAAEDAgQDBQYEBgIDAAAAAAEAAgMEEQUSITEGEyJBUWFxgZGhFDKhscHR8BQjUmJy4RUzQ1OCkqL/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAgMEAQX/xAAjEQEBAAICAgICAgMAAAAAAAAAAQIREiExBBMiUWEUMkJx/9oADAMBAAIRAxEAPwD9qQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaa"
        />

        {/* Caption footer */}
        <div className="px-5 py-4 md:px-6 border-t border-gray-100 bg-gray-50">
          <p
            className={`text-xs md:text-sm leading-relaxed text-gray-800 ${metropolis?.className || ''}`}
          >
            Workshop outputs mapping setup steps, constraints, and system
            dependencies.
          </p>
        </div>
      </div>
    </div>
  );
}
