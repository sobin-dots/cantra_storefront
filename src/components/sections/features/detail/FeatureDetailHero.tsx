import React from "react";
import Link from "next/link";
import { ArrowUpRight, MoveDown } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FeatureData } from "@/data/features";

interface FeatureDetailHeroProps {
  data: FeatureData;
}

export function FeatureDetailHero({ data }: FeatureDetailHeroProps) {
  const formattedName = data.slug
    .replace("-", " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  const breadcrumbItems = [
    { name: "Features", url: "/features" },
    { name: formattedName, url: `/features/${data.slug}` },
  ];

  return (
    <section className="bg-surface border-b border-border-subtle pt-8 sm:pt-12 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex justify-center mb-6">
            <Breadcrumbs items={breadcrumbItems} theme="light" />
          </div>

          {/* Linear Eyebrow Badge */}
          <div className="flex items-center justify-center gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6">
            <span className="w-6 h-[1.5px] bg-primary" aria-hidden="true" />
            <span>{data.hero.eyebrow}</span>
          </div>

          {/* Single H1 matching home page hero typography (no italics) */}
          <h1 className="text-2xl sm:text-3xl lg:text-[54px] font-normal font-serif text-primary tracking-tight leading-[1.12] mb-6">
            {data.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-primary/80 leading-relaxed max-w-2xl mx-auto mb-10">
            {data.hero.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-surface text-sm font-semibold  transition-all flex items-center justify-center gap-2"
            >
              <span>Book a tailored demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="#overview"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-surface text-primary border border-border text-sm font-semibold transition-all flex items-center justify-center gap-2 "
            >
              <span>Explore feature</span>
              <MoveDown className="w-4 h-4 opacity-70" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
