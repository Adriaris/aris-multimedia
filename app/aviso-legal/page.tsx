import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal | Aris Multimedia",
  description: "Información legal sobre el titular del sitio web Aris Multimedia.",
};

export default function AvisoLegal() {
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
          Aviso Legal
        </p>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-12">
          Información legal
        </h1>

        <div className="space-y-10 text-white/68 leading-relaxed">

          <section>
            <h2 className="text-white font-bold text-lg mb-3">1. Titular del sitio web</h2>
            <p>En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se facilitan los siguientes datos identificativos:</p>
            <ul className="mt-4 space-y-1.5 text-sm">
              <li><span className="text-white/45">Denominación:</span> Aris Multimedia</li>
              <li><span className="text-white/45">NIF:</span> 46496685T</li>
              <li><span className="text-white/45">Domicilio:</span> L'Hospitalet de Llobregat, Barcelona</li>
              <li><span className="text-white/45">Correo electrónico:</span> info@arismultimedia.com</li>
              <li><span className="text-white/45">Actividad:</span> Servicios de desarrollo web</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">2. Objeto y aceptación</h2>
            <p>El presente Aviso Legal regula el acceso y uso del sitio web <strong className="text-white/85">arismultimedia.com</strong>. El acceso y uso del sitio implica la aceptación plena de las condiciones aquí expuestas.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">3. Propiedad intelectual e industrial</h2>
            <p>Todos los contenidos del sitio web (textos, imágenes, logotipos, diseño y código fuente) son propiedad de Aris Multimedia o cuenta con licencia para su uso. Queda prohibida su reproducción, distribución o comunicación pública sin autorización expresa.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">4. Limitación de responsabilidad</h2>
            <p>Aris Multimedia no garantiza la disponibilidad continua del sitio ni se hace responsable de los daños derivados de su uso o del acceso a sitios de terceros enlazados desde este.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">5. Legislación aplicable</h2>
            <p>Las presentes condiciones se rigen por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales de Barcelona, con renuncia a cualquier otro fuero.</p>
          </section>

          <p className="text-white/28 text-xs pt-4 border-t border-white/5">
            Última actualización: abril de 2026
          </p>

        </div>
      </div>
    </div>
  );
}
