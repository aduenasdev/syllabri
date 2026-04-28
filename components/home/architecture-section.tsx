import type { AppLocale } from "@/i18n/routing";

/* ── Pipeline nodes ─────────────────────────────────────────────── */
interface PipelineNode {
  labelEs: string;
  labelEn: string;
  accent: "cyan" | "green" | "neutral";
}

const PIPELINE: PipelineNode[] = [
  { labelEs: "Ingesta",        labelEn: "Ingestion",      accent: "cyan" },
  { labelEs: "Conectores",     labelEn: "Connectors",     accent: "cyan" },
  { labelEs: "Memoria",        labelEn: "Memory",         accent: "cyan" },
  { labelEs: "Agentes",        labelEn: "Agents",         accent: "cyan" },
  { labelEs: "Reglas",         labelEn: "Rules",          accent: "neutral" },
  { labelEs: "Observabilidad", labelEn: "Observability",  accent: "green" },
  { labelEs: "Auditoría",      labelEn: "Audit",          accent: "green" },
];

/* ── Enterprise controls ────────────────────────────────────────── */
interface Control {
  labelEs: string;
  labelEn: string;
  descEs: string;
  descEn: string;
}

const CONTROLS: Control[] = [
  {
    labelEs: "Permisos por rol",
    labelEn: "Role-based permissions",
    descEs: "Acceso granular a datos, agentes y salidas según perfil.",
    descEn: "Granular access to data, agents, and outputs by profile.",
  },
  {
    labelEs: "Trazabilidad de respuestas",
    labelEn: "Response traceability",
    descEs: "Cada respuesta referencia su fuente y contexto exacto.",
    descEn: "Every response references its exact source and context.",
  },
  {
    labelEs: "Auditoría de eventos",
    labelEn: "Event audit log",
    descEs: "Log inmutable de acciones, consultas y decisiones del sistema.",
    descEn: "Immutable log of system actions, queries, and decisions.",
  },
  {
    labelEs: "Aprobación humana",
    labelEn: "Human approval",
    descEs: "Puntos de control configurables antes de ejecutar acciones críticas.",
    descEn: "Configurable checkpoints before executing critical actions.",
  },
  {
    labelEs: "Políticas de acceso",
    labelEn: "Access policies",
    descEs: "Reglas de negocio que limitan qué puede hacer el sistema y en qué contexto.",
    descEn: "Business rules that constrain what the system can do and in what context.",
  },
  {
    labelEs: "Despliegue soberano",
    labelEn: "Sovereign deployment",
    descEs: "Opción de infraestructura privada o cloud dedicada cuando aplica.",
    descEn: "Private or dedicated cloud infrastructure when applicable.",
  },
];

/* ── Copy ───────────────────────────────────────────────────────── */
const COPY = {
  es: {
    sectionLabel: "Arquitectura y gobernanza",
    eyebrow: "Arquitectura",
    headline: "Diseño que se puede auditar, gobernar y operar",
    pipelineLabel: "Flujo operativo",
    controlsLabel: "Controles enterprise",
  },
  en: {
    sectionLabel: "Architecture and governance",
    eyebrow: "Architecture",
    headline: "Design that can be audited, governed, and operated",
    pipelineLabel: "Operational flow",
    controlsLabel: "Enterprise controls",
  },
} as const;

/* ── Component ──────────────────────────────────────────────────── */
export function ArchitectureSection({ locale }: { locale: AppLocale }) {
  const copy = COPY[locale];

  return (
    <section
      id="architecture"
      aria-label={copy.sectionLabel}
      className="border-t border-line-subtle bg-background-secondary"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.22em] text-foreground-muted">
            {copy.eyebrow}
          </span>
          <h2 className="font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            {copy.headline}
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          {/* ── Left: pipeline visual ── */}
          <div className="flex flex-col gap-6 rounded-xl border border-line-subtle bg-surface-strong p-6 md:p-8">
            <span className="text-xs uppercase tracking-[0.18em] text-foreground-muted">
              {copy.pipelineLabel}
            </span>

            {/* Vertical pipeline */}
            <ol className="flex flex-col gap-0" aria-label={copy.pipelineLabel}>
              {PIPELINE.map((node, idx) => {
                const label = locale === "es" ? node.labelEs : node.labelEn;
                const isLast = idx === PIPELINE.length - 1;
                const dotColor =
                  node.accent === "cyan"
                    ? "bg-accent-cyan"
                    : node.accent === "green"
                    ? "bg-accent-green"
                    : "bg-line-strong";
                const textColor =
                  node.accent === "cyan"
                    ? "text-accent-cyan"
                    : node.accent === "green"
                    ? "text-accent-green"
                    : "text-foreground-secondary";

                return (
                  <li key={node.labelEs} className="flex items-stretch gap-4">
                    {/* Dot + connector */}
                    <div className="flex flex-col items-center">
                      <span
                        className={`mt-1 inline-block size-2.5 shrink-0 rounded-full ${dotColor}`}
                        aria-hidden
                      />
                      {!isLast && (
                        <span
                          className="mt-1 w-px flex-1 bg-line-subtle"
                          aria-hidden
                        />
                      )}
                    </div>

                    {/* Label */}
                    <div className={`pb-5 text-sm font-medium ${textColor}`}>
                      {label}
                    </div>
                  </li>
                );
              })}
            </ol>

            {/* Glow line at bottom */}
            <div
              className="mt-2 h-px w-full opacity-60 [background-image:var(--panel-line-glow)]"
              aria-hidden
            />
          </div>

          {/* ── Right: enterprise controls ── */}
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.18em] text-foreground-muted">
              {copy.controlsLabel}
            </span>

            <ul className="flex flex-col gap-3" role="list">
              {CONTROLS.map((ctrl) => {
                const label = locale === "es" ? ctrl.labelEs : ctrl.labelEn;
                const desc = locale === "es" ? ctrl.descEs : ctrl.descEn;

                return (
                  <li
                    key={ctrl.labelEs}
                    className="flex gap-4 rounded-lg border border-line-subtle bg-surface p-4"
                  >
                    {/* Green checkmark dot */}
                    <span
                      className="mt-1 inline-block size-2 shrink-0 rounded-full bg-accent-green"
                      aria-hidden
                    />
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-medium text-foreground">
                        {label}
                      </span>
                      <span className="text-xs leading-relaxed text-foreground-muted">
                        {desc}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
