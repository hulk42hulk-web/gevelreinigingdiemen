import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, MapPin, CheckCircle2 } from "lucide-react";
import GlassCard from "./GlassCard";
import { companyData } from "@/lib/siteData";

export default function Hero() {
  return (
    <section className="relative pt-4 pb-12 sm:pt-8 sm:pb-20 lg:pt-12 lg:pb-24 overflow-hidden">
      {/* Background architectural light accents */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 right-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-gradient-to-br from-sky-200/35 via-blue-100/25 to-transparent rounded-full blur-3xl -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 -left-32 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-gradient-to-tr from-teal-100/25 via-sky-100/15 to-transparent rounded-full blur-3xl -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Architectural Editorial Content */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-4 sm:space-y-6 lg:space-y-8 z-10">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 rounded-full bg-white/85 backdrop-blur-md border border-white/90 shadow-2xs text-[10px] sm:text-xs font-bold text-[#102A43]">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#1677FF] animate-pulse" />
              <span className="tracking-wider uppercase text-[#1677FF]">
                GEVELREINIGING • DIEMEN &amp; OMGEVING
              </span>
            </div>

            {/* Architectural H1 with fluid clamp typography */}
            <h1 className="text-[clamp(1.75rem,5.8vw,3.5rem)] font-extrabold text-[#0A2033] tracking-tight leading-[1.14]">
              Uw gevel weer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1677FF] via-[#0A60DC] to-[#0A2033]">
                in zijn beste vorm.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base lg:text-lg text-[#526777] max-w-xl leading-relaxed font-normal">
              Professionele gevelreiniging en gevelonderhoud voor woningen en bedrijfspanden in Diemen en omgeving. Veilig, vakkundig en zorgvuldig afgestemd op uw type metselwerk.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-1 sm:pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-xl btn-primary text-sm sm:text-base font-bold shadow-md shadow-blue-500/20 group"
              >
                <span>Gratis offerte aanvragen</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/diensten"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-4 rounded-xl btn-secondary text-sm sm:text-base font-semibold"
              >
                <span>Bekijk onze diensten</span>
              </Link>
            </div>

            {/* Quick Trust Highlights */}
            <div className="pt-3 sm:pt-4 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 border-t border-slate-200/60 max-w-lg">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#102A43]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1677FF] shrink-0" />
                <span>Geen schade aan stenen</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#102A43]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1677FF] shrink-0" />
                <span>Milieubewuste aanpak</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#102A43]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1677FF] shrink-0" />
                <span>Vrijblijvend advies</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual & Floating Glass Panels */}
          <div className="lg:col-span-6 xl:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer decorative glow frame */}
              <div 
                aria-hidden="true" 
                className="absolute -inset-1 bg-gradient-to-r from-[#1677FF]/20 via-[#38BDF8]/20 to-[#58CDB7]/20 rounded-3xl blur-lg opacity-60" 
              />

              {/* Main Facade Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-white/90 shadow-xl bg-white aspect-[16/11] sm:aspect-[16/11]">
                <Image
                  src="/images/hero-facade.jpg"
                  alt="Vakkundig gereinigde bakstenen gevel in Diemen, Nederland"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover object-center transform hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                <div 
                  aria-hidden="true" 
                  className="absolute inset-0 bg-gradient-to-t from-[#0A2033]/30 via-transparent to-transparent pointer-events-none" 
                />

                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-black/45 backdrop-blur-md text-white text-[11px] sm:text-xs font-medium border border-white/20">
                    <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#38BDF8]" />
                    <span>Diemen &amp; Amsterdam</span>
                  </div>
                </div>
              </div>

              {/* Floating Glass Panel 1 (Desktop) */}
              <div className="hidden sm:block absolute -top-5 -right-5 z-20 max-w-[230px]">
                <GlassCard variant="strong" className="p-3.5 border border-white/90 shadow-lg">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#1677FF] mt-1 shrink-0" />
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#1677FF]">
                        Professionele Gevelreiniging
                      </p>
                      <p className="text-xs text-[#102A43] font-medium mt-0.5 leading-snug">
                        Zorgvuldig afgestemd op de staat van uw gevel.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>

              {/* Floating Glass Panel 2 (Desktop) */}
              <div className="hidden sm:block absolute -bottom-5 -left-5 z-20 max-w-[230px]">
                <GlassCard variant="strong" className="p-3.5 border border-white/90 shadow-lg">
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#58CDB7] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#0A2033]">
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

            {/* Mobile-only stacked glass cards */}
            <div className="grid grid-cols-1 sm:hidden gap-2.5 mt-3">
              <GlassCard variant="subtle" className="p-3 flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[#1677FF] shrink-0" />
                <p className="text-xs font-medium text-[#102A43]">
                  <strong>Professionele gevelreiniging:</strong> Afgestemd op uw stenen.
                </p>
              </GlassCard>
              <GlassCard variant="subtle" className="p-3 flex items-center gap-2.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#58CDB7] shrink-0" />
                <p className="text-xs font-medium text-[#102A43]">
                  <strong>Diemen &amp; regio:</strong> Particuliere en zakelijke panden.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
