"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Shield, ChevronDown, Menu, X } from "lucide-react";

export function HeroHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-surface/90 backdrop-blur-md border-b border-border-subtle transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between relative">
        {/* Brand Logo */}
        <Link
          href="#top"
          className="brand flex items-center group focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
          aria-label="Cantra Care home"
        >
          <img
            src="/logos/logo-primary.png"
            alt="Cantra Care"
            className="h-8 sm:h-9 w-auto object-contain"
          />
        </Link>
        <div className="flex gap-6">
          {/* Center Navigation Links (Matching Screenshot) */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium text-body" aria-label="Main navigation">

            <a href="#care-settings" className="hover:text-primary transition-colors">
              Why Cantra
            </a>
            <a href="#faqs" className="hover:text-primary transition-colors">
              FAQ
            </a>
          </nav>

          {/* Right Side Dual CTA Buttons (Matching Screenshot) */}
          <div className="hidden sm:flex items-center gap-3">

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-surface text-xs font-semibold shadow-md shadow-primary/15 transition-all"
            >
              Book a demo
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-white border border-border text-primary"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-4 right-4 mt-2 p-5 bg-white rounded-2xl border border-border shadow-2xl z-40 space-y-3">
            <nav className="flex flex-col space-y-2 text-sm font-medium text-primary">
              <a href="#platform" onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-surface rounded-lg">Platform</a>
              <a href="#care-settings" onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-surface rounded-lg">Care settings</a>
              <a href="#why-cantra" onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-surface rounded-lg">Why Cantra</a>
              <a href="#faqs" onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-surface rounded-lg">FAQs</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="p-3 bg-primary text-surface rounded-xl text-center font-semibold mt-2">Book a demo</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
