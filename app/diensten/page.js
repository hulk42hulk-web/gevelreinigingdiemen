import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import ServiceCard from "@/components/ServiceCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactCTA from "@/components/ContactCTA";
import { companyData } from "@/lib/siteData";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Diensten Gevelreiniging & Gevelonderhoud Diemen",
  description:
    "Overzicht van onze 7 specialistische gevelonderhoudsdiensten in Diemen: gevelreiniging, zand- en nevelstralen, voegwerk, graffiti verwijderen, impregneren, stoomreiniging en algenverwijdering.",
  path: "/diensten",
});

export default function DienstenPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Diensten", url: "/diensten" },
  ];

  return (
    <div className="architectural-bg py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Header */}
        <div className="max-w-3xl my-8 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-bold text-[#1677FF] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Overzicht Specialistische Diensten</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2033] tracking-tight leading-tight">
            Professioneel gevelonderhoud in Diemen
          </h1>

          <p className="text-base sm:text-lg text-[#526777] font-normal leading-relaxed">
            Iedere buitengevel vraagt om een specifieke behandeling afgestemd op de ouderdom, de steensoort en de verontreiniging. Ontdek onze zeven kernspecialisaties voor woningen en bedrijfspanden.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          {companyData.services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        {/* Methodology note */}
        <GlassCard variant="card" className="p-8 sm:p-10 my-12 border border-white/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-[#1677FF] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Gevelvriendelijke Aanpak</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0A2033]">
                Twijfelt u welke reinigingsmethode geschikt is?
              </h2>
              <p className="text-xs sm:text-sm text-[#526777] leading-relaxed">
                Tijdens een vrijblijvende opname bekijken we ter plaatse de kwetsbaarheid van uw stenen en voegmortel om direct de veiligste en meest effectieve aanpak te adviseren.
              </p>
            </div>

            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl btn-primary text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap self-start md:self-center"
            >
              Vraag advies aan
            </Link>
          </div>
        </GlassCard>

        {/* CTA */}
        <ContactCTA />
      </div>
    </div>
  );
}
