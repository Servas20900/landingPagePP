import Image from "next/image";
import Link from "next/link";
import EventCard from "@/components/EventCard";
import Navbar from "@/components/Navbar";
import { featuredActiveEvents } from "@/lib/events";

const galleryImages = [
  "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=80"
];

const highlightedArtists = [
  "West",
  "Myke Towers",
  "Blaiz Fayah",
  "Luar la L",
  "Kybba"
];

const sponsorLogos = ["Drip", "Golden live", "Rex", "Vuelta"];

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="bg-pp-base text-white">
        <section id="inicio" className="relative flex min-h-screen items-center px-4 pt-24 sm:px-6 lg:px-8">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1800&q=80"
              alt="Multitud en concierto"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          <div className="relative mx-auto w-full max-w-7xl">
            <p className="text-xs uppercase tracking-[0.25em] text-white/80">PsychoParadise</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Vive experiencias de alto impacto en Costa Rica y Panamá.
            </h1>
            <p className="mt-5 max-w-2xl text-sm text-white/85 sm:text-base">
              Diseñamos eventos con enfoque comercial, curaduría artística y ejecución técnica para conectar marcas, artistas y audiencia real.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#eventos"
                className="inline-flex items-center rounded-lg bg-pp-primary px-6 py-3 text-sm font-semibold transition hover:bg-pp-hover"
              >
                Ver eventos
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
              >
                Contacto
              </a>
            </div>
          </div>
        </section>

        <section id="nosotros" className="bg-pp-alt px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Nosotros</h2>
              <p className="mt-5 text-sm leading-7 text-white/90 sm:text-base">
                Somos promotora enfocada en el desarrollo de eventos con identidad cultural y valor comercial.
                Opero en Costa Rica y Panamá, donde conecto talento internacional y audiencias locales mediante
                producciones de dancehall, reguetón y electrónica. Mi enfoque combina estrategia de marca,
                experiencia del público y ejecución logística para que cada evento tenga impacto real, continuidad
                y potencial de crecimiento. Trabajo con estándares de producción profesionales, alianzas con marcas y
                una lectura clara del mercado para convertir cada fecha en una plataforma sostenible para artistas y socios.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/85 sm:text-sm">
                <span className="rounded-full border border-white/20 px-3 py-1">Costa Rica</span>
                <span className="rounded-full border border-white/20 px-3 py-1">Panamá</span>
                <span className="rounded-full border border-white/20 px-3 py-1">Dancehall</span>
                <span className="rounded-full border border-white/20 px-3 py-1">Reguetón</span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.15em] text-white/70">Eventos realizados</p>
                <p className="mt-2 text-3xl font-bold">30+</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.15em] text-white/70">Asistentes</p>
                <p className="mt-2 text-3xl font-bold">120K+</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.15em] text-white/70">Artistas internacionales</p>
                <p className="mt-2 text-3xl font-bold">10+</p>
              </div>
            </div>
          </div>
        </section>

        <section id="eventos" className="bg-pp-base px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold">Eventos</h2>
                <p className="mt-2 max-w-2xl text-sm text-white/85 sm:text-base">
                  Mostramos una vista comercial de eventos activos con acceso directo a compra y detalle de producción.
                </p>
              </div>
              <a
                href="#contacto"
                className="inline-flex items-center rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold transition hover:bg-white/10"
              >
                Ver todos
              </a>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {featuredActiveEvents.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          </div>
        </section>

        <section id="experiencias" className="bg-pp-alt px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <h2 className="text-3xl font-bold">Experiencias</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/85 sm:text-base">
              Refuerzo autoridad de marca con evidencia visual de crowd, escenario y resultados de taquilla.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {galleryImages.map((image, index) => (
                <div key={image} className="relative h-56 overflow-hidden rounded-xl border border-white/10">
                  <Image src={image} alt={`Galería experiencia ${index + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-6">
              <h3 className="text-xl font-semibold">Artistas destacados</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {highlightedArtists.map((artist) => (
                  <span key={artist} className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/90">
                    {artist}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="sponsors" className="bg-pp-dark px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Sponsors</h2>
              <p className="mt-3 text-sm leading-7 text-white/90 sm:text-base">
                Abrimos espacios para marcas que buscan visibilidad real en audiencias activas.
                Se trabajan propuestas con integración de branding, activaciones en sitio y cobertura digital.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-white/85">
                <li>Exposición de marca en eventos de alto tráfico.</li>
                <li>Activaciones presenciales y cobertura social estratégica.</li>
                <li>Reportes de alcance para decisiones comerciales.</li>
              </ul>
              <a
                href="mailto:sponsors@pppromotora.com?subject=Solicitud%20Media%20Kit"
                className="mt-6 inline-flex items-center rounded-lg bg-pp-primary px-5 py-3 text-sm font-semibold transition hover:bg-pp-hover"
              >
                Solicitar media kit
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {sponsorLogos.map((logo) => (
                <div
                  key={logo}
                  className="flex h-24 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-semibold text-white/90"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-pp-base px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-4xl">
            <div className="rounded-2xl border border-white/10 bg-pp-dark/70 p-8">
            <div>
              <h2 className="text-3xl font-bold">Contacto</h2>
              <p className="mt-3 text-sm text-white/85 sm:text-base">
                Atención a colaboraciones comerciales, booking y alianzas regionales.
              </p>

              <div className="mt-6 space-y-3 text-sm text-white/90">
                <Link
                  href="https://wa.me/50670427423?text=Hola%2C%20quiero%20informaci%C3%B3n%20de%20eventos%20PP"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-lg border border-white/20 px-4 py-2 transition hover:bg-white/10"
                >
                  WhatsApp directo
                </Link>
                <p>
                  Instagram CR: <Link href="https://instagram.com" className="underline">@psychoparadise.cr
                  </Link>
                </p>
                <p>
                  Instagram Panamá: <Link href="https://instagram.com" className="underline">@psychoparadise.pa</Link>
                </p>
                <p>
                  Correo oficial: <a href="mailto:contacto@psychoparadise.cr" className="underline">contacto@psychoparadise.cr</a>
                </p>
              </div>
            </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-pp-dark px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-8 text-sm text-white/80 md:grid-cols-3">
          <div>
            <p className="text-base font-semibold text-white">PsychoParadise</p>
            <p className="mt-2 leading-6 text-white/75">
              Producción y promoción de experiencias en vivo en Costa Rica y Panamá.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Navegación</p>
            <ul className="mt-3 space-y-2">
              <li><a href="#inicio" className="transition hover:text-white">Inicio</a></li>
              <li><a href="#eventos" className="transition hover:text-white">Eventos</a></li>
              <li><a href="#sponsors" className="transition hover:text-white">Sponsors</a></li>
              <li><a href="#contacto" className="transition hover:text-white">Contacto</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Información</p>
            <ul className="mt-3 space-y-2 text-white/75">
              <li>Costa Rica | Panamá</li>
              <li>
                <a href="mailto:contacto@psychoparadise.cr" className="transition hover:text-white">
                  contacto@psychoparadise.cr
                </a>
              </li>
              <li>© 2026 PsychoParadise. Todos los derechos reservados.</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
