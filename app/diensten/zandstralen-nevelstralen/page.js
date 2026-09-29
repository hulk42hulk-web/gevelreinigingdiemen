import Link from "next/link";
import { CheckCircle2, ShieldCheck, Sparkles, ArrowRight, Waves } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import GlassCard from "@/components/GlassCard";
import ContactCTA from "@/components/ContactCTA";
import FAQ from "@/components/FAQ";
import { companyData } from "@/lib/siteData";
import { constructMetadata, getServiceSchema, getFAQSchema } from "@/lib/seo";

const service = companyData.services.find((s) => s.slug === "zandstralen-nevelstralen");

export const metadata = constructMetadata({
  title: "Zandstralen & Nevelstralen Diemen | Milde & Krachtige Straaltechniek",
  description:
    "Professioneel zandstralen en nevelstralen in Diemen en omgeving. Verwijderen van hardnekkig vuil, oude verflagen en zware roetaanslag. Vraag vrijblijvend advies aan.",
  path: "/diensten/zandstralen-nevelstralen",
});

export default function ZandstralenPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Diensten", url: "/diensten" },
    { name: service.title, url: `/diensten/${service.slug}` },
  ];

  const serviceSchema = getServiceSchema(service);
  const faqSchema = getFAQSchema(service.faqs);

  return (
    <div className="architectural-bg py-8 lg:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Header */}
        <div className="max-w-3xl my-8 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-bold text-[#1677FF] uppercase tracking-wider">
            <span>Dienst 02 • Straaltechniek</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2033] tracking-tight leading-tight">
            {service.headline}
          </h1>

          <p className="text-base sm:text-lg text-[#526777] font-normal leading-relaxed">
            {service.fullDescription}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl btn-primary text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md"
            >
              Gratis offerte aanvragen
            </Link>
            <a
              href={companyData.contact.phoneHref}
              className="px-5 py-3.5 rounded-xl btn-secondary text-xs sm:text-sm font-semibold"
            >
              Bel {companyData.contact.phone}
            </a>
          </div>
        </div>

        {/* Comparison: Zandstralen vs Nevelstralen */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          <GlassCard variant="card" className="p-8 border border-white/80 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#1677FF] uppercase tracking-wider">
              <Waves className="w-4 h-4" />
              <span>Nevelstralen (Mild &amp; Zorgvuldig)</span>
            </div>
            <h2 className="text-xl font-bold text-[#0A2033]">
              Gecontroleerde neveltechniek voor kwetsbare gevels
            </h2>
            <p className="text-xs sm:text-sm text-[#526777] leading-relaxed">
              Nevelstralen combineert een uiterst fijn, inert straalmiddel met een nevel van water onder minimale werkdruk. Door het wervelende effect wordt vervuiling geleidelijk losgeweekt zonder de originele beschermende buitenlaag van de baksteen aan te tasten.
            </p>
            <ul className="space-y-2.5 text-xs text-[#102A43] pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0" />
                <span>Ideaal voor monumentale panden en poreuze stenen</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0" />
                <span>Minimale stofontwikkeling dankzij waternevel</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0" />
                <span>Veilig rond kozijnen en ornamenten</span>
              </li>
            </ul>
          </GlassCard>

          <GlassCard variant="card" className="p-8 border border-white/80 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0A2033] uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#1677FF]" />
              <span>Zandstralen (Krachtig &amp; Diepgaand)</span>
            </div>
            <h2 className="text-xl font-bold text-[#0A2033]">
              Intensieve reiniging voor harde ondergronden
            </h2>
            <p className="text-xs sm:text-sm text-[#526777] leading-relaxed">
              Voor hardnekkige industriële coatings, dikke verflagen of zware roetafzettingen op harde stenen of beton biedt traditioneel zandstralen een krachtige uitkomst. We passen dit uitsluitend toe na een grondige inspectie van de hardheid van de stenen.
            </p>
            <ul className="space-y-2.5 text-xs text-[#102A43] pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0" />
                <span>Geschikt voor harde klinkers en betonvlakken</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0" />
                <span>Verwijdert oude verfresten en zware vervuiling</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0" />
                <span>Grondige afplakking van glas en omliggend werk</span>
              </li>
            </ul>
          </GlassCard>
        </div>

        {/* FAQs */}
        <FAQ
          items={service.faqs}
          title={`Veelgestelde vragen over ${service.title}`}
          subtitle="Feitelijke antwoorden over de geschiktheid van straaltechnieken voor uw pand."
        />

        {/* Internal links */}
        <div className="my-12 p-8 rounded-2xl bg-white/60 border border-white/80">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#102A43] mb-4">
            Aanvullende gevelbehandelingen
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/diensten/gevelreiniging"
              className="p-4 rounded-xl bg-white/80 hover:bg-white border border-slate-100 transition-colors block"
            >
              <span className="font-bold text-xs text-[#0A2033] block mb-1">
                Standaard gevelreiniging
              </span>
              <span className="text-[11px] text-[#526777]">
                Overzicht van algehele gevelreiniging en milde methoden.
              </span>
            </Link>

            <Link
              href="/diensten/gevel-impregneren"
              className="p-4 rounded-xl bg-white/80 hover:bg-white border border-slate-100 transition-colors block"
            >
              <span className="font-bold text-xs text-[#0A2033] block mb-1">
                Gevel impregneren
              </span>
              <span className="text-[11px] text-[#526777]">
                Voorkom snelle hervervuiling na het stralen van de gevel.
              </span>
            </Link>
          </div>
        </div>

        <ContactCTA />
      </div>
    </div>
  );
}
