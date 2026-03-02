import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PsychoParadise | Eventos y Experiencias",
  description:
    "Landing comercial de PsychoParadise para eventos en Costa Rica y Panamá, con acceso a compra de entradas y contacto comercial.",
  keywords: [
    "eventos",
    "promotora",
    "dancehall",
    "reguetón",
    "electrónica",
    "Costa Rica",
    "Panamá"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth bg-pp-base">
      <body className="bg-pp-base text-white antialiased">{children}</body>
    </html>
  );
}
