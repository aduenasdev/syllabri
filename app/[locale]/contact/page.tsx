import { getLocale } from "next-intl/server";
import type { AppLocale } from "@/i18n/routing";
import { BRAND } from "@/lib/nav";

const COPY = {
  es: {
    eyebrow: "Contacto",
    title: "Discovery, piloto o alianza estratégica",
    body: "Tres entradas para iniciar conversación. Formulario y jerarquía de CTAs en construcción.",
    email: "Email",
    whatsapp: "WhatsApp",
  },
  en: {
    eyebrow: "Contact",
    title: "Discovery, pilot, or strategic partnership",
    body: "Three entry points to start a conversation. Form and CTA hierarchy under construction.",
    email: "Email",
    whatsapp: "WhatsApp",
  },
} as const;

export default async function ContactPage() {
  const locale = (await getLocale()) as AppLocale;
  const copy = COPY[locale];

  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-6 py-24">
      <div className="flex flex-col gap-6">
        <span className="text-xs uppercase tracking-[0.24em] text-foreground-muted">
          {copy.eyebrow}
        </span>
        <h1 className="font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          {copy.title}
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-foreground-secondary">
          {copy.body}
        </p>
      </div>

      <dl className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1 rounded-lg border border-line-subtle bg-surface px-4 py-3">
          <dt className="text-xs uppercase tracking-[0.2em] text-foreground-muted">
            {copy.email}
          </dt>
          <dd className="text-sm">
            <a
              href={`mailto:${BRAND.email}`}
              className="text-foreground transition-colors duration-150 hover:text-accent-cyan"
            >
              {BRAND.email}
            </a>
          </dd>
        </div>
        <div className="flex flex-col gap-1 rounded-lg border border-line-subtle bg-surface px-4 py-3">
          <dt className="text-xs uppercase tracking-[0.2em] text-foreground-muted">
            {copy.whatsapp}
          </dt>
          <dd className="text-sm">
            <a
              href={`https://wa.me/${BRAND.whatsapp.replace(/[^\d]/g, "")}`}
              target="_blank"
              rel="noopener"
              className="text-foreground transition-colors duration-150 hover:text-accent-cyan"
            >
              {BRAND.whatsapp}
            </a>
          </dd>
        </div>
      </dl>
    </section>
  );
}
