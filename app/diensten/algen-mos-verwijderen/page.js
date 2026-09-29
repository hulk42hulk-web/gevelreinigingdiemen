import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Sparkles, ArrowRight, Leaf } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import GlassCard from "@/components/GlassCard";
import ContactCTA from "@/components/ContactCTA";
import FAQ from "@/components/FAQ";
import { companyData } from "@/lib/siteData";
import { constructMetadata, getServiceSchema, getFAQSchema } from "@/lib/seo";

const service = companyData.services.find((s) => s.slug === "algen-mos-verwijderen");

export const metadata = constructMetadata({
  title: "Algen & Mos Verwijderen Gevel Diemen | Duurzaam Schoon",
  description:
    "Grondige verwijdering van algen, mos en groene aanslag van gevels in Diemen en omgeving. Effectieve thermische reiniging met behoud van stenen en voegwerk.",
  path: "/diensten/algen-mos-verwijderen",
});

export default function AlgenMosPage() {
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
            <span>Dienst 07 • Biologische Aangroei</span>
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

        {/* Visual & Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 items-center">
          <GlassCard variant="card" className="p-8 border border-white/80 space-y-4">
            <h2 className="text-xl font-bold text-[#0A2033]">
              Waarom tijdige verwijdering verstandig is
            </h2>
            <p className="text-xs sm:text-sm text-[#526777] leading-relaxed">
              Mossen en algen hechten zich met microscopische wortels vast in de poreuze buitenschil van baksteen en voegmortel. Doordat zij water absorberen en vasthouden, blijft de gevel continu vochtig, wat in de wintermaanden het risico op vorstschade vergroot.
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

          <div className="relative rounded-2xl overflow-hidden border border-white/90 shadow-xl aspect-[4/3]">
            <Image
              src="/images/facade-dirty.jpg"
              alt="Metselwerk met algen en vochtaanslag voor professionele behandeling"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover"
            />
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-xs font-semibold">
              Voorbeeld van zware biologische aanslag op metselwerk
            </div>
          </div>
        </div>

        {/* FAQs */}
        <FAQ
          items={service.faqs}
          title={`Veelgestelde vragen over ${service.title}`}
          subtitle="Informatie over oorzaken, hergroei en effectieve preventiemethoden."
        />

        {/* Internal links */}
        <div className="my-12 p-8 rounded-2xl bg-white/60 border border-white/80">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#102A43] mb-4">
            Aanbevolen vervolgbehandeling
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/diensten/gevel-impregneren"
              className="p-4 rounded-xl bg-white/80 hover:bg-white border border-slate-100 transition-colors block"
            >
              <span className="font-bold text-xs text-[#0A2033] block mb-1">
                Gevel impregneren
              </span>
              <span className="text-[11px] text-[#526777]">
                Maak de gereinigde gevel waterafstotend zodat algen minder kans krijgen.
              </span>
            </Link>

            <Link
              href="/diensten/stoomreiniging"
              className="p-4 rounded-xl bg-white/80 hover:bg-white border border-slate-100 transition-colors block"
            >
              <span className="font-bold text-xs text-[#0A2033] block mb-1">
                Stoomreiniging
              </span>
              <span className="text-[11px] text-[#526777]">
                Milde thermische techniek om sporen zonder chemie te verwijderen.
              </span>
            </Link>
          </div>
        </div>

        <ContactCTA />
      </div>
    </div>
  );
}
