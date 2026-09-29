export default function GlassCard({
  children,
  className = "",
  variant = "card", // "subtle" | "card" | "strong"
  hoverEffect = false,
  as: Component = "div",
  ...props
}) {
  const variantStyles = {
    subtle: "bg-white/60 backdrop-blur-md border border-white/70 shadow-[0_4px_20px_-2px_rgba(10,32,51,0.03)]",
    card: "bg-white/65 backdrop-blur-xl border border-white/80 shadow-[0_10px_30px_-5px_rgba(16,42,67,0.06)]",
    strong: "bg-white/80 backdrop-blur-2xl border border-white/90 shadow-[0_16px_40px_-10px_rgba(16,42,67,0.08)]",
  };

  const hoverStyles = hoverEffect
    ? "transition-all duration-300 hover:bg-white/85 hover:border-white hover:shadow-[0_20px_40px_-10px_rgba(16,42,67,0.12),0_8px_16px_-4px_rgba(22,119,255,0.08)] hover:-translate-y-1"
    : "";

  return (
    <Component
      className={`rounded-2xl relative overflow-hidden ${variantStyles[variant] || variantStyles.card} ${hoverStyles} ${className}`}
      {...props}
    >
      {/* Subtle top light edge reflection for real glassmorphism */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" 
      />
      {children}
    </Component>
  );
}
