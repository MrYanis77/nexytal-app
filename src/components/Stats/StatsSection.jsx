import React, { useState, useEffect } from 'react';

const AnimatedNumber = ({ value, duration = 2000 }) => {
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    const match = String(value).match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/);

    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1];
    const target = parseFloat(match[2]);
    const suffix = match[3];
    const isFloat = match[2].includes('.');

    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = target * easeProgress;
      const formattedVal = isFloat ? currentVal.toFixed(1) : Math.floor(currentVal);

      setDisplayValue(`${prefix}${formattedVal}${suffix}`);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    window.requestAnimationFrame(step);
  }, [value, duration]);

  return <>{displayValue}</>;
};

export default function StatsSection({ stats, title, variant = 'navy' }) {
  const isNavy = variant === 'navy';
  const isCards = variant === 'cards';

  if (isCards) {
    return (
      <section className="bg-surface px-6 py-10">
        <div className="mx-auto max-w-container-xl text-center">
          {title && (
            <h2 className="mb-10 font-heading text-2xl font-bold uppercase tracking-wide text-primary md:text-3xl">
              {title}
            </h2>
          )}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {stats.map((stat, idx) => {
              const colorClass =
                stat.color === 'accent' || idx % 2 === 1 ? 'text-accent' : 'text-primary';
              return (
                <div
                  key={stat.label}
                  className="card-nexytal flex flex-col items-center justify-center px-4 py-8"
                >
                  <span className={`font-heading text-3xl font-extrabold leading-none md:text-4xl ${colorClass}`}>
                    {typeof stat.value === 'string' && /\d/.test(stat.value) ? (
                      <AnimatedNumber value={stat.value} duration={2000} />
                    ) : (
                      stat.value
                    )}
                  </span>
                  <span className="mt-3 text-center text-sm text-content-muted">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-10 px-6 ${isNavy ? 'bg-primary' : 'bg-surface-soft'}`}>
      <div className="max-w-[1100px] mx-auto text-center">
        {title && (
          <h2 className={`font-heading text-2xl md:text-3xl font-bold mb-12 uppercase tracking-wide ${isNavy ? 'text-white' : 'text-primary'}`}>
            {title}
          </h2>
        )}

        <div className="flex justify-center gap-10 md:gap-20 flex-wrap">
          {stats.map((s, idx) => (
            <div key={idx} className="flex flex-col items-center min-w-[150px]">
              <span className="font-heading text-4xl md:text-[48px] font-extrabold text-accent leading-none">
                <AnimatedNumber value={s.value} duration={2000} />
              </span>
              <span className={`text-small font-medium uppercase mt-4 tracking-tight font-body ${isNavy ? 'text-white/90' : 'text-content-muted'}`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
