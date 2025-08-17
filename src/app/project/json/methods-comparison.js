import { metropolis } from '@/app/utils/local-font';

const methodsData = [
  {
    method: 'Custom purpose-built UIs (per config type)',
    pros: [
      'Maximum flexibility',
      'Can design exactly for release manager workflows',
      'Best UX potential',
    ],
    cons: [
      'Very expensive to build',
      'High maintenance for each new config type',
      'Slower to ship',
    ],
    impact: 'High',
    effort: 'High',
  },
  {
    method: 'Schema-driven form generation',
    pros: [
      'Flexible enough for most game configs',
      'Quick to get started',
      'Built-in validation',
    ],
    cons: [
      'Dependency on 3rd-party libraries',
      'Default UI clunky and hard to scale',
      'Limited customization for complex game configs',
    ],
    impact: 'Medium',
    effort: 'Low',
  },
];

const impactEffortMatrix = [
  { method: 'Schema-driven forms', impact: 2, effort: 1, x: 20, y: 60 },
  { method: 'Custom-built editor', impact: 3, effort: 3, x: 80, y: 20 },
];

export default function MethodsComparison() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4 font-semibold min-w-[200px]">
                Method
              </th>
              <th className="text-left p-4 font-semibold min-w-[250px]">
                Pros
              </th>
              <th className="text-left p-4 font-semibold min-w-[250px]">
                Cons
              </th>
            </tr>
          </thead>
          <tbody>
            {methodsData.map((item, index) => (
              <tr
                key={index}
                className="border-b hover:bg-muted/50 transition-colors"
              >
                <td className="p-4 font-medium align-top">
                  <div className="space-y-2">
                    <div className="font-semibold text-primary">
                      {item.method}
                    </div>
                  </div>
                </td>
                <td className="p-4 align-top">
                  <ul className="space-y-1">
                    {item.pros.map((pro, proIndex) => (
                      <li
                        key={proIndex}
                        className="flex items-start gap-2 text-sm"
                      >
                        <span className="font-semibold text-emerald-400 mt-1">
                          ✓
                        </span>
                        <span className={metropolis.className}>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="p-4 align-top">
                  <ul className="space-y-1">
                    {item.cons.map((con, conIndex) => (
                      <li
                        key={conIndex}
                        className="flex items-start gap-2 text-sm"
                      >
                        <span className="text-red-500 mt-1">✗</span>
                        <span className={metropolis.className}>{con}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Impact Effort Matrix */}
      <div className="relative w-full h-96 bg-gradient-to-tr from-emerald-50 via-yellow-50 to-red-50 dark:from-green-950/20 dark:via-yellow-950/20 dark:to-red-950/20 border rounded-lg overflow-hidden">
        {' '}
        {/* Grid lines */}
        <div className="absolute inset-0">
          <div className="absolute left-1/3 top-0 bottom-0 w-px bg-border"></div>
          <div className="absolute left-2/3 top-0 bottom-0 w-px bg-border"></div>
          <div className="absolute top-1/3 left-0 right-0 h-px bg-border"></div>
          <div className="absolute top-2/3 left-0 right-0 h-px bg-border"></div>
        </div>
        {/* Axis labels */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-sm font-medium">
          Effort →
        </div>
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm font-medium">
          Impact →
        </div>
        {/* Quadrant labels */}
        <div className="absolute top-4 left-4 text-xs text-muted-foreground font-medium">
          High Impact
          <br />
          Low Effort
        </div>
        <div className="absolute top-4 right-4 text-xs text-muted-foreground font-medium">
          High Impact
          <br />
          High Effort
        </div>
        <div className="absolute bottom-4 left-4 text-xs text-muted-foreground font-medium">
          Low Impact
          <br />
          Low Effort
        </div>
        <div className="absolute bottom-4 right-4 text-xs text-muted-foreground font-medium">
          Low Impact
          <br />
          High Effort
        </div>
        {/* Data points */}
        {impactEffortMatrix.map((item, index) => (
          <div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
          >
            <div className="relative group">
              <div className="w-4 h-4 bg-primary rounded-full border-2 border-background shadow-lg cursor-pointer hover:scale-125 transition-transform"></div>
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-popover text-popover-foreground px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border">
                {item.method}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-4 space-y-2">
        <h4 className="font-medium text-sm">Methods:</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
          {impactEffortMatrix.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className={`truncate ${metropolis.className}`}>
                {item.method}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
