import { createFileRoute } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ponte Tapas — Tapas y raciones en Pontevedra" },
      {
        name: "description",
        content:
          "Tapas, raciones y buen ambiente en el centro de Pontevedra. Sencillo, cercano y con sabor. Reserva por WhatsApp.",
      },
      { property: "og:title", content: "Ponte Tapas — Pontevedra" },
      {
        property: "og:description",
        content: "Tapas, raciones y buen ambiente en Pontevedra.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

const WHATSAPP_URL =
  "https://wa.me/34600000000?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20mesa%20en%20Ponte%20Tapas";

const NAV = [
  { href: "#sobre", label: "Sobre" },
  { href: "#carta", label: "Carta" },
  { href: "#destacados", label: "Destacados" },
  { href: "#ubicacion", label: "Ubicación" },
];

const CATEGORIES = [
  { name: "Tapas", desc: "Pequeños bocados para abrir boca, hechos al momento." },
  { name: "Raciones", desc: "Para compartir en el centro de la mesa, sin prisa." },
  { name: "Bocadillos", desc: "Pan recién hecho y rellenos sencillos y honestos." },
  { name: "Postres", desc: "Caseros, dulces y nada complicados." },
  { name: "Bebidas", desc: "Cañas frías, vinos de la tierra y refrescos." },
];

const HIGHLIGHTS = [
  { title: "Especialidad de la casa", tag: "Imprescindible", img: dish2 },
  { title: "Tapas para compartir", tag: "En el centro", img: dish1 },
  { title: "Raciones calientes", tag: "Recién hechas", img: dish3 },
  { title: "Algo dulce para terminar", tag: "Casero", img: dish4 },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border/60">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <a href="#top" className="flex items-center gap-3">
            <Logo size={40} />
            <span className="hidden sm:inline text-sm font-medium tracking-tight">
              Ponte Tapas
            </span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-foreground transition-colors">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-ink px-4 py-2 text-xs sm:text-sm font-medium text-cream hover:opacity-90 transition"
          >
            Reservar
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Interior de Ponte Tapas en Pontevedra"
            className="h-full w-full object-cover"
            width={1600}
            height={1200}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/85 via-cream/55 to-cream" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-24 sm:pt-24 sm:pb-32 lg:pt-32 lg:pb-40">
          <div className="flex flex-col items-start gap-8 max-w-2xl">
            <Logo size={88} className="md:size-[112px]" />

            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-px w-8 bg-sky" />
              Pontevedra · desde 2024
            </div>

            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight">
              Tapas, raciones y{" "}
              <span className="font-script text-[1.15em] leading-none">
                buen ambiente
              </span>{" "}
              en Pontevedra.
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Un sitio sencillo, cercano y con sabor para comer, picar algo o
              tomar algo con calma.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#carta"
                className="inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream hover:opacity-90 transition"
              >
                Ver carta
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-background px-6 py-3 text-sm font-medium text-foreground hover:border-ink/40 transition"
              >
                <span className="h-2 w-2 rounded-full bg-sky" />
                Reservar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-sky" /> Sobre nosotros
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium leading-tight tracking-tight mb-6">
              Un lugar de encuentro en el{" "}
              <span className="font-script text-[1.1em]">centro</span> de
              Pontevedra.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ponte Tapas nace como un sitio para juntarse: tapas, raciones,
              cocina sencilla y trato cercano. Sin postureos, sin cartas
              interminables.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Producto de aquí, recetas de toda la vida y ganas de que estés a
              gusto. Eso es todo.
            </p>
            <ul className="flex flex-wrap gap-2">
              {["Tapas", "Raciones", "Ambiente local", "Trato cercano"].map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-ink/15 px-4 py-1.5 text-sm text-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-stone">
              <img
                src={aboutImg}
                alt="Comedor de Ponte Tapas"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1200}
                height={1400}
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden sm:flex h-24 w-24 items-center justify-center rounded-full bg-sky text-ink text-xs font-medium tracking-wide">
              <span className="font-script text-2xl">hola!</span>
            </div>
          </div>
        </div>
      </section>

      {/* CARTA */}
      <section id="carta" className="bg-stone/70 border-y border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground flex items-center gap-2 mb-5">
                <span className="h-px w-8 bg-sky" /> Carta
              </div>
              <h2 className="text-3xl sm:text-4xl font-medium leading-tight tracking-tight">
                Qué vas a encontrar.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Una carta corta y honesta. Cambia con la temporada y con lo que
              esté bueno en el mercado.
            </p>
          </div>

          <div className="grid gap-px bg-border/70 rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c, i) => (
              <article
                key={c.name}
                className="bg-card p-7 sm:p-8 flex flex-col gap-3 min-h-[180px] group"
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-medium tracking-tight">{c.name}</h3>
                  <span className="text-xs text-muted-foreground tabular-nums">
                    0{i + 1}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {c.desc}
                </p>
                <div className="mt-auto pt-4">
                  <span className="inline-block h-px w-8 bg-ink/20 group-hover:bg-sky transition-colors" />
                </div>
              </article>
            ))}
            <div className="bg-ink text-cream p-7 sm:p-8 flex flex-col justify-between min-h-[180px]">
              <p className="font-script text-3xl leading-none text-sky">
                buen provecho
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cream hover:text-sky transition"
              >
                Consultar carta completa
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DESTACADOS */}
      <section id="destacados" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <div className="mb-12 max-w-xl">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground flex items-center gap-2 mb-5">
            <span className="h-px w-8 bg-sky" /> Destacados
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium leading-tight tracking-tight">
            Lo que más nos piden.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h) => (
            <article
              key={h.title}
              className="group rounded-2xl bg-card border border-border/60 overflow-hidden hover:border-ink/30 transition"
            >
              <div className="aspect-square overflow-hidden bg-stone">
                <img
                  src={h.img}
                  alt={h.title}
                  className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  loading="lazy"
                  width={900}
                  height={1100}
                />
              </div>
              <div className="p-5">
                <span className="text-[11px] uppercase tracking-[0.16em] text-sky/90 font-medium">
                  {h.tag}
                </span>
                <h3 className="mt-2 text-base font-medium leading-snug tracking-tight">
                  {h.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* RESERVAS — bloque negro */}
      <section id="reservas" className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-sky flex items-center gap-2 mb-6">
                <span className="h-px w-8 bg-sky" /> Reservas
              </div>
              <h2 className="text-4xl sm:text-5xl font-medium leading-[1.05] tracking-tight mb-6">
                ¿Te guardamos{" "}
                <span className="font-script text-[1.15em] text-sky">mesa</span>?
              </h2>
              <p className="text-cream/70 leading-relaxed max-w-md mb-8">
                Escríbenos por WhatsApp y te confirmamos disponibilidad. Sin
                formularios, sin esperas.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-sky px-7 py-3.5 text-sm font-medium text-ink hover:bg-sky/90 transition"
              >
                Reservar por WhatsApp
                <span aria-hidden>→</span>
              </a>
            </div>

            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 text-sm self-end">
              <div>
                <dt className="text-cream/50 uppercase tracking-[0.16em] text-[11px] mb-2">
                  Teléfono
                </dt>
                <dd className="text-cream">+34 600 000 000</dd>
              </div>
              <div>
                <dt className="text-cream/50 uppercase tracking-[0.16em] text-[11px] mb-2">
                  Instagram
                </dt>
                <dd>
                  <a
                    href="https://instagram.com/pontetapas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream hover:text-sky transition"
                  >
                    @pontetapas
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-cream/50 uppercase tracking-[0.16em] text-[11px] mb-2">
                  Dirección
                </dt>
                <dd className="text-cream leading-relaxed">
                  Rúa de ejemplo, 12
                  <br />
                  36001 Pontevedra
                </dd>
              </div>
              <div>
                <dt className="text-cream/50 uppercase tracking-[0.16em] text-[11px] mb-2">
                  Horario
                </dt>
                <dd className="text-cream leading-relaxed">
                  Mar–Dom · 12:30–16:00
                  <br />
                  20:00–23:30
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section id="ubicacion" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground flex items-center gap-2 mb-5">
              <span className="h-px w-8 bg-sky" /> Ubicación
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium leading-tight tracking-tight mb-5">
              Estamos en{" "}
              <span className="font-script text-[1.1em]">Pontevedra</span>.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              En pleno casco antiguo, fácil de encontrar a pie. Si vienes en
              coche, hay aparcamiento a 3 minutos.
            </p>
            <p className="text-sm text-foreground mb-8">
              Rúa de ejemplo, 12 · 36001 Pontevedra
            </p>
            <a
              href="https://maps.google.com/?q=Pontevedra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream hover:opacity-90 transition"
            >
              Cómo llegar
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border/60 aspect-[4/3] bg-stone">
            <iframe
              title="Ubicación de Ponte Tapas en Pontevedra"
              src="https://www.google.com/maps?q=Pontevedra,Spain&output=embed"
              className="h-full w-full grayscale-[0.4] contrast-[0.95]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-5 py-12 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Logo size={44} />
            <div>
              <p className="text-sm font-medium">Ponte Tapas</p>
              <p className="text-xs text-cream/60">Pontevedra</p>
            </div>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-cream/80">
            <li><a href="#carta" className="hover:text-sky transition">Carta</a></li>
            <li><a href="#reservas" className="hover:text-sky transition">Reservas</a></li>
            <li><a href="#ubicacion" className="hover:text-sky transition">Ubicación</a></li>
            <li>
              <a
                href="https://instagram.com/pontetapas"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky transition"
              >
                Instagram
              </a>
            </li>
          </ul>
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} <span className="text-sky">·</span> Hecho con calma.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp CTA — mobile-first */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-cream shadow-lg"
      >
        <span className="h-2 w-2 rounded-full bg-sky animate-pulse" />
        Reservar
      </a>
    </div>
  );
}
