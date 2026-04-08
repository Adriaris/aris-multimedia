"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Accessibility, Globe, Code2, MonitorSmartphone } from "lucide-react";

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
    icon: <Accessibility size={22} strokeWidth={1.5} />,
    title: "Accesibilidad WCAG 2.2 AA",
    desc: "La normativa europea (WCAG 2.2 AA) ya obliga a muchas webs a ser accesibles. Adaptamos la tuya para cumplirla bien, no solo en papel.",
  },
  {
    icon: <Globe size={22} strokeWidth={1.5} />,
    title: "WordPress",
    desc: "Webs en WordPress pensadas para que el cliente pueda gestionarlas sin depender de nosotros para cada cambio.",
  },
  {
    icon: <Code2 size={22} strokeWidth={1.5} />,
    title: "Desarrollo personalizado",
    desc: "Cuando una plantilla no es suficiente. Código pensado exactamente para lo que necesitas, sin más ni menos.",
  },
  {
    icon: <MonitorSmartphone size={22} strokeWidth={1.5} />,
    title: "Progressive Web Apps",
    desc: "Webs que se instalan como apps y funcionan sin conexión. Sin App Store ni Play Store.",
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
  { label: "Por qué Aris", href: "#sobre" },
  { label: "Cómo trabajo", href: "#proceso" },
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
      {/* Backdrop — click anywhere outside to close */}
      <div
        onClick={onClose}
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

      {/* Sliding panel */}
      <div
        className="fixed top-0 right-0 bottom-0 z-199 flex flex-col"
        style={{
          width: "min(400px, 100vw)",
          background: "#070707",
          borderLeft: "1px solid rgba(255,255,255,0.05)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {/* Spacer so links don't sit under the navbar */}
        <div style={{ height: `${NAVBAR_H}px` }} className="shrink-0" />

        {/* Links */}
        <nav className="flex-1 flex flex-col justify-center items-center px-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
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

        {/* Bottom */}
        <div
          className="px-8 pb-10 text-center"
          style={{
            opacity: open ? 1 : 0,
            transition: "opacity 0.5s ease 0.6s",
          }}
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
      className="fixed top-0 left-0 right-0 z-250"
      style={{ height: `${NAVBAR_H}px`, pointerEvents: "none" }}
    >
      {/* Same max-width as page content, but px-2 so elements sit just outside the px-6 content boundary */}
      <div className="max-w-6xl mx-auto px-2 h-full relative">

      {/* Logo */}
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

      {/* Hamburger — pill when scrolled */}
      <button
        onClick={onMenuToggle}
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
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
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    servicio: "",
    mensaje: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Consulta web${form.servicio ? ` · ${form.servicio}` : ""}`
    );
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nEmail: ${form.email}\nServicio: ${form.servicio}${file ? `\nBrief adjunto: ${file.name}` : ""}\n\n${form.mensaje}`
    );
    window.location.href = `mailto:info@arismultimedia.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputClass =
    "w-full bg-[#0a0a0a] border border-white/8 rounded-xl px-5 py-4 text-base text-white placeholder-white/25 focus:outline-none focus:border-[#F5A623]/45 transition-colors duration-200";

  if (sent) {
    return (
      <div className="text-center py-10">
        <p className="text-[#F5A623] font-semibold mb-2">Abriendo tu gestor de correo...</p>
        <p className="text-white/38 text-sm">
          Si no se abre, escríbenos a{" "}
          <a href="mailto:info@arismultimedia.com" className="underline hover:text-white/70 transition-colors cursor-pointer">
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
          <label className="block text-sm text-white/45 mb-2 font-medium">Tu nombre</label>
          <input
            type="text"
            required
            placeholder="Nombre o empresa"
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm text-white/45 mb-2 font-medium">Tu email</label>
          <input
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
        <label className="block text-sm text-white/45 mb-2 font-medium">¿En qué podemos ayudarte?</label>
        <select
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
          <option value="Accesibilidad WCAG 2.2 AA">Accesibilidad WCAG 2.2 AA</option>
          <option value="WordPress">WordPress</option>
          <option value="Desarrollo personalizado">Desarrollo personalizado</option>
          <option value="Progressive Web App">Progressive Web App</option>
          <option value="Otro">Otro / Todavía no lo sé</option>
        </select>
      </div>

      <div>
        <label className="block text-sm text-white/45 mb-2 font-medium">Cuéntanos un poco</label>
        <textarea
          rows={4}
          required
          placeholder="Describe tu proyecto o lo que necesitas. No hace falta tenerlo todo claro."
          value={form.mensaje}
          onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* File upload */}
      <div>
        <label className="block text-sm text-white/45 mb-2 font-medium">
          Brief o documento <span className="text-white/22 font-normal">(opcional · PDF, DOC, ZIP…)</span>
        </label>
        <label
          className="flex items-center gap-3 w-full bg-[#0a0a0a] border border-dashed border-white/10 hover:border-[#F5A623]/35 rounded-xl px-5 py-4 cursor-pointer transition-colors duration-200 group"
        >
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

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2.5 bg-[#F5A623] text-black font-bold py-4 rounded-xl hover:bg-[#FFD166] transition-colors duration-200 text-base cursor-pointer"
      >
        Enviar mensaje <IconArrow />
      </button>
    </form>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function Home() {
  const [atTop, setAtTop] = useState(true);
  const [showLogo, setShowLogo] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
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

  useEffect(() => {
    document.querySelectorAll(".hero-word").forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${0.12 + i * 0.09}s`;
    });
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <div className="bg-[#080808] text-white overflow-x-hidden">
      <Navbar atTop={atTop} showLogo={showLogo} menuOpen={menuOpen} onMenuToggle={() => setMenuOpen((v) => !v)} />
      <MenuPanel open={menuOpen} onClose={closeMenu} />

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Cosmic video background */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.62 }}
          >
            <source src="/cosmic-drift-dark-nebula-asteroid-loop-4k-2026-02-08-07-39-28-utc.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-linear-to-b from-[#080808]/30 via-transparent to-[#080808]" />
        </div>

        {/* Ambient glow — pink */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,20,100,0.18) 0%, rgba(255,20,100,0.04) 45%, transparent 70%)",
            animation: "float 14s ease-in-out infinite",
          }}
        />

        <div
          className="relative z-10 text-center max-w-5xl mx-auto px-6 pb-28"
          style={{ paddingTop: `${NAVBAR_H + 80}px` }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-black leading-[1.04] tracking-tight mb-8">
            {"Código limpio.".split(" ").map((word, i) => (
              <span key={i} className="hero-word mr-[0.22em]">{word}</span>
            ))}
            <br />
            <span className="text-white/30">Resultado</span>{" "}
            <span className="shimmer-text">real.</span>
          </h1>

          <p
            className="text-lg sm:text-xl text-white/68 max-w-xl mx-auto mb-12 leading-relaxed"
            style={{ animation: "fadeInUp 0.8s ease-out 0.65s both" }}
          >
            Accesibilidad, WordPress o desarrollo a medida. Lo que el proyecto
            necesita, construido con cuidado y sin intermediarios.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ animation: "fadeInUp 0.8s ease-out 0.85s both" }}
          >
            <a
              href="#contacto"
              className="group flex items-center gap-2.5 bg-[#F5A623] text-black font-bold px-8 py-4 rounded-full hover:bg-[#FFD166] transition-colors duration-300 text-base cursor-pointer"
            >
              Hablemos de tu proyecto
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                <IconArrow />
              </span>
            </a>
            <a
              href="#servicios"
              className="flex items-center gap-2 border border-white/20 text-white/75 hover:border-white/40 hover:text-white transition-colors duration-200 text-base font-medium px-8 py-4 rounded-full cursor-pointer"
            >
              Ver servicios
            </a>
          </div>
        </div>

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
          <div className="mb-20">
            <p className="scroll-animate text-[#F5A623] text-xs font-semibold tracking-[0.18em] uppercase mb-5">
              Servicios
            </p>
            <h2 className="scroll-animate delay-1 text-4xl sm:text-5xl font-black tracking-tight">
              ¿Qué puedo hacer
              <span className="text-white/30"> por ti?</span>
            </h2>
            <p className="scroll-animate delay-2 mt-5 text-white/65 text-lg max-w-lg leading-relaxed">
              Cada proyecto es distinto. Trabajo en estas cuatro áreas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((s, i) => (
              <article
                key={s.title}
                className={`scroll-animate delay-${i + 1} group relative bg-[#0d0d0d] border border-white/5 rounded-2xl p-8 hover:border-[#F5A623]/20 transition-all duration-500 overflow-hidden`}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: "radial-gradient(500px at 0% 0%, rgba(245,166,35,0.05), transparent)" }}
                />
                <div className="w-11 h-11 rounded-xl bg-[#F5A623]/10 text-[#F5A623] flex items-center justify-center mb-6 group-hover:bg-[#F5A623]/18 transition-colors duration-300 relative z-10">
                  {s.icon}
                </div>
                <h3 className="relative z-10 font-bold text-[17px] mb-3 leading-snug">{s.title}</h3>
                <p className="relative z-10 text-white/62 text-base leading-relaxed">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ POR QUÉ ARIS MULTIMEDIA ═══════════════════════════ */}
      <section id="sobre" className="py-20 px-6 bg-[#060606] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16 items-center">

            {/* Left: header + features + CTA */}
            <div className="scroll-animate flex flex-col">
              <p className="text-[#F5A623] text-xs font-semibold tracking-[0.18em] uppercase mb-5">
                Por qué Aris Multimedia
              </p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.08] mb-5">
                Pequeño por elección.{" "}
                <span className="text-white/25">Preciso por convicción.</span>
              </h2>
              <p className="text-white/68 text-base leading-relaxed mb-10 max-w-md">
                Trato directo, sin intermediarios. El contexto completo del proyecto
                siempre está en el mismo sitio.
              </p>

              {/* Feature cards */}
              <div className="flex flex-col gap-3 mb-10">
                {[
                  {
                    title: "Trato directo",
                    desc: "El cliente habla con quien hace el trabajo. Sin mensajes interpretados ni capas de por medio.",
                  },
                  {
                    title: "Alta calidad",
                    desc: "Nos importa hacer las cosas bien. No el 'bien suficiente', bien de verdad: en diseño, en código y en experiencia.",
                  },
                  {
                    title: "Precio honesto",
                    desc: "El presupuesto refleja el trabajo real. Si algo cambia a mitad de camino, se comunica antes de seguir.",
                  },
                ].map((p) => (
                  <div
                    key={p.title}
                    className="bg-[#0d0d0d] border border-white/[0.07] rounded-2xl px-6 py-5"
                  >
                    <h4 className="text-white font-semibold text-base mb-1.5">{p.title}</h4>
                    <p className="text-white/62 text-base leading-relaxed">{p.desc}</p>
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

            {/* Right: image */}
            <div className="scroll-animate delay-1 rounded-3xl overflow-hidden">
              <Image
                src="/workplace-of-designer-with-computers-on-table-2026-01-08-07-41-11-utc.jpg"
                alt=""
                width={1200}
                height={800}
                className="w-full object-cover"
                style={{ height: "clamp(420px, 55vh, 640px)", opacity: 0.88 }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ══ PROCESO ═══════════════════════════════════════════ */}
      <section id="proceso" className="py-36 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(245,166,35,0.035), transparent)" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="mb-20">
            <p className="scroll-animate text-[#F5A623] text-xs font-semibold tracking-[0.18em] uppercase mb-5">
              Cómo trabajo
            </p>
            <h2 className="scroll-animate delay-1 text-4xl sm:text-5xl font-black tracking-tight">
              Así de <span className="shimmer-text">sencillo.</span>
            </h2>
          </div>

          <div className="scroll-animate relative mb-16 rounded-2xl overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-64 sm:h-80 object-cover object-center opacity-70"
            >
              <source
                src="/motion-abstract-orange-digital-waves-and-particles-2026-01-28-02-42-31-utc.mp4"
                type="video/mp4"
              />
            </video>
            {/* Fade bottom → page background */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, #080808 0%, transparent 18%, transparent 60%, #080808 100%)",
              }}
            />
            {/* Fade lateral edges */}
            <div
              className="absolute inset-y-0 left-0 w-20 pointer-events-none"
              style={{ background: "linear-gradient(to right, #080808, transparent)" }}
            />
            <div
              className="absolute inset-y-0 right-0 w-20 pointer-events-none"
              style={{ background: "linear-gradient(to left, #080808, transparent)" }}
            />
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
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(245,166,35,0.035), transparent)" }}
        />
        {/* ArisOrb — anclado sobre el formulario */}
        <div
          className="absolute left-1/2 pointer-events-none"
          style={{
            transform: "translateX(-50%)",
            bottom: "-15%",
            width: "min(2200px, 260vw)",
            height: "min(2200px, 260vw)",
            opacity: 0.13,
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

          <div className="scroll-animate delay-3 bg-[#0d0d0d] border border-white/6 rounded-2xl p-8 sm:p-10 mb-5">
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
        {/* Subtle top glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(245,166,35,0.15), transparent)" }}
        />

        <div className="max-w-6xl mx-auto">
          {/* CTA row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 mb-14">
            <div>
              <Image
                src="/logo-blanco.png"
                alt="Aris Multimedia"
                width={48}
                height={48}
                className="h-12 w-12 object-contain mb-4 opacity-80"
              />
              <p className="text-white/55 text-sm leading-relaxed max-w-xs">
                Desarrollo web hecho con cuidado y atención al detalle.
              </p>
            </div>
            <a
              href="#contacto"
              className="shrink-0 flex items-center gap-2 bg-[#F5A623] text-black font-bold px-6 py-3 rounded-full hover:bg-[#FFD166] transition-colors duration-200 text-sm cursor-pointer"
            >
              Empezar un proyecto <IconArrow />
            </a>
          </div>

          {/* Bottom row */}
          <div className="pt-8 border-t border-white/4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/18 text-xs">
              © {new Date().getFullYear()} Aris Multimedia. Hecho con cuidado.
            </p>
            <div className="flex items-center gap-6 text-xs text-white/22">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="hover:text-white/50 transition-colors duration-200 cursor-pointer"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
