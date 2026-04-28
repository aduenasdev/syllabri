import { getLocale } from "next-intl/server";
import type { AppLocale } from "@/i18n/routing";

const COPY = {
  es: {
    eyebrow: "Agentes",
    title: "Agentes operativos para procesos reales",
    body: "Multiagente, conocimiento conectado, supervisión y observabilidad. Página en construcción.",
  },
  en: {
    eyebrow: "Agents",
    title: "Operational agents for real processes",
    body: "Multi-agent, connected knowledge, supervision, and observability. Page under construction.",
  },
} as const;

export default async function AgentsPage() {
  const locale = (await getLocale()) as AppLocale;
  const copy = COPY[locale];

  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-24">
      <span className="text-xs uppercase tracking-[0.24em] text-foreground-muted">
        {copy.eyebrow}
      </span>
      <h1 className="font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
        {copy.title}
      </h1>
      <p className="max-w-2xl text-base leading-relaxed text-foreground-secondary">
        {copy.body}
      </p>
    </section>
  );
}
