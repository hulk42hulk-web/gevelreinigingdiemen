import Link from "next/link";
import { CheckCircle2, ShieldCheck, Sparkles, ArrowRight, Paintbrush } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import GlassCard from "@/components/GlassCard";
import ContactCTA from "@/components/ContactCTA";
import FAQ from "@/components/FAQ";
import { companyData } from "@/lib/siteData";
import { constructMetadata, getServiceSchema, getFAQSchema } from "@/lib/seo";

const service = companyData.services.find((s) => s.slug === "graffiti-verwijderen");

export const metadata = constructMetadata({
  title: "Graffiti Verwijderen Diemen | Snel & Vakkundig Zonder Schaduwen",
  description:
    "Professioneel graffiti verwijderen in Diemen en regio Amsterdam. Veilige verwijdering van spuitbusverf en tags van baksteen, beton en glas. Vraag direct een offerte aan.",
  path: "/diensten/graffiti-verwijderen",
});

export default function GraffitiPage() {
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
            <span>Dienst 04 • Spoed &amp; Precisie</span>
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

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          <GlassCard variant="card" className="p-8 border border-white/80 space-y-4">
            <h2 className="text-xl font-bold text-[#0A2033]">
              Verantwoorde verwijdering zonder spookbeelden
            </h2>
            <p className="text-xs sm:text-sm text-[#526777] leading-relaxed">
              Verfdeeltjes dringen diep in de poriën van baksteen en voegsel door. Een verkeerde chemische behandeling of agressieve hogedruk kan de verf dieper de steen in drijven of de toplaag beschadigen, waardoor een permanente schaduw ontstaat.
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
                Voor winkels, bedrijven en particulieren
              </h2>
              <p className="text-xs sm:text-sm text-[#526777] leading-relaxed mb-4">
                Graffiti trekt vaak nieuwe tags aan. Wij kunnen snel schakelen voor winkelpanden in Diemen-Centrum of bedrijfspanden rondom Diemen en Amsterdam om de gevel zo snel mogelijk in oorspronkelijke staat te herstellen.
              </p>
              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-[#0A2033]">
                <strong>Anti-graffiti coating:</strong> Vraag naar opties voor een beschermende semi-permanente of permanente coating om toekomstige reiniging aanzienlijk te vergemakkelijken.
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/diensten/gevel-impregneren"
                className="text-xs font-bold text-[#1677FF] hover:underline inline-flex items-center gap-1"
              >
                <span>Ontdek gevelbescherming &amp; impregneren</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </GlassCard>
        </div>

        {/* FAQs */}
        <FAQ
          items={service.faqs}
          title={`Veelgestelde vragen over ${service.title}`}
          subtitle="Informatie over ondergronden, spoedinterventie en schaduwvrije reiniging."
        />

        <ContactCTA />
      </div>
    </div>
  );
}
