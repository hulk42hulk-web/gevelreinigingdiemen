import { Shield, Clock, Leaf, FileCheck, Star } from "lucide-react";
import { companyData } from "@/lib/siteData";

export default function TrustSection() {
  const trustIcons = {
    Zorgvuldig: Shield,
    Betrouwbaar: Clock,
    Milieubewust: Leaf,
    Transparant: FileCheck,
  };

  return (
    <section className="relative py-6 sm:py-8 lg:py-10 border-y border-slate-200/60 bg-white/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-center">
          {/* Verified Google Badge */}
          <div className="lg:col-span-4 flex items-center justify-between lg:justify-start gap-3 p-3 sm:p-4 rounded-xl bg-white/85 border border-white/90 shadow-2xs">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <span className="font-bold text-base sm:text-lg text-[#1677FF]">G</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm font-extrabold text-[#0A2033]">
                    {companyData.rating.google.score}
                  </span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-[#526777] font-medium leading-none mt-0.5">
                  {companyData.rating.google.sublabel} • Google Reviews
                </p>
              </div>
            </div>

            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 shrink-0">
              Geverifieerd
            </span>
          </div>

          {/* 4 Pillars Trust Bar */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {companyData.coreValues.map((val) => {
              const Icon = trustIcons[val.title] || Shield;
              return (
                <div
                  key={val.title}
                  className="p-2.5 sm:p-3.5 rounded-xl bg-white/60 hover:bg-white/90 border border-white/80 transition-colors shadow-2xs flex flex-col justify-center"
                >
                  <div className="flex items-center gap-1.5 mb-0.5 sm:mb-1">
                    <Icon className="w-3.5 h-3.5 text-[#1677FF] shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-[#0A2033] truncate">
                      {val.title}
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-[#526777] line-clamp-2 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
