import { Search, Compass, Wrench, CheckCircle } from "lucide-react";
import GlassCard from "./GlassCard";
import { companyData } from "@/lib/siteData";

export default function Process() {
  const stepIcons = [Search, Compass, Wrench, CheckCircle];

  return (
    <section id="aanpak" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-t from-blue-50/50 to-transparent -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-bold text-[#1677FF] uppercase tracking-wider">
            <span>Onze Werkwijze</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2033] tracking-tight">
            In 4 stappen naar een vlekkeloze gevel
          </h2>
          <p className="text-sm sm:text-base text-[#526777] font-normal leading-relaxed">
            Geen overhaaste werkzaamheden of risico&apos;s op steenschade. We werken volgens een vaste, zorgvuldige en transparante volgorde.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Subtle connecting architectural line behind steps for desktop */}
          <div 
            aria-hidden="true" 
            className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 bg-gradient-to-r from-blue-200 via-sky-300 to-teal-200 -z-10" 
          />

          {companyData.processSteps.map((step, idx) => {
            const Icon = stepIcons[idx] || Search;
            return (
              <GlassCard
                key={step.step}
                variant="card"
                className="p-6 sm:p-7 relative flex flex-col justify-between border border-white/80"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-2xl font-black text-[#1677FF]">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-200/60 flex items-center justify-center text-[#0A2033]">
                      <Icon className="w-5 h-5 text-[#1677FF]" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#0A2033] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#526777] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#58CDB7]" />
                  <span>Stap {step.step} van 04</span>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
