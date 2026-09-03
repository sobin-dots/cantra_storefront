import React from "react";

export function RolesSection() {
  const roleRows = [
    {
      role: "Home manager",
      desc: "Oversight, staffing and reports",
      idx: "01",
    },
    {
      role: "Nurse",
      desc: "Care plans, medication and clinical records",
      idx: "02",
    },
    {
      role: "Carer",
      desc: "Today’s care, notes and assigned tasks",
      idx: "03",
    },
  ];


  return (
    <section
      className="section roles-section pt-14 pb-14 lg:pt-20 lg:pb-0 bg-light border-b border-border-subtle overflow-hidden"
      id="roles"
      aria-labelledby="roles-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 lg:space-y-8">
        {/* Top Header & Role Rows Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Eyebrow, 3-Line Headline, Subtitle */}
          <div className="lg:col-span-6 space-y-4">
            {/* Linear Eyebrow */}
            <div className="flex items-center gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              <span className="w-6 h-[1.5px] bg-primary" aria-hidden="true" />
              <span>Role-based access</span>
            </div>

            {/* 3-line Headline with Georgia Italic */}
            <h2
              id="roles-heading"
              className="text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif text-primary tracking-tight leading-[1.12]"
            >
              The right<br />
              view for <span className="italic font-serif font-normal text-primary">every</span><br />
              <span className="italic font-serif font-normal text-primary">responsibility.</span>
            </h2>

            {/* Explainer Subtitle */}
            <p className="text-sm sm:text-base text-body leading-relaxed max-w-md pt-1">
              Give each person access suited to their role, helping them focus on the information and actions that matter most.
            </p>
          </div>

          {/* Right Column: 3 Role Rows with Circular Number Badges */}
          <div className="lg:col-span-6 pt-1 lg:pt-4">
            <div className="border-t border-border-subtle">
              {roleRows.map((item) => (
                <div
                  key={item.idx}
                  className="py-3.5 sm:py-4 flex items-center justify-between border-b border-border-subtle gap-4"
                >
                  <span className="text-xs sm:text-sm font-semibold text-body/80 w-28 sm:w-36 shrink-0">
                    {item.role}
                  </span>
                  <span className="text-sm sm:text-base font-bold font-serif text-primary flex-1">
                    {item.desc}
                  </span>
                  <div className="w-6 h-6 rounded-full border border-border flex items-center justify-center text-[10px] font-mono text-body/70 shrink-0">
                    {item.idx}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Staff Rota Management Responsive Image (Hidden on Mobile) */}
        <img
          src="/images/staff-rota-management/section-img.png"
          alt="Cantra Shift Planner & Staff Rota Management"
          className="hidden md:block w-full h-auto object-contain pt-2 -mb-1"
          loading="lazy"
        />
      </div>
    </section>
  );
}
