import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Aris Multimedia",
  description: "Información sobre el tratamiento de datos personales en Aris Multimedia conforme al RGPD.",
};

export default function Privacidad() {
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
          Privacidad
        </p>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-12">
          Política de Privacidad
        </h1>

        <div className="space-y-10 text-white/68 leading-relaxed">

          <section>
            <h2 className="text-white font-bold text-lg mb-3">1. Responsable del tratamiento</h2>
            <ul className="space-y-1.5 text-sm">
              <li><span className="text-white/45">Titular:</span> Aris Multimedia</li>
              <li><span className="text-white/45">NIF:</span> 46496685T</li>
              <li><span className="text-white/45">Domicilio:</span> L'Hospitalet de Llobregat, Barcelona</li>
              <li><span className="text-white/45">Contacto:</span> info@arismultimedia.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">2. Datos que recabamos</h2>
            <p>A través del formulario de contacto tratamos los siguientes datos personales:</p>
            <ul className="mt-3 space-y-1 text-sm list-disc list-inside marker:text-[#F5A623]/50">
              <li>Nombre o empresa</li>
              <li>Dirección de correo electrónico</li>
              <li>Tipo de servicio solicitado</li>
              <li>Descripción del proyecto o consulta</li>
              <li>Documento adjunto (opcional, si el usuario decide enviarlo)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">3. Finalidad y base jurídica</h2>
            <p>Los datos se utilizan exclusivamente para atender la consulta o solicitud de presupuesto enviada.</p>
            <p className="mt-3">La base jurídica del tratamiento es el art. 6.1.b del RGPD: la aplicación de medidas precontractuales a petición del interesado.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">4. Plazo de conservación</h2>
            <p>Los datos se conservan durante el tiempo necesario para gestionar la consulta y, si hay relación comercial, durante el plazo legalmente exigido. En ausencia de relación posterior, se eliminan en un plazo máximo de 12 meses desde el último contacto.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">5. Destinatarios y transferencias internacionales</h2>
            <p>Los datos no se ceden a terceros salvo obligación legal. El envío de correos electrónicos se realiza a través de <strong className="text-white/85">Resend Inc.</strong> (Estados Unidos), proveedor de infraestructura de email que actúa como encargado del tratamiento. La transferencia está amparada por las Cláusulas Contractuales Tipo aprobadas por la Comisión Europea.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-3">6. Tus derechos</h2>
            <p>Puedes ejercer en cualquier momento los derechos de <strong className="text-white/85">acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad</strong> dirigiéndote a:</p>
            <p className="mt-3 text-sm">
              <a href="mailto:info@arismultimedia.com" className="text-[#F5A623] hover:text-[#FFD166] transition-colors duration-200">
                info@arismultimedia.com
              </a>
            </p>
            <p className="mt-3">También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) en{" "}
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5A623] hover:text-[#FFD166] transition-colors duration-200"
              >
                www.aepd.es
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
