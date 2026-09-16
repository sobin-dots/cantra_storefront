import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function PlatformSection() {
  const serviceCards = [
    {
      num: "01",
      title: "Care Plan",
      desc: "Create person-centred care plans, keep daily records organised and coordinate care.",
      href: "/features/care-plan",
    },
    {
      num: "02",
      title: "eMAR",
      desc: "Keep medication administration records accessible within everyday care workflows.",
      href: "/features/emar",
    },
    {
      num: "03",
      title: "Staff & Rota",
      desc: "Plan rotas, make responsibilities visible and coordinate your frontline teams.",
      href: "/features/staff-rota",
    },
    {
      num: "04",
      title: "Compliances",
      desc: "Keep operational records organised and turn day-to-day information into clearer reports.",
      href: "/features/compliances",
    },
  ];

  return (
    <section
      className="section platform-section py-20 lg:py-28 bg-primary border-b border-border-subtle"
      id="platform"
      aria-labelledby="platform-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Heading Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div>
            {/* Eyebrow with linear dash */}
            <div className="flex items-center gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/90 mb-4">
              <span className="w-6 h-[1.5px] bg-white/80" aria-hidden="true" />
              <span>One connected care loop</span>
            </div>

            {/* 2-line Headline */}
            <h2
              id="platform-heading"
              className="text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif text-white tracking-tight leading-[1.12]"
            >
              Four essentials.<br />
              <span className=" font-normal  text-white">One clear platform.</span>
            </h2>

          </div>

          {/* Right Explainer Paragraph */}
          <p className="text-sm sm:text-base text-surface/80 max-w-sm leading-relaxed md:pb-2">
            Bring the tools your team uses every day into a simpler, more connected workflow.
          </p>
        </div>

        {/* Asymmetrical 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCards.map((card) => (
            <Link
              key={card.num}
              href={card.href}
              className="group relative bg-white p-7 sm:p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[290px] sm:min-h-[310px] cursor-pointer block"
            >
              {/* Top Row: Number in circle + top-right arrow */}
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-[12px] font-medium text-body">
                  {card.num}
                </div>
                <ArrowUpRight className="w-4 h-4 text-body/60 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              {/* Bottom Area: Title + Description */}
              <div className="space-y-3 pt-12 sm:pt-14">
                <h3 className="text-xl sm:text-2xl font-normal leading-relaxed text-primary group-hover:text-primary-hover transition-colors leading-snug font-serif">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-body">
                  {card.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
