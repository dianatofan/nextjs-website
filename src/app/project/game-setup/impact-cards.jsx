// Minimal, rectangular impact cards with big numbers + label + short description.
// Drop this inside your page where you want the Impact section.
// Tailwind only. No extra components required.

export function ImpactBlock({ metropolis }) {
  const impacts = [
    {
      metric: '~2x faster game setup',
      body: 'Standard game setup dropped from hours or days of Core Team coordination to a single self-serve session.',
    },
    {
      metric: '+3 games / quarter',
      body: 'Removing setup as a bottleneck allowed teams to run more launches in parallel within the same release cycle.',
    },
    {
      metric: 'Fewer issues',
      body: 'Early validation and visible provisioning reduced last-minute fixes around credentials, permissions, and infrastructure.',
    },
    {
      metric: 'Reduced involvement',
      body: 'Core Team support requests for game setup dropped significantly, freeing time for platform work instead of manual provisioning.',
    },
  ];

  return (
    <div className="xl:col-span-9">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-3xl">
        {impacts.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-gray-200 bg-gray-50 p-6"
          >
            <div
              className={`text-xl md:text-2xl font-semibold leading-none text-primary ${metropolis.className}`}
            >
              {item.metric}
            </div>

            <div
              className={`mt-3 text-sm font-semibold text-gray-900 ${metropolis.className}`}
            >
              {item.label}
            </div>

            <p
              className={`mt-2 text-sm leading-relaxed text-gray-600 ${metropolis.className}`}
            >
              {item.body}
            </p>
          </div>
        ))}
      </div>

      <p
        className={`mt-8 text-md md:text-lg leading-relaxed text-gray-800 max-w-3xl ${metropolis.className}`}
      >
        By designing the Game Canvas as a self-serve system, I supported the
        company’s goal of shipping more games by making setup faster and safer
        at scale.
      </p>
    </div>
  );
}
