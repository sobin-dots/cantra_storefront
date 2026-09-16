import React from "react";

export function AboutWhyUsSection() {
  const principles = [
    {
      title: "Person-centred by design",
      desc: "Every workflow begins with the person receiving care, helping teams keep individual needs and preferences visible.",
    },
    {
      title: "Clarity for frontline teams",
      desc: "Practical screens, focused information and role-based views help everyone understand what matters next.",
    },
    {
      title: "Confidence through connection",
      desc: "Care, medication, staffing and reporting sit together, reducing the gaps created by disconnected systems.",
    },
  ];

  return (
    <section
      id="why-us"
      className="section why-us-section py-20 lg:py-28 bg-primary text-white border-b border-border-dark"
      aria-labelledby="why-us-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
        {/* Section Heading Row matching home page dark sections */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="max-w-xl">
            {/* Linear Eyebrow */}
            <div className="flex items-center gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/90 mb-4">
              <span className="w-6 h-[1.5px] bg-white/80" aria-hidden="true" />
              <span>Why choose us</span>
            </div>

            {/* 2-line Playfair Display Headline (no italics) */}
            <h2
              id="why-us-heading"
              className="text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif text-white tracking-tight leading-[1.12]"
            >
              Designed around care.<br />
              Defined by clarity.
            </h2>
          </div>

          {/* Right Explainer Subtitle */}
          <p className="text-sm sm:text-base text-surface/80 max-w-sm leading-relaxed md:pb-2">
            Cantra Care is shaped around how teams really work—with changing priorities, shared responsibilities and no room for unnecessary complexity.
          </p>
        </div>

        {/* 3 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {principles.map((principle, i) => (
            <article
              key={principle.title}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-7 sm:p-8 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between min-h-[250px]"
            >
              <span className="text-base font-mono font-medium text-surface/50 mb-8 block">
                0{i + 1}
              </span>
              <div>
                <h3 className="text-2xl sm:text-3xl font-normal font-serif text-white leading-snug mb-3">
                  {principle.title}
                </h3>
                <p className="text-sm sm:text-base text-surface/80 leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
