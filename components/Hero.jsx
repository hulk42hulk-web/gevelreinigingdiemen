import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, MapPin, CheckCircle2 } from "lucide-react";
import GlassCard from "./GlassCard";
import { companyData } from "@/lib/siteData";

export default function Hero() {
  return (
    <section className="relative pt-6 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
      {/* Background architectural light accents */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] bg-gradient-to-br from-sky-200/40 via-blue-100/30 to-transparent rounded-full blur-3xl -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 -left-40 w-[400px] h-[400px] bg-gradient-to-tr from-teal-100/30 via-sky-100/20 to-transparent rounded-full blur-3xl -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Architectural Editorial Content */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-6 lg:space-y-8 z-10">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/90 shadow-sm text-xs font-bold text-[#102A43]">
              <span className="w-2 h-2 rounded-full bg-[#1677FF] animate-pulse" />
              <span className="tracking-wider uppercase text-[#1677FF]">
                GEVELREINIGING • DIEMEN &amp; OMGEVING
              </span>
            </div>

            {/* Architectural H1 with fluid clamp typography */}
            <h1 className="text-[clamp(2.1rem,5vw,3.6rem)] font-extrabold text-[#0A2033] tracking-tight leading-[1.12]">
              Uw gevel weer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1677FF] via-[#0A60DC] to-[#0A2033]">
                in zijn beste vorm.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#526777] max-w-xl leading-relaxed font-normal">
              Professionele gevelreiniging en gevelonderhoud voor woningen en bedrijfspanden in Diemen en omgeving. Veilig, vakkundig en zorgvuldig afgestemd op uw type metselwerk.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl btn-primary text-base font-bold shadow-lg shadow-blue-500/25 group"
              >
                <span>Gratis offerte aanvragen</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/diensten"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl btn-secondary text-base font-semibold"
              >
                <span>Bekijk onze diensten</span>
              </Link>
            </div>

            {/* Quick Trust Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-200/60 max-w-lg">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#102A43]">
                <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0" />
                <span>Geen schade aan stenen</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#102A43]">
                <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0" />
                <span>Milieubewuste aanpak</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#102A43] col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0" />
                <span>Vrijblijvend advies</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual & Floating Glass Panels */}
          <div className="lg:col-span-6 xl:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer decorative glow frame */}
              <div 
                aria-hidden="true" 
                className="absolute -inset-1.5 bg-gradient-to-r from-[#1677FF]/20 via-[#38BDF8]/20 to-[#58CDB7]/20 rounded-3xl blur-xl opacity-70" 
              />

              {/* Main Facade Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-white/90 shadow-2xl bg-white aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  src="/images/hero-facade.jpg"
                  alt="Vakkundig gereinigde bakstenen gevel in Diemen, Nederland"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover object-center transform hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                {/* Subtle gradient overlay */}
                <div 
                  aria-hidden="true" 
                  className="absolute inset-0 bg-gradient-to-t from-[#0A2033]/30 via-transparent to-transparent pointer-events-none" 
                />

                {/* Location indicator badge inside image */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                    <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>Diemen &amp; Amsterdam</span>
                  </div>
                </div>
              </div>

              {/* Floating Glass Panel 1 (Top Right / Offset) */}
              <div className="hidden sm:block absolute -top-6 -right-6 z-20 max-w-[240px]">
                <GlassCard variant="strong" className="p-4 border border-white/90 shadow-xl">
                  <div className="flex items-start gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-[#1677FF] mt-1.5 shrink-0" />
                    <div>
                      <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#1677FF]">
                        Professionele Gevelreiniging
                      </p>
                      <p className="text-xs text-[#102A43] font-medium mt-1 leading-snug">
                        Zorgvuldig afgestemd op de staat van uw gevel.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>

              {/* Floating Glass Panel 2 (Bottom Left / Offset) */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 z-20 max-w-[240px]">
                <GlassCard variant="strong" className="p-4 border border-white/90 shadow-xl">
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#58CDB7] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#0A2033]">
                        Diemen &amp; Omgeving
                      </p>
                      <p className="text-xs text-[#526777] font-medium mt-0.5 leading-snug">
                        Voor particuliere en zakelijke panden.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>

            {/* Mobile-only stacked glass cards to prevent overflow */}
            <div className="grid grid-cols-1 sm:hidden gap-3 mt-4">
              <GlassCard variant="subtle" className="p-3.5 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1677FF] shrink-0" />
                <p className="text-xs font-medium text-[#102A43]">
                  <strong>Professionele gevelreiniging:</strong> Zorgvuldig afgestemd op uw stenen.
                </p>
              </GlassCard>
              <GlassCard variant="subtle" className="p-3.5 flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-[#58CDB7] shrink-0" />
                <p className="text-xs font-medium text-[#102A43]">
                  <strong>Diemen &amp; omgeving:</strong> Particuliere en zakelijke panden.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
