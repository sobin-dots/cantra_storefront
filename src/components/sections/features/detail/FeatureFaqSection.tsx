"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { FeatureData } from "@/data/features";

interface FeatureFaqSectionProps {
  data: FeatureData;
}

interface FeatureFaqItemProps {
  question: string;
  answer: string;
  idx: number;
  isOpen: boolean;
  onToggle: () => void;
}

function FeatureFaqItem({ question, answer, idx, isOpen, onToggle }: FeatureFaqItemProps) {
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
          <span className="text-xs font-mono font-medium text-primary/50 shrink-0 w-6">
            0{idx + 1}
          </span>
          <h3 className="text-lg sm:text-xl font-normal font-serif text-primary group-hover:text-primary-hover transition-colors leading-snug">
            {question}
          </h3>
        </div>
        <span
          className={`text-xl font-light text-primary w-6 h-6 flex items-center justify-center shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-90" : ""
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
        <div className="pl-10 sm:pl-12 pb-6 pr-4 sm:pr-8 text-sm sm:text-base text-primary/80 leading-relaxed">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FeatureFaqSection({ data }: FeatureFaqSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section
      id="faqs"
      className="section feature-faq-section py-20 lg:py-28 bg-surface-warm border-b border-border-subtle"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              <span className="w-6 h-[1.5px] bg-primary" aria-hidden="true" />
              <span>Frequently asked questions</span>
            </div>

            <h2
              id="faq-heading"
              className="text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif text-primary tracking-tight leading-[1.12]"
            >
              {data.faq.title}
            </h2>

            <p className="text-sm sm:text-base text-primary/80 leading-relaxed max-w-sm">
              {data.faq.description}
            </p>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
              >
                <span>Still have questions? Speak to our team</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Animated Accordion Items */}
          <div className="lg:col-span-7">
            <div className="border-t border-border-subtle">
              {data.faq.questions.map((q, idx) => (
                <FeatureFaqItem
                  key={q.question}
                  question={q.question}
                  answer={q.answer}
                  idx={idx}
                  isOpen={openFaq === idx}
                  onToggle={() => toggleFaq(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
