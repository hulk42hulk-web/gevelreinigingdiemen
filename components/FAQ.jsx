"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import GlassCard from "./GlassCard";

export default function FAQ({ items, title = "Veelgestelde vragen over gevelreiniging", subtitle = "Heldere antwoorden op veelvoorkomende vragen over methoden, aanpak en offertes in Diemen." }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-bold text-[#1677FF] uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FAQ &amp; Informatie</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2033] tracking-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-[#526777] font-normal leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            const headingId = `faq-heading-${idx}`;
            const panelId = `faq-panel-${idx}`;

            return (
              <GlassCard
                key={idx}
                variant="card"
                className={`transition-all duration-200 border ${
                  isOpen ? "border-[#1677FF]/40 bg-white/90 shadow-md" : "border-white/80"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    id={headingId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1677FF] rounded-2xl"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#0A2033] leading-snug">
                      {item.q}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 bg-[#1677FF] text-white"
                          : "bg-slate-100 text-[#526777]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headingId}
                    className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#526777] leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200"
                  >
                    {item.a}
                  </div>
                )}
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
