import Link from "next/link";
import { 
  ShieldCheck, 
  ArrowRight, 
  Layers, 
  Sparkles, 
  Paintbrush, 
  Droplets, 
  Flame, 
  CheckCircle2, 
  Compass,
  Building,
  MapPin
} from "lucide-react";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import GlassCard from "@/components/GlassCard";
import ServiceCard from "@/components/ServiceCard";
import FeaturedService from "@/components/FeaturedService";
import BeforeAfter from "@/components/BeforeAfter";
import CleaningMethods from "@/components/CleaningMethods";
import TargetAudience from "@/components/TargetAudience";
import Process from "@/components/Process";
import ContactCTA from "@/components/ContactCTA";
import FAQ from "@/components/FAQ";
import AnswerBlock from "@/components/AnswerBlock";
import { companyData } from "@/lib/siteData";
import { getFAQSchema } from "@/lib/seo";

export default function HomePage() {
  const faqSchema = getFAQSchema(companyData.generalFaqs.slice(0, 6));

  return (
    <div className="architectural-bg relative">
      {/* JSON-LD Schema for FAQs on Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust Bar with verified 5.0 Google score & 4 Pillars */}
      <TrustSection />

      {/* 3. Main Value Proposition: Van vervuilde gevel naar verzorgde uitstraling */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-bold text-[#1677FF] uppercase tracking-wider">
                <span>Waardebehoud &amp; Uitstraling</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2033] tracking-tight leading-tight">
                Van vervuilde gevel naar een verzorgde uitstraling
              </h2>
              <p className="text-sm sm:text-base text-[#526777] leading-relaxed">
                Gevels worden dagelijks blootgesteld aan wisselende weersinvloeden en stedelijke vervuiling. Wij verwijderen hardnekkig vuil, aanslag, algen, mos, roet en graffiti met passende methoden die het metselwerk intact laten.
              </p>
              <p className="text-sm sm:text-base text-[#526777] leading-relaxed">
                Niet iedere methode is geschikt voor elk type steen. De juiste keuze hangt af van de porositeit van de baksteen, de kwaliteit van het voegwerk en de mate van vervuiling. Door zorgvuldig te werk te gaan, voorkomen we onherstelbare schade.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <GlassCard variant="card" className="p-5 border border-white/80">
                <span className="text-xs font-bold text-[#1677FF] uppercase tracking-wider block mb-1">
                  Atmosferisch vuil &amp; roet
                </span>
                <p className="text-xs text-[#526777]">
                  Veilige verwijdering van verkeersaanslag en industrierook zonder slijtage van de baksteenschil.
                </p>
              </GlassCard>

              <GlassCard variant="card" className="p-5 border border-white/80">
                <span className="text-xs font-bold text-[#1677FF] uppercase tracking-wider block mb-1">
                  Algen &amp; korstmossen
                </span>
                <p className="text-xs text-[#526777]">
                  Grondige reiniging van groene en zwarte aanslag met behoud van de ademende werking van de muur.
                </p>
              </GlassCard>

              <GlassCard variant="card" className="p-5 border border-white/80">
                <span className="text-xs font-bold text-[#1677FF] uppercase tracking-wider block mb-1">
                  Graffiti &amp; tags
                </span>
                <p className="text-xs text-[#526777]">
                  Doeltreffende verwijdering van verfresten zonder blijvende schaduwplekken op de stenen.
                </p>
              </GlassCard>

              <GlassCard variant="card" className="p-5 border border-white/80">
                <span className="text-xs font-bold text-[#1677FF] uppercase tracking-wider block mb-1">
                  Bescherming na reiniging
                </span>
                <p className="text-xs text-[#526777]">
                  Optionele hydrofobeerbehandeling om vochtdoorslag en nieuwe aanhechting van vuil te vertragen.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Complete Services Grid */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-bold text-[#1677FF] uppercase tracking-wider">
              <span>Gespecialiseerde Diensten</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2033] tracking-tight">
              Onze gevelonderhoudsdiensten in Diemen
            </h2>
            <p className="text-sm sm:text-base text-[#526777] font-normal leading-relaxed">
              Zeven gerichte specialisaties voor het grondig reinigen, herstellen en beschermen van buitengevels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyData.services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/diensten"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl btn-secondary text-xs sm:text-sm font-bold uppercase tracking-wider"
            >
              <span>Overzicht van alle diensten bekijken</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Primary Featured Service: Gevelreiniging */}
      <FeaturedService />

      {/* 6. Interactive Before / After Comparison */}
      <BeforeAfter />

      {/* 7. Cleaning Methods Breakdown */}
      <CleaningMethods />

      {/* 8. Spotlight Sections: Graffiti & Impregneren */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Spotlight 1: Graffiti */}
            <GlassCard variant="card" className="p-8 sm:p-10 flex flex-col justify-between border border-white/80">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-bold text-[#1677FF] uppercase tracking-wider">
                  <Paintbrush className="w-3.5 h-3.5" />
                  <span>Dienst 04</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2033]">
                  Graffiti snel en zorgvuldig verwijderen
                </h3>
                <p className="text-xs sm:text-sm text-[#526777] leading-relaxed">
                  Graffiti tast de uitstraling van uw pand direct aan. Wij verwijderen spuitbusverf en stifttags vakkundig met afgestemde reinigingsmiddelen en lagedruk-stoom, waardoor de ondergrond niet erodeert en geen zogeheten spookschaduwen achterblijven.
                </p>
                <ul className="space-y-2 text-xs font-medium text-[#102A43]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0" />
                    <span>Snelle interventie mogelijk voor winkels en bedrijfspanden</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0" />
                    <span>Veilig voor baksteen, natuursteen, beton en glas</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/diensten/graffiti-verwijderen"
                  className="text-xs font-bold text-[#1677FF] hover:underline flex items-center gap-1"
                >
                  <span>Meer over graffiti verwijderen</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="px-4 py-2 rounded-lg btn-primary text-xs font-bold uppercase tracking-wider"
                >
                  Offerte aanvragen
                </Link>
              </div>
            </GlassCard>

            {/* Spotlight 2: Impregneren */}
            <GlassCard variant="card" className="p-8 sm:p-10 flex flex-col justify-between border border-white/80">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-bold text-[#1677FF] uppercase tracking-wider">
                  <Droplets className="w-3.5 h-3.5" />
                  <span>Dienst 05</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2033]">
                  Gevel impregneren voor langdurige bescherming
                </h3>
                <p className="text-xs sm:text-sm text-[#526777] leading-relaxed">
                  Na een grondige reiniging zijn de poriën van het metselwerk schoon en open. Door de gevel te behandelen met een ademend hydrofobeermiddel wordt het oppervlak waterafstotend gemaakt. Vocht kan niet meer binnendringen, terwijl de muur blijft ademen.
                </p>
                <ul className="space-y-2 text-xs font-medium text-[#102A43]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0" />
                    <span>Waterafstotend effect: regenwater rolt van de gevel af</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0" />
                    <span>Behoudt de dampopen structuur en vermindert vorstschade</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/diensten/gevel-impregneren"
                  className="text-xs font-bold text-[#1677FF] hover:underline flex items-center gap-1"
                >
                  <span>Meer over impregneren</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="px-4 py-2 rounded-lg btn-primary text-xs font-bold uppercase tracking-wider"
                >
                  Offerte aanvragen
                </Link>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 9. Target Audience: Particulieren & Bedrijven */}
      <TargetAudience />

      {/* 10. Why Choose Us: Waarom Gevelreiniging Diemen */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-bold text-[#1677FF] uppercase tracking-wider">
              <span>Onze Positionering</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2033] tracking-tight">
              Waarom Gevelreiniging Diemen?
            </h2>
            <p className="text-sm sm:text-base text-[#526777] font-normal leading-relaxed">
              Vakkundigheid, betrouwbaarheid en zorg voor het behoud van uw gevelmateriaal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GlassCard variant="card" className="p-6 border border-white/80">
              <span className="font-bold text-sm text-[#0A2033] block mb-2">
                Zorgvuldige werkwijze
              </span>
              <p className="text-xs sm:text-sm text-[#526777] leading-relaxed">
                We stemmen de reinigingsdruk, temperatuur en methode nauwkeurig af op de kwetsbaarheid van uw type baksteen en voeg.
              </p>
            </GlassCard>

            <GlassCard variant="card" className="p-6 border border-white/80">
              <span className="font-bold text-sm text-[#0A2033] block mb-2">
                Betrouwbaarheid &amp; afspraak
              </span>
              <p className="text-xs sm:text-sm text-[#526777] leading-relaxed">
                Duidelijke planning, tijdige aanwezigheid en nette oplevering zonder overlast voor bewoners of omwonenden.
              </p>
            </GlassCard>

            <GlassCard variant="card" className="p-6 border border-white/80">
              <span className="font-bold text-sm text-[#0A2033] block mb-2">
                Milieuvriendelijke methoden
              </span>
              <p className="text-xs sm:text-sm text-[#526777] leading-relaxed">
                Waar mogelijk reinigen we met zuiver oververhitte stoom of milde technieken zonder agressieve chemicaliën.
              </p>
            </GlassCard>

            <GlassCard variant="card" className="p-6 border border-white/80">
              <span className="font-bold text-sm text-[#0A2033] block mb-2">
                Persoonlijke aanpak
              </span>
              <p className="text-xs sm:text-sm text-[#526777] leading-relaxed">
                Direct contact met vakkundige gevelspecialisten die meedenken over het beste resultaat voor uw situatie.
              </p>
            </GlassCard>

            <GlassCard variant="card" className="p-6 border border-white/80">
              <span className="font-bold text-sm text-[#0A2033] block mb-2">
                Heldere communicatie
              </span>
              <p className="text-xs sm:text-sm text-[#526777] leading-relaxed">
                Eerlijke adviezen over wat wel en niet haalbaar is, zodat u nooit voor onaangename verrassingen komt te staan.
              </p>
            </GlassCard>

            <GlassCard variant="card" className="p-6 border border-white/80">
              <span className="font-bold text-sm text-[#0A2033] block mb-2">
                Vrijblijvende offerte
              </span>
              <p className="text-xs sm:text-sm text-[#526777] leading-relaxed">
                Binnen korte tijd een gespecificeerde prijsopgave afgestemd op de werkelijke afmetingen en staat van uw gevel.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 11. 4-Step Process */}
      <Process />

      {/* 12. AEO Answer Blocks (AI Engine Optimization) */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-bold text-[#1677FF] uppercase tracking-wider">
              <span>Gevelkennis in het kort</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2033] tracking-tight">
              Belangrijke antwoorden over gevelreiniging
            </h2>
            <p className="text-sm sm:text-base text-[#526777] font-normal leading-relaxed">
              Korte, feitelijke antwoorden over methoden, techniek en toepassingen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnswerBlock
              category="Definitie"
              question="Wat is gevelreiniging?"
              answer="Gevelreiniging is het professioneel verwijderen van atmosferisch vuil, algen, mos, roet of verfresten van de buitenschil van een gebouw, met als doel het herstellen van de uitstraling en het behoud van het metselwerk."
            />
            <AnswerBlock
              category="Materiaalkeuze"
              question="Welke methode is geschikt voor een bakstenen gevel?"
              answer="Voor bakstenen gevels is lagedruk-stoomreiniging of mild nevelstralen meestal het meest geschikt. Dit weekt vuil los zonder de harde baklaag of de kalkhoudende voegen te beschadigen."
            />
            <AnswerBlock
              category="Techniekverschil"
              question="Wat is het verschil tussen zandstralen en nevelstralen?"
              answer="Zandstralen gebruikt droog straalmiddel onder hogere druk voor harde, zwaar verontreinigde oppervlakken. Nevelstralen combineert fijn straalmiddel met waternevel onder lage druk voor kwetsbare en historische gevels."
            />
            <AnswerBlock
              category="Biologisch"
              question="Hoe worden algen en mos verwijderd?"
              answer="Algen en mos worden gedood en verwijderd met oververhitte stoom of biologisch verantwoorde reinigers. De thermische werking pakt ook de diepe sporen in de poriën aan om hergroei te vertragen."
            />
            <AnswerBlock
              category="Preventie"
              question="Wat doet gevel impregneren?"
              answer="Gevel impregneren (hydrofoberen) brengt een ademende waterafstotende barrière aan. Water rolt van de gevel af, terwijl vocht van binnenuit wel kan ontsnappen, waardoor vorstschade en vuilaanhechting worden beperkt."
            />
            <AnswerBlock
              category="Werkgebied"
              question="Zijn jullie werkzaam in Diemen?"
              answer="Ja, Gevelreiniging Diemen is gevestigd aan de Diemermere 1 in Diemen en voert werkzaamheden uit in Diemen-Centrum, Diemen-Noord, Diemen-Zuid en omliggende plaatsen in de regio Amsterdam."
            />
          </div>
        </div>
      </section>

      {/* 13. FAQ Section */}
      <FAQ items={companyData.generalFaqs} />

      {/* 14. Contact CTA */}
      <ContactCTA />
    </div>
  );
}
