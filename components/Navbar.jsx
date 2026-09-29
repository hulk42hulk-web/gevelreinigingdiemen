"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, ChevronDown, Sparkles } from "lucide-react";
import { companyData } from "@/lib/siteData";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dienstenDropdownOpen, setDienstenDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "py-2.5 bg-white/75 backdrop-blur-xl border-b border-white/80 shadow-[0_4px_24px_-4px_rgba(10,32,51,0.06)]"
            : "py-4 bg-[#F4F8FB]/80 backdrop-blur-md border-b border-slate-200/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Architectural Brand Mark */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#1677FF] rounded-lg p-1"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1677FF] to-[#0A2033] flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300 border border-white/40">
                <span className="font-extrabold text-lg tracking-wider">GD</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#0A2033] group-hover:text-[#1677FF] transition-colors leading-tight">
                  GEVELREINIGING DIEMEN
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#526777]">
                  Specialistisch Gevelonderhoud
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Hoofdnavigatie">
              {/* Diensten Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setDienstenDropdownOpen(true)}
                onMouseLeave={() => setDienstenDropdownOpen(false)}
              >
                <Link
                  href="/diensten"
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                    pathname.startsWith("/diensten")
                      ? "text-[#1677FF] bg-blue-50/60"
                      : "text-[#102A43] hover:text-[#1677FF] hover:bg-white/60"
                  }`}
                  aria-expanded={dienstenDropdownOpen}
                >
                  <span>Diensten</span>
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </Link>

                {/* Dropdown Menu */}
                {dienstenDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 pt-2 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="p-3 bg-white/95 backdrop-blur-2xl rounded-2xl border border-white/80 shadow-[0_16px_40px_-10px_rgba(16,42,67,0.12)]">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#526777] px-3 py-1.5 border-b border-slate-100 flex items-center justify-between">
                        <span>Onze 7 Specialisaties</span>
                        <Link
                          href="/diensten"
                          className="text-[#1677FF] hover:underline lowercase font-normal"
                        >
                          alles bekijken →
                        </Link>
                      </div>
                      <div className="mt-1 space-y-0.5">
                        {companyData.services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/diensten/${service.slug}`}
                            className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-[#102A43] hover:text-[#1677FF] hover:bg-blue-50/50 rounded-xl transition-colors"
                          >
                            <span>{service.shortTitle}</span>
                            <span className="text-[10px] font-mono text-slate-400">
                              {service.number}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/over-ons#aanpak"
                className="px-3.5 py-2 rounded-xl text-sm font-semibold text-[#102A43] hover:text-[#1677FF] hover:bg-white/60 transition-colors"
              >
                Onze aanpak
              </Link>

              <Link
                href="/over-ons"
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                  pathname === "/over-ons"
                    ? "text-[#1677FF] bg-blue-50/60"
                    : "text-[#102A43] hover:text-[#1677FF] hover:bg-white/60"
                }`}
              >
                Over ons
              </Link>

              <Link
                href="/contact"
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                  pathname === "/contact"
                    ? "text-[#1677FF] bg-blue-50/60"
                    : "text-[#102A43] hover:text-[#1677FF] hover:bg-white/60"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language Indicator */}
              <div 
                className="flex items-center text-xs font-bold px-2.5 py-1.5 rounded-lg bg-white/60 border border-slate-200/60 text-[#526777]"
                title="Taalkeuze"
              >
                <span className="text-[#1677FF]">NL</span>
                <span className="mx-1 text-slate-300">|</span>
                <span className="text-slate-400">EN</span>
              </div>

              {/* Direct Phone */}
              <a
                href={companyData.contact.phoneHref}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-[#0A2033] hover:text-[#1677FF] bg-white/70 hover:bg-white border border-slate-200/60 transition-all shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-[#1677FF]" />
                <span>{companyData.contact.phone}</span>
              </a>

              {/* Primary CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl btn-primary text-xs font-bold tracking-wide uppercase shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Gratis offerte</span>
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={companyData.contact.phoneHref}
                aria-label={`Bellen naar ${companyData.contact.phone}`}
                className="p-2.5 rounded-xl bg-white/80 border border-slate-200/80 text-[#1677FF] shadow-sm active:scale-95 transition-transform"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu-drawer"
                aria-label="Menu openen"
                className="p-2.5 rounded-xl bg-white/80 border border-slate-200/80 text-[#0A2033] shadow-sm active:scale-95 transition-transform"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
