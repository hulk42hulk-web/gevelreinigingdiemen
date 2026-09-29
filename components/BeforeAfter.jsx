"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Sparkles, ArrowLeftRight, CheckCircle2 } from "lucide-react";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-white/50 to-transparent">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-[10px] sm:text-xs font-bold text-[#1677FF] uppercase tracking-wider">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Zichtbare Transformatie</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2033] tracking-tight">
            Van verweerde aanslag naar een verzorgde gevel
          </h2>
          <p className="text-xs sm:text-base text-[#526777] font-normal leading-relaxed">
            Sleep de slider om het visuele effect van professionele gevelreiniging op authentiek metselwerk te zien.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="relative h-[250px] xs:h-[280px] sm:h-[420px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl border border-white/90 select-none cursor-ew-resize group"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            role="region"
            aria-label="Voor en na gevelreiniging vergelijking"
          >
            {/* After Image (Full background) */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/facade-clean.jpg"
                alt="Gevel na professionele reiniging: schone stenen en hersteld voegwerk"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover object-center"
              />
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-[#0A2033]/85 backdrop-blur-md text-white text-[10px] sm:text-xs font-extrabold tracking-wider border border-white/20 shadow-xs">
                  NA REINIGING
                </span>
              </div>
            </div>

            {/* Before Image (Clipped by slider percentage) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative w-full h-full min-w-[300px] sm:min-w-[700px] lg:min-w-[896px]">
                <Image
                  src="/images/facade-dirty.jpg"
                  alt="Gevel voor reiniging: atmosferische aanslag, roet en mos"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-black/75 backdrop-blur-md text-white text-[10px] sm:text-xs font-extrabold tracking-wider border border-white/20 shadow-xs">
                  VOOR REINIGING
                </span>
              </div>
            </div>

            {/* Slider Dividing Bar & Handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 sm:w-1 bg-white shadow-[0_0_8px_rgba(0,0,0,0.4)] cursor-ew-resize z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-[#0A2033] shadow-lg flex items-center justify-center border-2 border-[#1677FF] group-hover:scale-105 transition-transform">
                <ArrowLeftRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1677FF]" />
              </div>
            </div>

            {/* Accessible Native Range Input Overlay for Keyboard Navigation */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              aria-label="Verhouding voor en na reiniging aanpassen"
              className="absolute inset-x-0 bottom-3 w-11/12 mx-auto opacity-0 h-8 cursor-pointer z-30 pointer-events-auto"
            />
          </div>

          {/* Under slider informational bar */}
          <div className="mt-3 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-[#526777] gap-1.5 px-1 text-center sm:text-left">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#1677FF] shrink-0" />
              <span>Diepgaande reiniging zonder aantasting van de baksteenschil</span>
            </div>
            <p className="italic text-slate-400 text-[10px] sm:text-[11px]">
              * Sleep met vinger of muis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
