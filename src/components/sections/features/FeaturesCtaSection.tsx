import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function FeaturesCtaSection() {
  return (
    <section
      id="demo-cta"
      className="section cta-banner-section py-20 lg:py-28 bg-surface border-b border-border-subtle"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-border shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Headline */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <span className="w-6 h-[1.5px] bg-primary" aria-hidden="true" />
                <span>Make it specific to your home</span>
              </div>
              <h2
                id="cta-heading"
                className="text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif text-primary tracking-tight leading-[1.12]"
              >
                Bring us one <br />
                complicated care day.
              </h2>
            </div>

            {/* Right Explainer & Actions */}
            <div className="lg:col-span-6 space-y-6 lg:pl-8 lg:border-l lg:border-border-subtle">
              <p className="text-sm sm:text-base text-primary/80 leading-relaxed max-w-md">
                We'll show you how Cantra can carry the context through it—from the first morning update to the final night handover.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-surface text-sm font-semibold shadow-md transition-all"
                >
                  <span>Book a tailored demo</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+442073460250"
                  className="text-sm font-semibold text-primary hover:underline transition-all"
                >
                  +44 20 7346 0250
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
