const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Eventos", href: "#eventos" },
  { label: "Experiencias", href: "#experiencias" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Contacto", href: "#contacto" }
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-pp-dark/70 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="text-lg font-bold tracking-wide text-white">
          PsychoParadise
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/90 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#eventos"
          className="inline-flex items-center rounded-lg bg-pp-primary px-4 py-2 text-sm font-semibold transition hover:bg-pp-hover"
        >
          Próximos Eventos
        </a>
      </nav>
    </header>
  );
}
