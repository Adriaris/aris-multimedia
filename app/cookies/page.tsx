import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | Aris Multimedia",
  description: "Información sobre el uso de cookies en el sitio web de Aris Multimedia.",
};

export default function Cookies() {
  return (
    <div className="bg-[#080808] text-white min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-20">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors duration-200 text-sm mb-14"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m7-7-7 7 7 7" />
          </svg>
          Volver al inicio
        </Link>

        <p className="text-[#F5A623] text-xs font-semibold tracking-[0.18em] uppercase mb-4">
          Cookies
        </p>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-12">
          Política de Cookies
        </h1>

        <div className="space-y-10 text-white/68 leading-relaxed">

          <section>
            <h2 className="text-white font-bold text-lg mb-3">¿Qué son las cookies?</h2>
            <p>Las cookies son pequeños archivos de texto que un sitio web puede almacenar en el navegador del usuario. Se utilizan para recordar preferencias, mantener sesiones o recopilar estadísticas de uso.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">Cookies que utiliza este sitio</h2>
            <p>Este sitio web <strong className="text-white/85">no instala cookies de rastreo, publicidad ni analítica</strong>. No utilizamos Google Analytics, Meta Pixel ni ningún otro servicio de seguimiento de usuarios.</p>
            <p className="mt-3">El sitio puede utilizar cookies técnicas estrictamente necesarias para su correcto funcionamiento (por ejemplo, cookies de sesión propias del servidor). Estas cookies no recaban datos personales con fines comerciales y no requieren consentimiento según la normativa vigente (LSSI y Directriz ePrivacy).</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">Cómo gestionar las cookies</h2>
            <p>Puedes configurar tu navegador para bloquear o eliminar cookies en cualquier momento. Ten en cuenta que deshabilitar cookies técnicas puede afectar al funcionamiento básico del sitio.</p>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#F5A623] hover:text-[#FFD166] transition-colors duration-200">Chrome</a>
              </li>
              <li>
                <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-[#F5A623] hover:text-[#FFD166] transition-colors duration-200">Firefox</a>
              </li>
              <li>
                <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#F5A623] hover:text-[#FFD166] transition-colors duration-200">Safari</a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">Contacto</h2>
            <p>Si tienes cualquier pregunta sobre el uso de cookies en este sitio, puedes contactar con nosotros en{" "}
              <a href="mailto:info@arismultimedia.com" className="text-[#F5A623] hover:text-[#FFD166] transition-colors duration-200">
                info@arismultimedia.com
              </a>.
            </p>
          </section>

          <p className="text-white/28 text-xs pt-4 border-t border-white/5">
            Última actualización: abril de 2026
          </p>

        </div>
      </div>
    </div>
  );
}
