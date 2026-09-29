"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, Phone, Mail, ChevronRight, ShieldCheck } from "lucide-react";
import { companyData } from "@/lib/siteData";

export default function MobileMenu({ isOpen, onClose }) {
  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-menu-drawer"
      role="dialog"
      aria-modal="true"
      aria-label="Mobiele navigatie"
      className="fixed inset-0 z-50 flex flex-col bg-slate-900/40 backdrop-blur-md lg:hidden animate-in fade-in duration-200"
    >
      <div 
        className="w-full max-w-md ml-auto h-full bg-[#F4F8FB] flex flex-col shadow-2xl border-l border-white/60 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
          <div className="flex flex-col">
            <span className="text-xs font-bold tracking-widest text-[#1677FF] uppercase">
              Gevelspecialist
            </span>
            <span className="font-extrabold text-[#0A2033] text-sm tracking-tight">
              GEVELREINIGING DIEMEN
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Menu sluiten"
            className="p-2.5 rounded-xl text-[#102A43] hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1677FF]"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation links */}
        <div className="flex-1 px-5 py-6 space-y-6">
          <nav className="space-y-1">
            <Link
              href="/"
              onClick={onClose}
              className="flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold text-[#102A43] hover:bg-white hover:text-[#1677FF] transition-colors"
            >
              <span>Home</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="/diensten"
              onClick={onClose}
              className="flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold text-[#102A43] hover:bg-white hover:text-[#1677FF] transition-colors"
            >
              <span>Alle Diensten</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <div className="pl-4 pr-2 py-2 space-y-1 bg-white/50 rounded-xl border border-white/60">
              {companyData.services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/diensten/${service.slug}`}
                  onClick={onClose}
                  className="flex items-center justify-between px-3 py-2 text-sm text-[#526777] hover:text-[#1677FF] font-medium rounded-lg hover:bg-white/80 transition-colors"
                >
                  <span>{service.shortTitle}</span>
                  <span className="text-xs text-slate-400 font-mono">{service.number}</span>
                </Link>
              ))}
            </div>

            <Link
              href="/over-ons"
              onClick={onClose}
              className="flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold text-[#102A43] hover:bg-white hover:text-[#1677FF] transition-colors"
            >
              <span>Onze aanpak & Over ons</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold text-[#102A43] hover:bg-white hover:text-[#1677FF] transition-colors"
            >
              <span>Contact</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>
          </nav>

          {/* Trust indicator */}
          <div className="p-4 rounded-xl bg-white/70 border border-white/80 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0A2033] mb-1">
              <ShieldCheck className="w-4 h-4 text-[#1677FF]" />
              <span>Geverifieerde Google Rating</span>
            </div>
            <p className="text-xs text-[#526777]">
              {companyData.rating.google.label} ({companyData.rating.google.sublabel})
            </p>
          </div>
        </div>

        {/* Bottom CTA & direct contact */}
        <div className="p-5 border-t border-slate-200/80 bg-white/90 space-y-3">
          <Link
            href="/contact"
            onClick={onClose}
            className="w-full py-3.5 px-4 rounded-xl btn-primary text-center font-bold text-sm block shadow-md"
          >
            Gratis offerte aanvragen
          </Link>

          <a
            href={companyData.contact.phoneHref}
            className="w-full py-3 px-4 rounded-xl btn-secondary flex items-center justify-center gap-2 text-sm font-semibold"
          >
            <Phone className="w-4 h-4 text-[#1677FF]" />
            <span>{companyData.contact.phone}</span>
          </a>

          <div className="text-center pt-1">
            <a
              href={companyData.contact.emailHref}
              className="text-xs text-[#526777] hover:text-[#1677FF] inline-flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{companyData.contact.email}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
