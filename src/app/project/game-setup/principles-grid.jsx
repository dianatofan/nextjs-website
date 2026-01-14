'use client';

import { Clock, Eye, Layers, Lock, Settings, Shield } from 'react-feather';

export function PrinciplesGrid({ metropolis }) {
  const items = [
    {
      title: 'Safe by default',
      body: 'The system should prevent incorrect or incomplete setups from going live.',
      Icon: Lock,
    },
    {
      title: 'Immutable where required',
      body: 'The system should prevent changes to identifiers that are used by infrastructure after a game is created.',
      Icon: Shield,
    },
    {
      title: 'Automated & manual steps',
      body: 'The system should automate setup where possible and clearly indicate when user input is required.',
      Icon: Settings,
    },
    {
      title: 'Asynchronous setup',
      body: 'The system should support setup steps that run over time and may not complete all at once.',
      Icon: Clock,
    },
    {
      title: 'Visible setup states',
      body: 'The system should clearly show loading, partial completion, and error states.',
      Icon: Eye,
    },
    {
      title: 'Respect existing infra',
      body: 'The system should build on existing tools and services rather than replacing them.',
      Icon: Layers,
    },
  ];

  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map(({ title, body, Icon }) => (
          <div
            key={title}
            className="rounded-2xl bg-gray-100 border border-gray-200 border-l-4 border-l-gray-400 p-5"
          >
            <div className="flex items-start gap-3">
              <Icon
                size={18}
                className="mt-0.5 text-gray-500 flex-shrink-0"
                aria-hidden="true"
              />
              <div>
                <div
                  className={[
                    'text-sm md:text-base font-semibold text-gray-900',
                    metropolis?.className || '',
                  ].join(' ')}
                >
                  {title}
                </div>
                <div
                  className={[
                    'mt-1 text-xs md:text-sm leading-relaxed text-gray-700',
                    metropolis?.className || '',
                  ].join(' ')}
                >
                  {body}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
