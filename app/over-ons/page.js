import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, CheckCircle2, ArrowRight, MapPin, Sparkles } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import GlassCard from "@/components/GlassCard";
import Process from "@/components/Process";
import ContactCTA from "@/components/ContactCTA";
import { companyData } from "@/lib/siteData";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Over Ons | Gevelreiniging Diemen — Specialistisch Gevelonderhoud",
  description:
    "Maak kennis met Gevelreiniging Diemen. Vakkundige en milieubewuste gevelspecialisten gevestigd aan de Diemermere 1 in Diemen. Lees over onze werkwijze en kernwaarden.",
  path: "/over-ons",
});

export default function OverOnsPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Over ons", url: "/over-ons" },
  ];

  return (
    <div className="architectural-bg py-4 sm:py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center my-4 sm:my-8">
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/60 text-[10px] sm:text-xs font-bold text-[#1677FF] uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              <span>Over Gevelreiniging Diemen</span>
            </div>

            <h1 className="text-[clamp(1.65rem,5.5vw,3rem)] font-extrabold text-[#0A2033] tracking-tight leading-[1.18]">
              Specialist in gevelreiniging en gevelonderhoud
            </h1>

            <p className="text-sm sm:text-base text-[#526777] font-normal leading-relaxed">
              Gevelreiniging Diemen is een gespecialiseerd gevelbedrijf gevestigd aan de Diemermere 1 in Diemen. Wij richten ons op het vakkundig reinigen, herstellen en beschermen van buitengevels van particuliere woningen en commerciële gebouwen in Diemen en omliggende gemeenten.
            </p>

            <GlassCard variant="card" className="p-4 sm:p-5 border border-white/90 shadow-sm max-w-xl">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-50 to-sky-100/70 border border-blue-100 flex items-center justify-center text-[#1677FF] shrink-0 shadow-xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-xs sm:text-sm text-[#0A2033] block">
                    Lokaal geworteld in Diemen
                  </span>
                  <p className="text-xs text-[#526777] mt-1 leading-relaxed">
                    Actief in Diemen-Centrum, Diemen-Noord, Diemen-Zuid, Amsterdam en regio. Snelle communicatie en zorgvuldig vakwerk.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden border border-white/90 shadow-xl aspect-[16/10] sm:aspect-[4/3]">
              <Image
                src="/images/hero-facade.jpg"
                alt="Architecturaal metselwerk in Diemen"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Onze Kernwaarden */}
        <section className="my-10 sm:my-16">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0A2033]">
              Onze Kernwaarden
            </h2>
            <p className="text-xs sm:text-sm text-[#526777]">
              Geen loze beloftes, maar een consistente en verantwoorde manier van werken.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {companyData.coreValues.map((val) => (
              <GlassCard key={val.title} variant="card" className="p-5 sm:p-6 border border-white/80">
                <span className="text-xs font-bold text-[#1677FF] uppercase tracking-wider block mb-1.5">
                  {val.title}
                </span>
                <p className="text-xs sm:text-sm text-[#526777] leading-relaxed">
                  {val.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* 4-Step Process Section */}
        <Process />

        {/* Werkgebied & Doelgroepen */}
        <section className="my-10 sm:my-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <GlassCard variant="card" className="p-6 sm:p-8 border border-white/80 space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-[#0A2033]">
                Ons Werkgebied
              </h3>
              <p className="text-xs sm:text-sm text-[#526777] leading-relaxed">
                Vanuit onze locatie aan de Diemermere 1 bedienen we klanten in:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
                {companyData.coverageArea.map((area) => (
                  <div
                    key={area}
                    className="p-2 sm:p-2.5 rounded-lg bg-white/70 border border-slate-100 text-[11px] sm:text-xs font-semibold text-[#102A43] flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1677FF] shrink-0" />
                    <span className="truncate">{area}</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard variant="card" className="p-6 sm:p-8 border border-white/80 space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-[#0A2033]">
                Voor Wie Wij Werken
              </h3>
              <p className="text-xs sm:text-sm text-[#526777] leading-relaxed">
                Wij werken zowel voor particuliere huiseigenaren als voor zakelijke opdrachtgevers:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-[#102A43] pt-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                  <span>Particuliere woningen (hoekwoningen, tussenwoningen, villa&apos;s)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                  <span>Appartementencomplexen en VvE-beheerders</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                  <span>Winkels en horecapanden met gevelvervuiling of graffiti</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                  <span>Kantoren en commercieel vastgoed</span>
                </li>
              </ul>
            </GlassCard>
          </div>
        </section>

        <ContactCTA />
      </div>
    </div>
  );
}
