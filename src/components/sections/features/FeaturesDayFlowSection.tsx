import React from "react";

export function FeaturesDayFlowSection() {
  const steps = [
    {
      num: "01",
      eyebrow: "BEFORE THE SHIFT",
      title: "Know what needs attention today.",
      desc: "See recent changes, outstanding tasks, resident updates and important information before your team starts their shift.",
    },
    {
      num: "02",
      eyebrow: "DURING CARE",
      title: "Record care as it happens.",
      desc: "Capture tasks, observations, medication and updates directly in Cantra, so your records stay current throughout the day.",
    },
    {
      num: "03",
      eyebrow: "WHEN SOMETHING CHANGES",
      title: "Keep everyone informed.",
      desc: "Record incidents and changes, assign follow-up actions and make sure the right people know what needs to happen next.",
    },
    {
      num: "04",
      eyebrow: "AT HANDOVER",
      title: "Give the next shift the full picture.",
      desc: "Bring together the important updates, actions and changes from the day so your next team starts informed—not guessing.",
    },
  ];

  return (
    <section
      id="day-flow"
      className="section day-flow-section py-20 lg:py-28 bg-surface-warm border-b border-border-subtle"
      aria-labelledby="flow-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
        {/* Section Heading Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
          <div className="">
            <div className="flex items-center gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              <span className="w-6 h-[1.5px] bg-primary" aria-hidden="true" />
              <span>A working day in flow</span>
            </div>
            <h2
              id="flow-heading"
              className="text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif text-primary tracking-tight leading-[1.12]"
            >
              Start every shift with clarity. <br />
              Keep your team informed.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-primary/80 max-w-sm leading-relaxed lg:pb-2">
            Cantra keeps information connected throughout the day—from the first shift check to the final handover.
          </p>
        </div>

        {/* 4 Process Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <article
              key={step.num}
              className="bg-white p-7 sm:p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[280px]"
            >
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-[12px] font-medium text-primary mb-4">
                  {step.num}
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/60 block">
                  {step.eyebrow}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-primary leading-snug">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm text-primary/80 leading-relaxed pt-3">
                {step.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
