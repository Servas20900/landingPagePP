import Image from "next/image";
import Link from "next/link";
import type { EventItem } from "@/lib/events";

type EventCardProps = {
  event: EventItem;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-pp-dark/70 transition hover:-translate-y-1 hover:border-white/20">
      <div className="relative h-52 w-full">
        <Image src={event.image} alt={event.name} fill className="object-cover" />
      </div>

      <div className="space-y-3 p-5">
        <h3 className="text-xl font-semibold text-white">{event.name}</h3>
        <p className="text-sm text-white/80">{event.date}</p>
        <p className="text-sm text-white/80">{event.location}</p>
        <p className="inline-flex rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-white/90">
          Edad {event.age}
        </p>

        <div className="grid gap-2 pt-2 sm:grid-cols-2">
          <Link
            href={event.ticketUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-pp-primary px-4 py-2 text-sm font-semibold transition hover:bg-pp-hover"
          >
            Comprar entradas
          </Link>
          <Link
            href={`/eventos/${event.slug}`}
            className="inline-flex items-center justify-center rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold transition hover:bg-white/10"
          >
            Ver detalle
          </Link>
        </div>
      </div>
    </article>
  );
}
