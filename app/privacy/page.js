import Breadcrumbs from "@/components/Breadcrumbs";
import GlassCard from "@/components/GlassCard";
import { companyData } from "@/lib/siteData";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Privacybeleid | Gevelreiniging Diemen",
  description:
    "Privacyverklaring van Gevelreiniging Diemen. Hoe wij omgaan met persoonsgegevens bij offerte-aanvragen en contact.",
  path: "/privacy",
});

export default function PrivacyPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Privacybeleid", url: "/privacy" },
  ];

  return (
    <div className="architectural-bg py-8 lg:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="my-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0A2033] tracking-tight mb-4">
            Privacybeleid
          </h1>
          <p className="text-xs sm:text-sm text-[#526777]">
            Laatst bijgewerkt: 2026
          </p>
        </div>

        <GlassCard variant="card" className="p-8 sm:p-10 border border-white/80 space-y-6 text-xs sm:text-sm text-[#526777] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#0A2033]">
              1. Wie zijn wij?
            </h2>
            <p>
              Gevelreiniging Diemen is gevestigd aan de {companyData.address.full}. Wij zijn verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring.
            </p>
            <p>
              Voor vragen met betrekking tot gegevensverwerking kunt u contact opnemen via {companyData.contact.email} of telefonisch via {companyData.contact.phone}.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#0A2033]">
              2. Welke persoonsgegevens verwerken wij?
            </h2>
            <p>
              Wanneer u ons contact- of offerteformulier invult, telefonisch contact opneemt of een e-mail stuurt, verwerken wij de gegevens die u zelf aan ons verstrekt, waaronder:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Voor- en achternaam</li>
              <li>E-mailadres</li>
              <li>Telefoonnummer</li>
              <li>Adres- of locatiegegevens van het te reinigen pand</li>
              <li>Inhoud van uw bericht of toelichting</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#0A2033]">
              3. Waarom verwerken wij deze gegevens?
            </h2>
            <p>
              Wij verwerken uw persoonsgegevens uitsluitend om contact met u op te nemen, een offerte op te stellen, advies te geven en werkzaamheden in te plannen. Wij verkopen of verstrekken uw gegevens nooit aan derden voor commerciële doeleinden.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#0A2033]">
              4. Bewaartermijn
            </h2>
            <p>
              Gevelreiniging Diemen bewaart uw persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren waarvoor uw gegevens worden verzameld of zoals wettelijk vereist door de belastingwetgeving.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#0A2033]">
              5. Uw rechten
            </h2>
            <p>
              U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te laten verwijderen. U kunt een verzoek hiertoe sturen naar {companyData.contact.email}.
            </p>
          </section>
        </GlassCard>
      </div>
    </div>
  );
}
