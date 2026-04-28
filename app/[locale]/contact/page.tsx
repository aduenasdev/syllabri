import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getLocale } from "next-intl/server";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { buildAlternates, getPageSeo } from "@/lib/seo";
import { ContactForm } from "@/components/home/contact-form";
import { BRAND } from "@/lib/nav";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = (
    hasLocale(routing.locales, locale) ? locale : routing.defaultLocale
  ) as AppLocale;
  const seo = getPageSeo(safeLocale, "contact");
  const alternates = buildAlternates("/contact", safeLocale);
  return {
    title: seo.title,
    description: seo.description,
    alternates,
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: alternates.canonical as string,
      siteName: "Syllabri",
      locale: safeLocale === "es" ? "es_ES" : "en_US",
      type: "website",
    },
  };
}

const COPY = {
  es: {
    eyebrow: "Contacto",
    title: "Discovery, piloto o alianza estratégica",
    description:
      "Tres formas de iniciar. Sin compromisos, sin demos genéricas. Una conversación directa sobre tu contexto real.",
    entries: [
      {
        index: "01",
        label: "Discovery técnico",
        heading: "Diagnóstico de tu caso en 60 minutos",
        body: "Revisamos tu stack actual, tus fuentes de datos y el proceso que quieres mejorar. Al final tienes un mapa claro de qué es posible y con qué esfuerzo.",
        duration: "60 min · Sin coste",
      },
      {
        index: "02",
        label: "Piloto acotado",
        heading: "Implementación real en 4–8 semanas",
        body: "Definimos un alcance pequeño y medible: un agente, un flujo, un caso de uso. Lo construimos, lo desplegamos en tu entorno y lo validamos juntos.",
        duration: "4–8 semanas · Alcance definido",
      },
      {
        index: "03",
        label: "Alianza estratégica",
        heading: "Desarrollo continuo de capacidades de IA",
        body: "Para organizaciones que quieren construir una base de IA propia y sostenible. Trabajamos en profundidad: arquitectura, equipo, procesos y formación.",
        duration: "Largo plazo · Por fases",
      },
    ],
    formHeading: "Cuéntanos tu caso",
    formDescription: "Responderemos en menos de 24 horas hábiles.",
    orLabel: "o escríbenos directamente",
  },
  en: {
    eyebrow: "Contact",
    title: "Discovery, pilot, or strategic partnership",
    description:
      "Three ways to start. No commitments, no generic demos. A direct conversation about your real context.",
    entries: [
      {
        index: "01",
        label: "Technical discovery",
        heading: "Diagnose your case in 60 minutes",
        body: "We review your current stack, your data sources, and the process you want to improve. You end up with a clear map of what is possible and at what effort.",
        duration: "60 min · No cost",
      },
      {
        index: "02",
        label: "Scoped pilot",
        heading: "Real implementation in 4–8 weeks",
        body: "We define a small, measurable scope: one agent, one flow, one use case. We build it, deploy it in your environment, and validate it together.",
        duration: "4–8 weeks · Defined scope",
      },
      {
        index: "03",
        label: "Strategic partnership",
        heading: "Continuous development of AI capabilities",
        body: "For organizations that want to build a sustainable, proprietary AI foundation. We work in depth: architecture, team, processes, and training.",
        duration: "Long term · Phased",
      },
    ],
    formHeading: "Tell us about your case",
    formDescription: "We will reply within 24 business hours.",
    orLabel: "or write to us directly",
  },
} as const;

export default async function ContactPage() {
  const locale = (await getLocale()) as AppLocale;
  const copy = COPY[locale];

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-24">
      {/* ── Page header ── */}
      <div className="mb-16 flex flex-col gap-5">
        <span className="text-xs uppercase tracking-[0.24em] text-foreground-muted">
          {copy.eyebrow}
        </span>
        <h1 className="font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          {copy.title}
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-foreground-secondary">
          {copy.description}
        </p>
      </div>

      {/* ── Entry type cards ── */}
      <div className="mb-20 grid gap-5 md:grid-cols-3">
        {copy.entries.map((entry) => (
          <div
            key={entry.index}
            className="flex flex-col gap-4 rounded-xl border border-line-subtle bg-surface p-6"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-display text-2xl font-medium text-foreground-muted opacity-30">
                {entry.index}
              </span>
              <span className="rounded-full border border-line-strong bg-background px-2.5 py-0.5 text-xs text-foreground-muted">
                {entry.label}
              </span>
            </div>
            <h2 className="font-display text-base font-medium tracking-tight text-foreground">
              {entry.heading}
            </h2>
            <p className="text-sm leading-relaxed text-foreground-secondary">
              {entry.body}
            </p>
            <span className="mt-auto text-xs text-accent-cyan">{entry.duration}</span>
          </div>
        ))}
      </div>

      {/* ── Form + direct contact ── */}
      <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
        {/* Form column */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <h2 className="font-display text-xl font-medium tracking-tight text-foreground">
              {copy.formHeading}
            </h2>
            <p className="text-sm text-foreground-secondary">
              {copy.formDescription}
            </p>
          </div>
          <ContactForm locale={locale} />
        </div>

        {/* Direct contact column */}
        <div className="flex flex-col gap-6">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground-muted">
            {copy.orLabel}
          </p>
          <dl className="flex flex-col gap-4">
            <div className="flex flex-col gap-1 rounded-lg border border-line-subtle bg-surface px-4 py-3">
              <dt className="text-xs uppercase tracking-[0.18em] text-foreground-muted">
                Email
              </dt>
              <dd className="text-sm">
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-foreground transition-colors duration-150 hover:text-accent-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
                >
                  {BRAND.email}
                </a>
              </dd>
            </div>
            <div className="flex flex-col gap-1 rounded-lg border border-line-subtle bg-surface px-4 py-3">
              <dt className="text-xs uppercase tracking-[0.18em] text-foreground-muted">
                WhatsApp
              </dt>
              <dd className="text-sm">
                <a
                  href={`https://wa.me/${BRAND.whatsapp.replace(/[^\d]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground transition-colors duration-150 hover:text-accent-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
                >
                  {BRAND.whatsapp}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

