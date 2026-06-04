import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { CONTACT, MENU_ITEM_COUNT, MENU_SECTIONS } from "@/lib/site-data";

const SITE_BASE_URL = import.meta.env.BASE_URL;

export const Route = createFileRoute("/carta")({
  head: () => ({
    meta: [
      { title: "Carta | Ponte Tapas" },
      {
        name: "description",
        content: "Carta de Ponte Tapas en Pontevedra con platos y precios.",
      },
      { property: "og:title", content: "Carta | Ponte Tapas" },
      {
        property: "og:description",
        content: "Especialidades, verduras, huevos, mar, carnes y postres con precios.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_BASE_URL}carta` },
    ],
    links: [{ rel: "canonical", href: `${SITE_BASE_URL}carta` }],
  }),
  component: CartaPage,
});

function CartaPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
        <nav className="content-shell flex items-center justify-between py-3.5">
          <a href={SITE_BASE_URL} className="flex items-center gap-3">
            <Logo size={42} />
            <span className="hidden font-script text-2xl leading-none sm:inline">Ponte Tapas</span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href={SITE_BASE_URL} className="transition-colors hover:text-foreground">
              Inicio
            </a>
            <a href="#carta" className="text-foreground">
              Carta
            </a>
            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Cómo llegar
            </a>
          </div>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-cream transition hover:opacity-90 sm:text-sm"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Reservar</span>
          </a>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="absolute inset-0 noise-overlay opacity-25" />
        <div className="content-shell relative py-14 sm:py-20">
          <a
            href={SITE_BASE_URL}
            className="mb-12 inline-flex items-center gap-2 text-sm text-cream/70 transition hover:text-sky"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a la home
          </a>

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-sky">
                <span className="h-px w-10 bg-sky" />
                Carta
              </div>
              <h1 className="mt-12 font-script text-[clamp(4.5rem,12vw,9rem)] leading-[0.95] text-cream">
                Carta.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/72">
                Platos para compartir, producto gallego y precios claros para elegir sin dar vueltas.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-sky px-6 py-3 text-sm font-semibold text-ink transition hover:bg-sky/90"
              >
                <Phone className="h-4 w-4" />
                Llamar
              </a>
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-6 py-3 text-sm font-semibold text-cream transition hover:border-cream/60"
              >
                <MapPin className="h-4 w-4" />
                Cómo llegar
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-[69px] z-40 border-b border-border/60 bg-background/94 backdrop-blur supports-[backdrop-filter]:bg-background/82">
        <nav
          aria-label="Categorías de la carta"
          className="content-shell flex gap-2 overflow-x-auto py-3"
        >
          {MENU_SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="inline-flex shrink-0 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition hover:border-ink/30 hover:bg-stone"
            >
              {section.title}
            </a>
          ))}
        </nav>
      </section>

      <main id="carta" className="content-shell py-12 sm:py-16 lg:py-20">
        <div className="mb-12 border-y border-ink/15 py-5 sm:flex sm:items-center sm:justify-between">
          <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
            {MENU_ITEM_COUNT} platos
          </p>
          <p className="mt-2 text-sm text-muted-foreground sm:mt-0">
            Precios en euros. Carta del restaurante.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="space-y-16">
            {MENU_SECTIONS.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-36 border-t border-ink/20 pt-7"
              >
                <div className="mb-6 grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 sm:gap-x-6">
                  <span className="pt-2 text-xs font-semibold tabular-nums tracking-[0.22em] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="font-script text-5xl leading-[0.95] text-balance sm:text-6xl">
                      {section.title}
                    </h2>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                      {section.subtitle}
                    </p>
                  </div>
                </div>

                <ul className="divide-y divide-border/70">
                  {section.items.map((item) => (
                    <li
                      key={item.name}
                      className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 py-4"
                    >
                      <p className="min-w-0 text-base font-medium leading-snug text-foreground">
                        {item.name}
                      </p>
                      <p className="shrink-0 text-sm font-semibold tabular-nums text-foreground">
                        {item.price}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </main>

      <section className="bg-ink text-cream">
        <div className="content-shell grid gap-8 py-14 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-sky">Reserva</p>
            <h2 className="mt-8 font-script text-6xl leading-[0.95] sm:text-7xl">
              ¿Te guardamos<br />mesa?
            </h2>
            <p className="mt-5 max-w-xl text-cream/65">
              Llámanos y te confirmamos disponibilidad. También puedes preguntar por platos
              fuera de carta o sugerencias del día.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-sky px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-sky/90"
            >
              <Phone className="h-4 w-4" />
              Llamar al {CONTACT.phone}
            </a>
            <a
              href={SITE_BASE_URL}
              className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-7 py-3.5 text-sm font-semibold text-cream transition hover:border-cream/60"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a la home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
