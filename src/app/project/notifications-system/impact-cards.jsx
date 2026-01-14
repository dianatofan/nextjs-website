// Minimal, rectangular impact cards with big numbers + label + short description.
// Drop this inside your page where you want the Impact section.
// Tailwind only. No extra components required.

export function ImpactBlock({ metropolis }) {
  const impacts = [
    {
      metric: 'Faster detection',
      body: 'Critical failures were detected in minutes instead of hours, allowing teams to intervene before issues reached players during live events.',
    },
    {
      metric: 'Less escalation',
      body: 'Teams relied less on Slack and external monitoring, using the LiveOps Dashboard as the primary place to spot and resolve issues.',
    },
    {
      metric: '22% fewer incidents',
      body: 'One in five production issues were caught before full rollout, reducing player-facing incidents during live events.',
    },

    {
      metric: 'Trusted workflow',
      body: 'The alerting system replaced fragmented workflows and became part of daily LiveOps work.',
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
        By embedding backend observability into the LiveOps Dashboard, teams
        shifted from reactive firefighting to proactive production awareness,
        reducing player impact while scaling safely across games and teams.
      </p>
    </div>
  );
}
