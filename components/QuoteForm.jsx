"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { companyData } from "@/lib/siteData";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    telefoon: "",
    typePand: "Woning",
    locatie: "",
    dienst: "Gevelreiniging",
    bericht: "",
  });

  const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.naam.trim() || !formData.email.trim()) {
      setStatus("error");
      setErrorMessage("Vul alstublieft minimaal uw naam en e-mailadres in.");
      return;
    }

    // Basic email pattern check
    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setStatus("error");
      setErrorMessage("Voer een geldig e-mailadres in.");
      return;
    }

    setStatus("submitting");

    // Client-side simulation of quote request dispatch
    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  if (status === "success") {
    return (
      <div className="p-5 sm:p-8 rounded-2xl bg-white/90 border border-emerald-200 text-center space-y-3 sm:space-y-4 shadow-xl">
        <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
          <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-[#0A2033]">
          Offerte-aanvraag ontvangen!
        </h3>
        <p className="text-xs sm:text-sm text-[#526777] max-w-md mx-auto leading-relaxed">
          Hartelijk dank, <strong>{formData.naam}</strong>. We hebben uw aanvraag voor {formData.dienst.toLowerCase()} ontvangen. We nemen spoedig contact met u op via {formData.email} of telefonisch.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setFormData({
              naam: "",
              email: "",
              telefoon: "",
              typePand: "Woning",
              locatie: "",
              dienst: "Gevelreiniging",
              bericht: "",
            });
          }}
          className="mt-3 px-5 py-2.5 rounded-xl btn-secondary text-xs font-bold"
        >
          Nog een bericht sturen
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4" noValidate>
      {status === "error" && (
        <div
          role="alert"
          className="p-3 rounded-xl bg-red-50/90 border border-red-200 flex items-start gap-2.5 text-red-800 text-xs font-medium"
        >
          <AlertCircle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Row 1: Naam + E-mail */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label htmlFor="naam" className="block text-[11px] sm:text-xs font-bold text-[#102A43] mb-1">
            Uw Naam <span className="text-[#1677FF]">*</span>
          </label>
          <input
            type="text"
            id="naam"
            name="naam"
            required
            value={formData.naam}
            onChange={handleChange}
            placeholder="bijv. Jan Jansen"
            className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white/80 border border-slate-200/90 text-xs sm:text-sm text-[#0A2033] focus:outline-none focus:ring-2 focus:ring-[#1677FF] focus:border-transparent transition-all shadow-2xs"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-[11px] sm:text-xs font-bold text-[#102A43] mb-1">
            E-mailadres <span className="text-[#1677FF]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="naam@voorbeeld.nl"
            className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white/80 border border-slate-200/90 text-xs sm:text-sm text-[#0A2033] focus:outline-none focus:ring-2 focus:ring-[#1677FF] focus:border-transparent transition-all shadow-2xs"
          />
        </div>
      </div>

      {/* Row 2: Telefoon + Type pand */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label htmlFor="telefoon" className="block text-[11px] sm:text-xs font-bold text-[#102A43] mb-1">
            Telefoonnummer
          </label>
          <input
            type="tel"
            id="telefoon"
            name="telefoon"
            value={formData.telefoon}
            onChange={handleChange}
            placeholder="bijv. 06 12345678"
            className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white/80 border border-slate-200/90 text-xs sm:text-sm text-[#0A2033] focus:outline-none focus:ring-2 focus:ring-[#1677FF] focus:border-transparent transition-all shadow-2xs"
          />
        </div>

        <div>
          <label htmlFor="typePand" className="block text-[11px] sm:text-xs font-bold text-[#102A43] mb-1">
            Type pand
          </label>
          <select
            id="typePand"
            name="typePand"
            value={formData.typePand}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white/80 border border-slate-200/90 text-xs sm:text-sm text-[#0A2033] focus:outline-none focus:ring-2 focus:ring-[#1677FF] focus:border-transparent transition-all shadow-2xs"
          >
            <option value="Woning">Particuliere woning</option>
            <option value="Appartement / VvE">Appartement / VvE</option>
            <option value="Winkelpand">Winkelpand / Showroom</option>
            <option value="Kantoorpand">Kantoorpand</option>
            <option value="Bedrijfspand">Bedrijfspand / Opslag</option>
            <option value="Anders">Overig pand</option>
          </select>
        </div>
      </div>

      {/* Row 3: Locatie + Dienst */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label htmlFor="locatie" className="block text-[11px] sm:text-xs font-bold text-[#102A43] mb-1">
            Locatie pand (plaats of postcode)
          </label>
          <input
            type="text"
            id="locatie"
            name="locatie"
            value={formData.locatie}
            onChange={handleChange}
            placeholder="bijv. Diemen of Amsterdam"
            className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white/80 border border-slate-200/90 text-xs sm:text-sm text-[#0A2033] focus:outline-none focus:ring-2 focus:ring-[#1677FF] focus:border-transparent transition-all shadow-2xs"
          />
        </div>

        <div>
          <label htmlFor="dienst" className="block text-[11px] sm:text-xs font-bold text-[#102A43] mb-1">
            Gewenste dienst
          </label>
          <select
            id="dienst"
            name="dienst"
            value={formData.dienst}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white/80 border border-slate-200/90 text-xs sm:text-sm text-[#0A2033] focus:outline-none focus:ring-2 focus:ring-[#1677FF] focus:border-transparent transition-all shadow-2xs"
          >
            {companyData.services.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Weet ik nog niet (advies nodig)">
              Weet ik nog niet (vrijblijvend advies)
            </option>
          </select>
        </div>
      </div>

      {/* Row 4: Bericht */}
      <div>
        <label htmlFor="bericht" className="block text-[11px] sm:text-xs font-bold text-[#102A43] mb-1">
          Bericht of toelichting (optioneel)
        </label>
        <textarea
          id="bericht"
          name="bericht"
          rows={3}
          value={formData.bericht}
          onChange={handleChange}
          placeholder="Beschrijf eventuele bijzonderheden, oppervlakte of de aard van de vervuiling..."
          className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white/80 border border-slate-200/90 text-xs sm:text-sm text-[#0A2033] focus:outline-none focus:ring-2 focus:ring-[#1677FF] focus:border-transparent transition-all shadow-2xs resize-y"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-3.5 sm:py-4 px-5 rounded-xl btn-primary flex items-center justify-center gap-2 font-bold text-xs sm:text-sm tracking-wide uppercase shadow-md shadow-blue-500/25 disabled:opacity-50"
      >
        <Send className="w-4 h-4" />
        <span>
          {status === "submitting" ? "Aanvraag versturen..." : "Gratis offerte aanvragen"}
        </span>
      </button>

      <p className="text-[10px] sm:text-[11px] text-[#526777] text-center pt-0.5 font-normal">
        Vrijblijvend en kosteloos. Uw gegevens worden uitsluitend gebruikt voor deze offerte.
      </p>
    </form>
  );
}
