import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aris Multimedia — Desarrollo web a medida",
  description:
    "Desarrollo web personalizado, accesibilidad WCAG 2.2 AA, WordPress, PWAs y aplicaciones web. Trato cercano, alta calidad y atención al detalle.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#080808] text-white">{children}</body>
    </html>
  );
}
