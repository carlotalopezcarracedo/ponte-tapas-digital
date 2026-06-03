interface LogoProps {
  size?: number;
  className?: string;
  variant?: "dark" | "light";
}

export function Logo({ size = 56, className = "", variant = "dark" }: LogoProps) {
  const bg = variant === "dark" ? "bg-ink text-cream" : "bg-cream text-ink";
  return (
    <div
      className={`relative flex flex-col items-center justify-center rounded-full ${bg} shadow-md ${className}`}
      style={{ width: size, height: size }}
      aria-label="Ponte Tapas"
    >
      <span
        className="font-script leading-[0.9] text-center"
        style={{ fontSize: size * 0.24, transform: "rotate(-6deg)" }}
      >
        Ponte
      </span>
      <span
        className="font-script leading-[0.9] text-center"
        style={{ fontSize: size * 0.24, transform: "rotate(-6deg) translateX(6%)", marginTop: size * 0.03 }}
      >
        Tapas
      </span>
    </div>
  );
}
