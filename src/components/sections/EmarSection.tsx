import React from "react";

export function EmarSection() {
  const benefits = [
    {
      title: "Due now",
      desc: "Bring current tasks into focus.",
    },
    {
      title: "Clear status",
      desc: "See progress at a glance.",
    },
    {
      title: "Joined up",
      desc: "Keep records with everyday care.",
    },
  ];

  return (
    <section
      className="section emar-section py-20 lg:py-28 bg-light border-b border-border-subtle"
      id="emar"
      aria-labelledby="emar-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Medication Round Graphic */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <img
              src="/round-section.png"
              alt="Cantra Care Medication Records and e-MAR Management"
              className="w-full h-auto object-contain max-w-[560px] mx-auto"
              loading="lazy"
            />
          </div>

          {/* Right Column: Editorial Headline, Subtitle, Benefit Rows */}
          <div className="lg:col-span-6 space-y-6">
            {/* Linear Eyebrow */}
            <div className="flex items-center gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              <span className="w-6 h-[1.5px] bg-primary" aria-hidden="true" />
              <span>Medication records in the flow of care</span>
            </div>

            {/* 3-line Headline with Georgia Italic */}
            <h2
              id="emar-heading"
              className="text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif text-primary tracking-tight leading-[1.12]"
            >
              Keep every round<br />
              clear and visible.
            </h2>

            {/* Explainer Subtitle */}
            <p className="text-sm sm:text-base text-body leading-relaxed max-w-lg">
              See what is due, what has been administered and what needs attention—without separating medication records from the rest of the care journey.
            </p>

            {/* 3 Benefit Rows with Border Dividers */}
            <div className="pt-2 border-t border-border-subtle">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="py-4 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 border-b border-border-subtle"
                >
                  <strong className="text-sm sm:text-base font-bold text-primary w-32 sm:w-36 shrink-0">
                    {item.title}
                  </strong>
                  <span className="text-xs sm:text-sm text-body">
                    {item.desc}
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
