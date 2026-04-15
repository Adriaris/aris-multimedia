import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { nombre, email, servicio, mensaje, fileName, fileBase64, fileType } =
      await req.json();

    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ error: "Faltan campos obligatorios." }, { status: 400 });
    }

    const attachments =
      fileBase64 && fileName
        ? [
            {
              filename: fileName,
              content: fileBase64,
              ...(fileType ? { type: fileType } : {}),
            },
          ]
        : [];

    await resend.emails.send({
      from: "Aris Multimedia <noreply@arismultimedia.com>",
      to: "info@arismultimedia.com",
      replyTo: email,
      subject: `Consulta web${servicio ? ` · ${servicio}` : ""}`,
      text: [
        `Nombre: ${nombre}`,
        `Email: ${email}`,
        `Servicio: ${servicio || "—"}`,
        fileName ? `Brief adjunto: ${fileName}` : null,
        "",
        mensaje,
      ]
        .filter((l) => l !== null)
        .join("\n"),
      attachments,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Error al enviar correo:", err);
    return NextResponse.json({ error: "Error interno al enviar el correo." }, { status: 500 });
  }
}
