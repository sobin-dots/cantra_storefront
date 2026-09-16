import React from "react";

export function CareSettingsSection() {
  return (
    <section
      className="section care-settings-section py-20 lg:py-28 bg-surface-warm border-b border-border-subtle"
      id="care-settings"
      aria-labelledby="settings-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
        {/* Centered Editorial Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          {/* Eyebrow with linear dash */}
          <div className="flex items-center justify-center gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="w-6 h-[1.5px] bg-primary" aria-hidden="true" />
            <span>Purpose-built for the people delivering care</span>
          </div>

          {/* 2-Line Playfair Display Headline */}
          <h2
            id="settings-heading"
            className="text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif text-primary tracking-tight leading-[1.12]"
          >
            Built around<br />
            <span className=" font-serif font-normal text-primary">your care setting.</span>
          </h2>

          {/* Explainer Subtitle */}
          <p className="text-sm sm:text-base  max-w-xl mx-auto leading-relaxed pt-1">
            Flexible enough for different care environments, focused enough for the realities of daily delivery.
          </p>
        </div>

        {/* Asymmetrical 2-Column Photo Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Card 01 (Residential Care Homes) */}
          <div className="lg:col-span-7 flex">
            <article className="group relative w-full rounded-3xl lg:rounded-[2.5rem] overflow-hidden  transition-all duration-300 hover:scale-[1.01]  min-h-[440px] sm:min-h-[500px] lg:min-h-[540px] flex flex-col justify-end p-6 sm:p-8 lg:p-10">
              <img
                src="/images/care-support.jpg"
                alt="Residential Care Homes"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#000]/95 via-[#000]/45 to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative z-10 space-y-2 max-w-md">
                <span className="text-sm sm:text-base font-mono font-medium text-white/80 block">
                  01
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-normal font-serif text-white tracking-tight leading-snug">
                  Residential Care Homes
                </h3>
                <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                  Coordinate everyday routines, records and team activity with a clearer shared view.
                </p>
              </div>
            </article>
          </div>

          {/* Right Column: Stack of 2 Horizontal Cards (Nursing Homes & Mental Health Care Homes) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8 justify-between">
            {/* Card 02: Nursing Homes */}
            <article className="group relative w-full rounded-3xl lg:rounded-[2rem] overflow-hidden  transition-all duration-300 hover:scale-[1.01]  flex-1 min-h-[210px] sm:min-h-[240px] lg:min-h-[255px] flex flex-col justify-end p-6 sm:p-7">
              <img
                src="/images/care-nursing.jpg"
                alt="Nursing Homes"
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#000]/95 via-[#000]/40 to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative z-10 space-y-1.5 max-w-sm">
                <span className="text-sm sm:text-base font-mono font-medium text-white/80 block">
                  02
                </span>
                <h3 className="text-2xl sm:text-3xl font-normal font-serif text-white tracking-tight leading-snug">
                  Nursing Homes
                </h3>
                <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                  Keep care, medication and staffing workflows visible and easier to manage.
                </p>
              </div>
            </article>

            {/* Card 03: Mental Health Care Homes */}
            <article className="group relative w-full rounded-3xl lg:rounded-[2rem] overflow-hidden  transition-all duration-300 hover:scale-[1.01]  flex-1 min-h-[210px] sm:min-h-[240px] lg:min-h-[255px] flex flex-col justify-end p-6 sm:p-7">
              <img
                src="/images/care-setting-mental-health.jpg"
                alt="Mental Health Care Homes"
                className="absolute inset-0 w-full h-full object-cover object-[center_25%] transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#000]/95 via-[#000]/40 to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative z-10 space-y-1.5 max-w-sm">
                <span className="text-sm sm:text-base font-mono font-medium text-white/80 block">
                  03
                </span>
                <h3 className="text-2xl sm:text-3xl font-normal font-serif text-white tracking-tight leading-snug">
                  Mental Health Care Homes
                </h3>
                <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                  Support individual care plans, daily coordination and structured documentation.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
