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
        <span className="inline-block rounded-full border border-line-strong bg-surface px-3 py-1 text-xs uppercase tracking-[0.22em] text-foreground-muted motion-safe:animate-fade-up">
          {copy.eyebrow}
        </span>

        <h1 className="font-display text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl motion-safe:animate-fade-up [animation-delay:120ms]">
          {copy.headline}
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-foreground-secondary motion-safe:animate-fade-up [animation-delay:240ms]">
          {copy.supporting}
        </p>

        <div className="mt-1 flex flex-wrap items-center justify-center gap-3 motion-safe:animate-fade-up [animation-delay:360ms]">
          <Link
            href={CTA.primary.href}
            className="inline-flex items-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors duration-150 hover:bg-foreground-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
          >
            {CTA.primary.label[locale]}
          </Link>
          <a
            href="#architecture"
            className="inline-flex items-center rounded-full border border-line-strong bg-surface px-5 py-2.5 text-sm font-medium text-foreground-secondary transition-colors duration-150 hover:border-accent-cyan hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
          >
            {copy.ctaSecondary}
          </a>
        </div>
      </div>

      {/* ── Control-room panel ── */}
      <div className="w-full max-w-4xl rounded-2xl border border-line-subtle bg-surface-strong shadow-2xl motion-safe:animate-fade-up [animation-delay:480ms]">
        {/* Top line glow */}
        <div
          className="h-px w-full rounded-t-2xl opacity-80 [background-image:var(--panel-line-glow)]"
          aria-hidden
        />

        {/* Main flow — vertical on mobile, horizontal on md+ */}
        <div className="flex flex-col gap-0 p-6 md:flex-row md:items-center md:gap-0 md:px-10 md:py-8">
          <PanelNode label={copy.panelSources} accent="cyan" />
          <FlowConnector />
          <PanelNode label={copy.panelEngine} accent="cyan" primary />
          <FlowConnector />
          <PanelNode label={copy.panelOps} accent="green" />
        </div>

        {/* Divider */}
        <div className="mx-6 border-t border-line-subtle md:mx-10" aria-hidden />

        {/* Governance bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 px-6 py-4 md:gap-3 md:px-10">
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
  const dotColor = accent === "cyan" ? "bg-accent-cyan" : "bg-accent-green";
  const dotGlow =
    accent === "cyan"
      ? "shadow-[0_0_10px_3px_color-mix(in_oklch,var(--accent-cyan),transparent_50%)]"
      : "shadow-[0_0_10px_3px_color-mix(in_oklch,var(--accent-green),transparent_50%)]";

  return (
    <div
      className={`flex flex-row items-center gap-3 rounded-xl border px-4 py-3.5 transition-colors md:flex-1 md:flex-col md:items-center md:gap-3 md:px-6 md:py-5 ${
        primary
          ? "border-line-strong bg-surface shadow-sm"
          : "border-line-subtle bg-transparent"
      }`}
    >
      <span
        className={`inline-flex size-2.5 shrink-0 rounded-full ${dotColor} ${primary ? dotGlow : ""}`}
        aria-hidden
      />
      <span
        className={`text-sm font-medium leading-snug ${
          primary ? "text-foreground" : "text-foreground-secondary"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function FlowConnector() {
  return (
    <div className="flex shrink-0 flex-col items-center md:flex-row" aria-hidden>
      {/* Mobile: vertical connector */}
      <div className="flex flex-col items-center py-1 md:hidden">
        <div className="h-3 w-px bg-line-strong" />
        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" className="text-line-strong">
          <path
            d="M1 1l3 4 3-4"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="h-3 w-px bg-line-strong" />
      </div>
      {/* Desktop: horizontal connector */}
      <div className="hidden md:flex md:w-6 md:items-center md:gap-0">
        <div className="h-px flex-1 bg-line-strong" />
        <svg width="6" height="8" viewBox="0 0 6 8" fill="none" className="shrink-0 text-line-strong">
          <path
            d="M1 1l4 3-4 3"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
