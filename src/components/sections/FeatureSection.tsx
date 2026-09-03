import React from "react";

export function FeatureSection() {
  const checklistItems = [
    { num: "01", text: "Real-time care visibility" },
    { num: "02", text: "Clear operational priorities" },
    { num: "03", text: "Reports that guide action" },
  ];

  return (
    <section
      className="section feature-section py-20 lg:py-28 bg-surface-warm border-b border-border-subtle"
      id="features"
      aria-labelledby="calmer-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            {/* Eyebrow with linear dash */}
            <div className="flex items-center gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              <span className="w-6 h-[1.5px] bg-primary" aria-hidden="true" />
              <span>A calmer working day</span>
            </div>

            {/* 2-line Playfair Display Headline */}
            <h2
              id="calmer-heading"
              className="text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif text-primary tracking-tight leading-[1.12]"
            >
              Clarity for every<br />
              <span className="font-normal text-primary">working day.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-primary/80 max-w-sm leading-relaxed md:pb-2">
            See what matters, when it matters-resident wellbeing, staffing, tasks, alerts, and daily care activity, all in one clear view.
          </p>
        </div>

        {/* Main Asymmetrical Showcase Container */}
        <div className="bg-primary rounded-2xl  p-8 sm:p-12 lg:p-14 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Index, Headline, Copy, Checklist */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-surface/70 block">
              01 / Live overview
            </span>

            <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-bold font-serif text-white tracking-tight leading-[1.15]">
              See what needs <br />
              attention, while <br />
              it still matters.
            </h3>

            <p className="text-sm sm:text-base text-surface/80 leading-relaxed max-w-md">
              Bring current activity, care priorities and operational progress into one useful view—so your team can act with confidence.
            </p>

            {/* Numbered Row Items with Dividers */}
            <div className="pt-2 border-t border-white/15">
              {checklistItems.map((item) => (
                <div
                  key={item.num}
                  className="py-3.5 flex items-center gap-4 text-sm font-semibold text-white border-b border-white/15"
                >
                  <span className="text-xs font-mono text-surface/70 w-5">{item.num}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Operational Overview Graphic (Hidden on Mobile) */}
          <div className="hidden lg:flex lg:col-span-7 items-center justify-center">
            <img
              src="/Group 21.png"
              alt="Cantra Care Operational Overview and Live Care Evidence"
              className="w-full h-auto object-contain max-w-[620px] mx-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
