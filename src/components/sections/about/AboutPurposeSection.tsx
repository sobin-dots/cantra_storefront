import React from "react";

export function AboutPurposeSection() {
  const commitments = [
    "Keep important information visible",
    "Connect responsibilities across the team",
    "Support thoughtful, informed decisions",
  ];

  return (
    <section
      id="our-purpose"
      className="section purpose-section py-20 lg:py-28 bg-surface border-b border-border-subtle"
      aria-labelledby="purpose-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual with Floating Badge */}
          <div className="w-full lg:col-span-6 relative">
            <div className="aspect-[4/3] sm:aspect-[16/11] ">
              <img
                src="/images/features-page/positive-mother-daughter-enjoying-dramatic-view.jpg"
                alt="Care community team members collaborating"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating Human-Centric Pill Badge */}
            <div className="absolute -bottom-4 right-4 sm:right-8 bg-surface-pill text-primary px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.15em] shadow-md border border-border">
              Care stays personal
            </div>
          </div>

          {/* Right Column: Editorial Purpose & Commitments */}
          <div className="w-full lg:col-span-6 space-y-6">
            {/* Linear Eyebrow */}
            <div className="flex items-center gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              <span className="w-6 h-[1.5px] bg-primary" aria-hidden="true" />
              <span>Our purpose</span>
            </div>

            {/* 2-line Playfair Display Headline (no italics) */}
            <h2
              id="purpose-heading"
              className="text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif text-primary tracking-tight leading-[1.12]"
            >
              More clarity for teams.<br />
              More space for care.
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-primary/80 leading-relaxed max-w-lg">
              Good care depends on people, judgement and trust. Our purpose is to remove avoidable friction around that work, helping teams spend less time chasing information and more time delivering attentive, person-centred care.
            </p>

            {/* Commitments List with Border Dividers */}
            <div className="pt-2 border-t border-border-subtle max-w-lg">
              {commitments.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 py-4 border-b border-border-subtle"
                >
                  <span className="text-sm font-mono font-medium text-primary/50 shrink-0 w-6">
                    0{i + 1}
                  </span>
                  <span className="text-sm sm:text-base font-medium text-primary">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
