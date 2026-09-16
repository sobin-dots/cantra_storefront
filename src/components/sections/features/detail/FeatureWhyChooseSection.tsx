import React from "react";
import { FeatureData } from "@/data/features";

interface FeatureWhyChooseSectionProps {
  data: FeatureData;
}

export function FeatureWhyChooseSection({ data }: FeatureWhyChooseSectionProps) {
  return (
    <section
      id="why-choose"
      className="section why-choose-section py-20 lg:py-28 bg-surface border-b border-border-subtle"
      aria-labelledby="why-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14  ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Feature Photo */}
            <div className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-square rounded-2xl sm:rounded-3xl overflow-hidden border border-border-subtle shadow-inner">
              <img
                src="/images/features-page/therapy-session.jpg"
                alt={data.whyChoose.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Right Column: Editorial Reasons */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <span className="w-6 h-[1.5px] bg-primary" aria-hidden="true" />
                <span>{data.whyChoose.eyebrow}</span>
              </div>

              <h2
                id="why-heading"
                className="text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif text-primary tracking-tight leading-[1.12]"
              >
                {data.whyChoose.title}
              </h2>

              <p className="text-sm sm:text-base text-primary/80 leading-relaxed max-w-lg">
                {data.whyChoose.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-border-subtle">
                {data.whyChoose.reasons.map((reason, i) => (
                  <div key={reason.title} className="space-y-2">
                    <span className="text-xs font-mono font-medium text-primary/50 block">
                      0{i + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold text-primary leading-snug">
                      {reason.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-primary/80 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
