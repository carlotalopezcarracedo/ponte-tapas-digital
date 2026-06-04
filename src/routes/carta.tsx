import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  Beer,
  Coffee,
  Euro,
  Fish,
  Flame,
  Leaf,
  MessageCircle,
  Search,
  Soup,
  Sparkles,
  Star,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import { Logo } from "@/components/Logo";

const SITE_BASE_URL = import.meta.env.BASE_URL;
const WHATSAPP_URL =
  "https://wa.me/34600000000?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20mesa%20en%20Ponte%20Tapas";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  tags?: string[];
  featured?: boolean;
};

type MenuSection = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  icon: LucideIcon;
  items: MenuItem[];
};

const MENU_SECTIONS: MenuSection[] = [
  {
    id: "entrantes",
    title: "Entrantes",
    eyebrow: "Para abrir mesa",
    description: "Bocados sencillos para empezar sin prisa y compartir al centro.",
    icon: Sparkles,
    items: [
      {
        name: "Pan de masa madre con aceite",
        description: "Pan tostado, aceite de oliva virgen extra y sal en escamas.",
        price: "2,80 €",
        tags: ["para compartir"],
      },
      {
        name: "Croquetas caseras",
        description: "Cremosas por dentro, doradas por fuera. Consulta sabores del día.",
        price: "8,90 €",
        tags: ["casero", "8 uds"],
        featured: true,
      },
      {
        name: "Empanada gallega",
        description: "Ración de empanada del día, hecha para acompañar una caña fría.",
        price: "5,90 €",
        tags: ["gallega"],
      },
      {
        name: "Tartaletas de espinaca",
        description: "Hojaldre crujiente con crema suave de espinaca y queso.",
        price: "8,50 €",
        tags: ["vegetal"],
        featured: true,
      },
      {
        name: "Ensaladilla casera",
        description: "Patata, bonito, huevo y mayonesa suave, servida bien fría.",
        price: "7,80 €",
        tags: ["fría", "casera"],
      },
      {
        name: "Tabla de quesos gallegos",
        description: "Selección de quesos de la tierra con membrillo y pan.",
        price: "12,50 €",
        tags: ["producto local"],
      },
    ],
  },
  {
    id: "raciones",
    title: "Raciones",
    eyebrow: "Centro de la mesa",
    description: "Platos pensados para pedir varios y montar una comida a tu ritmo.",
    icon: Utensils,
    items: [
      {
        name: "Pulpo á feira",
        description: "Pulpo tierno, patata, aceite de oliva, sal gruesa y pimentón.",
        price: "18,50 €",
        tags: ["imprescindible", "mar"],
        featured: true,
      },
      {
        name: "Fabada",
        description: "Plato de cuchara con fabes, compango y caldo sabroso.",
        price: "12,90 €",
        tags: ["cuchara"],
        featured: true,
      },
      {
        name: "Vieiras a la plancha",
        description: "Vieiras doradas con aceite, ajo suave y fondo de ensalada.",
        price: "15,90 €",
        tags: ["mar"],
        featured: true,
      },
      {
        name: "Hamburguesitas con patatas",
        description: "Mini burgers jugosas con queso, tomate, lechuga y patatas.",
        price: "11,50 €",
        tags: ["para compartir"],
      },
      {
        name: "Gyozas vegetales",
        description: "Gyozas rellenas de verdura, salsa de soja y crema suave.",
        price: "9,80 €",
        tags: ["vegetal"],
      },
      {
        name: "Calamares fritos",
        description: "Calamar rebozado fino, limón y alioli de la casa.",
        price: "13,80 €",
        tags: ["mar", "crujiente"],
      },
    ],
  },
  {
    id: "principales",
    title: "Platos principales",
    eyebrow: "Para venir con hambre",
    description: "Recetas completas, generosas y con guarniciones de las de siempre.",
    icon: Flame,
    items: [
      {
        name: "Cordón bleu casero",
        description: "Filete relleno, empanado crujiente y patatas fritas.",
        price: "13,90 €",
        tags: ["casero"],
        featured: true,
      },
      {
        name: "Milanesa de pollo",
        description: "Pollo empanado con patatas y ensalada fresca.",
        price: "12,80 €",
        tags: ["clásico"],
      },
      {
        name: "Bacalao a la gallega",
        description: "Bacalao, patata cocida, ajada suave y pimentón.",
        price: "16,50 €",
        tags: ["pescado"],
      },
      {
        name: "Carrillera guisada",
        description: "Carrillera melosa con salsa reducida y puré de patata.",
        price: "15,90 €",
        tags: ["guiso"],
      },
      {
        name: "Entrecot con patatas",
        description: "Entrecot a la plancha, patatas y pimientos.",
        price: "18,90 €",
        tags: ["carne"],
      },
      {
        name: "Verduras a la plancha",
        description: "Verduras de temporada con aceite de oliva y sal.",
        price: "10,80 €",
        tags: ["vegetal", "ligero"],
      },
    ],
  },
  {
    id: "postres",
    title: "Postres",
    eyebrow: "Final feliz",
    description: "Dulces de cuchara y horno para alargar la sobremesa.",
    icon: Coffee,
    items: [
      {
        name: "Tarta de queso cremosa",
        description: "Horneada, suave y con el centro justo.",
        price: "5,80 €",
        tags: ["casera"],
        featured: true,
      },
      {
        name: "Flan casero",
        description: "Flan de huevo con caramelo.",
        price: "4,50 €",
        tags: ["clásico"],
      },
      {
        name: "Arroz con leche",
        description: "Cremoso, con canela y piel de limón.",
        price: "4,80 €",
        tags: ["cuchara"],
      },
      {
        name: "Brownie templado",
        description: "Chocolate, nuez y una bola de helado.",
        price: "5,20 €",
        tags: ["chocolate"],
      },
      {
        name: "Helado artesanal",
        description: "Dos bolas. Consulta sabores disponibles.",
        price: "4,20 €",
        tags: ["frío"],
      },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    eyebrow: "Para acompañar",
    description: "Cañas, vinos de la tierra, vermut y cafés para cerrar bien.",
    icon: Beer,
    items: [
      {
        name: "Caña Estrella Galicia",
        description: "Servida fría, como tiene que ser.",
        price: "2,20 €",
        tags: ["cerveza"],
      },
      {
        name: "Copa de vino",
        description: "Tinto, blanco o mencía de la casa.",
        price: "3,20 €",
        tags: ["vino"],
      },
      {
        name: "Botella de Albariño",
        description: "Vino blanco gallego para compartir.",
        price: "16,00 €",
        tags: ["gallego"],
        featured: true,
      },
      {
        name: "Botella de Mencía",
        description: "Tinto fresco y amable para raciones.",
        price: "15,00 €",
        tags: ["gallego"],
      },
      {
        name: "Vermut de grifo",
        description: "Con hielo, naranja y aceituna.",
        price: "3,60 €",
        tags: ["aperitivo"],
      },
      {
        name: "Refrescos",
        description: "Cola, limón, naranja y opciones sin azúcar.",
        price: "2,60 €",
        tags: ["sin alcohol"],
      },
      {
        name: "Agua",
        description: "Botella individual.",
        price: "2,20 €",
        tags: ["sin alcohol"],
      },
      {
        name: "Café",
        description: "Solo, cortado o con leche.",
        price: "1,50 €",
        tags: ["sobremesa"],
      },
    ],
  },
];

const FEATURED_ITEMS = MENU_SECTIONS.flatMap((section) =>
  section.items
    .filter((item) => item.featured)
    .map((item) => ({ ...item, section: section.title })),
).slice(0, 4);

export const Route = createFileRoute("/carta")({
  head: () => ({
    meta: [
      { title: "Carta — Ponte Tapas" },
      {
        name: "description",
        content:
          "Carta digital de Ponte Tapas: entrantes, raciones, platos principales, postres y bebidas con precios.",
      },
      { property: "og:title", content: "Carta — Ponte Tapas" },
      {
        property: "og:description",
        content: "Entrantes, raciones, principales, postres y bebidas con precios.",
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
      items: section.items.filter((item) => {
        const searchable = normalizeText(
          [item.name, item.description, item.price, ...(item.tags ?? [])].join(" "),
        );
        return searchable.includes(normalizedQuery);
      }),
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
            <a href="#entrantes" className="text-foreground">
              Carta
            </a>
            <a href={`${SITE_BASE_URL}#reservas`} className="transition-colors hover:text-foreground">
              Reservas
            </a>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Reservar por WhatsApp"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-medium text-cream transition hover:opacity-90 sm:text-sm"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Reservar</span>
          </a>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="absolute inset-0 noise-overlay opacity-25" />
        <div className="content-shell relative py-16 sm:py-24 lg:py-28">
          <a
            href={SITE_BASE_URL}
            className="mb-10 inline-flex items-center gap-2 text-sm text-cream/70 transition hover:text-sky"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a la home
          </a>

          <div className="grid min-w-0 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="min-w-0">
              <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-sky">
                <span className="h-px w-10 bg-sky" />
                Carta digital
              </div>
              <h1 className="mt-6 max-w-full font-script text-[clamp(3.7rem,12vw,11rem)] leading-[0.78] text-cream lg:max-w-3xl">
                <span className="block">Comer</span>
                <span className="block">rico,</span>
                <span className="block text-sky">sin líos.</span>
              </h1>
              <p className="mt-8 max-w-full text-lg leading-relaxed text-cream/75 sm:text-xl lg:max-w-2xl">
                Entrantes, raciones, principales, postres y bebidas ordenados para que encuentres
                rápido lo que te apetece. Precios claros y platos pensados para compartir.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#entrantes"
                  className="inline-flex items-center gap-2 rounded-full bg-sky px-7 py-3.5 text-sm font-medium text-ink transition hover:bg-sky/90"
                >
                  <Utensils className="h-4 w-4" />
                  Ver carta
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-7 py-3.5 text-sm font-medium text-cream transition hover:border-cream/60"
                >
                  <MessageCircle className="h-4 w-4" />
                  Reservar mesa
                </a>
              </div>
            </div>

            <div className="grid min-w-0 gap-3 sm:grid-cols-2">
              {[
                { label: "Menú del día", value: "14,00 €", icon: Euro },
                { label: "Raciones", value: "desde 8,90 €", icon: Soup },
                { label: "Opciones vegetales", value: "siempre", icon: Leaf },
                { label: "Producto de mar", value: "Galicia", icon: Fish },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="rounded-3xl border border-cream/10 bg-cream/8 p-5">
                    <Icon className="mb-5 h-5 w-5 text-sky" />
                    <p className="text-xs uppercase tracking-[0.18em] text-cream/45">{stat.label}</p>
                    <p className="mt-2 font-script text-4xl leading-none text-cream">{stat.value}</p>
                  </div>
                );
              })}
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
              placeholder="Buscar pulpo, croquetas, vino..."
              className="h-full min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </label>
          <nav className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {MENU_SECTIONS.map((section) => {
              const Icon = section.icon;
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

      <main className="content-shell py-14 sm:py-20">
        <section className="mb-14 rounded-[2rem] bg-sky p-6 text-ink sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-ink/55">Recomendados</p>
              <h2 className="mt-3 font-script text-6xl leading-[0.82] sm:text-7xl">
                Pide fácil.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURED_ITEMS.map((item) => (
                <div key={item.name} className="rounded-2xl bg-cream/80 p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-ink/50">{item.section}</p>
                  <p className="mt-2 text-sm font-semibold leading-snug">{item.name}</p>
                  <p className="mt-3 font-script text-3xl leading-none">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mb-8 flex flex-col gap-2 border-y border-border/60 py-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            Mostrando <span className="font-medium text-foreground">{visibleItems}</span> platos y bebidas.
          </p>
          <p>Precios en euros · Consulta al equipo por alérgenos y producto fuera de carta.</p>
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
              className="mt-6 rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition hover:opacity-90"
            >
              Limpiar búsqueda
            </button>
          </div>
        ) : (
          <div className="space-y-16">
            {filteredSections.map((section) => {
              const Icon = section.icon;
              return (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-44 border-t border-border/60 pt-10"
                >
                  <div className="grid gap-8 lg:grid-cols-[18rem_1fr]">
                    <div className="lg:sticky lg:top-48 lg:self-start">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-sky">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {section.eyebrow}
                      </p>
                      <h2 className="mt-4 font-script text-6xl leading-[0.85] sm:text-7xl">
                        {section.title}
                      </h2>
                      <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
                        {section.description}
                      </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      {section.items.map((item) => (
                        <article
                          key={item.name}
                          className={`relative rounded-3xl border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                            item.featured ? "border-sky/70" : "border-border/70"
                          }`}
                        >
                          {item.featured ? (
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-sky/20 px-3 py-1 text-xs font-medium text-ink">
                              <Star className="h-3.5 w-3.5 fill-sky text-sky" />
                              Favorito
                            </div>
                          ) : null}
                          <div className="flex items-start justify-between gap-5">
                            <h3 className="text-xl font-semibold leading-tight">{item.name}</h3>
                            <p className="shrink-0 rounded-full bg-ink px-3 py-1.5 font-script text-3xl leading-none text-sky">
                              {item.price}
                            </p>
                          </div>
                          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                            {item.description}
                          </p>
                          {item.tags?.length ? (
                            <div className="mt-5 flex flex-wrap gap-2">
                              {item.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full bg-stone px-3 py-1 text-xs text-muted-foreground"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          ) : null}
                        </article>
                      ))}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </main>

      <section className="bg-ink text-cream">
        <div className="content-shell grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-sky">Reserva</p>
            <h2 className="mt-4 font-script text-6xl leading-[0.85] sm:text-7xl">
              ¿Mesa y algo<br />para picar?
            </h2>
            <p className="mt-5 max-w-xl text-cream/65">
              Escríbenos por WhatsApp y te confirmamos disponibilidad. También puedes preguntar
              por platos fuera de carta o sugerencias del día.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-sky px-7 py-3.5 text-sm font-medium text-ink transition hover:bg-sky/90"
            >
              <MessageCircle className="h-4 w-4" />
              Reservar por WhatsApp
            </a>
            <a
              href={SITE_BASE_URL}
              className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-7 py-3.5 text-sm font-medium text-cream transition hover:border-cream/60"
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
