import React from "react";

export function SupportSection() {
  return (
    <section
      className="section support-section pt-24 sm:pt-36 lg:pt-48 pb-20 lg:pb-28 bg-surface-warm border-b border-border-subtle relative z-0"
      id="technology"
      aria-labelledby="support-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Showcase Panel with Dark Forest Theme */}
        <div className="bg-primary rounded-3xl sm:rounded-[2.5rem] p-7 sm:p-12 lg:p-16 text-white shadow-2xl relative border border-white/10 space-y-12 lg:space-y-16">
          {/* Centered Editorial Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            {/* Pill Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
              <span>Technology that supports</span>
            </div>

            {/* Main Headline */}
            <h2
              id="support-heading"
              className="text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif text-white tracking-tight leading-[1.12]"
            >
              Built to help your team do its best work.
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-surface/80 max-w-2xl mx-auto leading-relaxed">
              Technology should reduce friction, strengthen oversight and keep the person receiving care at the heart of every decision.
            </p>
          </div>

          {/* Asymmetrical 2-Column Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
            {/* Left Column: Card 01 - Large Vertical Showcase Card */}
            <div className="lg:col-span-6 flex">
              <article className="group bg-[#13695A] rounded-3xl p-6 sm:p-8 border border-white/15 shadow-xl flex flex-col justify-between w-full hover:border-white/30 transition-all duration-300">
                {/* Upper Image */}
                <div className="w-full h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden mb-6 relative">
                  <img
                    src="/card-3.jpg"
                    alt="Person-centred care by design"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Bottom Content */}
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-surface/70 block">
                    Care stays personal
                  </span>
                  <h3 className="text-2xl sm:text-3xl  font-serif text-white leading-snug">
                    Person-centred by design
                  </h3>
                  <p className="text-sm sm:text-base text-surface/90 leading-relaxed max-w-md pt-1">
                    Keep each resident’s needs, preferences and care at the centre of the workflow.
                  </p>
                </div>
              </article>
            </div>

            {/* Right Column: Stacked 2 Horizontal Cards (02 & 03) */}
            <div className="lg:col-span-6 flex flex-col gap-8 justify-between">
              {/* Card 02: Made for Frontline Teams */}
              <article className="group bg-[#13695A] rounded-3xl p-6 sm:p-7 border border-white/15 shadow-xl flex flex-col sm:flex-row items-center gap-6 hover:border-white/30 transition-all duration-300 flex-1">
                <div className="flex-1 space-y-2 text-left w-full sm:w-auto">
                  <span className="text-[11px]  uppercase tracking-[0.18em] text-surface/70 block">
                    Made for the day-to-day
                  </span>
                  <h3 className="text-2xl sm:text-3xl  font-serif text-white leading-snug">
                    Made for frontline teams
                  </h3>
                  <p className="text-sm sm:text-base text-surface/90 leading-relaxed pt-1">
                    A clear, practical experience built around the realities of everyday work.
                  </p>
                </div>
                <div className="w-full sm:w-44 md:w-48 lg:w-44 xl:w-52 h-44 sm:h-auto self-stretch rounded-2xl overflow-hidden flex-shrink-0 relative">
                  <img
                    src="/card-2.jpg"
                    alt="Made for frontline teams"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </article>

              {/* Card 03: Compliance Confidence */}
              <article className="group bg-[#13695A] rounded-3xl p-6 sm:p-7 border border-white/15 shadow-xl flex flex-col sm:flex-row items-center gap-6 hover:border-white/30 transition-all duration-300 flex-1">
                <div className="flex-1 space-y-2 text-left w-full sm:w-auto">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-surface/70 block">
                    Important records, in view
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-white leading-snug">
                    Compliance confidence
                  </h3>
                  <p className="text-sm sm:text-base text-surface/90 leading-relaxed pt-1">
                    Keep important information structured, visible and easier to review.
                  </p>
                </div>
                <div className="w-full sm:w-44 md:w-48 lg:w-44 xl:w-52 h-44 sm:h-auto self-stretch rounded-2xl overflow-hidden flex-shrink-0 relative">
                  <img
                    src="/card-1.jpg"
                    alt="Compliance confidence"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </article>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
