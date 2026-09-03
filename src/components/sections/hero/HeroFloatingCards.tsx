import React from "react";
import { Mic, PhoneOff, Video, MessageSquare } from "lucide-react";

export function HeroFloatingCards() {
  return (
    <>
      {/* 1. Top-Left Overlapping Caregiver Photo */}
      <div className="absolute -top-6 -left-4 sm:-top-7 sm:-left-6 z-20">
        <div className="w-20 sm:w-24 h-24 sm:h-28 rounded-2xl overflow-hidden border-2 border-white shadow-2xl bg-surface-pill">
          <img
            src="/Rectangle%2058.png"
            alt="Caregiver smiling"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 2. Right Overlapping Laptop Photo & Floating "New Chat" Pill */}
      <div className="hidden sm:block absolute top-6 -right-5 lg:-right-7 z-20">
        {/* Floating New Chat Pill */}
        <div className="absolute -bottom-2.5 -right-2 z-30 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-border shadow-xl text-[11px] font-bold text-primary">
          <MessageSquare className="w-3 h-3" />
          <span>New Chat</span>
        </div>

        {/* Rectangular Photo Card */}
        <div className="w-24 sm:w-28 h-24 sm:h-28 rounded-2xl overflow-hidden border-2 border-white shadow-2xl bg-surface-pill">
          <img
            src="/Rectangle%2059.png"
            alt="Caregiver at laptop"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 3. Bottom-Left Overlapping Call Widget */}
      <div className="absolute -bottom-5 -left-3 sm:-bottom-6 sm:-left-4 z-20 bg-white p-2.5 sm:p-3 rounded-2xl border border-border shadow-2xl space-y-2">
        <div className="flex items-center justify-center">
          <div className="flex -space-x-1.5 overflow-hidden">
            <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden bg-surface">
              <img src="/Rectangle%2059.png" alt="Carer Sarah" className="w-full h-full object-cover" />
            </div>
            <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden bg-surface">
              <img src="/Rectangle%2065.png" alt="Carer David" className="w-full h-full object-cover" />
            </div>
            <div className="w-7 h-7 rounded-full bg-primary text-surface font-bold text-[9px] flex items-center justify-center border-2 border-white">
              MG
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-1.5 pt-1 border-t border-border-subtle">
          <div className="w-6 h-6 rounded-full bg-surface text-primary flex items-center justify-center cursor-pointer hover:bg-surface-pill">
            <Video className="w-3 h-3" />
          </div>
          <div className="w-6 h-6 rounded-full bg-surface text-primary flex items-center justify-center cursor-pointer hover:bg-surface-pill">
            <Mic className="w-3 h-3" />
          </div>
          <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center cursor-pointer hover:bg-red-600 shadow-sm">
            <PhoneOff className="w-3 h-3" />
          </div>
        </div>
      </div>
    </>
  );
}
