import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Logo } from "@/components/Logo";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";

const SITE_BASE_URL = import.meta.env.BASE_URL;
const publicImage = (fileName: string) => `${SITE_BASE_URL}${fileName}`;

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
          "Tapas, raciones y buen ambiente en el centro de Pontevedra. Cocina casera, producto local y trato cercano. Reserva por WhatsApp.",
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

const WHATSAPP_URL =
  "https://wa.me/34600000000?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20mesa%20en%20Ponte%20Tapas";

const NAV = [
  { href: "#sobre", label: "Sobre" },
  { href: "#carta", label: "Carta" },
  { href: "#destacados", label: "Destacados" },
  { href: "#galeria", label: "Galería" },
  { href: "#ubicacion", label: "Ubicación" },
];

const CATEGORIES = [
  { name: "Mar", desc: "Producto gallego servido sin complicaciones.", items: ["Pulpo á feira", "Vieiras"] },
  { name: "Cuchara", desc: "Platos calientes para comer despacio.", items: ["Fabada"] },
  { name: "Bocados", desc: "Pequeñas piezas para pedir varias y compartir.", items: ["Hamburguesitas", "Tartaletas de espinaca", "Gyozas vegetales"] },
  { name: "Para compartir", desc: "Un poco de todo en el centro de la mesa.", items: ["Pulpo á feira", "Vieiras", "Hamburguesitas", "Gyozas vegetales"] },
  { name: "Bebidas", desc: "Cañas frías, vinos de la tierra y refrescos.", items: ["Albariño", "Mencía", "Estrella Galicia", "Vermut de grifo"] },
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
      <section id="top" className="relative overflow-hidden bg-ink text-cream">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Interior de Ponte Tapas en Pontevedra"
            className="h-full w-full object-cover opacity-55"
            width={1600}
            height={1200}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/60 to-ink" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-28 sm:pt-28 sm:pb-36 lg:pt-36 lg:pb-44">
          <div className="flex flex-col items-start gap-6 max-w-3xl">
            <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-sky">
              <span className="h-px w-10 bg-sky" />
              Pontevedra · casco antiguo
            </div>

            <h1 className="font-script text-[clamp(4rem,13vw,11rem)] leading-[0.78] tracking-tight text-cream">
              <span className="block -rotate-[3deg]">Ponte</span>
              <span className="block translate-x-[8%] text-sky -rotate-[2deg]">Tapas</span>
            </h1>

            <p className="text-lg sm:text-xl text-cream/80 max-w-xl leading-relaxed mt-2">
              Tapas, raciones y buen ambiente en el corazón de Pontevedra.
              Cocina sencilla, producto de aquí, gente cercana.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-sky px-7 py-3.5 text-sm font-medium text-ink hover:bg-sky/90 transition"
              >
                <span className="h-2 w-2 rounded-full bg-ink animate-pulse" />
                Reservar por WhatsApp
              </a>
              <a
                href="#carta"
                className="inline-flex items-center rounded-full border border-cream/25 px-7 py-3.5 text-sm font-medium text-cream hover:border-cream/60 transition"
              >
                Ver carta
              </a>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-10 text-xs uppercase tracking-[0.18em] text-cream/60">
              <span>★ 4,8 en Google</span>
              <span>· Cocina abierta hasta las 23:30</span>
              <span>· Reservas por WhatsApp</span>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative border-t border-cream/10 bg-ink py-5 overflow-hidden">
          <div className="flex w-max animate-marquee whitespace-nowrap">
            {[...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE].map((w, i) => (
              <span key={i} className="font-script text-4xl sm:text-5xl text-cream/90 mx-8 inline-flex items-center gap-8">
                {w}
                <span className="text-sky">✦</span>
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
            <h2 className="font-script text-6xl sm:text-7xl lg:text-8xl leading-[0.85] mt-6 mb-8 -rotate-[1deg]">
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
              {[
                { k: "+30", v: "tapas y raciones" },
                { k: "100%", v: "producto local" },
                { k: "4,8★", v: "en Google" },
                { k: "Casco", v: "antiguo · Pontevedra" },
              ].map((s) => (
                <div key={s.v} className="border-t border-ink/15 pt-4">
                  <p className="font-script text-4xl leading-none text-ink">{s.k}</p>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground mt-2">{s.v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone">
              <img
                src={aboutImg}
                alt="Comedor de Ponte Tapas"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1200}
                height={1400}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 sm:-left-10 flex h-32 w-32 sm:h-40 sm:w-40 items-center justify-center rounded-full bg-sky text-ink animate-float shadow-xl">
              <span className="font-script text-5xl sm:text-6xl -rotate-12">hola!</span>
            </div>
            <div className="absolute -top-4 -right-4 hidden sm:block bg-ink text-cream px-5 py-2 rounded-full">
              <span className="font-script text-2xl text-sky">desde 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* CARTA */}
      <section id="carta" className="relative bg-ink text-cream overflow-hidden">
        <div className="absolute inset-0 noise-overlay opacity-30 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div>
              <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-sky">
                <span className="h-px w-10 bg-sky" /> La carta
              </div>
              <h2 className="font-script text-7xl sm:text-8xl lg:text-9xl leading-[0.85] mt-6 -rotate-[2deg]">
                Qué vas a<br /><span className="text-sky">comer</span>.
              </h2>
            </div>
            <p className="text-cream/70 max-w-md text-base leading-relaxed">
              Una carta corta y honesta. Cambia con la temporada y con lo que
              esté bueno en el mercado. Si tienes dudas, pregunta — te
              recomendamos encantados.
            </p>
          </div>

          <div className="grid gap-px bg-cream/10 rounded-3xl overflow-hidden md:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c, i) => (
              <article
                key={c.name}
                className="bg-ink p-8 flex flex-col gap-5 min-h-[280px] group hover:bg-ink/70 transition-colors"
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="font-script text-5xl leading-none -rotate-[1deg]">{c.name}</h3>
                  <span className="text-xs text-cream/40 tabular-nums">0{i + 1}</span>
                </div>
                <p className="text-sm text-cream/60 leading-relaxed">{c.desc}</p>
                <ul className="mt-auto space-y-1.5 text-sm text-cream/85">
                  {c.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-sky" /> {it}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
            <div className="bg-sky text-ink p-8 flex flex-col justify-between min-h-[280px]">
              <p className="font-script text-6xl leading-[0.85] -rotate-[3deg]">
                buen<br />provecho!
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink hover:opacity-70 transition"
              >
                Reservar mesa
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DESTACADOS */}
      <section id="destacados" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <SectionLabel>Lo más pedido</SectionLabel>
            <h2 className="font-script text-7xl sm:text-8xl lg:text-9xl leading-[0.85] mt-6 -rotate-[1deg]">
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
            <h2 className="font-script text-6xl sm:text-7xl lg:text-8xl leading-[0.85] mt-6">
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
          <h2 className="font-script text-7xl sm:text-8xl leading-[0.85] mt-6 -rotate-[1deg]">
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
              <h2 className="font-script text-7xl sm:text-8xl lg:text-9xl leading-[0.82] mt-6 -rotate-[2deg]">
                ¿Te guardamos<br /><span className="text-sky">mesa</span>?
              </h2>
              <p className="text-cream/70 leading-relaxed max-w-md mt-8 mb-10 text-lg">
                Escríbenos por WhatsApp y te confirmamos disponibilidad. Sin
                formularios, sin esperas.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-sky px-8 py-4 text-sm font-medium text-ink hover:bg-sky/90 transition"
              >
                Reservar por WhatsApp
                <span aria-hidden>→</span>
              </a>
            </div>

            <dl className="grid grid-cols-2 gap-x-6 gap-y-10 text-sm self-end">
              <div>
                <dt className="text-cream/40 uppercase tracking-[0.18em] text-[11px] mb-3">Teléfono</dt>
                <dd className="font-script text-3xl text-cream">+34 600 000 000</dd>
              </div>
              <div>
                <dt className="text-cream/40 uppercase tracking-[0.18em] text-[11px] mb-3">Instagram</dt>
                <dd>
                  <a href="https://instagram.com/pontetapas" target="_blank" rel="noopener noreferrer" className="font-script text-3xl text-cream hover:text-sky transition">
                    @pontetapas
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-cream/40 uppercase tracking-[0.18em] text-[11px] mb-3">Dirección</dt>
                <dd className="text-cream leading-relaxed">
                  Rúa de ejemplo, 12<br />36001 Pontevedra
                </dd>
              </div>
              <div>
                <dt className="text-cream/40 uppercase tracking-[0.18em] text-[11px] mb-3">Horario</dt>
                <dd className="text-cream leading-relaxed">
                  Mar–Dom · 12:30–16:00<br />20:00–23:30
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
            <h2 className="font-script text-7xl sm:text-8xl leading-[0.85] mt-6 -rotate-[1deg]">
              Estamos en<br /><span className="text-sky">Pontevedra</span>.
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-8 mb-4 text-lg">
              En pleno casco antiguo, fácil de encontrar a pie. Si vienes en
              coche, hay aparcamiento a 3 minutos.
            </p>
            <p className="text-sm text-foreground mb-8 font-medium">
              Rúa de ejemplo, 12 · 36001 Pontevedra
            </p>
            <a
              href="https://maps.google.com/?q=Pontevedra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-cream hover:opacity-90 transition"
            >
              Cómo llegar
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden border border-border/60 aspect-[4/3] bg-stone shadow-xl">
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
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex flex-col items-center text-center gap-8">
            <Logo size={72} />
            <h3 className="font-script text-6xl sm:text-7xl leading-none -rotate-[2deg]">
              Hasta <span className="text-sky">pronto</span>.
            </h3>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-cream/80">
              <li><a href="#carta" className="hover:text-sky transition">Carta</a></li>
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

      {/* Floating WhatsApp CTA — mobile */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-sky px-5 py-3 text-sm font-medium text-ink shadow-xl"
      >
        <span className="h-2 w-2 rounded-full bg-ink animate-pulse" />
        Reservar
      </a>
    </div>
  );
}
