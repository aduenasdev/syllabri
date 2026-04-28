import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { CTA } from "@/lib/nav";

const COPY = {
  es: {
    eyebrow: "Software e IA aplicada",
    headline: "Construimos agentes, RAG y automatización para operaciones reales",
    supporting:
      "Software desplegable, trazable y conectado a tus sistemas, tus reglas y tu infraestructura.",
    ctaSecondary: "Ver arquitectura",
    // Panel labels
    panelSources: "Fuentes",
    panelEngine: "Motor de decisión",
    panelOps: "Operaciones",
    panelGov: "Gobernanza",
    panelAudit: "Auditoría",
    panelReview: "Revisión humana",
  },
  en: {
    eyebrow: "Applied software and AI",
    headline: "We build agents, RAG and automation for real operations",
    supporting:
      "Deployable, traceable software connected to your systems, your rules, and your infrastructure.",
    ctaSecondary: "See architecture",
    panelSources: "Sources",
    panelEngine: "Decision Engine",
    panelOps: "Operations",
    panelGov: "Governance",
    panelAudit: "Audit",
    panelReview: "Human review",
  },
} as const;

export function HeroSection({ locale }: { locale: AppLocale }) {
  const copy = COPY[locale];

  return (
    <section
      aria-label={copy.eyebrow}
      className="relative isolate flex flex-col items-center gap-16 overflow-hidden px-6 pb-24 pt-20 md:pt-28 [background-image:var(--hero-glow)]"
    >
      {/* ── Text block ── */}
      <div className="flex max-w-3xl flex-col items-center gap-6 text-center">
        <span className="inline-block rounded-full border border-line-strong bg-surface px-3 py-1 text-xs uppercase tracking-[0.22em] text-foreground-muted">
          {copy.eyebrow}
        </span>

        <h1 className="font-display text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {copy.headline}
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-foreground-secondary">
          {copy.supporting}
        </p>

        <div className="mt-1 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={CTA.primary.href}
            className="inline-flex items-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors duration-150 hover:bg-foreground-secondary"
          >
            {CTA.primary.label[locale]}
          </Link>
          <a
            href="#architecture"
            className="inline-flex items-center rounded-full border border-line-strong bg-surface px-5 py-2.5 text-sm font-medium text-foreground-secondary transition-colors duration-150 hover:border-accent-cyan hover:text-foreground"
          >
            {copy.ctaSecondary}
          </a>
        </div>
      </div>

      {/* ── Control-room panel ── */}
      <div className="w-full max-w-4xl rounded-xl border border-line-subtle bg-surface-strong shadow-2xl">
        {/* Top line glow */}
        <div
          className="h-px w-full rounded-t-xl opacity-80 [background-image:var(--panel-line-glow)]"
          aria-hidden
        />

        {/* Main flow row */}
        <div className="flex items-center justify-between gap-2 px-6 py-6 md:px-10">
          {/* Sources */}
          <PanelNode label={copy.panelSources} accent="cyan" />

          <FlowArrow />

          {/* Decision Engine */}
          <PanelNode label={copy.panelEngine} accent="cyan" primary />

          <FlowArrow />

          {/* Ops */}
          <PanelNode label={copy.panelOps} accent="green" />
        </div>

        {/* Divider */}
        <div className="mx-6 border-t border-line-subtle md:mx-10" aria-hidden />

        {/* Governance bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 px-6 py-4 md:px-10">
          {[copy.panelGov, copy.panelAudit, copy.panelReview].map((label) => (
            <span
              key={label}
              className="rounded-full border border-line-subtle bg-background px-3 py-1 text-xs text-foreground-muted"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────── helpers ── */

function PanelNode({
  label,
  accent,
  primary = false,
}: {
  label: string;
  accent: "cyan" | "green";
  primary?: boolean;
}) {
  const ringColor =
    accent === "cyan"
      ? "border-accent-cyan/40 text-accent-cyan"
      : "border-accent-green/40 text-accent-green";

  return (
    <div
      className={`flex flex-col items-center gap-2 rounded-lg border px-5 py-3 ${
        primary ? "bg-surface border-line-strong" : "border-line-subtle bg-transparent"
      }`}
    >
      <span
        className={`inline-block size-2 rounded-full ${
          accent === "cyan" ? "bg-accent-cyan" : "bg-accent-green"
        }`}
        aria-hidden
      />
      <span
        className={`text-xs font-medium tracking-wide ${
          primary ? "text-foreground" : "text-foreground-secondary"
        } ${ringColor}`}
      >
        {label}
      </span>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex flex-1 items-center gap-0" aria-hidden>
      <div className="h-px flex-1 bg-line-strong" />
      <svg
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        className="text-line-strong"
      >
        <path
          d="M1 4h10M7 1l4 3-4 3"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
