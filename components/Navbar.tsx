"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Eventos", href: "#eventos" },
  { label: "Experiencias", href: "#experiencias" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Contacto", href: "#contacto" }
];

export default function Navbar() {
  const [activeHref, setActiveHref] = useState("#inicio");

  const sectionIds = useMemo(
    () => navItems.map((item) => item.href.replace("#", "")),
    []
  );

  useEffect(() => {
    const updateFromHash = () => {
      const { hash } = window.location;
      if (hash && navItems.some((item) => item.href === hash)) {
        setActiveHref(hash);
      } else {
        setActiveHref("#inicio");
      }
    };

    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return () => {
        window.removeEventListener("hashchange", updateFromHash);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.25, 0.5, 0.75]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("hashchange", updateFromHash);
      observer.disconnect();
    };
  }, [sectionIds]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-pp-dark/70 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-7xl items-center px-4 py-4 sm:px-6 lg:px-8">
        <div className="w-full md:w-52">
          <a href="#inicio" className="inline-flex items-center gap-2.5 text-lg font-bold tracking-wide text-white">
            <Image
              src="https://res.cloudinary.com/dcwxslhjf/image/upload/v1772441805/cropped_circle_image_kjnmon.png"
              alt="Logo de PsychoParadise"
              width={30}
              height={30}
              className="rounded-full"
              priority
            />
            <span>PsychoParadise</span>
          </a>
        </div>

        <div className="hidden flex-1 items-center justify-center gap-3 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setActiveHref(item.href)}
              className={`rounded-md px-3 py-2 text-center text-sm font-medium transition ${
                activeHref === item.href
                  ? "bg-pp-primary/60 text-white"
                  : "text-white/90 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block md:w-52" aria-hidden="true" />
      </nav>
    </header>
  );
}
