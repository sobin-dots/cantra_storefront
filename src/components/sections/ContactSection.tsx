"use client";

import React, { useState } from "react";
import { ChevronDown, ArrowUpRight, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    organisation: "",
    phone: "",
    careSetting: "",
    areaOfInterest: "",
    message: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section
      className="section contact-section py-20 lg:py-28 bg-[#EFF3F3] border-b border-[#465C59]/15"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact & Office Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Linear Eyebrow */}
            <div className="flex items-center gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#0B4F43]">
              <span className="w-6 h-[1.5px] bg-[#0B4F43]" aria-hidden="true" />
              <span>Contact Cantra Care</span>
            </div>

            {/* Headline */}
            <h2
              id="contact-heading"
              className="text-4xl sm:text-5xl lg:text-[54px] font-bold font-serif text-[#0B4F43] tracking-tight leading-[1.12]"
            >
              Tell us what <br />
              <span className="italic font-serif font-normal text-[#0B4F43]">you need.</span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#465C59] leading-relaxed max-w-md pt-1">
              Whether you’re exploring a new care platform or want to understand a particular feature, send us a message and our team will respond during business hours.
            </p>

            {/* Divider */}
            <hr className="border-[#465C59]/15 my-6 sm:my-8" />

            {/* 2-Column Info: Office & Business Hours */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Office */}
              <div className="space-y-1">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#465C59]/80">
                  Office
                </p>
                <p className="font-serif font-bold text-base text-[#0B4F43] pt-1">
                  Cantra Care Ltd.
                </p>
                <p className="text-xs sm:text-sm text-[#465C59] leading-relaxed">
                  London, England<br />
                  United Kingdom
                </p>
              </div>

              {/* Business Hours */}
              <div className="space-y-1">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#465C59]/80">
                  Business Hours
                </p>
                <p className="font-serif font-bold text-base text-[#0B4F43] pt-1">
                  Monday – Friday
                </p>
                <p className="text-xs sm:text-sm text-[#465C59] leading-relaxed">
                  09:00 AM – 05:00 PM
                </p>
              </div>
            </div>

            {/* Divider */}
            <hr className="border-[#465C59]/15 my-6 sm:my-8" />

            {/* Contact Details */}
            <div className="space-y-1.5">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#465C59]/80 mb-2">
                Contact
              </p>
              <p>
                <a
                  href="tel:+442073460250"
                  className="font-serif font-bold text-base sm:text-lg text-[#0B4F43] hover:underline"
                >
                  +44 20 7346 0250
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@cantra.care"
                  className="font-serif font-bold text-base sm:text-lg text-[#0B4F43] hover:underline"
                >
                  hello@cantra.care
                </a>
              </p>
            </div>
          </div>

          {/* Right Column: Request a Demo Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[28px] sm:rounded-[32px] p-7 sm:p-10 lg:p-12 shadow-[0_12px_40px_rgba(11,79,67,0.06)] border border-[#465C59]/10">
              {/* Form Title */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B4F43] tracking-tight">
                  Request a demo
                </h3>
                <p className="text-xs sm:text-sm text-[#465C59] mt-1.5">
                  Tell us a little about your care home.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-12 px-6 rounded-2xl bg-[#EFF3F3]/60 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#0B4F43]/10 text-[#0B4F43] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-[#0B4F43]" />
                  </div>
                  <h4 className="text-2xl font-bold font-serif text-[#0B4F43]">
                    Demo Request Received
                  </h4>
                  <p className="text-xs sm:text-sm text-[#465C59] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-[#0B4F43]">{formData.fullName || "there"}</span>. Our care specialist team will review your requirements and reach out to <span className="font-semibold text-[#0B4F43]">{formData.workEmail || "your email"}</span> during business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        fullName: "",
                        workEmail: "",
                        organisation: "",
                        phone: "",
                        careSetting: "",
                        areaOfInterest: "",
                        message: "",
                      });
                    }}
                    className="inline-block mt-4 text-xs font-bold uppercase tracking-wider text-[#0B4F43] underline hover:text-[#13695A] cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  {/* Row 1: Full name & Work email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-semibold text-[#0B4F43] mb-1.5"
                      >
                        Full name
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your name"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full bg-[#FAFBF9] border border-[#465C59]/20 rounded-xl px-4 py-3 text-sm text-[#0B4F43] placeholder:text-[#465C59]/40 focus:outline-none focus:ring-2 focus:ring-[#0B4F43]/20 focus:border-[#0B4F43] transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="workEmail"
                        className="block text-xs font-semibold text-[#0B4F43] mb-1.5"
                      >
                        Work email
                      </label>
                      <input
                        id="workEmail"
                        name="workEmail"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@organisation.com"
                        value={formData.workEmail}
                        onChange={(e) =>
                          setFormData({ ...formData, workEmail: e.target.value })
                        }
                        className="w-full bg-[#FAFBF9] border border-[#465C59]/20 rounded-xl px-4 py-3 text-sm text-[#0B4F43] placeholder:text-[#465C59]/40 focus:outline-none focus:ring-2 focus:ring-[#0B4F43]/20 focus:border-[#0B4F43] transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Organisation & Phone number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="organisation"
                        className="block text-xs font-semibold text-[#0B4F43] mb-1.5"
                      >
                        Organisation
                      </label>
                      <input
                        id="organisation"
                        name="organisation"
                        type="text"
                        required
                        autoComplete="organization"
                        placeholder="Care home or group"
                        value={formData.organisation}
                        onChange={(e) =>
                          setFormData({ ...formData, organisation: e.target.value })
                        }
                        className="w-full bg-[#FAFBF9] border border-[#465C59]/20 rounded-xl px-4 py-3 text-sm text-[#0B4F43] placeholder:text-[#465C59]/40 focus:outline-none focus:ring-2 focus:ring-[#0B4F43]/20 focus:border-[#0B4F43] transition-all"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1.5">
                        <label
                          htmlFor="phone"
                          className="text-xs font-semibold text-[#0B4F43]"
                        >
                          Phone number
                        </label>
                        <span className="text-[11px] text-[#465C59]/60">Optional</span>
                      </div>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+44"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-[#FAFBF9] border border-[#465C59]/20 rounded-xl px-4 py-3 text-sm text-[#0B4F43] placeholder:text-[#465C59]/40 focus:outline-none focus:ring-2 focus:ring-[#0B4F43]/20 focus:border-[#0B4F43] transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: Care setting & Area of interest */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="careSetting"
                        className="block text-xs font-semibold text-[#0B4F43] mb-1.5"
                      >
                        Care setting
                      </label>
                      <div className="relative">
                        <select
                          id="careSetting"
                          name="careSetting"
                          value={formData.careSetting}
                          onChange={(e) =>
                            setFormData({ ...formData, careSetting: e.target.value })
                          }
                          className="w-full appearance-none bg-[#FAFBF9] border border-[#465C59]/20 rounded-xl px-4 py-3 text-sm text-[#0B4F43] focus:outline-none focus:ring-2 focus:ring-[#0B4F43]/20 focus:border-[#0B4F43] transition-all cursor-pointer pr-10"
                        >
                          <option value="">Select a setting</option>
                          <option value="Residential care home">Residential care home</option>
                          <option value="Nursing home">Nursing home</option>
                          <option value="Dementia care">Dementia care</option>
                          <option value="Supported living">Supported living</option>
                          <option value="Domiciliary & home care">Domiciliary & home care</option>
                          <option value="Care group / Multi-site">Care group / Multi-site</option>
                          <option value="Other">Other</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-[#465C59]/70 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="areaOfInterest"
                        className="block text-xs font-semibold text-[#0B4F43] mb-1.5"
                      >
                        Area of interest
                      </label>
                      <div className="relative">
                        <select
                          id="areaOfInterest"
                          name="areaOfInterest"
                          value={formData.areaOfInterest}
                          onChange={(e) =>
                            setFormData({ ...formData, areaOfInterest: e.target.value })
                          }
                          className="w-full appearance-none bg-[#FAFBF9] border border-[#465C59]/20 rounded-xl px-4 py-3 text-sm text-[#0B4F43] focus:outline-none focus:ring-2 focus:ring-[#0B4F43]/20 focus:border-[#0B4F43] transition-all cursor-pointer pr-10"
                        >
                          <option value="">Select a service</option>
                          <option value="Full platform">Full platform</option>
                          <option value="Care Management & EHR">Care Management & EHR</option>
                          <option value="e-MAR Medication">e-MAR Medication</option>
                          <option value="Staff & Rota Management">Staff & Rota Management</option>
                          <option value="CQC Compliance & Audits">CQC Compliance & Audits</option>
                          <option value="Resident & Family Portal">Resident & Family Portal</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-[#465C59]/70 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Row 4: How can we help? */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-[#0B4F43] mb-1.5"
                    >
                      How can we help?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us about your home, team or current priorities."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-[#FAFBF9] border border-[#465C59]/20 rounded-xl p-4 text-sm text-[#0B4F43] placeholder:text-[#465C59]/40 focus:outline-none focus:ring-2 focus:ring-[#0B4F43]/20 focus:border-[#0B4F43] resize-none transition-all"
                    />
                  </div>

                  {/* Form Footer Row */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[11px] sm:text-xs text-[#465C59]/80 leading-relaxed text-center sm:text-left">
                      We’ll only use your details to respond to this enquiry. Submitting opens your email app.
                    </p>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#0B4F43] hover:bg-[#13695A] text-white text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-md hover:shadow-lg shrink-0"
                    >
                      <span>Request a demo</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
