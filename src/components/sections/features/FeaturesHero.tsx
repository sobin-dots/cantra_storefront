import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export function FeaturesHero() {
  const breadcrumbItems = [{ name: "Features", url: "/features" }];

  return (
    <section className="bg-surface border-b border-border-subtle pt-8 sm:pt-12 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex justify-center mb-6">
            <Breadcrumbs items={breadcrumbItems} theme="light" />
          </div>

          {/* Linear Eyebrow Badge */}
          <div className="flex items-center justify-center gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6">
            <span className="w-6 h-[1.5px] bg-primary" aria-hidden="true" />
            <span>Connected Care Platform</span>
          </div>

          {/* Single H1 matching home page hero typography (no italics) */}
          <h1 className="text-3xl sm:text-5xl lg:text-[54px]  font-serif text-primary tracking-tight leading-[1.12] mb-6">
            Keep your team on track. <br className="hidden md:block" />
            Run your care home better, every day.
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-primary/80 leading-relaxed  mx-auto mb-10">
            Cantra brings care planning, medication, staff, incidents, compliance and daily records into one connected platform - so you spend less time chasing information and more time running your home.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-surface text-sm font-semibold transition-all flex items-center justify-center gap-2"
            >
              <span>Book a tailored demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="#day-flow"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-surface text-primary border border-border text-sm font-semibold transition-all flex items-center justify-center gap-2"
            >
              <span>See shift in flow</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>


        </div>
      </div>
    </section>
  );
}
