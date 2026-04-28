import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { CTA } from "@/lib/nav";

const COPY = {
  es: {
    eyebrow: "Software e IA aplicada",
    headline: "Construimos sistemas de IA que operan sobre procesos reales",
    supporting:
      "Agentes, RAG y automatización integrados con tus datos, tus reglas y tu infraestructura.",
    secondary: "Ver arquitectura",
    placeholder:
      "El sistema visual y el shell ya están en su sitio. Las secciones de la home (hero, trust band, sistemas, arquitectura, casos, workflow, contacto) se construyen en las próximas fases.",
  },
  en: {
    eyebrow: "Applied software and AI",
    headline: "We build AI systems that run on real processes",
    supporting:
      "Agents, RAG, and automation integrated with your data, your rules, and your infrastructure.",
    secondary: "See architecture",
    placeholder:
      "The visual system and the shell are in place. Home sections (hero, trust band, systems, architecture, cases, workflow, contact) ship in the next phases.",
  },
} as const;

export default async function HomePage() {
  const locale = (await getLocale()) as AppLocale;
  const copy = COPY[locale];

  return (
    <section
      className="relative flex flex-1 flex-col items-center justify-center px-6 py-24"
      style={{ backgroundImage: "var(--hero-glow)" }}
    >
      <div className="flex max-w-2xl flex-col items-center gap-6 text-center">
        <span className="text-xs uppercase tracking-[0.24em] text-foreground-muted">
          {copy.eyebrow}
        </span>
        <h1 className="font-display text-5xl font-medium tracking-tight text-foreground sm:text-6xl">
          {copy.headline}
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-foreground-secondary">
          {copy.supporting}
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={CTA.primary.href}
            className="inline-flex cursor-pointer items-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors duration-150 hover:bg-foreground-secondary"
          >
            {CTA.primary.label[locale]}
          </Link>
          <a
            href="#architecture"
            className="inline-flex items-center rounded-full border border-line-strong bg-surface px-5 py-2.5 text-sm font-medium text-foreground-secondary transition-colors duration-150 hover:border-accent-cyan hover:text-foreground"
          >
            {copy.secondary}
          </a>
        </div>
        <p className="mt-12 max-w-md text-xs leading-relaxed text-foreground-muted">
          {copy.placeholder}
        </p>
      </div>
    </section>
  );
}
