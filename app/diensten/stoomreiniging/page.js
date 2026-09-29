import Link from "next/link";
import { CheckCircle2, ShieldCheck, Sparkles, ArrowRight, Flame, Leaf } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import GlassCard from "@/components/GlassCard";
import ContactCTA from "@/components/ContactCTA";
import FAQ from "@/components/FAQ";
import { companyData } from "@/lib/siteData";
import { constructMetadata, getServiceSchema, getFAQSchema } from "@/lib/seo";

const service = companyData.services.find((s) => s.slug === "stoomreiniging");

export const metadata = constructMetadata({
  title: "Gevel Stoomreiniging Diemen | Milieuvriendelijk & Zonder Schade",
  description:
    "Specialistische gevel stoomreiniging in Diemen en regio Amsterdam. Reinigen met oververhitte stoom onder lage druk. 100% veilig voor kwetsbare stenen en voegen.",
  path: "/diensten/stoomreiniging",
});

export default function StoomreinigingPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Diensten", url: "/diensten" },
    { name: service.title, url: `/diensten/${service.slug}` },
  ];

  const serviceSchema = getServiceSchema(service);
  const faqSchema = getFAQSchema(service.faqs);

  return (
    <div className="architectural-bg py-4 sm:py-8 lg:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Header */}
        <div className="max-w-3xl my-4 sm:my-8 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-[10px] sm:text-xs font-bold text-[#1677FF] uppercase tracking-wider">
            <span>Dienst 06 • Ecologische Techniek</span>
          </div>

          <h1 className="text-[clamp(1.65rem,5.5vw,3rem)] font-extrabold text-[#0A2033] tracking-tight leading-[1.18]">
            {service.headline}
          </h1>

          <p className="text-sm sm:text-base text-[#526777] font-normal leading-relaxed">
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

        {/* Technical Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          <GlassCard variant="card" className="p-8 border border-white/80 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#1677FF] uppercase tracking-wider">
              <Flame className="w-4 h-4" />
              <span>Thermische Kracht</span>
            </div>
            <h2 className="text-xl font-bold text-[#0A2033]">
              De voordelen van stoomreiniging onder lage druk
            </h2>
            <p className="text-xs sm:text-sm text-[#526777] leading-relaxed">
              In plaats van agressieve waterdruk gebruiken we watertemperaturen tot circa 150°C. Deze stoomtemperatuur verbreekt de moleculaire binding tussen het vuil en de steen. Het vuil lost op en spoelt weg zonder dat de toplaag van het metselwerk wordt aangetast.
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
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">
                <Leaf className="w-4 h-4" />
                <span>100% Milieuvriendelijk</span>
              </div>
              <h2 className="text-xl font-bold text-[#0A2033] mb-2">
                Zonder agressieve chemische middelen
              </h2>
              <p className="text-xs sm:text-sm text-[#526777] leading-relaxed mb-4">
                Omdat oververhitte stoom biologische organismen zoals algen, mossen en schimmels thermisch inactiveert, zijn er in veruit de meeste gevallen geen chemische reinigingsmiddelen nodig. Dat is beter voor de gevel, de omliggende tuin en het milieu in Diemen.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/diensten/algen-mos-verwijderen"
                className="text-xs font-bold text-[#1677FF] hover:underline inline-flex items-center gap-1"
              >
                <span>Bekijk ook algen- en mosverwijdering</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </GlassCard>
        </div>

        {/* FAQs */}
        <FAQ
          items={service.faqs}
          title={`Veelgestelde vragen over ${service.title}`}
          subtitle="Vergelijking met traditionele hogedruk en geschiktheid voor historische gevels."
        />

        <ContactCTA />
      </div>
    </div>
  );
}
