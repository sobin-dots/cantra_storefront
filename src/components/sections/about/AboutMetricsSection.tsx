import React from "react";

export function AboutMetricsSection() {
  const metrics = [
    { stat: "01", label: "unified care home platform" },
    { stat: "24/7", label: "access to care information" },
    { stat: "100%", label: "designed around care workflows" },
    { stat: "∞", label: "room to grow with your care home" },
  ];

  return (
    <section
      id="results"
      className="section metrics-section py-20 lg:py-28 bg-primary text-white border-b border-border-dark"
      aria-labelledby="metrics-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
        {/* Section Heading Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="max-w-xl">
            {/* Linear Eyebrow */}
            <div className="flex items-center gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/90 mb-4">
              <span className="w-6 h-[1.5px] bg-white/80" aria-hidden="true" />
              <span>Clarity in numbers</span>
            </div>

            {/* 2-line Playfair Display Headline (no italics) */}
            <h2
              id="metrics-heading"
              className="text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif text-white tracking-tight leading-[1.12]"
            >
              Designed to make a <br className="hidden sm:block" />
              measurable difference.
            </h2>
          </div>

          {/* Right Label */}
          <div className="text-sm sm:text-base font-mono font-medium text-surface/50 md:pb-2 uppercase tracking-[0.15em]">
            Cantra Care-reported outcomes
          </div>
        </div>

        {/* 4 Outcome Stat Columns with Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/15 pt-4">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="flex flex-col lg:px-10 first:pl-0 last:pr-0"
            >
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold font-serif text-white mb-3 tracking-tight leading-none">
                {metric.stat}
              </div>
              <div className="text-sm sm:text-base text-surface/80 leading-relaxed max-w-[150px]">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
