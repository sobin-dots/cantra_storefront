import React from "react";
import { ChevronDown, Check, MoveDown } from "lucide-react";

export function HeroCopy() {
  return (
    <div className="hero-copy lg:col-span-6 space-y-6 pt-4 lg:pt-0">

      {/* Main Serif Headline with Exact 3-line cadence */}
      <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-bold font-serif text-primary tracking-tight leading-[1.12]">
        Turn everyday<br />
        care into evidence<br />
        of quality.
      </h1>

      {/* Subtitle */}
      <p className=" text-sm sm:text-base    leading-relaxed ">
        Live or on your terms – Cantra Care connects care routines, medication records, and team collaboration for frontline care homes.
      </p>

      {/* Action Buttons (1:1 with Screenshot style) */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-surface text-sm font-semibold  shadow-primary/15 transition-all duration-200"
        >
          Book a demo
        </a>
        <a
          href="#platform"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-surface hover:bg-white text-primary text-sm font-semibold border border-border  transition-all duration-200"
        >
          <span>Explore the platform</span>
          <MoveDown className="w-4 h-4 opacity-70" />
        </a>
      </div>

      {/* Bottom Checklist matching screenshot style */}
      <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-semibold text-primary">
        <div className="flex items-center gap-1.5">
          <Check className="w-4 h-4 text-primary" />
          <span>Safe and Secure</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Check className="w-4 h-4 text-primary" />
          <span>CQC & Care Ready</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Check className="w-4 h-4 text-primary" />
          <span>Live e-MAR Sync</span>
        </div>
      </div>
    </div>
  );
}
