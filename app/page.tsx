"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Accessibility, Globe, Code2, Sparkles, Zap } from "lucide-react";

const ArisOrb = dynamic(() => import("../components/ArisOrb"), { ssr: false });

function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function IconUpload() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5 shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v13m0-13l-4 4m4-4l4 4" />
    </svg>
  );
}

/* ─── Data ───────────────────────────────────────────────────── */

const services = [
  {
    icon: <Sparkles size={22} strokeWidth={1.5} />,
    title: "Consultoría IA",
    desc: "Analizamos tu negocio e identificamos dónde la IA puede generar valor real: chatbots a medida, integración de LLMs, automatización inteligente. Sin humo, con foco en resultados.",
    badge: "Destacado",
    featured: true,
  },
  {
    icon: <Zap size={22} strokeWidth={1.5} />,
    title: "Automatizaciones",
    desc: "Eliminamos tareas repetitivas conectando tus herramientas con flujos automatizados. n8n, Make, Zapier, APIs propias. Lo que antes costaba horas, ahora sucede solo.",
    badge: null,
    featured: false,
  },
  {
    icon: <Code2 size={22} strokeWidth={1.5} />,
    title: "Desarrollo web a medida",
    desc: "Aplicaciones web con React, Next.js y PHP/Laravel. Cuando una plantilla no es suficiente y necesitas algo construido exactamente para lo que necesitas.",
    badge: null,
    featured: false,
  },
  {
    icon: <Globe size={22} strokeWidth={1.5} />,
    title: "WordPress & E-commerce",
    desc: "Webs en WordPress pensadas para que el cliente pueda gestionarlas sin depender de nosotros para cada cambio.",
    badge: null,
    featured: false,
  },
  {
    icon: <Accessibility size={22} strokeWidth={1.5} />,
    title: "Accesibilidad WCAG 2.2 AA",
    desc: "La normativa europea ya obliga a muchas webs a ser accesibles. Adaptamos la tuya para cumplirla bien, no solo en papel.",
    badge: null,
    featured: false,
  },
];

const steps = [
  {
    num: "01",
    title: "Escucha",
    desc: "Lo primero es entender qué necesitas y por qué. Nos interesa el proyecto de verdad, no solo el encargo. Preferimos hacer preguntas incómodas ahora que entregar algo que no encaja más adelante.",
  },
  {
    num: "02",
    title: "Propuesta",
    desc: "Explicamos cómo lo haríamos, qué implica técnicamente y cuánto cuesta. Todo por escrito. Si algo cambia a mitad de camino, avisamos antes de seguir.",
  },
  {
    num: "03",
    title: "Entrega",
    desc: "Trabajamos con detalle y mantenemos al cliente informado en cada fase. Si algo no cuadra, lo decimos antes de que sea un problema.",
  },
];

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre nosotros", href: "#sobre" },
  { label: "Cómo trabajamos", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

const NAVBAR_H = 72;

/* ─── Menu Panel ─────────────────────────────────────────────── */

function MenuPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className="fixed inset-0 z-198"
        style={{
          background: "rgba(0,0,0,0.65)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.7s cubic-bezier(0.25, 0.1, 0.25, 1)",
        }}
      />
      <div
        id="menu-panel"
        aria-hidden={!open}
        className="fixed top-0 right-0 bottom-0 z-199 flex flex-col"
        style={{
          width: "min(400px, 100vw)",
          background: "#070707",
          borderLeft: "1px solid rgba(255,255,255,0.05)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div style={{ height: `${NAVBAR_H}px` }} className="shrink-0" />
        <nav aria-label="Menú" className="flex-1 flex flex-col justify-center items-center px-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              tabIndex={open ? undefined : -1}
              className="w-full text-center py-4 text-[2.4rem] sm:text-5xl font-black tracking-tight text-white/80 hover:text-[#F5A623] transition-colors duration-300 cursor-pointer"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(16px)",
                transition: `opacity 0.55s ease ${0.2 + i * 0.09}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${0.2 + i * 0.09}s, color 0.3s ease`,
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div
          className="px-8 pb-10 text-center"
          style={{ opacity: open ? 1 : 0, transition: "opacity 0.5s ease 0.6s" }}
        >
          <a
            href="mailto:info@arismultimedia.com"
            className="text-white/22 text-xs hover:text-white/50 transition-colors duration-200 cursor-pointer"
          >
            info@arismultimedia.com
          </a>
        </div>
      </div>
    </>
  );
}

/* ─── Navbar ─────────────────────────────────────────────────── */

function Navbar({
  atTop,
  showLogo,
  menuOpen,
  onMenuToggle,
}: {
  atTop: boolean;
  showLogo: boolean;
  menuOpen: boolean;
  onMenuToggle: () => void;
}) {
  return (
    <nav
      aria-label="Navegación principal"
      className="fixed top-0 left-0 right-0 z-250"
      style={{ height: `${NAVBAR_H}px`, pointerEvents: "none" }}
    >
      <div className="max-w-6xl mx-auto px-2 h-full relative">
        <a
          href="#"
          aria-label="Aris Multimedia"
          className="absolute cursor-pointer"
          style={{
            top: "20px",
            left: "20px",
            opacity: menuOpen ? 0 : showLogo ? 1 : 0,
            transform: `translateX(${showLogo && !menuOpen ? 0 : -8}px)`,
            pointerEvents: menuOpen || !showLogo ? "none" : "auto",
            transition: "opacity 0.4s ease, transform 0.4s ease",
          }}
        >
          <Image
            src="/logo-blanco.png"
            alt="Aris Multimedia"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            priority
          />
        </a>
        <button
          onClick={onMenuToggle}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="menu-panel"
          className="absolute flex items-center justify-center cursor-pointer"
          style={{
            top: "20px",
            right: "20px",
            pointerEvents: "auto",
            width: "46px",
            height: "46px",
            borderRadius: "999px",
            background: atTop || menuOpen ? "transparent" : "rgba(10,10,10,0.82)",
            backdropFilter: atTop || menuOpen ? "none" : "blur(16px)",
            WebkitBackdropFilter: atTop || menuOpen ? "none" : "blur(16px)",
            border: atTop || menuOpen ? "1px solid transparent" : "1px solid rgba(255,255,255,0.1)",
            transition: "background 0.5s ease, border-color 0.5s ease",
          }}
        >
          <span
            className="absolute block h-px bg-white"
            style={{
              width: "20px",
              transform: menuOpen ? "rotate(45deg)" : "translateY(-5px)",
              transition: "transform 0.45s cubic-bezier(0.22,1,0.36,1)",
            }}
          />
          <span
            className="absolute block h-px bg-white"
            style={{
              width: menuOpen ? "20px" : "13px",
              transform: menuOpen ? "rotate(-45deg)" : "translateY(5px)",
              opacity: menuOpen ? 1 : 0.6,
              transition: "transform 0.45s cubic-bezier(0.22,1,0.36,1), width 0.3s ease, opacity 0.3s ease",
            }}
          />
        </button>
      </div>
    </nav>
  );
}

/* ─── Contact Form ───────────────────────────────────────────── */

function ContactForm() {
  const [form, setForm] = useState({ nombre: "", email: "", servicio: "", mensaje: "" });
  const [file, setFile] = useState<File | null>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    let fileBase64: string | null = null;
    let fileType: string | null = null;
    if (file) {
      const buffer = await file.arrayBuffer();
      const bytes = new Uint8Array(buffer);
      let binary = "";
      for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
      fileBase64 = btoa(binary);
      fileType = file.type || null;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: form.nombre,
          email: form.email,
          servicio: form.servicio,
          mensaje: form.mensaje,
          fileName: file?.name ?? null,
          fileBase64,
          fileType,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Error al enviar el mensaje.");
      }
      setSent(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error al enviar el mensaje.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-[#0a0a0a] border border-white/8 rounded-xl px-5 py-4 text-base text-white placeholder-white/25 focus:outline-none focus:border-[#F5A623]/45 transition-colors duration-200";

  if (sent) {
    return (
      <div role="alert" className="py-10 flex flex-col items-center text-center gap-5">
        <div className="w-14 h-14 rounded-full bg-[#F5A623]/10 flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p className="text-white font-bold text-lg mb-1.5">Mensaje recibido</p>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto">
            Te respondemos en un plazo de 24 horas a{" "}
            <span className="text-white/75">{form.email}</span>.
          </p>
        </div>
        <p className="text-white/25 text-xs max-w-xs">
          Si no recibes respuesta, revisa la carpeta de spam o escríbenos a{" "}
          <a href="mailto:info@arismultimedia.com" className="text-white/40 hover:text-white/60 transition-colors duration-200">
            info@arismultimedia.com
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contacto-nombre" className="block text-sm text-white/45 mb-2 font-medium">Tu nombre</label>
          <input
            id="contacto-nombre"
            type="text"
            required
            placeholder="Nombre o empresa"
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contacto-email" className="block text-sm text-white/45 mb-2 font-medium">Tu email</label>
          <input
            id="contacto-email"
            type="email"
            required
            placeholder="tu@email.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="contacto-servicio" className="block text-sm text-white/45 mb-2 font-medium">¿En qué podemos ayudarte?</label>
        <select
          id="contacto-servicio"
          value={form.servicio}
          onChange={(e) => setForm({ ...form, servicio: e.target.value })}
          className={`${inputClass} appearance-none cursor-pointer`}
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ffffff35' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 14px center",
            backgroundSize: "16px",
          }}
        >
          <option value="">Selecciona un servicio</option>
          <option value="Consultoría IA">Consultoría IA</option>
          <option value="Automatizaciones">Automatizaciones</option>
          <option value="Desarrollo web a medida">Desarrollo web a medida</option>
          <option value="WordPress o E-commerce">WordPress o E-commerce</option>
          <option value="Accesibilidad WCAG 2.2 AA">Accesibilidad WCAG 2.2 AA</option>
          <option value="Otro">Otro / Todavía no lo sé</option>
        </select>
      </div>
      <div>
        <label htmlFor="contacto-mensaje" className="block text-sm text-white/45 mb-2 font-medium">Cuéntanos un poco</label>
        <textarea
          id="contacto-mensaje"
          rows={4}
          required
          placeholder="Describe tu proyecto o lo que necesitas. No hace falta tenerlo todo claro."
          value={form.mensaje}
          onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
          className={`${inputClass} resize-none`}
        />
      </div>
      <div>
        <p className="block text-sm text-white/45 mb-2 font-medium">
          Brief o documento <span className="text-white/22 font-normal">(opcional · PDF, DOC, ZIP…)</span>
        </p>
        <label className="flex items-center gap-3 w-full bg-[#0a0a0a] border border-dashed border-white/10 hover:border-[#F5A623]/35 rounded-xl px-5 py-4 cursor-pointer transition-colors duration-200 group">
          <span className="text-white/30 group-hover:text-[#F5A623]/60 transition-colors duration-200">
            <IconUpload />
          </span>
          <span className="text-base text-white/28 group-hover:text-white/50 transition-colors duration-200 truncate">
            {file ? file.name : "Adjuntar archivo"}
          </span>
          <input
            type="file"
            accept=".pdf,.doc,.docx,.zip,.rar,.txt"
            className="sr-only"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />
        </label>
        {file && (
          <button
            type="button"
            onClick={() => setFile(null)}
            className="mt-1.5 text-xs text-white/25 hover:text-white/50 transition-colors cursor-pointer"
          >
            Quitar archivo
          </button>
        )}
      </div>
      {error && <p role="alert" className="text-red-400 text-sm text-center">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2.5 bg-[#F5A623] text-black font-bold py-4 rounded-xl hover:bg-[#FFD166] transition-colors duration-200 text-base cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Enviando…" : <><span>Enviar mensaje</span> <IconArrow /></>}
      </button>
    </form>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function Home() {
  const [atTop, setAtTop] = useState(true);
  const [showLogo, setShowLogo] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const goingUp = y < lastScrollY.current;
      setAtTop(y < 40);
      setShowLogo(y < 40 || goingUp);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in-view");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".scroll-animate").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const handleHeroMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  }, []);

  return (
    <div className="bg-[#080808] text-white overflow-x-hidden">
      <Navbar atTop={atTop} showLogo={showLogo} menuOpen={menuOpen} onMenuToggle={() => setMenuOpen((v) => !v)} />
      <MenuPanel open={menuOpen} onClose={closeMenu} />

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen overflow-hidden"
        onMouseMove={handleHeroMouseMove}
      >
        {/* Cosmic video bg — parallax layer 1 */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{
            transform: `translate(${mouse.x * -15}px, ${mouse.y * -10}px) scale(1.06)`,
            transition: "transform 0.9s cubic-bezier(0.25, 0.1, 0.25, 1)",
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.3 }}
          >
            <source src="/cosmic-drift-dark-nebula-asteroid-loop-4k-2026-02-08-07-39-28-utc.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Darkening overlays */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(8,8,8,0.15) 0%, transparent 35%, rgba(8,8,8,0.97) 100%)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 80% at 50% 50%, transparent 35%, rgba(8,8,8,0.45) 100%)" }} />

        {/* Amber glow — parallax layer 3 */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "32%",
            left: "50%",
            width: "560px",
            height: "560px",
            transform: `translate(calc(-50% + ${mouse.x * -22}px), calc(-50% + ${mouse.y * -14}px))`,
            transition: "transform 1.1s cubic-bezier(0.25, 0.1, 0.25, 1)",
            background: "radial-gradient(circle, rgba(245,166,35,0.1) 0%, rgba(245,166,35,0.03) 45%, transparent 70%)",
            animation: "float 14s ease-in-out infinite",
          }}
        />

        {/* Content — centered */}
        <div
          className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center"
          style={{ minHeight: "100vh", paddingTop: `${NAVBAR_H + 60}px`, paddingBottom: "5rem" }}
        >
          {/* Headline */}
          <h1
            className="text-5xl sm:text-6xl lg:text-[72px] xl:text-[80px] font-black leading-[1.03] tracking-tight mb-8"
            style={{ animation: "fadeInUp 0.8s ease-out 0.2s both" }}
          >
            Tu empresa,
            <br />
            <span className="shimmer-text">potenciada</span>
            <br />
            <span className="text-white/28">con IA.</span>
          </h1>

          {/* Sub */}
          <p
            className="text-white/60 text-lg leading-relaxed max-w-2xl mb-10"
            style={{ animation: "fadeInUp 0.8s ease-out 0.35s both" }}
          >
            Implementamos IA donde tiene sentido real. Consultoría estratégica,
            automatizaciones de procesos y desarrollo web a medida.
            Sin intermediarios, con resultados medibles.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4"
            style={{ animation: "fadeInUp 0.8s ease-out 0.5s both" }}
          >
            <a
              href="#contacto"
              className="group flex items-center justify-center gap-2.5 bg-[#F5A623] text-black font-bold px-8 py-4 rounded-full hover:bg-[#FFD166] transition-colors duration-300 text-base cursor-pointer"
            >
              Hablemos de tu proyecto
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                <IconArrow />
              </span>
            </a>
            <a
              href="#servicios"
              className="flex items-center justify-center gap-2 border border-white/20 text-white/75 hover:border-white/40 hover:text-white transition-colors duration-200 text-base font-medium px-8 py-4 rounded-full cursor-pointer"
            >
              Ver servicios
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          style={{ animation: "fadeIn 1s ease-out 1.8s both" }}
        >
          <div className="w-px h-12 bg-linear-to-b from-transparent via-white/18 to-transparent" />
        </div>
      </section>

      {/* ══ SERVICIOS ═════════════════════════════════════════ */}
      <section id="servicios" className="py-36 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="scroll-animate text-[#F5A623] text-xs font-semibold tracking-[0.18em] uppercase mb-5">
              Servicios
            </p>
            <h2 className="scroll-animate delay-1 text-4xl sm:text-5xl font-black tracking-tight">
              ¿Qué podemos{" "}
              <span className="text-white/28">hacer por ti?</span>
            </h2>
            <p className="scroll-animate delay-2 mt-5 text-white/60 text-lg max-w-lg leading-relaxed">
              Trabajamos en estas cinco áreas. El orden no es aleatorio.
            </p>
          </div>

          {/* Featured row — IA + Automatizaciones */}
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {services.slice(0, 2).map((s, i) => (
              <article
                key={s.title}
                className={`scroll-animate delay-${i + 1} group relative bg-[#0d0d0d] border rounded-3xl p-8 transition-all duration-500 overflow-hidden ${
                  s.badge
                    ? "border-[#F5A623]/15 hover:border-[#F5A623]/35"
                    : "border-white/6 hover:border-[#F5A623]/22"
                }`}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: "radial-gradient(600px at 0% 0%, rgba(245,166,35,0.06), transparent)" }}
                />
                {s.badge && (
                  <span
                    className="absolute top-5 right-5 text-[10px] font-bold tracking-[0.14em] uppercase px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(245,166,35,0.1)",
                      border: "1px solid rgba(245,166,35,0.35)",
                      backgroundImage: "linear-gradient(90deg, #F5A623 0%, #FFE580 55%, #F5A623 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      filter: "drop-shadow(0 0 8px rgba(245,166,35,0.4))",
                    }}
                  >
                    {s.badge}
                  </span>
                )}
                <div className="w-12 h-12 rounded-xl bg-[#F5A623]/10 text-[#F5A623] flex items-center justify-center mb-6 group-hover:bg-[#F5A623]/18 transition-colors duration-300 relative z-10">
                  {s.icon}
                </div>
                <h3 className="relative z-10 font-bold text-lg mb-3 leading-snug">{s.title}</h3>
                <p className="relative z-10 text-white/58 text-base leading-relaxed">{s.desc}</p>
              </article>
            ))}
          </div>

          {/* Standard row — Web, WordPress, Accesibilidad */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.slice(2).map((s, i) => (
              <article
                key={s.title}
                className={`scroll-animate delay-${i + 3} group relative bg-[#0d0d0d] border border-white/5 hover:border-[#F5A623]/20 rounded-3xl p-8 transition-all duration-500 overflow-hidden`}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: "radial-gradient(500px at 0% 0%, rgba(245,166,35,0.04), transparent)" }}
                />
                <div className="w-11 h-11 rounded-xl bg-[#F5A623]/8 text-[#F5A623] flex items-center justify-center mb-5 group-hover:bg-[#F5A623]/15 transition-colors duration-300 relative z-10">
                  {s.icon}
                </div>
                <h3 className="relative z-10 font-bold text-[16px] mb-2.5 leading-snug">{s.title}</h3>
                <p className="relative z-10 text-white/55 text-sm leading-relaxed">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SOBRE ARIS MULTIMEDIA ═════════════════════════════ */}
      <section id="sobre" className="py-20 px-6 bg-[#060606] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-center">

            {/* Left — Text */}
            <div className="scroll-animate flex flex-col order-2 lg:order-1">
              <p className="text-[#F5A623] text-xs font-semibold tracking-[0.18em] uppercase mb-5">
                Sobre nosotros
              </p>
              <h2 className="text-5xl sm:text-6xl font-black tracking-tight leading-[0.95] mb-3">
                Aris Multimedia.
              </h2>
              <p className="text-xl sm:text-2xl font-semibold text-white/30 mb-7 leading-snug">
                Tecnología real.
              </p>
              <p className="text-white/68 text-base leading-relaxed mb-5 max-w-md">
                Aris Multimedia nació con un objetivo claro: aplicar tecnología donde tiene impacto real.
                Desarrollamos proyectos web, integramos inteligencia artificial y automatizamos procesos,
                siempre con trato directo y sin intermediarios.
              </p>
              <p className="text-white/55 text-base leading-relaxed mb-10 max-w-md">
                Detrás hay una sola persona con más de 4 años de experiencia en desarrollo web y una
                orientación cada vez más clara hacia la IA y la automatización. Lo que nos diferencia
                no es el tamaño, es el nivel de compromiso y detalle que podemos ofrecer cuando no
                hay capas de por medio.
              </p>

              {/* Feature pills */}
              <div className="flex flex-col gap-3 mb-10">
                {[
                  { title: "Trato directo", desc: "Hablas con quien hace el trabajo." },
                  { title: "Alta calidad", desc: "No el bien suficiente, bien de verdad." },
                  { title: "Precio honesto", desc: "El presupuesto refleja el trabajo real." },
                ].map((p) => (
                  <div key={p.title} className="flex items-start gap-3 bg-[#0d0d0d] border border-white/6 rounded-2xl px-5 py-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623] shrink-0 mt-1.5" />
                    <div>
                      <p className="text-white font-semibold text-sm">{p.title}</p>
                      <p className="text-white/55 text-sm mt-0.5">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#contacto"
                className="group inline-flex items-center gap-2 text-[#F5A623] font-semibold text-base hover:gap-3 transition-all duration-200 cursor-pointer"
              >
                Cuéntanos tu proyecto <IconArrow />
              </a>
            </div>

            {/* Right — Photo */}
            <div className="scroll-animate delay-1 order-1 lg:order-2 flex justify-center lg:justify-end">
              <div
                className="relative"
                style={{ width: "clamp(280px, 100%, 560px)" }}
              >
                {/* Soft amber glow behind photo */}
                <div
                  className="absolute inset-0 pointer-events-none z-0 rounded-2xl"
                  style={{
                    background: "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(245,166,35,0.08) 0%, transparent 70%)",
                    transform: "scale(1.15)",
                  }}
                />
                <div className="relative overflow-hidden z-10 rounded-3xl" style={{ aspectRatio: "4/5" }}>
                  <Image
                    src="/adria-amber-coding.png"
                    alt="Adria, fundador de Aris Multimedia"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 90vw, 480px"
                  />
                  {/* Bottom fade */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "linear-gradient(to bottom, transparent 65%, rgba(6,6,6,0.55) 100%)" }}
                  />
                </div>
                {/* Branded tag overlaid on photo */}
                <div
                  className="absolute bottom-4 left-4 z-20 flex items-center gap-2.5"
                  style={{
                    background: "rgba(8,8,8,0.82)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    padding: "0.55rem 0.9rem",
                    borderRadius: "12px",
                  }}
                >
                  <Image
                    src="/logo-blanco.png"
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain opacity-70 shrink-0"
                  />
                  <div>
                    <span className="block text-white font-bold text-sm">Aris Multimedia</span>
                    <span className="block text-white/40 text-xs mt-0.5 tracking-wide">Barcelona, España</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ PROCESO ═══════════════════════════════════════════ */}
      <section id="proceso" className="py-36 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(245,166,35,0.03), transparent)" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="mb-20">
            <p className="scroll-animate text-[#F5A623] text-xs font-semibold tracking-[0.18em] uppercase mb-5">
              Cómo trabajamos
            </p>
            <h2 className="scroll-animate delay-1 text-4xl sm:text-5xl font-black tracking-tight">
              Así de <span className="shimmer-text">sencillo.</span>
            </h2>
          </div>

          <div className="scroll-animate relative mb-16 rounded-3xl overflow-hidden">
            <div className="relative w-full h-64 sm:h-80">
              <video
                autoPlay
                muted
                loop
                playsInline
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/motion-abstract-orange-digital-waves-and-particles-2026-01-28-02-42-31-utc.mp4" type="video/mp4" />
              </video>
            </div>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(to bottom, #080808 0%, transparent 22%, transparent 55%, #080808 100%)" }}
            />
            <div className="absolute inset-y-0 left-0 w-24 pointer-events-none" style={{ background: "linear-gradient(to right, #080808, transparent)" }} />
            <div className="absolute inset-y-0 right-0 w-24 pointer-events-none" style={{ background: "linear-gradient(to left, #080808, transparent)" }} />
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-10">
            {steps.map((step, i) => (
              <div key={step.num} className={`scroll-animate delay-${i + 1}`}>
                <span className="block text-[#F5A623] font-black text-6xl leading-none mb-6 font-mono">
                  {step.num}
                </span>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-white/65 leading-relaxed text-base">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACTO ══════════════════════════════════════════ */}
      <section id="contacto" className="py-36 px-6 bg-[#060606] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(245,166,35,0.03), transparent)" }}
        />
        <div
          className="absolute left-1/2 pointer-events-none"
          style={{
            transform: "translateX(-50%)",
            bottom: "-15%",
            width: "min(2200px, 260vw)",
            height: "min(2200px, 260vw)",
            opacity: 0.12,
          }}
        >
          <ArisOrb />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="scroll-animate text-[#F5A623] text-xs font-semibold tracking-[0.18em] uppercase mb-6">
              Contacto
            </p>
            <h2 className="scroll-animate delay-1 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] mb-5">
              ¿Tienes un proyecto
              <br />
              <span className="text-white/28">en mente?</span>
            </h2>
            <p className="scroll-animate delay-2 text-white/65 text-lg leading-relaxed max-w-md mx-auto">
              Cuéntanos en qué estás pensando. No hace falta tener el proyecto
              definido; muchas veces eso también forma parte del trabajo.
            </p>
          </div>

          <div className="scroll-animate delay-3 bg-[#0d0d0d] border border-white/6 rounded-3xl p-8 sm:p-10 mb-5">
            <ContactForm />
          </div>

          <div className="scroll-animate delay-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 px-2">
            <div>
              <p className="text-white/50 text-xs mb-1">O escríbenos directamente</p>
              <a
                href="mailto:info@arismultimedia.com"
                className="text-base font-bold text-white/70 hover:text-[#F5A623] transition-colors duration-200 cursor-pointer"
              >
                info@arismultimedia.com
              </a>
            </div>
            <div className="flex gap-8 text-xs">
              {[
                { l: "Respuesta", v: "En 24h" },
                { l: "Consulta", v: "Sin compromiso" },
                { l: "Presupuesto", v: "Siempre claro" },
              ].map((item) => (
                <div key={item.l}>
                  <p className="text-white/50 mb-0.5">{item.l}</p>
                  <p className="text-white/80 font-medium">{item.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ════════════════════════════════════════════ */}
      <footer className="relative overflow-hidden pt-20 pb-10 px-6">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(245,166,35,0.15), transparent)" }}
        />
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10 mb-14">
            <div className="flex items-center gap-4">
              <Image
                src="/logo-blanco.png"
                alt="Aris Multimedia"
                width={40}
                height={40}
                className="h-10 w-10 object-contain opacity-75 shrink-0"
              />
              <div>
                <p className="text-white/85 font-semibold text-sm">Aris Multimedia</p>
                <p className="text-white/38 text-xs mt-0.5">IA, automatizaciones y desarrollo web.</p>
              </div>
            </div>
            <div className="flex flex-col sm:items-end gap-3">
              <a
                href="#contacto"
                className="shrink-0 flex items-center gap-2 bg-[#F5A623] text-black font-bold px-6 py-3 rounded-full hover:bg-[#FFD166] transition-colors duration-200 text-sm cursor-pointer"
              >
                Empezar un proyecto <IconArrow />
              </a>
              <a
                href="mailto:info@arismultimedia.com"
                className="text-xs text-white/28 hover:text-white/55 transition-colors duration-200"
              >
                info@arismultimedia.com
              </a>
            </div>
          </div>
          <div className="pt-6 border-t border-white/4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/18 text-xs">
              © {new Date().getFullYear()} Aris Multimedia
            </p>
            <div className="flex items-center gap-5 text-xs text-white/22">
              <a href="/aviso-legal" className="hover:text-white/50 transition-colors duration-200">Aviso legal</a>
              <a href="/privacidad" className="hover:text-white/50 transition-colors duration-200">Privacidad</a>
              <a href="/cookies" className="hover:text-white/50 transition-colors duration-200">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
