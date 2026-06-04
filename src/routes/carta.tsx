import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  Carrot,
  Drumstick,
  Egg,
  Fish,
  MapPin,
  Phone,
  Search,
  Sparkles,
  Utensils,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { CONTACT, MENU_ITEM_COUNT, MENU_SECTIONS } from "@/lib/site-data";

const SITE_BASE_URL = import.meta.env.BASE_URL;

const SECTION_ICONS = {
  especialidades: Sparkles,
  verde: Carrot,
  huevos: Egg,
  mar: Fish,
  carnes: Drumstick,
  postres: Utensils,
};

export const Route = createFileRoute("/carta")({
  head: () => ({
    meta: [
      { title: "Carta — Ponte Tapas" },
      {
        name: "description",
        content: "Carta real de Ponte Tapas en Pontevedra con platos y precios.",
      },
      { property: "og:title", content: "Carta — Ponte Tapas" },
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

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function CartaPage() {
  const [query, setQuery] = useState("");
  const normalizedQuery = normalizeText(query.trim());

  const filteredSections = useMemo(() => {
    if (!normalizedQuery) return MENU_SECTIONS;

    return MENU_SECTIONS.map((section) => ({
      ...section,
      items: section.items.filter((item) =>
        normalizeText(`${item.name} ${item.price}`).includes(normalizedQuery),
      ),
    })).filter((section) => section.items.length > 0);
  }, [normalizedQuery]);

  const visibleItems = filteredSections.reduce((total, section) => total + section.items.length, 0);

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
            <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
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
        <div className="content-shell relative py-16 sm:py-20 lg:py-24">
          <a
            href={SITE_BASE_URL}
            className="mb-10 inline-flex items-center gap-2 text-sm text-cream/70 transition hover:text-sky"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a la home
          </a>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-sky">
                <span className="h-px w-10 bg-sky" />
                Carta real
              </div>
              <h1 className="mt-12 font-script text-[clamp(4rem,10vw,8.5rem)] leading-[0.95] text-cream sm:mt-14">
                La carta.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cream/75">
                Listado completo extraído de la carta real del restaurante. Está ordenada por
                los mismos bloques del PDF y con precios visibles para decidir rápido.
              </p>
            </div>

            <div className="rounded-[2rem] border border-cream/10 bg-cream/8 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-cream/45">Contacto</p>
              <a
                href={CONTACT.phoneHref}
                className="mt-3 inline-flex items-center gap-3 text-2xl font-semibold tracking-tight text-cream transition hover:text-sky"
              >
                <Phone className="h-5 w-5 text-sky" />
                {CONTACT.phone}
              </a>
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-start gap-3 text-sm leading-relaxed text-cream/70 transition hover:text-sky"
              >
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sky" />
                <span>{CONTACT.address}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-[69px] z-40 border-b border-border/60 bg-background/92 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="content-shell py-4">
          <label className="flex h-12 w-full items-center gap-3 rounded-full border border-border bg-card px-4 shadow-sm lg:max-w-md">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar pulpo, tortilla, postre..."
              className="h-full min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </label>
          <nav className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {MENU_SECTIONS.map((section) => {
              const Icon = SECTION_ICONS[section.id as keyof typeof SECTION_ICONS] ?? Utensils;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground shadow-sm transition hover:border-ink/30 hover:bg-stone"
                >
                  <Icon className="h-4 w-4 text-sky" />
                  {section.title}
                </a>
              );
            })}
          </nav>
        </div>
      </section>

      <main id="carta" className="content-shell py-12 sm:py-16">
        <div className="mb-8 flex flex-col gap-2 border-y border-border/60 py-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            Mostrando <span className="font-semibold text-foreground">{visibleItems}</span> de{" "}
            <span className="font-semibold text-foreground">{MENU_ITEM_COUNT}</span> platos.
          </p>
          <p>Precios en euros · Carta real del PDF facilitado.</p>
        </div>

        {filteredSections.length === 0 ? (
          <div className="rounded-[2rem] border border-border bg-card px-6 py-16 text-center">
            <p className="font-script text-6xl leading-none">No sale nada.</p>
            <p className="mt-4 text-muted-foreground">
              Prueba con otra búsqueda o vuelve a ver toda la carta.
            </p>
            <button
              type="button"
              onClick={() => setQuery("")}
              className="mt-6 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition hover:opacity-90"
            >
              Limpiar búsqueda
            </button>
          </div>
        ) : (
          <div className="grid gap-7 lg:grid-cols-2">
            {filteredSections.map((section, index) => {
              const Icon = SECTION_ICONS[section.id as keyof typeof SECTION_ICONS] ?? Utensils;
              return (
                <section
                  key={section.id}
                  id={section.id}
                  className={`scroll-mt-44 rounded-[1.75rem] border border-border/70 bg-card p-5 shadow-sm sm:p-6 ${
                    index === 0 ? "lg:col-span-2" : ""
                  }`}
                >
                  <div className="mb-5 flex items-start justify-between gap-4 border-b border-border/70 pb-5">
                    <div>
                      <p className="mb-5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        Bloque {String(index + 1).padStart(2, "0")}
                      </p>
                      <h2 className="font-script text-4xl leading-[1] sm:text-5xl">
                        {section.title}
                      </h2>
                      <p className="mt-3 text-sm text-muted-foreground">{section.subtitle}</p>
                    </div>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-sky">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <ul className="divide-y divide-border/70">
                    {section.items.map((item) => (
                      <li
                        key={item.name}
                        className="grid grid-cols-[1fr_auto] items-start gap-4 py-4"
                      >
                        <p className="min-w-0 text-base font-medium leading-snug text-foreground">
                          {item.name}
                        </p>
                        <p className="shrink-0 rounded-full bg-stone px-3 py-1 text-sm font-semibold tabular-nums text-foreground">
                          {item.price}
                        </p>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        )}
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
