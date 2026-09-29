import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, AlertCircle } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import GlassCard from "@/components/GlassCard";
import ContactCTA from "@/components/ContactCTA";
import FAQ from "@/components/FAQ";
import { companyData } from "@/lib/siteData";
import { constructMetadata, getServiceSchema, getFAQSchema } from "@/lib/seo";

const service = companyData.services.find((s) => s.slug === "gevelreiniging");

export const metadata = constructMetadata({
  title: "Gevelreiniging Diemen | Specialistisch Reinigen van Buitengevels",
  description:
    "Vakkundige gevelreiniging in Diemen en omgeving. Verwijdering van atmosferische aanslag, roet en straatvuil met behoud van bakstenen en voegwerk. Vraag een vrijblijvende offerte aan.",
  path: "/diensten/gevelreiniging",
});

export default function GevelreinigingPage() {
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

        {/* Hero Banner for Service */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-8">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-bold text-[#1677FF] uppercase tracking-wider">
              <span>Dienst 01 • Kernspecialisatie</span>
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

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/90 shadow-xl aspect-[4/3]">
              <Image
                src="/images/hero-facade.jpg"
                alt="Gevelreiniging van een bakstenen woning in Diemen"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Key Points & Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          <GlassCard variant="card" className="p-8 border border-white/80 space-y-4">
            <h2 className="text-xl font-bold text-[#0A2033]">
              Onze zorgvuldige aanpak bij gevelreiniging
            </h2>
            <p className="text-xs sm:text-sm text-[#526777] leading-relaxed">
              Gevelreiniging is maatwerk. Een te hoge waterdruk kan zachte historische bakstenen uithollen of voegmortel verpulveren. Wij bepalen daarom exact welke reinigingstechniek geschikt is voor uw gevel.
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
                Waarom gevelreiniging belangrijk is
              </h2>
              <p className="text-xs sm:text-sm text-[#526777] leading-relaxed mb-4">
                Atmosferische vervuiling en algen houden vocht vast tegen de buitenmuur. Dit versnelt de verwering van stenen en kan bij vorst leiden tot scheurvorming. Een schone gevel beschermt de constructie en herstelt direct de uitstraling van uw pand.
              </p>
              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#1677FF] shrink-0 mt-0.5" />
                <p className="text-xs text-[#0A2033]">
                  <strong>Tip:</strong> Overweeg aansluitend een ademende hydrofobeerbehandeling (gevel impregneren) om uw gevel langdurig te beschermen tegen nieuwe vervuiling.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/diensten/gevel-impregneren"
                className="text-xs font-bold text-[#1677FF] hover:underline inline-flex items-center gap-1"
              >
                <span>Lees meer over gevel impregneren</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </GlassCard>
        </div>

        {/* FAQs */}
        <FAQ
          items={service.faqs}
          title={`Veelgestelde vragen over ${service.title}`}
          subtitle="Praktische informatie over werkwijze, prijzen en doorlooptijd in Diemen."
        />

        {/* Internal Linking to Other Relevant Services */}
        <div className="my-12 p-8 rounded-2xl bg-white/60 border border-white/80">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#102A43] mb-4">
            Gerelateerde gevelbehandelingen
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/diensten/stoomreiniging"
              className="p-4 rounded-xl bg-white/80 hover:bg-white border border-slate-100 transition-colors block"
            >
              <span className="font-bold text-xs text-[#0A2033] block mb-1">
                Stoomreiniging
              </span>
              <span className="text-[11px] text-[#526777]">
                Milieuvriendelijk reinigen met heet water onder lage druk.
              </span>
            </Link>

            <Link
              href="/diensten/voegwerk"
              className="p-4 rounded-xl bg-white/80 hover:bg-white border border-slate-100 transition-colors block"
            >
              <span className="font-bold text-xs text-[#0A2033] block mb-1">
                Voegwerk herstel
              </span>
              <span className="text-[11px] text-[#526777]">
                Herstel van poreuze of beschadigde voegen voor vochtwering.
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
                Hydrofobeerlaag ter bescherming tegen vocht en vuil.
              </span>
            </Link>
          </div>
        </div>

        <ContactCTA />
      </div>
    </div>
  );
}
