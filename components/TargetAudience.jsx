import { Home, Building2, Store, Landmark, ArrowRight } from "lucide-react";
import Link from "next/link";
import GlassCard from "./GlassCard";
import { companyData } from "@/lib/siteData";

export default function TargetAudience() {
  const audienceIcons = [Home, Building2, Store, Landmark];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-[#EAF1F5]/40 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-bold text-[#1677FF] uppercase tracking-wider">
            <span>Voor Wie Wij Werken</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2033] tracking-tight">
            Voor particulieren en zakelijke panden
          </h2>
          <p className="text-sm sm:text-base text-[#526777] font-normal leading-relaxed">
            Of het nu gaat om een monumentale tussenwoning, een modern appartementencomplex of een kantoorpand in Diemen: wij leveren passende gevelzorg op maat.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.targetAudiences.map((audience, idx) => {
            const Icon = audienceIcons[idx] || Home;
            return (
              <GlassCard
                key={audience.title}
                variant="card"
                className="p-6 sm:p-7 flex flex-col justify-between border border-white/80"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#1677FF] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                      {audience.subtitle}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-[#102A43]">
                      <Icon className="w-4 h-4 text-[#1677FF]" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#0A2033] mb-2">
                    {audience.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#526777] leading-relaxed mb-4">
                    {audience.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-[#102A43] uppercase tracking-wide block mb-1">
                    Aandachtspunten:
                  </span>
                  <p className="text-xs text-[#526777] leading-snug">
                    {audience.focus}
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Link to Contact */}
        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1677FF] hover:underline"
          >
            <span>Vraag een offerte aan voor uw type pand</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
