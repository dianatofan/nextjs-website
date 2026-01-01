'use client';

import { Clock, Eye, Layers, Lock, Settings, Shield } from 'react-feather';

export function PrinciplesGrid({ metropolis }) {
  const items = [
    {
      title: 'Safe by default',
      body: 'Invalid configurations must never reach production.',
      Icon: Lock,
    },
    {
      title: 'Immutable where required',
      body: 'Infrastructure-bound identifiers cannot change after provisioning.',
      Icon: Shield,
    },
    {
      title: 'Automated / Manual',
      body: 'Some steps are automated, while others require explicit user input.',
      Icon: Settings,
    },
    {
      title: 'Async by design',
      body: 'Provisioning is asynchronous and may complete partially or fail.',
      Icon: Clock,
    },
    {
      title: 'Partial states visible',
      body: 'Loading, partial, and error states are explicit and recoverable.',
      Icon: Eye,
    },
    {
      title: 'Respect existing infra',
      body: 'Build on Terraform, GCP, and existing services — no rewrites.',
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
