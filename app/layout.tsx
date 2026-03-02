import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PsychoParadise",
  description:
    "Landing comercial de PsychoParadise para eventos en Costa Rica y Panamá, con acceso a compra de entradas y contacto comercial.",
  icons: {
    icon: "https://res.cloudinary.com/dcwxslhjf/image/upload/v1772441805/cropped_circle_image_kjnmon.png",
    shortcut: "https://res.cloudinary.com/dcwxslhjf/image/upload/v1772441805/cropped_circle_image_kjnmon.png",
    apple: "https://res.cloudinary.com/dcwxslhjf/image/upload/v1772441805/cropped_circle_image_kjnmon.png"
  },
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
      <body className="bg-pp-base text-pp-text antialiased">{children}</body>
    </html>
  );
}
