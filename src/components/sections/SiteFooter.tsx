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
              className="w-[215px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-primary-hover hover:text-white text-primary text-sm font-bold shadow-md transition-all duration-200 shrink-0 self-start md:self-center"
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
              <p className="text-sm sm:text-base text-surface/80 leading-relaxed max-w-sm">
                One connected care platform, made for the people who keep care moving.
              </p>
              <div className="pt-2">
                <span className="inline-block text-sm px-3.5 py-1 rounded-full border border-white/20 text-surface/80 bg-white/5">
                  Residential • Nursing • Mental health care
                </span>
              </div>
            </div>

            {/* Navigation Columns: Company, Features, Contact (7 cols with justified spacing) */}
            <div className="lg:col-span-7 flex flex-col sm:flex-row justify-between gap-8 sm:gap-6">
              {/* Column 2: COMPANY */}
              <nav aria-label="Company Navigation" className="w-full sm:w-[150px] space-y-3 text-left">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50 block mb-4">
                  Company
                </span>
                <p><Link href="/" className="text-xs sm:text-sm text-surface/80 hover:text-white transition-colors">Home</Link></p>
                <p><Link href="/about" className="text-xs sm:text-sm text-surface/80 hover:text-white transition-colors">About Us</Link></p>
                <p><Link href="/contact" className="text-xs sm:text-sm text-surface/80 hover:text-white transition-colors">Contact</Link></p>
              </nav>

              {/* Column 3: FEATURES */}
              <nav aria-label="Features" className="w-full sm:w-[150px] space-y-3 text-left">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50 block mb-4">
                  Features
                </span>
                <p><Link href="/features/care-plan" className="text-xs sm:text-sm text-surface/80 hover:text-white transition-colors">Care Plan</Link></p>
                <p><Link href="/features/emar" className="text-xs sm:text-sm text-surface/80 hover:text-white transition-colors">eMAR</Link></p>
                <p><Link href="/features/staff-rota" className="text-xs sm:text-sm text-surface/80 hover:text-white transition-colors">Staff & Rota</Link></p>
                <p><Link href="/features/compliances" className="text-xs sm:text-sm text-surface/80 hover:text-white transition-colors">Compliances</Link></p>
              </nav>

              {/* Column 4: CONTACT */}
              <div className="w-full sm:w-[150px] space-y-3 text-left">
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
          </div>

          {/* Bottom Legal & Back to Top Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-surface/50 gap-4">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <p>© {new Date().getFullYear()} Cantra Care . All rights reserved.</p>
              <div className="flex items-center gap-2">
                <a
                  href="https://linkedin.com/company/cantracare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-surface/70 hover:text-white hover:border-white/50 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/cantracare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-surface/70 hover:text-white hover:border-white/50 transition-colors"
                  aria-label="X"
                >
                  <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
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
