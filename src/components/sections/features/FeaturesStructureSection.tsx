import React from "react";

export function FeaturesStructureSection() {
  const structureItems = [
    {
      num: "01",
      eyebrow: "SPACE AT A GLANCE",
      title: "Know where every bed stands.",
      desc: "See your occupancy and bed availability in one place, so you always have an up-to-date view of your home.",
      img: "/images/features-page/man-nurse-retirement-home.jpg",
    },
    {
      num: "02",
      eyebrow: "A FAMILIAR STRUCTURE",
      title: "Mirror how your home is organised.",
      desc: "Set up units, wings, rooms and beds to match your care home, making it easier for your team to find information.",
      img: "/images/features-page/senior-woman-smiling-with-caretaker.jpeg",
    },
  ];

  return (
    <section
      id="structure"
      className="section structure-section py-20 lg:py-28 bg-surface border-b border-border-subtle"
      aria-labelledby="structure-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
        {/* Section Heading Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              <span className="w-6 h-[1.5px] bg-primary" aria-hidden="true" />
              <span>The home-wide picture</span>
            </div>
            <h2
              id="structure-heading"
              className="text-4xl sm:text-5xl lg:text-[54px] font-normal font-serif text-primary tracking-tight leading-[1.12]"
            >
              See the structure <br />
              behind a busy home.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-primary/80 max-w-sm leading-relaxed lg:pb-2">
            Get a clear view of residents, rooms, units, beds and occupancy—without spreadsheets or fragmented records.
          </p>
        </div>

        {/* 2 Photo Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {structureItems.map((item) => (
            <article
              key={item.num}
              className="bg-white rounded-3xl p-7 sm:p-10 border border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-2 mb-6">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-primary/60 block">
                  {item.num} / {item.eyebrow}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-primary leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-primary/80 leading-relaxed pt-1">
                  {item.desc}
                </p>
              </div>

              {/* Photo */}
              <div className="rounded-2xl w-full h-56 sm:h-64 overflow-hidden border border-border-subtle relative mt-auto">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
