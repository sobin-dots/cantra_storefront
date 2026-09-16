import React from "react";
import { Check } from "lucide-react";

export function FeaturesIncidentSection() {
  const incidentSteps = [
    {
      num: "01",
      title: "See what is happening",
      desc: "Review incidents and important events in context, instead of piecing information together from disconnected records.",
    },
    {
      num: "02",
      title: "Make ownership clear",
      desc: "Help the team understand what happens next and who needs to take responsibility forward.",
    },
    {
      num: "03",
      title: "Close the loop",
      desc: "Track follow-up actions and outcomes so critical steps are completed and nothing is missed.",
    },
  ];

  return (
    <section
      id="incident-management"
      className="section incident-section py-20 lg:py-28 bg-primary text-white border-b border-border-dark"
      aria-labelledby="incident-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headline, Subtitle, Timeline */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/90 mb-4">
              <span className="w-6 h-[1.5px] bg-white/80" aria-hidden="true" />
              <span>From incident to resolution</span>
            </div>

            <h2
              id="incident-heading"
              className="text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif text-white tracking-tight leading-[1.12]"
            >
              Don't let important <br />
              issues get lost.
            </h2>

            <p className="text-sm sm:text-base text-surface/80 leading-relaxed max-w-lg">
              When something happens in your home, Cantra helps you record it, respond to it, assign responsibility and follow it through to verified completion.
            </p>

            {/* Timeline Steps */}
            <div className="pt-4 border-l border-white/15 pl-6 space-y-8">
              {incidentSteps.map((step) => (
                <div key={step.num} className="relative">
                  <span className="text-xs font-mono text-surface/50 block mb-1">
                    {step.num}
                  </span>
                  <h3 className="text-xl font-serif text-white leading-snug mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-surface/80 leading-relaxed max-w-md">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Stage with Floating Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[9/11] overflow-hidden">
              <img
                src="/images/features-page/businessman-showing-digital-tablet-businesswoman-office.jpg"
                alt="Incident management in Cantra Care"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Floating Resolution Pill */}
            <div className="absolute -bottom-4 right-4 sm:right-8 bg-surface-card text-primary p-4 sm:p-5 rounded-2xl shadow-xl border border-border flex items-center gap-3.5 z-20">
              <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">Incident Resolved</p>
                <p className="text-xs text-primary/60">Follow-up actions completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
