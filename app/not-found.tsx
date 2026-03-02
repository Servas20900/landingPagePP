import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-pp-base px-6 text-white">
      <div className="mx-auto w-full max-w-xl rounded-2xl border border-white/10 bg-pp-dark/70 p-8 text-center backdrop-blur">
        <h1 className="text-3xl font-semibold">Página no encontrada</h1>
        <p className="mt-3 text-sm text-white/80">
          El contenido que buscas no está disponible en este momento.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-pp-primary px-5 py-3 text-sm font-semibold transition hover:bg-pp-hover"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
