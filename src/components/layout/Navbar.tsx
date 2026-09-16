"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shield, Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { mainNavItems } from "@/lib/navigation";
import { siteConfig } from "@/lib/seo-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 py-3.5 "
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group focus:outline-none   p-1"
            aria-label="Cantra Care home"
          >
            <img
              src="/logos/logo-primary.png"
              alt="Cantra Care"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1 bg-slate-900/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-800/80 shadow-inner">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 block",
                      isActive
                        ? "text-white bg-blue-600/20 border border-blue-500/30 "
                        : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center gap-3">

            <Button
              variant="glow"
              size="sm"
              href="/contact"
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Request Demo
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle main menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-6 px-4 bg-slate-950/95 backdrop-blur-xl rounded-2xl border border-slate-800  space-y-4">
            <div className="flex items-center gap-2 px-2 py-1 text-xs text-blue-400 font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Navigation
            </div>
            <ul className="space-y-1">
              {mainNavItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-4 py-3 rounded-xl text-base font-medium transition-all",
                        isActive
                          ? "bg-blue-600/20 text-white border border-blue-500/30"
                          : "text-slate-300 hover:bg-slate-900 hover:text-white"
                      )}
                    >
                      {item.name}
                      {item.description && (
                        <p className="text-xs text-slate-400 font-normal mt-0.5">
                          {item.description}
                        </p>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <Button
                variant="glow"
                size="md"
                href="/contact"
                className="w-full justify-center"
              >
                Request Live Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
