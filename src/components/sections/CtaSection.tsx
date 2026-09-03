import React from "react";

export function CtaSection() {
  return (
    <section className="cta-section py-20 bg-[#EFF3F3]" aria-labelledby="cta-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="cta-card bg-[#0B4F43] text-[#EFF3F3] rounded-3xl p-10 sm:p-16 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="cta-mark flex items-center justify-center gap-2 mb-2" aria-hidden="true">
            <span className="w-3 h-3 rounded-full bg-[#EFF3F3]/40" />
            <span className="w-3 h-3 rounded-full bg-[#EFF3F3]/80" />
          </div>

          <p className="eyebrow light-eyebrow inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EFF3F3] bg-[#083B32] px-3.5 py-1.5 rounded-full border border-white/20">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-[#EFF3F3]" />
            A clearer day starts here
          </p>

          <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#EFF3F3] tracking-tight">
            See Cantra Care <em className="italic font-serif font-normal text-[#EFF3F3]">in action.</em>
          </h2>

          <p className="text-base sm:text-lg text-[#EFF3F3]/80 max-w-2xl mx-auto leading-relaxed">
            Discover how one connected platform can support your home, your team and the people you care for.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#contact"
              className="button button-light inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#EFF3F3] hover:bg-white text-[#0B4F43] text-sm font-bold shadow-lg transition-all duration-200 hover:scale-105"
            >
              <span>Book a tailored demo</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href="mailto:sales@cantra.com"
              className="cta-email inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#083B32] hover:bg-[#083B32]/80 text-[#EFF3F3] text-sm font-semibold border border-white/20 transition-colors"
            >
              Email sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
