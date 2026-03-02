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
    name: "West",
    date: "14 de marzo, 2026",
    dateISO: "2026-03-14",
    location: "Centro de eventos La Uruca",
    country: "Costa Rica",
    age: "+18",
    image:
      "https://res.cloudinary.com/dcwxslhjf/image/upload/v1772438644/west_ehvjri.jpg",
    banner:
      "https://res.cloudinary.com/dcwxslhjf/image/upload/v1772438644/west_ehvjri.jpg",
    lineup: ["West"],
    ticketUrl: "https://example-ticketing.com/neon-roots",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Centro%20de%20eventos%20La%20Uruca%20Costa%20Rica&t=&z=13&ie=UTF8&iwloc=&output=embed",
    active: true
  },

  {
    slug: "urban-crown-panama",
    name: "Blaiz Fayah",
    date: "13 de marzo, 2026",
    dateISO: "2026-03-13",
    location: "Centro de eventos La Uruca",
    country: "Costa Rica",
    age: "+18",
    image:
      "https://res.cloudinary.com/dcwxslhjf/image/upload/v1772438647/Blaiz_Fayah_t7sf5e.jpg",
    banner:
      "https://res.cloudinary.com/dcwxslhjf/image/upload/v1772438647/Blaiz_Fayah_t7sf5e.jpg",
    lineup: ["Blaiz Fayah"],
    ticketUrl: "https://example-ticketing.com/urban-crown",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Centro%20de%20eventos%20La%20Uruca%20Costa%20Rica&t=&z=13&ie=UTF8&iwloc=&output=embed",
    active: true
  },

  {
    slug: "frequency-club-night",
    name: "Myke Towers",
    date: "30 de abril, 2026",
    dateISO: "2026-04-30",
    location: "Parque Viva",
    country: "Costa Rica",
    age: "+18",
    image:
      "https://res.cloudinary.com/dcwxslhjf/image/upload/v1772438644/Myke_Towers_fjd3qt.jpg",
    banner:
      "https://res.cloudinary.com/dcwxslhjf/image/upload/v1772438644/Myke_Towers_fjd3qt.jpg",
    lineup: ["Myke Towers"],
    ticketUrl: "https://example-ticketing.com/frequency-night",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Parque%20Viva%20Costa%20Rica&t=&z=13&ie=UTF8&iwloc=&output=embed",
    active: true
  },
  
  {
    slug: "sold-out-memories",
    name: "Sold Out Memories",
    date: "18 de julio, 2025",
    dateISO: "2025-07-18",
    location: "Amador, Panamá",
    country: "Costa Rica",
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
