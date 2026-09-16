import React from "react";
import { FeatureData } from "@/data/features";
import {
  Layers,
  CalendarCheck,
  Activity,
  History,
  CheckCircle2,
  Eye,
  Users,
  ShieldCheck,
  LucideIcon,
} from "lucide-react";

interface FeatureClearerWaySectionProps {
  data: FeatureData;
}

function getBenefitIcon(title: string, index: number): LucideIcon {
  const lower = title.toLowerCase();
  if (lower.includes("record") || lower.includes("joined-up") || lower.includes("thread")) return Layers;
  if (lower.includes("guidance") || lower.includes("due") || lower.includes("shift") || lower.includes("coordination")) return CalendarCheck;
  if (lower.includes("outcome") || lower.includes("action") || lower.includes("readiness")) return CheckCircle2;
  if (lower.includes("progress") || lower.includes("context") || lower.includes("exception")) return Activity;
  if (lower.includes("version") || lower.includes("history")) return History;
  if (lower.includes("coverage") || lower.includes("people")) return Users;
  if (lower.includes("oversight") || lower.includes("visible")) return Eye;
  if (lower.includes("ownership") || lower.includes("responsibilit") || lower.includes("governance")) return ShieldCheck;

  const fallbacks: LucideIcon[] = [Layers, CalendarCheck, Activity, CheckCircle2];
  return fallbacks[index % fallbacks.length];
}

export function FeatureClearerWaySection({ data }: FeatureClearerWaySectionProps) {
  return (
    <section
      id="overview"
      className="section clearer-way-section py-20 lg:py-28 bg-primary text-white border-b border-border-dark"
      aria-labelledby="clearer-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
        {/* Section Heading Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/90 mb-4">
              <span className="w-6 h-[1.5px] bg-white/80" aria-hidden="true" />
              <span>{data.clearerWay.eyebrow}</span>
            </div>
            <h2
              id="clearer-heading"
              className="text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif text-white tracking-tight leading-[1.12]"
            >
              {data.clearerWay.title}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-surface/80 max-w-sm leading-relaxed lg:pb-2">
            {data.clearerWay.description}
          </p>
        </div>

        {/* Elongated Benefits Grid (2 cards per row) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {data.clearerWay.benefits.map((benefit, i) => {
            const Icon = getBenefitIcon(benefit.title, i);
            return (
              <article
                key={benefit.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300 flex items-start gap-5 sm:gap-6 group"
              >
                {/* Left Side: Appropriate Line Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white shrink-0 group-hover:bg-white/15 transition-colors">
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>

                {/* Right Side: Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="text-xl sm:text-2xl font-serif text-white leading-snug">
                      {benefit.title}
                    </h3>
                    <span className="text-xs font-mono font-medium text-surface/50 shrink-0">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-surface/80 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

