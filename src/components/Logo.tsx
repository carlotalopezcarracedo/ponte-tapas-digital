interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 56, className = "" }: LogoProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-full bg-ink text-cream shadow-sm ${className}`}
      style={{ width: size, height: size }}
      aria-label="Ponte Tapas"
    >
      <span
        className="font-script leading-[0.95] text-cream text-center"
        style={{ fontSize: size * 0.3, letterSpacing: "-0.01em" }}
      >
        Ponte
      </span>
      <span
        className="font-script leading-[0.95] text-cream text-center"
        style={{ fontSize: size * 0.3, letterSpacing: "-0.01em", marginTop: size * 0.02 }}
      >
        Tapas
      </span>
    </div>
  );
}
