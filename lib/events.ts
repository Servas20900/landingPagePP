export type EventItem = {
  slug: string;
  name: string;
  date: string;
  dateISO: string;
  location: string;
  country: "Costa Rica" | "Panamá";
  age: "+15" | "+18";
  image: string;
  banner: string;
  lineup: string[];
  ticketUrl: string;
  mapEmbedUrl: string;
  active: boolean;
};

export const events: EventItem[] = [
  {
    slug: "neon-roots-san-jose",
    name: "Neon Roots: San José Edition",
    date: "15 de abril, 2026",
    dateISO: "2026-04-15",
    location: "Parque Viva, Costa Rica",
    country: "Costa Rica",
    age: "+18",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    banner:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1800&q=80",
    lineup: ["DJ Kael", "Nara V", "Flow District", "Luz Nativa"],
    ticketUrl: "https://example-ticketing.com/neon-roots",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Parque%20Viva%20Costa%20Rica&t=&z=13&ie=UTF8&iwloc=&output=embed",
    active: true
  },
  {
    slug: "urban-crown-panama",
    name: "Urban Crown Panamá",
    date: "27 de mayo, 2026",
    dateISO: "2026-05-27",
    location: "Centro de Convenciones Atlapa, Panamá",
    country: "Panamá",
    age: "+15",
    image:
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1200&q=80",
    banner:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1800&q=80",
    lineup: ["Rayo 507", "Xavi R", "Marea Beat", "Senda Nocturna"],
    ticketUrl: "https://example-ticketing.com/urban-crown",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Atlapa%20Panama&t=&z=13&ie=UTF8&iwloc=&output=embed",
    active: true
  },
  {
    slug: "frequency-club-night",
    name: "Frequency Club Night",
    date: "09 de junio, 2026",
    dateISO: "2026-06-09",
    location: "Pepper Club, Costa Rica",
    country: "Costa Rica",
    age: "+18",
    image:
      "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=1200&q=80",
    banner:
      "https://images.unsplash.com/photo-1571266028243-d220c9c3b8f8?auto=format&fit=crop&w=1800&q=80",
    lineup: ["Yordan B2B Iri", "Cora M", "Tropix Set"],
    ticketUrl: "https://example-ticketing.com/frequency-night",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Pepper%20Club%20Costa%20Rica&t=&z=13&ie=UTF8&iwloc=&output=embed",
    active: true
  },
  {
    slug: "sold-out-memories",
    name: "Sold Out Memories",
    date: "18 de julio, 2025",
    dateISO: "2025-07-18",
    location: "Amador, Panamá",
    country: "Panamá",
    age: "+18",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80",
    banner:
      "https://images.unsplash.com/photo-1428988449731-1e5ccfb5b0f0?auto=format&fit=crop&w=1800&q=80",
    lineup: ["Legacy Show"],
    ticketUrl: "https://example-ticketing.com/sold-out-memories",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Amador%20Panama&t=&z=13&ie=UTF8&iwloc=&output=embed",
    active: false
  }
];

export const activeEvents = events.filter((event) => event.active);
export const featuredActiveEvents = activeEvents.slice(0, 4);
