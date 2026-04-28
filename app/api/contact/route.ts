import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json() as Record<string, unknown>;

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json({ error: "missing_fields" }, { status: 400 });
    }

    // TODO Fase 7: enviar email o guardar en base de datos
    console.log("[contact]", { name, email, company: body.company, message });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "invalid_payload" }, { status: 400 });
  }
}
