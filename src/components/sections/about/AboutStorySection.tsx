import React from "react";

export function AboutStorySection() {
  const badges = ["Human-centred", "Practical", "Dependable"];

  return (
    <section
      id="our-story"
      className="section story-section py-20 lg:py-28 bg-surface border-b border-border-subtle"
      aria-labelledby="story-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
        {/* Section Heading Row matching home page pattern */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div>
            {/* Linear Eyebrow */}
            <div className="flex items-center gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              <span className="w-6 h-[1.5px] bg-primary" aria-hidden="true" />
              <span>Who we are</span>
            </div>

            {/* 2-line Headline with Playfair Display (no italics) */}
            <h2
              id="story-heading"
              className="text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif text-primary tracking-tight leading-[1.12]"
            >
              We make complex <br className="hidden sm:block" />
              care work feel clearer.
            </h2>
          </div>

          {/* Right Explainer Subtitle / Index */}
          <div className="text-xs font-mono font-medium text-primary/50 md:pb-2 uppercase tracking-[0.15em]">
            01 / Our story
          </div>
        </div>

        {/* Asymmetrical 2-Column Split Panel */}
        <div className="flex flex-col lg:flex-row rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-border-subtle">
          {/* Left Deep Forest Panel */}
          <div className="w-full lg:w-2/5 bg-primary p-8 sm:p-12 lg:p-14 relative flex flex-col justify-start min-h-[360px]">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-surface/70 mb-12 block relative z-10">
              Our belief
            </span>
            <p className="text-2xl sm:text-3xl font-serif text-white leading-snug relative z-10 pr-4">
              Technology should support the judgement of care professionals—not get in its way.
            </p>
            {/* Giant quote mark watermark */}
            <div
              className="absolute bottom-4 right-8 text-[180px] font-serif text-white/[0.04] leading-[0.5] select-none pointer-events-none"
              aria-hidden="true"
            >
              “
            </div>
          </div>

          {/* Right Elevated Card Surface */}
          <div className="w-full lg:w-3/5 bg-white p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
            <p className="text-2xl sm:text-3xl font-serif text-primary leading-snug mb-6 lg:mb-8">
              Cantra Care exists to give care teams a calmer, more connected way to manage the work around care.
            </p>
            <p className="text-sm sm:text-base text-primary/80 leading-relaxed mb-10">
              We bring essential information into one practical view—from person-centred plans and e-MAR to staffing and reporting. The result is greater visibility for teams, without losing the human focus behind every record and decision.
            </p>

            <div className="border-t border-border-subtle pt-6 mt-auto flex gap-2.5 flex-wrap">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-2 bg-surface text-primary rounded-full text-xs font-medium border border-border-subtle tracking-wide"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
