import React from "react";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-surface-warm" aria-label="Site Footer">
      {/* Dark Forest Green Curved Container */}
      <div className="bg-primary text-surface rounded-t-[2.5rem] lg:rounded-t-[3.5rem] px-4 sm:px-6 lg:px-12 pt-16 lg:pt-20 pb-12 shadow-2xl">
        <div className="max-w-7xl mx-auto space-y-12 lg:space-y-14">
          {/* Top CTA Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/60 block mb-3">
                Ready when you are
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-normal font-serif text-white leading-[1.15] tracking-tight">
                Bring more clarity<br />
                to every care day.
              </h2>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-[#cbf17e] text-primary text-sm font-bold shadow-md transition-all duration-200 shrink-0 self-start md:self-center"
            >
              <span>Book a tailored demo</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Divider Line */}
          <div className="border-t border-white/15" />

          {/* 4-Column Navigation & Brand Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 text-sm">
            {/* Column 1: Brand Info (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <Link href="#top" className="inline-block" aria-label="Cantra Care home">
                <img
                  src="/logos/logo-white.png"
                  alt="Cantra Care"
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <p className="text-xs sm:text-sm text-surface/80 leading-relaxed max-w-sm">
                One connected care platform, made for the people who keep care moving.
              </p>
              <div className="pt-2">
                <span className="inline-block text-[11px] px-3.5 py-1 rounded-full border border-white/20 text-surface/80 bg-white/5">
                  Residential • Nursing • Mental health care
                </span>
              </div>
            </div>

            {/* Column 2: COMPANY (2 cols) */}
            <nav aria-label="Company Navigation" className="lg:col-span-2 space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50 block mb-4">
                Company
              </span>
              <p><Link href="/" className="text-xs sm:text-sm text-surface/80 hover:text-white transition-colors">Home</Link></p>
              <p><Link href="/about" className="text-xs sm:text-sm text-surface/80 hover:text-white transition-colors">About Us</Link></p>
              <p><Link href="/contact" className="text-xs sm:text-sm text-surface/80 hover:text-white transition-colors">Contact</Link></p>
            </nav>

            {/* Column 3: FEATURES (2 cols) */}
            <nav aria-label="Features" className="lg:col-span-2 space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50 block mb-4">
                Features
              </span>
              <p><Link href="/features/care-plan" className="text-xs sm:text-sm text-surface/80 hover:text-white transition-colors">Care Plan</Link></p>
              <p><Link href="/features/emar" className="text-xs sm:text-sm text-surface/80 hover:text-white transition-colors">eMAR</Link></p>
              <p><Link href="/features/staff-rota" className="text-xs sm:text-sm text-surface/80 hover:text-white transition-colors">Staff & Rota</Link></p>
              <p><Link href="/features/compliances" className="text-xs sm:text-sm text-surface/80 hover:text-white transition-colors">Compliances</Link></p>
            </nav>

            {/* Column 4: CONTACT (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50 block mb-4">
                Contact
              </span>
              <p><a href="tel:+442073460250" className="text-xs sm:text-sm text-surface/80 hover:text-white transition-colors">+44 20 7346 0250</a></p>
              <p><a href="mailto:hello@cantra.care" className="text-xs sm:text-sm text-surface/80 hover:text-white transition-colors">hello@cantra.care</a></p>
              <div className="text-xs sm:text-sm text-surface/60 pt-2 leading-relaxed">
                <p>London, England</p>
                <p>United Kingdom</p>
              </div>
            </div>
          </div>

          {/* Bottom Legal & Back to Top Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-surface/50 gap-4">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
              <p>© {new Date().getFullYear()} Cantra Care Ltd. All rights reserved.</p>
              <p>Care photography by Age Cymru via Unsplash.</p>
            </div>
            <a
              href="#top"
              className="text-xs text-surface/70 hover:text-white transition-colors flex items-center gap-1 shrink-0"
            >
              <span>Back to top</span>
              <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
