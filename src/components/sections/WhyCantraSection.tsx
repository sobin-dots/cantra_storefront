import React from "react";

export function WhyCantraSection() {
  const steps = [
    {
      num: "01",
      title: "Set up your facility",
      desc: "Create the structure your home and team need to get started.",
    },
    {
      num: "02",
      title: "Build care plans",
      desc: "Capture each person’s needs and preferences in clear plans.",
    },
    {
      num: "03",
      title: "Coordinate and deliver",
      desc: "Bring care tasks, e-MAR, rotas and notes into the daily workflow.",
    },
    {
      num: "04",
      title: "Monitor and improve",
      desc: "Use live views and reports to identify what needs attention.",
    },
  ];

  return (
    <section
      className="section steps-section pt-20 lg:pt-28 pb-0 bg-primary text-surface relative z-10 overflow-visible border-b border-border-dark"
      id="why-cantra"
      aria-labelledby="steps-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
        {/* Section Heading Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            {/* Linear Eyebrow */}
            <div className="flex items-center gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/90 mb-4">
              <span className="w-6 h-[1.5px] bg-white/80" aria-hidden="true" />
              <span>Easy to use</span>
            </div>

            {/* 2-line Headline with Georgia Italic */}
            <h2
              id="steps-heading"
              className="text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif text-white tracking-tight leading-[1.12]"
            >
              From setup to<br />
              stronger oversight.
            </h2>
          </div>

          {/* Right Explainer Subtitle */}
          <p className="text-sm sm:text-base text-surface/80 max-w-sm leading-relaxed md:pb-2">
            A straightforward route from getting started to continually improving how care is delivered.
          </p>
        </div>

        {/* 4 Steps Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 pt-4 border-t border-white/15">
          {steps.map((step) => (
            <article key={step.num} className="space-y-3">
              <span className="text-xs font-mono font-medium text-surface/50 block">
                {step.num}
              </span>
              <h3 className="text-xl sm:text-2xl font-normal font-serif text-white ">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-surface/80 leading-relaxed">
                {step.desc}
              </p>
            </article>
          ))}
        </div>

        {/* Half-Visible Dashboard Window Popping into Below Section */}
        <div className="relative z-20 max-h-[260px] sm:max-h-[340px] lg:max-h-[400px] rounded-t-2xl lg:rounded-t-3xl overflow-hidden shadow-2xl bg-white border-t border-x border-white/20 -mb-16 sm:-mb-24 lg:-mb-32 transition-transform duration-500 hover:-translate-y-1">
          <img
            src="/Cantra%20Dashboard/Roto%20Management/Admin%20-%20Unit%20Management.png"
            alt="Cantra Care Unit Management and Facility Setup Interface"
            className="w-full h-auto object-cover object-top"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
