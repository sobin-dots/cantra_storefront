import React from "react";
import { HeroCopy } from "./hero/HeroCopy";
import { HeroVisualStage } from "./hero/HeroVisualStage";
import { HeroFloatingCards } from "./hero/HeroFloatingCards";

export function HeroZone() {
  return (
    <div className="hero-zone relative bg-surface border-b border-border-subtle" id="top">
      {/* Hero Section Content */}
      <section className="hero max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 lg:pt-14 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Brand Sub-label, H1, Subtitle, Dual CTAs, Checklist */}
          <HeroCopy />

          {/* Right Column: Layered Stage Matching Reference Layout */}
          <div className="hero-stage lg:col-span-6 relative pt-8 sm:pt-6">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-primary/15 to-secondary/10 rounded-3xl blur-2xl -z-10" />

            {/* Satellite Floating Elements (Top-left photo, Right laptop photo with New Chat, Bottom call widget) */}
            {/* <HeroFloatingCards /> */}

            {/* Central Care Team Chat Window */}
            <HeroVisualStage />
          </div>
        </div>
      </section>
    </div>
  );
}
