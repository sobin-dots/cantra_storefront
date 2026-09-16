import React from "react";

export function FeaturesEvidenceSection() {
  const steps = [
    {
      num: "01",
      title: "Record",
      desc: "Capture what happened. Record care routines, clinical observations, incidents and important changes.",
    },
    {
      num: "02",
      title: "Understand",
      desc: "See the full context. Bring the right resident, staff and clinical information together in one view.",
    },
    {
      num: "03",
      title: "Act",
      desc: "Make the next step clear. Assign responsibilities and make sure the right team members are alerted.",
    },
    {
      num: "04",
      title: "Review",
      desc: "Know what changed. Track outcomes, audit your records and maintain continuous inspection readiness.",
    },
  ];

  return (
    <section
      id="evidence"
      className="section evidence-section py-20 lg:py-28 bg-primary text-white border-b border-border-dark"
      aria-labelledby="evidence-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
        {/* Section Heading Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/90 mb-4">
              <span className="w-6 h-[1.5px] bg-white/80" aria-hidden="true" />
              <span>Turn care into clear evidence</span>
            </div>
            <h2
              id="evidence-heading"
              className="text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif text-white tracking-tight leading-[1.12]"
            >
              Good information <br />
              needs a path forward.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-surface/80 max-w-sm leading-relaxed lg:pb-2">
            Cantra keeps the care journey connected from the moment care is recorded to the moment it is audited and reviewed.
          </p>
        </div>

        {/* 4 Connected Stages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-4 border-t border-white/15">
          {steps.map((step) => (
            <article key={step.num} className="space-y-3">
              <span className="text-xs font-mono font-medium text-surface/50 block">
                {step.num}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-white leading-snug">
                {step.title}
              </h3>
              <p className="text-sm text-surface/80 leading-relaxed">
                {step.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
