import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { events } from "@/lib/events";

type EventDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export function generateMetadata({ params }: EventDetailProps) {
  return params.then(({ slug }) => {
    const event = events.find((item) => item.slug === slug);

    if (!event) {
      return {
        title: "Evento no encontrado | PP Promotora"
      };
    }

    return {
      title: `${event.name} | PP Promotora`,
      description: `${event.name} en ${event.location} el ${event.date}. Compra tus entradas y revisa detalles oficiales.`
    };
  });
}

export default async function EventDetailPage({ params }: EventDetailProps) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);

  if (!event) {
    notFound();
  }

  const eventDate = new Date(event.dateISO);
  const now = new Date();
  const daysLeft = Math.max(
    0,
    Math.ceil((eventDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
  );

  return (
    <main className="min-h-screen bg-pp-base px-4 pb-16 pt-24 sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <Link
          href="/#eventos"
          className="inline-flex items-center rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10"
        >
          Volver a eventos
        </Link>

        <article className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-pp-dark/70 backdrop-blur">
          <div className="relative h-72 w-full md:h-96">
            <Image
              src={event.banner}
              alt={event.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-white/80">Evento oficial</p>
              <h1 className="mt-2 text-3xl font-bold md:text-4xl">{event.name}</h1>
            </div>
          </div>

          <div className="grid gap-6 p-6 md:grid-cols-3">
            <div className="space-y-3 rounded-xl border border-white/10 bg-white/5 p-4 md:col-span-1">
              <p className="text-sm text-white/70">Fecha</p>
              <p className="text-lg font-semibold">{event.date}</p>
              <p className="text-sm text-white/70">Lugar</p>
              <p className="text-lg font-semibold">{event.location}</p>
              <p className="text-sm text-white/70">Edad permitida</p>
              <p className="text-lg font-semibold">{event.age}</p>
            </div>

            <div className="space-y-3 rounded-xl border border-white/10 bg-white/5 p-4 md:col-span-2">
              <p className="text-sm text-white/70">Line up</p>
              <ul className="grid gap-2 text-sm text-white/90 sm:grid-cols-2">
                {event.lineup.map((artist) => (
                  <li key={artist} className="rounded-lg border border-white/10 bg-black/20 px-3 py-2">
                    {artist}
                  </li>
                ))}
              </ul>
              <p className="pt-2 text-sm text-white/70">Cuenta regresiva</p>
              <p className="text-lg font-semibold">
                {daysLeft === 0 ? "El evento es hoy" : `Faltan ${daysLeft} días`}
              </p>
            </div>
          </div>

          <div className="grid gap-6 border-t border-white/10 p-6 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-white/70">Mapa</p>
              <iframe
                title={`Mapa de ${event.location}`}
                src={event.mapEmbedUrl}
                className="mt-3 h-64 w-full rounded-lg border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-4">
              <div>
                <p className="text-sm text-white/70">Entradas</p>
                <p className="mt-2 text-sm text-white/90">
                  La compra se realiza en tiquetera externa segura. Te redirijo al sitio oficial del evento.
                </p>
              </div>
              <Link
                href={event.ticketUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-pp-primary px-5 py-3 text-sm font-semibold transition hover:bg-pp-hover"
              >
                Comprar entradas
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
