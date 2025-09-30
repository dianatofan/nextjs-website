import { metropolis } from '@/app/utils/local-font';

``;

export default ({
  title,
  summary,
  problem,
  research,
  solution,
  metrics,
  className,
}) => {
  return (
    <div
      className={`w-full mx-auto p-8 rounded-lg ${className || ''} ${metropolis.className}`}
      style={{
        background: 'rgba(255,255,255,0.18)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.12)',
        backdropFilter: 'blur(32px) saturate(180%)',
        WebkitBackdropFilter: 'blur(32px) saturate(180%)',
        border: '1.5px solid rgba(255,255,255,0.25)',
        borderRadius: '1.5rem',
      }}
    >
      {/* Header */}
      <div className={`mb-8 ${metropolis.className}`}>
        <h1
          className={`text-2xl font-mono text-slate-700 mb-6 ${metropolis.className}`}
        >
          tl;dr
        </h1>
        <p
          className={`text-lg text-slate-700 leading-relaxed max-w-2xl ${metropolis.className}`}
        >
          {title}
        </p>
      </div>
      {/* Main Content Grid */}
      <div
        className={`grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12 ${metropolis.className}`}
      >
        <div className={`lg:col-span-2 space-y-8 ${metropolis.className}`}>
          <div className={metropolis.className}>
            <h2
              className={`text-base font-medium text-gray-600 mb-4 ${metropolis.className}`}
            >
              The Problem
            </h2>
            <p
              className={
                metropolis.className + ' text-gray-600 leading-relaxed'
              }
            >
              {problem}
            </p>
          </div>
          <div className={metropolis.className}>
            <h2
              className={`text-base font-medium text-gray-600 mb-4 ${metropolis.className}`}
            >
              The Research
            </h2>
            <p
              className={
                metropolis.className + ' text-gray-600 leading-relaxed'
              }
            >
              {research}
            </p>
          </div>
          <div className={metropolis.className}>
            <h2
              className={`text-base font-medium text-gray-600 mb-4 ${metropolis.className}`}
            >
              The Solution
            </h2>
            <p
              className={
                metropolis.className + ' text-gray-600 leading-relaxed'
              }
            >
              {solution}
            </p>
          </div>
        </div>
        <div className={`space-y-8 ${metropolis.className}`}>
          {metrics?.map((metric, index) => (
            <div
              key={index}
              className={`border-l-2 border-gray-200 pl-6 ${metropolis.className}`}
            >
              <div
                className={`text-3xl font-bold text-slate-700 mb-1 ${metropolis.className}`}
              >
                {metric.value}
              </div>
              <div className={`text-sm text-gray-500 ${metropolis.className}`}>
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
