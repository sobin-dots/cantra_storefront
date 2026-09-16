"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Shield, ArrowRight, CheckCircle2, Heart } from "lucide-react";
import { footerNavGroups } from "@/lib/navigation";
import { siteConfig } from "@/lib/seo-config";
import { Badge } from "@/components/ui/Badge";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 relative z-10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block" aria-label="Cantra Care home">
              <img
                src="/logos/logo-white.png"
                alt="Cantra Care"
                className="h-8 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              The all-in-one SaaS operating system for contractor care, post-construction warranty dispatch, and intelligent SLA compliance tracking.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <Badge variant="emerald" size="sm" dot>
                Systems Operational • 99.99% SLA
              </Badge>
            </div>

            <div className="text-xs text-slate-500 pt-2 space-y-1">
              <p>{siteConfig.legalName}</p>
              <p>{siteConfig.address.streetAddress}, {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion} {siteConfig.address.postalCode}</p>
              <p>Direct: <a href={`tel:${siteConfig.phone}`} className="text-slate-400 hover:text-white transition-colors">{siteConfig.phone}</a></p>
            </div>
          </div>

          {/* Navigation Columns */}
          {footerNavGroups.map((group) => (
            <div key={group.title} className="space-y-3">
              <p className="text-xs font-semibold text-white uppercase tracking-wider">
                {group.title}
              </p>
              <ul className="space-y-2 text-sm">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="hover:text-blue-400 transition-colors block py-0.5"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-base font-semibold text-white">
              Stay ahead in contractor care & warranty operations
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Subscribe to the Cantracare weekly newsletter for playbooks, benchmark data, and product updates.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing to Cantracare Insights!");
            }}
            className="flex items-center gap-2 max-w-md lg:ml-auto w-full"
          >
            <input
              type="email"
              required
              placeholder="Enter your work email"
              className="w-full rounded-xl bg-slate-900 border border-slate-700/80 px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              aria-label="Work email for newsletter"
            />
            <button
              type="submit"
              className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl transition-colors shrink-0 flex items-center gap-1 "
            >
              <span>Join</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="mt-8 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-slate-400 transition-colors">
              Sitemap
            </Link>
            <span className="flex items-center gap-1 text-slate-500">
              Built with <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" /> for modern contractors
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
