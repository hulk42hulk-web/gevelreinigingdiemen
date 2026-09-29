import { HelpCircle, CheckCircle } from "lucide-react";
import GlassCard from "./GlassCard";

export default function AnswerBlock({ question, answer, category = "Kennis & Advies" }) {
  return (
    <GlassCard variant="card" className="p-6 border border-white/80">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1677FF] mb-2">
        <HelpCircle className="w-3.5 h-3.5" />
        <span>{category}</span>
      </div>
      <h3 className="text-base sm:text-lg font-bold text-[#0A2033] mb-2 leading-snug">
        {question}
      </h3>
      <p className="text-xs sm:text-sm text-[#526777] leading-relaxed">
        {answer}
      </p>
    </GlassCard>
  );
}
