import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck, ArrowUpRight } from "lucide-react";
import { companyData } from "@/lib/siteData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A2033] text-white border-t border-slate-800 relative overflow-hidden mt-auto">
      {/* Decorative architectural grid overlay */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 opacity-[0.03] architectural-grid" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Positioning (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1677FF] to-[#38BDF8] flex items-center justify-center text-white font-extrabold text-lg shadow-md border border-white/20">
                GD
              </div>
              <div>
                <span className="font-extrabold text-base tracking-tight text-white block">
                  GEVELREINIGING DIEMEN
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-400 block">
                  Specialistisch Gevelonderhoud
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed font-normal">
              Specialist in professionele gevelreiniging, stoomreiniging, zand- en nevelstralen, graffiti verwijderen en gevelimpregnering voor woningen en bedrijfspanden in Diemen en omgeving.
            </p>

            {/* Google Rating Verified Note */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 max-w-sm flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
                <span className="text-xs font-semibold text-white">
                  {companyData.rating.google.label}
                </span>
              </div>
              <span className="text-[10px] text-slate-400">
                {companyData.rating.google.sublabel}
              </span>
            </div>
          </div>

          {/* Col 2: Services (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#38BDF8]">
              Onze Diensten
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {companyData.services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/diensten/${service.slug}`}
                    className="hover:text-white flex items-center justify-between group transition-colors py-0.5"
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#38BDF8]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Bedrijfsgegevens (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#38BDF8]">
              Contact &amp; Locatie
            </h4>
            <address className="not-italic space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{companyData.name}</p>
                  <p>{companyData.address.street}</p>
                  <p>{companyData.address.postalCode} {companyData.address.city}</p>
                  <p>{companyData.address.country}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <a
                  href={companyData.contact.phoneHref}
                  className="hover:text-white font-semibold transition-colors"
                >
                  {companyData.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <a
                  href={companyData.contact.emailHref}
                  className="hover:text-white transition-colors"
                >
                  {companyData.contact.email}
                </a>
              </div>
            </address>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1677FF] hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
              >
                <span>Vrijblijvende offerte</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; {currentYear} {companyData.name}. Alle rechten voorbehouden.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/over-ons" className="hover:text-white transition-colors">
              Over ons
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacybeleid
            </Link>
            <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 bg-white/5 px-2 py-1 rounded border border-white/10">
              <span className="text-[#38BDF8]">NL</span>
              <span>/</span>
              <span>EN</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
