import Link from "next/link";
import { ArrowRight, Phone, Mail, Sparkles } from "lucide-react";
import GlassCard from "./GlassCard";
import { companyData } from "@/lib/siteData";

export default function ContactCTA() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background architectural glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-200/40 via-sky-200/30 to-teal-100/40 rounded-full blur-3xl -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard
          variant="strong"
          className="p-8 sm:p-12 lg:p-16 border border-white/90 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle architectural lines inside CTA */}
          <div 
            aria-hidden="true" 
            className="absolute inset-0 architectural-grid opacity-30 pointer-events-none" 
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Text & Pitch */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-bold text-[#1677FF] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Vrijblijvend Advies &amp; Offerte</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2033] tracking-tight">
                Benieuwd wat uw gevel nodig heeft?
              </h2>

              <p className="text-base text-[#526777] max-w-2xl leading-relaxed">
                Elk pand vraagt om een specifieke reinigingsaanpak. Vraag vrijblijvend een offerte aan of bel ons direct voor een eerste inschatting van de mogelijkheden in Diemen en omgeving.
              </p>

              {/* Direct contact pills */}
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs sm:text-sm font-semibold text-[#102A43]">
                <a
                  href={companyData.contact.phoneHref}
                  className="inline-flex items-center gap-2 hover:text-[#1677FF] transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-[#1677FF]">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <span>{companyData.contact.phone}</span>
                </a>

                <span className="text-slate-300 hidden sm:inline">•</span>

                <a
                  href={companyData.contact.emailHref}
                  className="inline-flex items-center gap-2 hover:text-[#1677FF] transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-[#1677FF]">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span>{companyData.contact.email}</span>
                </a>
              </div>
            </div>

            {/* Right: Action Buttons */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5">
              <Link
                href="/contact"
                className="w-full py-4 px-6 rounded-xl btn-primary text-center font-bold text-sm tracking-wide uppercase flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 group"
              >
                <span>Gratis offerte</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={companyData.contact.phoneHref}
                className="w-full py-3.5 px-6 rounded-xl btn-secondary text-center font-semibold text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#1677FF]" />
                <span>Direct telefonisch overleg</span>
              </a>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
