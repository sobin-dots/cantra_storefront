import React from "react";

export function AboutHowWeBuildSection() {
  const stages = [
    {
      title: "Listen closely",
      desc: "We begin with the pressures, priorities and practical needs experienced by care teams.",
    },
    {
      title: "Shape thoughtfully",
      desc: "We translate those insights into focused workflows with a clear purpose behind every detail.",
    },
    {
      title: "Validate carefully",
      desc: "Ideas are reviewed against real working patterns before they become part of the platform.",
    },
    {
      title: "Improve continuously",
      desc: "Learning continues after release, helping the product evolve with the people who use it.",
    },
  ];

  return (
    <section
      id="how-we-build"
      className="section how-we-build-section py-20 lg:py-28 bg-surface-warm border-b border-border-subtle"
      aria-labelledby="build-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
        {/* Section Heading Row matching home page light sections */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div>
            {/* Linear Eyebrow */}
            <div className="flex items-center gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              <span className="w-6 h-[1.5px] bg-primary" aria-hidden="true" />
              <span>How we build</span>
            </div>

            {/* 2-line Playfair Display Headline (no italics) */}
            <h2
              id="build-heading"
              className="text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif text-primary tracking-tight leading-[1.12]"
            >
              Care insight, shaped into <br />
              better technology.
            </h2>
          </div>

          {/* Right Explainer Subtitle */}
          <p className="text-sm sm:text-base text-primary/80 max-w-sm leading-relaxed md:pb-2">
            Our product thinking starts with people, not features. We turn frontline understanding into thoughtful, useful improvements.
          </p>
        </div>

        {/* 4 Process Cards Grid matching PlatformSection cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((stage, i) => (
            <article
              key={stage.title}
              className="group relative bg-white p-3 sm:p-4 sm:py-7 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[260px]"
            >
              {/* Top Row: Number in circle matching PlatformSection */}
              <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-sm font-medium text-primary mb-6">
                0{i + 1}
              </div>

              {/* Bottom Content */}
              <div>
                <h3 className="text-xl sm:text-2xl font-serif text-primary mb-3 leading-snug">
                  {stage.title}
                </h3>
                <p className="text-sm sm:text-base text-primary/80 leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
