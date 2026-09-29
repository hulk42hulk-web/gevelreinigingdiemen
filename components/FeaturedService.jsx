import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import GlassCard from "./GlassCard";

export default function FeaturedService() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Large Visual (7 cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/90 shadow-2xl aspect-[16/10] sm:aspect-[16/10]">
              <Image
                src="/images/facade-clean.jpg"
                alt="Vakkundig gereinigd metselwerk van een karakteristiek pand"
                fill
                sizes="(max-width: 1024px) 100vw, 680px"
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div 
                aria-hidden="true" 
                className="absolute inset-0 bg-gradient-to-tr from-[#0A2033]/40 via-transparent to-transparent pointer-events-none" 
              />
              <div className="absolute bottom-4 left-4 z-10">
                <span className="px-3.5 py-1.5 rounded-lg bg-black/50 backdrop-blur-md text-white text-xs font-bold border border-white/20">
                  Hersteld baksteenpatroon &amp; schone voeglijnen
                </span>
              </div>
            </div>

            {/* Small floating badge */}
            <div className="hidden sm:block absolute -bottom-5 -right-5 z-20">
              <GlassCard variant="strong" className="p-4 border border-white/90 shadow-xl max-w-[220px]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0A2033] mb-1">
                  <Sparkles className="w-4 h-4 text-[#1677FF]" />
                  <span>Kernspecialisatie</span>
                </div>
                <p className="text-[11px] text-[#526777]">
                  Geschikt voor baksteen, stucwerk en kalkzandsteen.
                </p>
              </GlassCard>
            </div>
          </div>

          {/* Right: Glass Content (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-bold text-[#1677FF] uppercase tracking-wider">
              <span>Uitgelichte Dienst • 01</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2033] tracking-tight leading-tight">
              Gevelreiniging met precisie en zorg voor het metselwerk
            </h2>

            <p className="text-sm sm:text-base text-[#526777] leading-relaxed">
              De gevel vormt het visitekaartje van ieder gebouw. Atmosferische vervuiling, roetaanslag en algen laten muren er dof en verwaarloosd uitzien. Wij herstellen de originele pracht zonder de toplaag van de stenen aan te tasten.
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-[#102A43]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                <span>
                  <strong>Inspectie vooraf:</strong> Analyse van steenharmonie, hardheid en voegconditie.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                <span>
                  <strong>Passende reinigingsmethode:</strong> Keuze tussen stoom, nevel of lagedruk.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                <span>
                  <strong>Grondige verwijdering:</strong> Veilig losweken van roet, algen, mos en straatvuil.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                <span>
                  <strong>Duurzaam resultaat:</strong> Directe optie tot hydrofoberen/impregneren.
                </span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl btn-primary text-xs sm:text-sm font-bold tracking-wide uppercase shadow-lg shadow-blue-500/20 group"
              >
                <span>Vraag een vrijblijvende offerte aan</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
