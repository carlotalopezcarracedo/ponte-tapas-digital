import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Logo } from "@/components/Logo";
import { CONTACT, MENU_ITEM_COUNT, MENU_SECTIONS, OPENING_HOURS } from "@/lib/site-data";

const SITE_BASE_URL = import.meta.env.BASE_URL;
const publicImage = (fileName: string) => `${SITE_BASE_URL}${fileName}`;
const RESTAURANT_IMAGE = publicImage("ChatGPT%20Image%204%20jun%202026,%2010_39_03.png");

const PRODUCT_IMAGES = {
  pulpo: publicImage("ChatGPT%20Image%203%20jun%202026,%2015_41_47.png"),
  fabada: publicImage("ChatGPT%20Image%203%20jun%202026,%2015_51_11.png"),
  vieiras: publicImage("ChatGPT%20Image%203%20jun%202026,%2015_48_46.png"),
  hamburguesitas: publicImage("ChatGPT%20Image%203%20jun%202026,%2015_43_13.png"),
  tartaletas: publicImage("ChatGPT%20Image%203%20jun%202026,%2015_55_52.png"),
  gyozas: publicImage("ChatGPT%20Image%203%20jun%202026,%2015_46_16.png"),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ponte Tapas — Tapas y raciones en Pontevedra" },
      {
        name: "description",
        content:
          "Tapas, raciones y buen ambiente en el centro de Pontevedra. Cocina casera, producto local y trato cercano. Llama para reservar.",
      },
      { property: "og:title", content: "Ponte Tapas — Pontevedra" },
      {
        property: "og:description",
        content: "Tapas, raciones y buen ambiente en Pontevedra.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_BASE_URL },
    ],
    links: [{ rel: "canonical", href: SITE_BASE_URL }],
  }),
  component: Landing,
});

const NAV = [
  { href: "#sobre", label: "Sobre" },
  { href: `${SITE_BASE_URL}carta`, label: "Carta" },
  { href: "#destacados", label: "Destacados" },
  { href: "#galeria", label: "Galería" },
  { href: "#ubicacion", label: "Ubicación" },
];

const HIGHLIGHTS = [
  { title: "Pulpo á feira", tag: "Imprescindible", img: PRODUCT_IMAGES.pulpo },
  { title: "Fabada", tag: "De cuchara", img: PRODUCT_IMAGES.fabada },
  { title: "Vieiras", tag: "Mar de Galicia", img: PRODUCT_IMAGES.vieiras },
  { title: "Hamburguesitas", tag: "Para compartir", img: PRODUCT_IMAGES.hamburguesitas },
  { title: "Tartaletas de espinaca", tag: "Cremosas", img: PRODUCT_IMAGES.tartaletas },
  { title: "Gyozas vegetales", tag: "Vegetal", img: PRODUCT_IMAGES.gyozas },
];

const TESTIMONIALS = [
  {
    author: "Berta U G",
    meta: "Local Guide · 48 reseñas · 98 fotos",
    date: "Fecha de edición: Hace 4 meses",
    context: "Comida | 10-20 €",
    quote:
      "Muy buen sitio, tanto para el menú del día como para ir a la carta. Personal amable y comida muy rica. Recomendable si estás por Pontevedra sin duda.",
  },
  {
    author: "Andrea Fernández Romero",
    meta: "Local Guide · 43 reseñas · 94 fotos",
    date: "Hace 9 meses",
    context: "Cena | 20-30 €",
    quote:
      "Lo descubrimos de casualidad, nos buscaron mesa rápidamente y nos atendieron muy bien. Los platos presentados sin pretensiones pero espectaculares de sabor!!! Recomendable al 100%",
  },
  {
    author: "Ismael Llorens",
    meta: "Local Guide · 54 reseñas · 46 fotos",
    date: "Hace 9 meses",
    context: "Comida | 20-30 €",
    quote:
      "Mi primera visita con la familia en Pontevedra, restaurante en casco antiguo, ambiente muy agradable y personal muy atento y simpático, la carta no muy amplia pero con una selección variada y de calidad, los precios muy razonables y los platos abundantes, sin duda un buen restaurante para comer, lo recomiendo, en futuras visitas volveremos.",
  },
  {
    author: "Patricia Lopez",
    meta: "Local Guide · 46 reseñas · 55 fotos",
    date: "Hace un año",
    context: "Comí allí | Comida | 10-20 €",
    quote:
      "Buen sitio para comer. Comimos menú del día. 14 euros dos platos, postre y café con 4 opciones de cada a elegir. Tiene también para tapear. Comida casera rica, servicio rápido y amable",
  },
  {
    author: "Alexis",
    meta: "Local Guide · 132 reseñas · 226 fotos",
    date: "Hace un año",
    context: "Comida",
    quote:
      "Lo encontramos paseando. Es un bar de tapeo y para comer bonito, tiene un ambiente acogedor. La camarera fue muy atenta y nos atendió rápido. Pedimos croquetas (varios tipos), empanada y cordón bleu. Todo muy rico, con buenas raciones y un precio económico. Completamente recomendable.",
  },
  {
    author: "Alejandro Tocino",
    meta: "Local Guide · 141 reseñas · 21 fotos",
    date: "Hace 10 meses",
    context: "20-30 €",
    quote:
      "Comida muy bien preparada, atención inmejorable, un sitio tranquilo con raciones abundantes y preparadas en su punto. Las ensaladas con lechuga casera, no de bolsa",
  },
];

const TESTIMONIAL_LOOP = [...TESTIMONIALS, ...TESTIMONIALS];
const TESTIMONIAL_RESET_DELAY = 760;

const MARQUEE = ["tapas", "raciones", "vino de la tierra", "buen ambiente", "cocina casera", "Pontevedra"];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
      <span className="h-px w-10 bg-ink/40" />
      {children}
    </div>
  );
}

function Landing() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [testimonialTransition, setTestimonialTransition] = useState(true);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTestimonialIndex((current) => current + 1);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (testimonialIndex !== TESTIMONIALS.length) return;

    let firstFrame = 0;
    let secondFrame = 0;
    const reset = window.setTimeout(() => {
      setTestimonialTransition(false);
      setTestimonialIndex(0);

      firstFrame = window.requestAnimationFrame(() => {
        secondFrame = window.requestAnimationFrame(() => {
          setTestimonialTransition(true);
        });
      });
    }, TESTIMONIAL_RESET_DELAY);

    return () => {
      window.clearTimeout(reset);
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
    };
  }, [testimonialIndex]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border/60">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <a href="#top" className="flex items-center gap-3">
            <Logo size={42} />
            <span className="font-script text-2xl leading-none hidden sm:inline">
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
            href={CONTACT.phoneHref}
            className="inline-flex items-center rounded-full bg-ink px-4 py-2 text-xs sm:text-sm font-medium text-cream hover:opacity-90 transition"
          >
            Reservar
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-ink text-cream">
        <div className="absolute inset-0">
          <img
            src={RESTAURANT_IMAGE}
            alt="Interior real de Ponte Tapas en Pontevedra"
            className="h-full w-full object-cover opacity-55"
            width={1600}
            height={1200}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/60 to-ink" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-28 sm:pt-28 sm:pb-36 lg:pt-36 lg:pb-44">
          <div className="flex max-w-3xl flex-col items-start gap-7">
            <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-sky">
              <span className="h-px w-10 bg-sky" />
              Pontevedra · casco antiguo
            </div>

            <h1 className="mt-5 font-script text-[clamp(3.8rem,12vw,9.8rem)] leading-[0.9] tracking-tight text-cream sm:mt-7">
              <span className="block -rotate-[3deg]">Ponte</span>
              <span className="block translate-x-[8%] text-sky -rotate-[2deg]">Tapas</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/80 sm:text-xl">
              Tapas, raciones y buen ambiente en el corazón de Pontevedra.
              Cocina sencilla, producto de aquí, gente cercana.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-sky px-7 py-3.5 text-sm font-medium text-ink hover:bg-sky/90 transition"
              >
                <span className="h-2 w-2 rounded-full bg-ink animate-pulse" />
                Llamar para reservar
              </a>
              <a
                href={`${SITE_BASE_URL}carta`}
                className="inline-flex items-center rounded-full border border-cream/25 px-7 py-3.5 text-sm font-medium text-cream hover:border-cream/60 transition"
              >
                Ver carta
              </a>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-10 text-xs uppercase tracking-[0.18em] text-cream/60">
              <span>★ 4,5 en Google</span>
              <span>· Abre a las 13:00</span>
              <span>· Reservas por teléfono</span>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden border-y border-ink/10 bg-sky py-5">
          <div className="flex w-max animate-marquee whitespace-nowrap">
            {[...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE].map((w, i) => (
              <span key={i} className="mx-8 inline-flex items-center gap-8 font-script text-4xl text-ink sm:text-5xl">
                {w}
                <span className="text-cream">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <SectionLabel>Sobre nosotros</SectionLabel>
            <h2 className="mb-8 mt-10 font-script text-6xl leading-[0.9] -rotate-[1deg] sm:text-7xl lg:text-8xl">
              Un sitio<br />de barrio.
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-5">
              Ponte Tapas nació con una idea sencilla: que entres, te sientas
              en casa y comas rico sin complicaciones.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-10">
              Producto gallego, recetas de siempre y un equipo al que le gusta
              lo que hace. Nada de cartas interminables ni postureo: tapas
              honestas, raciones para compartir y vino de la tierra.
            </p>
            <div className="grid grid-cols-2 gap-6 max-w-md">
              <div className="border-t border-ink/15 pt-4">
                <p className="text-3xl font-semibold leading-none tracking-tight text-ink">{MENU_ITEM_COUNT}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">platos en carta</p>
              </div>
              <div className="border-t border-ink/15 pt-4">
                <a
                  href={`${SITE_BASE_URL}carta`}
                  className="inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition hover:opacity-90"
                >
                  Ver carta
                </a>
                <p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">platos y precios</p>
              </div>
              <div className="border-t border-ink/15 pt-4">
                <p className="text-3xl font-semibold leading-none tracking-tight text-ink">4,5★</p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">en Google</p>
              </div>
              <div className="border-t border-ink/15 pt-4">
                <p className="text-3xl font-semibold leading-none tracking-tight text-ink">Casco</p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">antiguo · Pontevedra</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone">
              <img
                src={RESTAURANT_IMAGE}
                alt="Comedor real de Ponte Tapas"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1200}
                height={1400}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 sm:-left-10 flex h-32 w-32 sm:h-40 sm:w-40 items-center justify-center rounded-full bg-sky text-ink animate-float shadow-xl">
              <span className="font-script text-5xl sm:text-6xl -rotate-12">hola!</span>
            </div>
            <div className="absolute -top-4 -right-4 hidden items-center gap-2 rounded-full bg-ink px-5 py-2 text-cream sm:flex">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/80">desde</span>
              <span className="font-script text-3xl leading-none text-sky">2022</span>
            </div>
          </div>
        </div>
      </section>

      {/* CARTA */}
      <section id="carta" className="relative overflow-hidden bg-ink text-cream">
        <div className="absolute inset-0 noise-overlay opacity-30 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
          <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-sky">
                <span className="h-px w-10 bg-sky" /> Carta
              </div>
              <h2 className="mt-10 font-script text-7xl leading-[0.9] -rotate-[2deg] sm:text-8xl lg:text-9xl">
                Qué vas a<br />
                <span className="text-sky">pedir</span>.
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-base leading-relaxed text-cream/70">
                Hemos reunido la carta del restaurante por bloques, con precios
                claros y sin perder el estilo de Ponte Tapas.
              </p>
              <a
                href={`${SITE_BASE_URL}carta`}
                className="mt-6 inline-flex items-center rounded-full bg-sky px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-sky/90"
              >
                Ver carta completa
              </a>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl bg-cream/10 md:grid-cols-2 lg:grid-cols-3">
            {MENU_SECTIONS.map((section, index) => (
              <article
                key={section.id}
                className="bg-ink p-7 transition-colors hover:bg-ink/75"
              >
                <div className="mb-6 flex items-baseline justify-between gap-4">
                  <h3 className="font-script text-4xl leading-[0.95] -rotate-[1deg] sm:text-5xl">
                    {section.title}
                  </h3>
                  <span className="text-xs tabular-nums text-cream/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <ul className="space-y-3">
                  {section.items.slice(0, 3).map((item) => (
                    <li key={item.name} className="grid grid-cols-[1fr_auto] gap-4 text-sm">
                      <span className="min-w-0 text-cream/82">{item.name}</span>
                      <span className="shrink-0 font-semibold tabular-nums text-sky">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DESTACADOS */}
      <section id="destacados" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <SectionLabel>Lo más pedido</SectionLabel>
            <h2 className="mt-10 font-script text-7xl leading-[0.9] -rotate-[1deg] sm:text-8xl lg:text-9xl">
              Los <span className="text-sky">favoritos</span><br />de la casa.
            </h2>
          </div>
        </div>

        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-20">
          {HIGHLIGHTS.map((h, idx) => (
            <article
              key={h.title}
              className={`group relative rounded-3xl bg-card border border-border/60 overflow-hidden shadow-sm transition duration-300 hover:border-ink/40 hover:shadow-xl ${idx % 2 === 1 ? "lg:translate-y-8 lg:mb-8" : ""}`}
            >
              <div className="aspect-[4/5] overflow-hidden bg-stone">
                <img
                  src={h.img}
                  alt={h.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={900}
                  height={1100}
                />
              </div>
              <div className="p-6">
                <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {h.tag}
                </span>
                <h3 className="font-script text-4xl leading-none mt-3 -rotate-[1deg]">
                  {h.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="bg-stone/70 border-y border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:py-28">
          <div className="text-center mb-16">
            <SectionLabel>Lo que dicen</SectionLabel>
            <h2 className="mt-10 font-script text-6xl leading-[0.9] sm:text-7xl lg:text-8xl">
              Palabras de <span className="text-sky">la clientela</span>.
            </h2>
          </div>
          <div className="testimonial-viewport relative">
            <div
              className={`testimonial-track ${testimonialTransition ? "" : "testimonial-track--reset"}`}
              style={{
                transform: `translateX(calc(${testimonialIndex} * -1 * (var(--testimonial-card-width) + var(--testimonial-gap))))`,
              }}
            >
              {TESTIMONIAL_LOOP.map((t, i) => (
                <figure
                  key={`${t.author}-${i}`}
                  className="testimonial-card bg-card rounded-3xl p-8 border border-border/60 flex flex-col gap-6 shadow-sm"
              >
                  <span className="font-script text-7xl leading-none text-sky -rotate-12 self-start">"</span>
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                      <span className="text-[18px] leading-none tracking-[0.03em] text-[#fbbc04]" aria-label="5 estrellas">
                        ★★★★★
                      </span>
                      <span className="text-muted-foreground">{t.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{t.context}</p>
                  </div>
                  <blockquote className="review-quote text-lg leading-relaxed text-foreground/85">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-auto flex items-center gap-3 pt-4 border-t border-border/60">
                    <div className="h-9 w-9 rounded-full bg-ink text-cream flex items-center justify-center font-script text-xl">
                      {t.author[0]}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{t.author}</p>
                      <p className="truncate text-xs text-muted-foreground">
                        Google Reviews · {t.meta}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="mx-auto max-w-7xl px-5 py-24 sm:py-32">
        <div className="mb-14 max-w-2xl">
          <SectionLabel>Galería</SectionLabel>
          <h2 className="mt-10 font-script text-7xl leading-[0.9] -rotate-[1deg] sm:text-8xl">
            Un vistazo<br />a los <span className="text-sky">platos</span>.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {HIGHLIGHTS.map((dish, i) => (
            <div
              key={dish.title}
              className={`overflow-hidden rounded-2xl bg-stone ${i % 3 === 0 ? "row-span-2 aspect-[3/5]" : "aspect-square"}`}
            >
              <img src={dish.img} alt={dish.title} className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* RESERVAS */}
      <section id="reservas" className="relative bg-ink text-cream overflow-hidden">
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-sky/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-sky">
                <span className="h-px w-10 bg-sky" /> Reservas
              </div>
              <h2 className="mt-10 font-script text-7xl leading-[0.9] -rotate-[2deg] sm:text-8xl lg:text-9xl">
                ¿Te guardamos<br /><span className="text-sky">mesa</span>?
              </h2>
              <p className="text-cream/70 leading-relaxed max-w-md mt-8 mb-10 text-lg">
                Llámanos y te confirmamos disponibilidad. Sin formularios,
                sin esperas.
              </p>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-sky px-8 py-4 text-sm font-semibold text-ink hover:bg-sky/90 transition"
              >
                Llamar al {CONTACT.phone}
                <span aria-hidden>→</span>
              </a>
            </div>

            <dl className="grid grid-cols-2 gap-x-6 gap-y-10 text-sm self-end">
              <div>
                <dt className="text-cream/40 uppercase tracking-[0.18em] text-[11px] mb-3">Teléfono</dt>
                <dd>
                  <a href={CONTACT.phoneHref} className="text-2xl font-semibold tracking-tight text-cream hover:text-sky transition">
                    {CONTACT.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-cream/40 uppercase tracking-[0.18em] text-[11px] mb-3">Instagram</dt>
                <dd>
                  <a href="https://instagram.com/pontetapas" target="_blank" rel="noopener noreferrer" className="text-2xl font-semibold tracking-tight text-cream hover:text-sky transition">
                    @pontetapas
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-cream/40 uppercase tracking-[0.18em] text-[11px] mb-3">Dirección</dt>
                <dd className="text-cream leading-relaxed">
                  {CONTACT.addressShort}<br />{CONTACT.city}
                </dd>
              </div>
              <div className="col-span-2 rounded-[1.5rem] border border-cream/10 bg-cream/6 p-5">
                <dt className="mb-4 text-[11px] uppercase tracking-[0.18em] text-cream/40">Horario</dt>
                <dd className="space-y-2 text-cream">
                  {OPENING_HOURS.map((slot) => (
                    <div key={slot.day} className="grid grid-cols-[5.25rem_1fr] gap-4 text-sm sm:grid-cols-[6.25rem_1fr] sm:text-base">
                      <span className="capitalize text-cream/72">{slot.day}</span>
                      <span className="font-semibold tabular-nums text-cream">{slot.hours}</span>
                    </div>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section id="ubicacion" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16 items-center">
          <div>
            <SectionLabel>Cómo llegar</SectionLabel>
            <h2 className="mt-10 font-script text-7xl leading-[0.9] -rotate-[1deg] sm:text-8xl">
              Estamos en<br /><span className="text-sky">Pontevedra</span>.
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-8 mb-4 text-lg">
              En pleno casco antiguo, fácil de encontrar a pie. Si vienes en
              coche, hay aparcamiento a 3 minutos.
            </p>
            <p className="text-sm text-foreground mb-8 font-medium">
              {CONTACT.address}
            </p>
            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream hover:opacity-90 transition"
            >
              Cómo llegar
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden border border-border/60 aspect-[4/3] bg-stone shadow-xl">
            <iframe
              title="Ubicación de Ponte Tapas en Pontevedra"
              src={CONTACT.mapsEmbedUrl}
              className="h-full w-full grayscale-[0.4] contrast-[0.95]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex flex-col items-center text-center gap-8">
            <Logo size={72} />
            <h3 className="font-script text-6xl sm:text-7xl leading-none -rotate-[2deg]">
              Hasta <span className="text-sky">pronto</span>.
            </h3>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-cream/80">
              <li><a href={`${SITE_BASE_URL}carta`} className="hover:text-sky transition">Carta</a></li>
              <li><a href="#reservas" className="hover:text-sky transition">Reservas</a></li>
              <li><a href="#ubicacion" className="hover:text-sky transition">Ubicación</a></li>
              <li>
                <a href="https://instagram.com/pontetapas" target="_blank" rel="noopener noreferrer" className="hover:text-sky transition">
                  Instagram
                </a>
              </li>
            </ul>
            <p className="text-xs text-cream/40">
              © {new Date().getFullYear()} Ponte Tapas <span className="text-sky">·</span> Hecho con calma en Pontevedra
            </p>
          </div>
        </div>
      </footer>

      {/* Floating call CTA — mobile */}
      <a
        href={CONTACT.phoneHref}
        className="md:hidden fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-sky px-5 py-3 text-sm font-medium text-ink shadow-xl"
      >
        <span className="h-2 w-2 rounded-full bg-ink animate-pulse" />
        Llamar
      </a>
    </div>
  );
}
