import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function FeaturesSolutionsGrid() {
  const secondaryCards = [
    {
      num: "02",
      tag: "CORE FEATURE",
      title: "e-MAR",
      desc: "Give your team a clear view of medication schedules, administration records and current medication information—all in one place.",
      href: "/features/emar",
    },
    {
      num: "03",
      tag: "CORE FEATURE",
      title: "Staff & Rota Management",
      desc: "Plan shifts, manage staff availability and give your frontline teams a clear, reliable view of their responsibilities.",
      href: "/features/staff-rota",
    },
    {
      num: "04",
      tag: "CORE FEATURE",
      title: "Compliance & Reports",
      desc: "Keep your care records, incidents, audits and reports organised so you can quickly understand what is happening and show evidence when needed.",
      href: "/features/compliances",
    },
  ];

  return (
    <section
      id="solutions"
      className="section solutions-section py-20 lg:py-28 bg-surface border-b border-border-subtle"
      aria-labelledby="solutions-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
        {/* Section Heading Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              <span className="w-6 h-[1.5px] bg-primary" aria-hidden="true" />
              <span>Explore the platform</span>
            </div>
            <h2
              id="solutions-heading"
              className="text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif text-primary tracking-tight leading-[1.12]"
            >
              The solutions you need.<br />
              Choose where to begin.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-primary/80 max-w-sm leading-relaxed lg:pb-2">
            Cantra connects the vital workflows of your care home in one platform. Explore each core feature below.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <Link className="lg:col-span-5 bg-primary rounded-3xl text-white flex flex-col justify-between relative overflow-hidden group shadow-lg min-h-[480px]"
            href="/features/care-plan"
          >
            {/* Card 1: Large Primary Hero Showcase (5 cols) */}
            <article >
              {/* Visual Header with Image */}
              <div className="relative w-full h-72 sm:h-80 md:h-96 overflow-hidden">
                <img
                  src="/images/features-page/therapy-session.jpg"
                  alt="Care Management in practice"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="w-8 h-8 rounded-full bg-primary/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-xs font-mono text-white">
                    01
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-7 sm:p-9 pt-6 space-y-3 mt-auto">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-surface/70 block">
                  CORE FEATURE
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-white leading-snug">
                  Care Management
                </h3>
                <p className="text-sm sm:text-base text-surface/80 leading-relaxed max-w-sm pb-2">
                  Manage care plans, daily tasks, observations, handovers and resident information without jumping between disconnected systems.
                </p>
              </div>
            </article>
          </Link>

          {/* Right Column: 3 Stacked Cards (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {secondaryCards.map((card) => (
              <Link key={card.num} className=""
                href={card.href}
              >
                <article
                  key={card.num}
                  className="bg-white rounded-2xl p-7 sm:p-8 border border-border  hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row justify-between gap-6 group"
                >
                  <div className="flex-1 space-y-2">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-primary/60 block">
                      {card.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif text-primary leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-sm sm:text-base text-primary/80 leading-relaxed max-w-md pb-1">
                      {card.desc}
                    </p>
                  </div>

                  <div className="flex sm:flex-col justify-between items-end shrink-0">
                    <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-surface transition-colors hidden sm:flex">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono font-medium text-primary/50">
                      {card.num}
                    </span>

                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
}
