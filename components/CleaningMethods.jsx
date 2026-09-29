import { Check, Flame, Waves, Sparkles, ShieldCheck } from "lucide-react";
import GlassCard from "./GlassCard";
import { companyData } from "@/lib/siteData";

export default function CleaningMethods() {
  const methodIcons = {
    stoom: Flame,
    soft: Waves,
    zandstralen: Sparkles,
    algen: Sparkles,
    impregneren: ShieldCheck,
  };

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-bold text-[#1677FF] uppercase tracking-wider">
            <span>Methodiek &amp; Veiligheid</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2033] tracking-tight">
            De juiste methode voor iedere gevel
          </h2>
          <p className="text-sm sm:text-base text-[#526777] font-normal leading-relaxed">
            Geen gevel is hetzelfde. De reinigingstechniek wordt nauwkeurig gekozen op basis van de steensoort, het voegwerk en de aard van de vervuiling om schade te voorkomen.
          </p>
        </div>

        {/* Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyData.methods.map((method) => {
            const Icon = methodIcons[method.id] || Sparkles;
            return (
              <GlassCard
                key={method.id}
                variant="card"
                className="p-6 sm:p-7 flex flex-col justify-between border border-white/80"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#1677FF] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-[#0A2033] mb-2">
                    {method.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#526777] leading-relaxed mb-4">
                    {method.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100 text-xs">
                  <div>
                    <span className="font-bold text-[#102A43] block mb-1">
                      Geschikt voor:
                    </span>
                    <p className="text-[#526777] leading-snug">
                      {method.suitableSurfaces}
                    </p>
                  </div>

                  <div className="bg-white/60 p-2.5 rounded-lg border border-slate-100">
                    <span className="font-bold text-[#1677FF] block text-[11px] uppercase tracking-wider mb-0.5">
                      Toepassing:
                    </span>
                    <p className="text-[#102A43] text-xs font-medium">
                      {method.idealFor}
                    </p>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
