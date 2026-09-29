import Link from "next/link";
import { CheckCircle2, ShieldCheck, Sparkles, ArrowRight, Hammer } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import GlassCard from "@/components/GlassCard";
import ContactCTA from "@/components/ContactCTA";
import FAQ from "@/components/FAQ";
import { companyData } from "@/lib/siteData";
import { constructMetadata, getServiceSchema, getFAQSchema } from "@/lib/seo";

const service = companyData.services.find((s) => s.slug === "voegwerk");

export const metadata = constructMetadata({
  title: "Voegwerk Reinigen en Herstellen Diemen | Vakkundig Voegonderhoud",
  description:
    "Voegwerk reinigen en herstellen in Diemen en regio Amsterdam. Behoud van waterdichtheid en een strakke, egale gevelaanblik. Vrijblijvende inspectie en offerte.",
  path: "/diensten/voegwerk",
});

export default function VoegwerkPage() {
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
            <span>Dienst 03 • Gevelconstructie &amp; Voegen</span>
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

        {/* Process & Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          <GlassCard variant="card" className="p-8 border border-white/80 space-y-4">
            <h2 className="text-xl font-bold text-[#0A2033]">
              Het belang van solide voegwerk
            </h2>
            <p className="text-xs sm:text-sm text-[#526777] leading-relaxed">
              Voegen nemen circa 15 tot 20% van het totale geveloppervlak in beslag. Wanneer voegen verouderen en poreus worden, kan slagregen de spouwmuur binnendringen, wat binnenshuis vochtplekken en schimmel kan veroorzaken.
            </p>
            <ul className="space-y-3 pt-2">
              {service.keyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#102A43]">
                  <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard variant="card" className="p-8 border border-white/80 space-y-4 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#0A2033] mb-2">
                Stappenplan bij voegwerkherstel
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-[#526777]">
                <div className="p-3 rounded-lg bg-white/70 border border-slate-100">
                  <span className="font-bold text-[#0A2033] block mb-0.5">1. Visuele inspectie</span>
                  Beoordeling van hechtingsverlies, verpulvering en vorstschade.
                </div>
                <div className="p-3 rounded-lg bg-white/70 border border-slate-100">
                  <span className="font-bold text-[#0A2033] block mb-0.5">2. Zorgvuldig verwijderen</span>
                  Plaatselijk uithakken of uitslijpen van rotte voegen zonder de stenen te raken.
                </div>
                <div className="p-3 rounded-lg bg-white/70 border border-slate-100">
                  <span className="font-bold text-[#0A2033] block mb-0.5">3. Opnieuw opvoegen</span>
                  Aanbrengen van mortel met exact passende korrelgrootte en kleurnuance.
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/diensten/gevelreiniging"
                className="text-xs font-bold text-[#1677FF] hover:underline inline-flex items-center gap-1"
              >
                <span>Combineer met gevelreiniging</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </GlassCard>
        </div>

        {/* FAQs */}
        <FAQ
          items={service.faqs}
          title={`Veelgestelde vragen over ${service.title}`}
          subtitle="Heldere antwoorden over het renoveren en reinigen van voegmortel."
        />

        <ContactCTA />
      </div>
    </div>
  );
}
