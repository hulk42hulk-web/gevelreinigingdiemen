import Link from "next/link";
import { ArrowRight, Phone, Mail, Sparkles } from "lucide-react";
import GlassCard from "./GlassCard";
import { companyData } from "@/lib/siteData";

export default function ContactCTA() {
  return (
    <section className="py-10 sm:py-16 lg:py-24 relative overflow-hidden">
      {/* Background architectural glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] bg-gradient-to-r from-blue-200/35 via-sky-200/25 to-teal-100/35 rounded-full blur-3xl -z-10" 
      />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <GlassCard
          variant="strong"
          className="p-5 sm:p-8 lg:p-14 border border-white/90 shadow-xl relative overflow-hidden"
        >
          {/* Subtle architectural lines inside CTA */}
          <div 
            aria-hidden="true" 
            className="absolute inset-0 architectural-grid opacity-25 pointer-events-none" 
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left: Text & Pitch */}
            <div className="lg:col-span-8 space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-[10px] sm:text-xs font-bold text-[#1677FF] uppercase tracking-wider">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>Vrijblijvend Advies &amp; Offerte</span>
              </div>

              <h2 className="text-[clamp(1.4rem,4.8vw,2.5rem)] font-extrabold text-[#0A2033] tracking-tight leading-[1.2]">
                Benieuwd wat uw gevel nodig heeft?
              </h2>

              <p className="text-xs sm:text-base text-[#526777] max-w-2xl leading-relaxed">
                Elk pand vraagt om een specifieke reinigingsaanpak. Vraag vrijblijvend een offerte aan of bel ons direct voor een eerste inschatting van de mogelijkheden in Diemen en omgeving.
              </p>

              {/* Direct contact info */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pt-1 sm:pt-2 text-xs sm:text-sm font-semibold text-[#102A43]">
                <a
                  href={companyData.contact.phoneHref}
                  className="inline-flex items-center gap-2 hover:text-[#1677FF] transition-colors"
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-blue-50 flex items-center justify-center text-[#1677FF] shrink-0">
                    <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>
                  <span>{companyData.contact.phone}</span>
                </a>

                <span className="text-slate-300 hidden sm:inline">•</span>

                <a
                  href={companyData.contact.emailHref}
                  className="inline-flex items-center gap-2 hover:text-[#1677FF] transition-colors min-w-0"
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-blue-50 flex items-center justify-center text-[#1677FF] shrink-0">
                    <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>
                  <span className="truncate sm:overflow-visible text-xs sm:text-sm break-all">
                    {companyData.contact.email}
                  </span>
                </a>
              </div>
            </div>

            {/* Right: Action Buttons */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5 sm:gap-3.5">
              <Link
                href="/contact"
                className="w-full py-3.5 sm:py-4 px-5 rounded-xl btn-primary text-center font-bold text-xs sm:text-sm tracking-wide uppercase flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 group"
              >
                <span>Gratis offerte aanvragen</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={companyData.contact.phoneHref}
                className="w-full py-3 sm:py-3.5 px-5 rounded-xl btn-secondary text-center font-semibold text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#1677FF]" />
                <span>Bel direct: {companyData.contact.phone}</span>
              </a>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
