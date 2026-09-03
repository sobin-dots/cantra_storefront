"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { defaultCantraFaqs } from "@/lib/schema";

interface FaqItemProps {
  item: { question: string; answer: string };
  idx: number;
  isOpen: boolean;
  onToggle: () => void;
}

function FaqItem({ item, idx, isOpen, onToggle }: FaqItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!contentRef.current) return;

    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (isOpen) {
        gsap.set(contentRef.current, { height: "auto", opacity: 1 });
      } else {
        gsap.set(contentRef.current, { height: 0, opacity: 0 });
      }
      return;
    }

    if (isOpen) {
      gsap.fromTo(
        contentRef.current,
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.35,
          ease: "power2.out",
        }
      );
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: "power2.inOut",
      });
    }
  }, [isOpen]);

  return (
    <div className="border-b border-border-subtle">
      <button
        type="button"
        onClick={onToggle}
        className="w-full py-5 sm:py-6 text-left flex items-center justify-between gap-4 group cursor-pointer focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-baseline gap-4 sm:gap-6 flex-1">
          <span className="text-xs font-mono font-medium text-body/50 shrink-0 w-6">
            0{idx + 1}
          </span>
          <h3 className="text-lg sm:text-xl font-normal font-serif text-primary group-hover:text-primary-hover transition-colors leading-snug">
            {item.question}
          </h3>
        </div>
        <span
          className={`text-xl font-light text-primary w-6 h-6 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? "rotate-90" : ""
            }`}
          aria-hidden="true"
        >
          {isOpen ? "×" : "+"}
        </span>
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden"
        style={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="pl-10 sm:pl-12 pb-6 pr-4 sm:pr-8 text-xs sm:text-sm text-body leading-relaxed">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section
      className="section faq-section py-20 lg:py-28 bg-surface-warm border-b border-border-subtle"
      id="faqs"
      aria-labelledby="faqs-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Eyebrow, 4-Line Headline, Subtitle, Direct Link */}
          <div className="lg:col-span-5 space-y-5">
            {/* Linear Eyebrow */}
            <div className="flex items-center gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              <span className="w-6 h-[1.5px] bg-primary" aria-hidden="true" />
              <span>Frequently asked questions</span>
            </div>

            {/* 4-line Headline with Georgia Italic */}
            <h2
              id="faqs-heading"
              className="text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif text-primary tracking-tight leading-[1.12]"
            >
              Everything<br />
              you need<br />
              to <span className="font-georgia italic font-normal text-primary">move</span><br />
              <span className="font-georgia italic font-normal text-primary">forward.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-body leading-relaxed max-w-sm pt-2">
              Still have a question? Speak with our team and we’ll help you explore the right fit for your care home.
            </p>

            {/* Email Link */}
            <div className="pt-2">
              <a
                href="mailto:hello@cantra.care"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:text-primary-hover underline underline-offset-4 transition-colors"
              >
                <span>hello@cantra.care</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: 6 GSAP Animated Accordion Items */}
          <div className="lg:col-span-7 border-t border-border-subtle">
            {defaultCantraFaqs.map((faq, idx) => (
              <FaqItem
                key={faq.question}
                item={faq}
                idx={idx}
                isOpen={openFaq === idx}
                onToggle={() => setOpenFaq(openFaq === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
