import React from "react";

export function HeroVisualStage() {
  return (
    <div className="hero-stage-container relative w-full flex items-center justify-center">
      <img
        src="/hero.png"
        alt="Cantra Care Intelligent Care Management & Operations Platform"
        className="w-full h-auto object-contain max-w-none lg:scale-110 xl:scale-115 origin-center transition-transform duration-300"
        loading="eager"
      />
    </div>
  );
}
