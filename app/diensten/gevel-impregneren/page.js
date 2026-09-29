import Link from "next/link";
import { CheckCircle2, ShieldCheck, Sparkles, ArrowRight, Droplets } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import GlassCard from "@/components/GlassCard";
import ContactCTA from "@/components/ContactCTA";
import FAQ from "@/components/FAQ";
import { companyData } from "@/lib/siteData";
import { constructMetadata, getServiceSchema, getFAQSchema } from "@/lib/seo";

const service = companyData.services.find((s) => s.slug === "gevel-impregneren");

export const metadata = constructMetadata({
  title: "Gevel Impregneren Diemen | Vochtwerende Gevelbescherming",
  description:
    "Gevel impregneren in Diemen en regio Amsterdam. Hydrofoberen van gereinigd metselwerk om indringend vocht en vuilaanhechting te voorkomen met behoud van de ademende werking. Vraag een offerte aan.",
  path: "/diensten/gevel-impregneren",
});

export default function ImpregnerenPage() {
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
            <span>Dienst 05 • Gevelbescherming</span>
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

        {/* Details & Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          <GlassCard variant="card" className="p-8 border border-white/80 space-y-4">
            <h2 className="text-xl font-bold text-[#0A2033]">
              Wat doet impregneren voor uw gevel?
            </h2>
            <p className="text-xs sm:text-sm text-[#526777] leading-relaxed">
              Metselwerk en mortel zijn van nature capillair: ze zuigen water op als een spons. Bij zware slagregen kan dit leiden tot doorslaand vocht en vorstschade. Een professionele hydrofobeerbehandeling vormt een waterafstotende barrière in de poriën.
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
                Belangrijke voorwaarde: schone &amp; droge ondergrond
              </h2>
              <p className="text-xs sm:text-sm text-[#526777] leading-relaxed mb-4">
                Impregneren kan alleen verantwoord worden uitgevoerd nadat de gevel grondig is gereinigd en het voegwerk volledig intact is. Het aanbrengen van een impregneermiddel over vuil of kapotte voegen sluit vocht en vervuiling immers op in de constructie.
              </p>
              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#1677FF] shrink-0 mt-0.5" />
                <p className="text-xs text-[#0A2033]">
                  <strong>Dampopen formule:</strong> Het impregneermiddel sluit de muur niet hermetisch af; de dampdoorlatendheid van de spouwmuur blijft intact.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/diensten/gevelreiniging"
                className="text-xs font-bold text-[#1677FF] hover:underline inline-flex items-center gap-1"
              >
                <span>Combineer met professionele gevelreiniging</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </GlassCard>
        </div>

        {/* FAQs */}
        <FAQ
          items={service.faqs}
          title={`Veelgestelde vragen over ${service.title}`}
          subtitle="Feitelijke toelichting over hydrofoberen, droogtijd en gevelgeschiktheid."
        />

        <ContactCTA />
      </div>
    </div>
  );
}
