import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import GlassCard from "./GlassCard";

export default function ServiceCard({ service }) {
  return (
    <Link
      href={`/diensten/${service.slug}`}
      className="group block h-full focus:outline-none focus:ring-2 focus:ring-[#1677FF] rounded-2xl"
    >
      <GlassCard
        variant="card"
        hoverEffect={true}
        className="h-full p-6 sm:p-7 flex flex-col justify-between border border-white/80 transition-all duration-300 group-hover:border-[#1677FF]/40"
      >
        <div>
          {/* Top Row: Editorial Number + Arrow */}
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs font-bold tracking-widest text-[#1677FF] bg-blue-50/80 px-2.5 py-1 rounded-md border border-blue-100">
              {service.number}
            </span>
            <div className="w-8 h-8 rounded-full bg-white/70 group-hover:bg-[#1677FF] text-[#102A43] group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-sm">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          {/* Service Title */}
          <h3 className="text-lg sm:text-xl font-bold text-[#0A2033] group-hover:text-[#1677FF] transition-colors leading-snug mb-2.5">
            {service.title}
          </h3>

          {/* Service Short Description */}
          <p className="text-xs sm:text-sm text-[#526777] leading-relaxed line-clamp-3">
            {service.shortDescription}
          </p>
        </div>

        {/* Bottom Technical Accent */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#1677FF] font-semibold">
          <span>Bekijk specificaties</span>
          <span className="text-[11px] text-slate-400 group-hover:text-[#1677FF] transition-colors font-normal">
            Diemen &amp; regio
          </span>
        </div>
      </GlassCard>
    </Link>
  );
}
