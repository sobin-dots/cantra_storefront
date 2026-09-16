import React from "react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { MoveDown } from "lucide-react";

export function AboutHero() {
  const breadcrumbItems = [{ name: "About", url: "/about" }];

  return (
    <section className="bg-surface border-b border-border-subtle pt-8 sm:pt-12 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Breadcrumb Navigation */}
          <div className="flex justify-center mb-6">
            <Breadcrumbs items={breadcrumbItems} theme="light" />
          </div>

          {/* Eyebrow Badge matching home page sections */}
          <div className="flex items-center justify-center gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6">
            <span className="w-6 h-[1.5px] bg-primary" aria-hidden="true" />
            <span>About Cantra Care</span>
          </div>

          {/* Main Serif Headline matching home page hero style (no italics) */}
          <h2
            id="settings-heading"
            className="text-2xl sm:text-3xl lg:text-[54px] font-normal font-serif text-primary tracking-tight leading-[1.12] mb-6"
          >  Technology that keeps
            care human.
          </h2>

          {/* Subtitle matching home page body style */}
          <p className="text-sm sm:text-base text-primary/80 leading-relaxed max-w-2xl mx-auto mb-10">
            Cantra Care brings daily care, medication records, staffing and reporting into one clear platform—giving care teams more time and attention for the people who matter most.
          </p>

          {/* Action CTA matching home page secondary button */}
          <div className="flex justify-center">
            <a
              href="#our-story"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-surface text-primary text-sm font-semibold border border-border transition-all duration-200"
            >
              <span>Discover our story</span>
              <MoveDown className="w-4 h-4 opacity-70" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
