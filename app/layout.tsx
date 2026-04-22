import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aris Multimedia — IA, Automatizaciones y Desarrollo Web",
  description:
    "Consultoría de inteligencia artificial, automatizaciones de procesos, desarrollo web a medida, WordPress y accesibilidad WCAG 2.2 AA. Trato directo, sin intermediarios.",
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
