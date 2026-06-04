export const CONTACT = {
  phone: "986 85 36 87",
  phoneHref: "tel:+34986853687",
  address: "Rúa Real, 17, 36002 Pontevedra",
  addressShort: "Rúa Real, 17",
  city: "36002 Pontevedra",
  plusCode: "C9M3+8W Pontevedra",
  mapsUrl: "https://maps.google.com/?q=R%C3%BAa%20Real%2C%2017%2C%2036002%20Pontevedra",
  mapsEmbedUrl: "https://www.google.com/maps?q=R%C3%BAa%20Real%2C%2017%2C%2036002%20Pontevedra&output=embed",
};

export const OPENING_HOURS = [
  { day: "jueves", hours: "13:00–16:00" },
  { day: "viernes", hours: "13:00–16:00, 20:30–24:00" },
  { day: "sábado", hours: "13:00–16:00, 20:30–24:00" },
  { day: "domingo", hours: "13:00–16:00" },
  { day: "lunes", hours: "13:00–16:00" },
  { day: "martes", hours: "13:00–16:00" },
  { day: "miércoles", hours: "13:00–16:00" },
];

export type MenuItem = {
  name: string;
  price: string;
};

export type MenuSection = {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
};

export const MENU_SECTIONS: MenuSection[] = [
  {
    id: "especialidades",
    title: "Especialidades",
    subtitle: "Lo que suele decidir la mesa.",
    items: [
      { name: "Tetilla Frita con Mermelada", price: "12,00 €" },
      { name: "Croquetas (Pulpo, jamón o de choco en su tinta)", price: "12,00 €" },
      { name: "Gyozas de gambas con verduritas y soja", price: "14,00 €" },
      { name: "Baos de calamares o de langostinos crujientes con mayonesa de soja", price: "12,00 €" },
    ],
  },
  {
    id: "verde",
    title: "Verde que te quiero verde",
    subtitle: "Ensaladas y verduras con alegría.",
    items: [
      { name: "Ensalada Pontetapas", price: "12,50 €" },
      { name: "Pimientos de Padrón (temporada)", price: "8,00 €" },
      { name: "Ensalada con nueces, queso, melocotón y semillas", price: "14,50 €" },
    ],
  },
  {
    id: "huevos",
    title: "Más que huevos",
    subtitle: "Tortillas y huevos para compartir.",
    items: [
      { name: "Tortilla de Patatas", price: "14,00 €" },
      { name: "Tortilla de Rulo", price: "15,00 €" },
      { name: "Huevos rotos con pisto y jamón", price: "14,00 €" },
    ],
  },
  {
    id: "mar",
    title: "Del mar",
    subtitle: "Producto de mar en formato ración.",
    items: [
      { name: "Pulpo “Á Feira”", price: "18,00 €" },
      { name: "Pulpo con Tetilla", price: "19,00 €" },
      { name: "Calamares Fritos", price: "14,50 €" },
      { name: "Crujientes de Gambas con Mayonesa de Soja", price: "13,50 €" },
      { name: "Zamburiñas a la Plancha", price: "18,00 €" },
    ],
  },
  {
    id: "carnes",
    title: "Carnes",
    subtitle: "Raciones contundentes y caseras.",
    items: [
      { name: "Zorza de Pavo", price: "14,00 €" },
      { name: "Croca de Ternera", price: "16,50 €" },
      { name: "Lacón “A Feira”", price: "12,50 €" },
      { name: "Minihamburguesas Caseras", price: "12,00 €" },
      { name: "Secreto de Cerdo", price: "14,00 €" },
      { name: "Fingers de pollo con mayonesa de soja", price: "12,50 €" },
    ],
  },
  {
    id: "postres",
    title: "Postres",
    subtitle: "Tres clásicos para cerrar bien.",
    items: [
      { name: "Tarta de 3 Chocolates", price: "4,50 €" },
      { name: "Flan de Queso", price: "4,50 €" },
      { name: "Tarta de Santiago", price: "4,50 €" },
    ],
  },
];

export const MENU_ITEM_COUNT = MENU_SECTIONS.reduce(
  (total, section) => total + section.items.length,
  0,
);
