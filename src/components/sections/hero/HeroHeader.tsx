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
          href="/"
          className="brand flex items-center group focus:outline-none "
          aria-label="Cantra Care home"
        >
          <img
            src="/logos/logo-primary.png"
            alt="Cantra Care"
            className="h-12 sm:h-14 w-auto object-contain"
          />
        </Link>
        <div className="flex gap-6">
          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-body" aria-label="Main navigation">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <div className="relative group py-4 -my-4">
              <button className="flex items-center gap-1 hover:text-primary transition-colors focus:outline-none h-full">
                Features <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
              </button>

              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-48 bg-white shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col">
                <Link href="/features/care-plan" className="w-full px-4 py-2.5 hover:bg-surface text-primary text-sm  transition-colors block">
                  Care Plan
                </Link>
                <Link href="/features/emar" className="w-full px-4 py-2.5 hover:bg-surface text-primary text-sm  transition-colors block">
                  eMAR
                </Link>
                <Link href="/features/staff-rota" className="w-full px-4 py-2.5 hover:bg-surface text-primary text-sm  transition-colors block">
                  Staff & Rota
                </Link>
                <Link href="/features/compliances" className="w-full px-4 py-2.5 hover:bg-surface text-primary text-sm  transition-colors block">
                  Compliances
                </Link>
              </div>
            </div>
            <Link href="/about" className="hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>


          </nav>

          {/* Right Side Dual CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-surface text-sm font-semibold shadow-md shadow-primary/15 transition-all"
            >
              Book a demo
            </Link>
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
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-surface rounded-lg">Home</Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-surface rounded-lg">About Us</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-surface rounded-lg">Contact</Link>

              <div className="p-2">
                <div className="font-semibold mb-2 text-sm uppercase tracking-wider text-body">Features</div>
                <div className="flex flex-col space-y-1 pl-2 border-l-2 border-surface">
                  <Link href="/features/care-plan" onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-surface rounded-lg">Care Plan</Link>
                  <Link href="/features/emar" onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-surface rounded-lg">eMAR</Link>
                  <Link href="/features/staff-rota" onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-surface rounded-lg">Staff & Rota</Link>
                  <Link href="/features/compliances" onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-surface rounded-lg">Compliances</Link>
                </div>
              </div>

              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="p-3 bg-primary text-surface rounded-xl text-center font-semibold mt-2">Book a demo</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
