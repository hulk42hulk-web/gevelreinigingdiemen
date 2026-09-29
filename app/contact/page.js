import Link from "next/link";
import { Phone, Mail, MapPin, Star, ShieldCheck, Sparkles, Clock } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import GlassCard from "@/components/GlassCard";
import QuoteForm from "@/components/QuoteForm";
import { companyData } from "@/lib/siteData";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Contact & Gratis Offerte Aanvragen | Gevelreiniging Diemen",
  description:
    "Neem contact op met Gevelreiniging Diemen voor een vrijblijvende offerte of advies. Gevestigd aan de Diemermere 1 in Diemen. Bel direct 0203 692 906.",
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <div className="architectural-bg py-4 sm:py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Header */}
        <div className="max-w-3xl my-4 sm:my-8 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-[10px] sm:text-xs font-bold text-[#1677FF] uppercase tracking-wider">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Contact &amp; Offerte-Aanvraag</span>
          </div>

          <h1 className="text-[clamp(1.65rem,5.5vw,3rem)] font-extrabold text-[#0A2033] tracking-tight leading-[1.18]">
            Vraag vrijblijvend een offerte aan
          </h1>

          <p className="text-sm sm:text-base text-[#526777] font-normal leading-relaxed">
            Heeft u een vraag over de reiniging van uw gevel of wilt u weten welke methode het beste past bij uw stenen? Vul onderstaand formulier in of neem rechtstreeks contact met ons op.
          </p>
        </div>

        {/* Main Contact Grid: Form (7 cols) + Contact Info & Map (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 my-6 sm:my-10 items-start">
          {/* Form Side */}
          <div className="lg:col-span-7">
            <GlassCard variant="strong" className="p-4 sm:p-8 lg:p-10 border border-white/90 shadow-xl">
              <h2 className="text-lg sm:text-2xl font-bold text-[#0A2033] mb-1 sm:mb-2">
                Offerteformulier
              </h2>
              <p className="text-xs sm:text-sm text-[#526777] mb-4 sm:mb-6">
                Vul uw gegevens in voor een snelle, op maat gespecificeerde prijsopgave.
              </p>
              <QuoteForm />
            </GlassCard>
          </div>

          {/* Contact Details & Map Side */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            {/* Contact Details Card */}
            <GlassCard variant="card" className="p-4 sm:p-6 lg:p-8 border border-white/80 space-y-4 sm:space-y-6">
              <h2 className="text-lg sm:text-xl font-bold text-[#0A2033]">
                Bedrijfsgegevens
              </h2>

              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-[#102A43]">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1677FF] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#0A2033] block">Adres</span>
                    <p className="text-[#526777]">{companyData.address.street}</p>
                    <p className="text-[#526777]">{companyData.address.postalCode} {companyData.address.city}</p>
                    <p className="text-[#526777]">{companyData.address.country}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1677FF] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#0A2033] block">Telefoon</span>
                    <a
                      href={companyData.contact.phoneHref}
                      className="text-[#1677FF] font-semibold hover:underline"
                    >
                      {companyData.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1677FF] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#0A2033] block">E-mail</span>
                    <a
                      href={companyData.contact.emailHref}
                      className="text-[#1677FF] font-semibold hover:underline break-all"
                    >
                      {companyData.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Verified Google Badge */}
              <div className="p-3 sm:p-4 rounded-xl bg-white/80 border border-slate-100 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                    ))}
                    <span className="text-xs font-bold text-[#0A2033] ml-1">
                      {companyData.rating.google.score}
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-[#526777] mt-0.5">
                    {companyData.rating.google.sublabel} op Google
                  </p>
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                  Geverifieerd
                </span>
              </div>
            </GlassCard>

            {/* Responsive Map Container */}
            <div className="rounded-2xl overflow-hidden border border-white/80 shadow-md bg-white relative h-56 sm:h-64 lg:h-72 w-full">
              <iframe
                title="Locatie Gevelreiniging Diemen aan de Diemermere 1"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2437.288597327883!2d4.9605553!3d52.3392476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609653a99e8b7%3A0xcda6075908b89d42!2sDiemermere%201%2C%201112%20TA%20Diemen%2C%20Netherlands!5e0!3m2!1sen!2snl!4v1700000000000!5m2!1sen!2snl"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
