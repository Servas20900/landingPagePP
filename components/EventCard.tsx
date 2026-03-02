import Image from "next/image";
import Link from "next/link";
import type { EventItem } from "@/lib/events";

type EventCardProps = {
  event: EventItem;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <article className="flex h-[32rem] flex-col overflow-hidden rounded-xl border border-white/10 bg-pp-dark/70 transition hover:-translate-y-1 hover:border-white/20">
      <div className="relative h-48 w-full">
        <Image src={event.image} alt={event.name} fill className="object-cover" />
      </div>

      <div className="flex flex-1 flex-col p-5 pb-4">
        <div className="space-y-3">
          <h3 className="min-h-14 text-xl font-semibold leading-tight text-white">{event.name}</h3>
          <p className="min-h-5 text-sm text-white/80">{event.date}</p>
          <p className="min-h-5 text-sm text-white/80">{event.location}</p>
          <p className="inline-flex rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-white/90">
            Edad {event.age}
          </p>
        </div>

        <div className="mt-auto grid gap-2 pt-3 sm:grid-cols-2">
          <Link
            href={event.ticketUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-pp-primary px-3 py-1.5 text-xs font-semibold transition hover:bg-pp-hover"
          >
            Comprar entradas
          </Link>
          <Link
            href={`/eventos/${event.slug}`}
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold transition hover:bg-white/10"
          >
            Ver detalle
          </Link>
        </div>
      </div>
    </article>
  );
}
