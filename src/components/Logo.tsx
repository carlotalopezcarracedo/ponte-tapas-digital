interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 56, className = "" }: LogoProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-ink text-cream ${className}`}
      style={{ width: size, height: size }}
      aria-label="Ponte Tapas"
    >
      <span
        className="font-script leading-none text-cream"
        style={{ fontSize: size * 0.32, letterSpacing: "-0.02em" }}
      >
        Ponte
        <br />
        Tapas
      </span>
    </div>
  );
}
