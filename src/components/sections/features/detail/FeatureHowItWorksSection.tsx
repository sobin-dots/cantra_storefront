import React from "react";
import { FeatureData } from "@/data/features";

interface FeatureHowItWorksSectionProps {
  data: FeatureData;
}

export function FeatureHowItWorksSection({ data }: FeatureHowItWorksSectionProps) {
  return (
    <section
      id="how-it-works"
      className="section how-it-works-section py-20 lg:py-28 bg-surface-warm border-b border-border-subtle"
      aria-labelledby="how-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
        {/* Section Heading Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              <span className="w-6 h-[1.5px] bg-primary" aria-hidden="true" />
              <span>{data.howItWorks.eyebrow}</span>
            </div>
            <h2
              id="how-heading"
              className="text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif text-primary tracking-tight leading-[1.12]"
            >
              {data.howItWorks.title}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-primary/80 max-w-sm leading-relaxed lg:pb-2">
            {data.howItWorks.description}
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.howItWorks.steps.map((step, i) => (
            <article
              key={step.title}
              className="bg-white p-7 sm:p-8 rounded-2xl border border-border  hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[260px]"
            >
              <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-[12px] font-medium text-primary mb-6">
                0{i + 1}
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-serif text-primary mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-primary/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
