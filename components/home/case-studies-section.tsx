import type { AppLocale } from "@/i18n/routing";

interface CaseStudy {
  id: string;
  indexLabel: string;
  titleEs: string;
  titleEn: string;
  contextEs: string;
  contextEn: string;
  solutionEs: string;
  solutionEn: string;
  integrationsEs: string[];
  integrationsEn: string[];
  impactEs: string;
  impactEn: string;
  stackEs: string;
  stackEn: string;
}

const CASES: CaseStudy[] = [
  {
    id: "intelligence",
    indexLabel: "01",
    titleEs: "Vigilancia tecnológica",
    titleEn: "Technology intelligence",
    contextEs:
      "Equipos de I+D y estrategia necesitan seguir fuentes dispersas, priorizar señales relevantes y generar resúmenes accionables sin dedicar horas al proceso.",
    contextEn:
      "R&D and strategy teams need to track scattered sources, prioritize relevant signals, and produce actionable summaries without spending hours on the process.",
    solutionEs:
      "Sistema RAG conectado a fuentes externas, repositorios internos y publicaciones sectoriales. El agente rankea señales por relevancia, descarta ruido y genera resúmenes estructurados por área de interés.",
    solutionEn:
      "RAG system connected to external sources, internal repositories, and sector publications. The agent ranks signals by relevance, filters noise, and generates structured summaries by area of interest.",
    integrationsEs: ["APIs de publicaciones", "Repositorios internos", "Correo y Slack", "Dashboard de equipo"],
    integrationsEn: ["Publication APIs", "Internal repositories", "Email and Slack", "Team dashboard"],
    impactEs:
      "Reducción del tiempo de análisis semanal de horas a minutos. Resúmenes verificables con fuente explícita y ranking de relevancia configurable por equipo.",
    impactEn:
      "Weekly analysis time reduced from hours to minutes. Verifiable summaries with explicit source and team-configurable relevance ranking.",
    stackEs: "RAG · embeddings · ranking semántico · memoria por usuario",
    stackEn: "RAG · embeddings · semantic ranking · per-user memory",
  },
  {
    id: "operations",
    indexLabel: "02",
    titleEs: "Operaciones asistidas por agentes",
    titleEn: "Agent-assisted operations",
    contextEs:
      "Procesos de intake, clasificación y asignación que consumen tiempo del equipo con tareas repetitivas y decisiones de bajo valor que bloquean el flujo de trabajo.",
    contextEn:
      "Intake, classification, and assignment processes that consume team time with repetitive tasks and low-value decisions that block workflow.",
    solutionEs:
      "Agente operativo que procesa solicitudes entrantes, las clasifica por tipo y prioridad, ejecuta acciones configurables y transfiere al equipo humano solo cuando la situación lo requiere.",
    solutionEn:
      "Operational agent that processes incoming requests, classifies them by type and priority, executes configurable actions, and hands off to the human team only when the situation requires it.",
    integrationsEs: ["CRM y helpdesk", "ERP y sistemas internos", "Correo y formularios web", "Notificaciones y alertas"],
    integrationsEn: ["CRM and helpdesk", "ERP and internal systems", "Email and web forms", "Notifications and alerts"],
    impactEs:
      "Reducción del trabajo manual de clasificación y enrutamiento. Handoff humano con contexto completo. Trazabilidad de cada decisión del agente.",
    impactEn:
      "Reduced manual classification and routing work. Human handoff with full context. Traceability of every agent decision.",
    stackEs: "Agente operativo · reglas de negocio · handoff configurable · log de auditoría",
    stackEn: "Operational agent · business rules · configurable handoff · audit log",
  },
];

const COPY = {
  es: {
    sectionLabel: "Casos de uso",
    eyebrow: "Casos",
    headline: "Sistemas en escenarios reales",
    context: "Contexto",
    solution: "Solución",
    integrations: "Integraciones",
    impact: "Impacto esperado",
    stack: "Stack técnico",
  },
  en: {
    sectionLabel: "Use cases",
    eyebrow: "Cases",
    headline: "Systems in real scenarios",
    context: "Context",
    solution: "Solution",
    integrations: "Integrations",
    impact: "Expected impact",
    stack: "Technical stack",
  },
} as const;

export function CaseStudiesSection({ locale }: { locale: AppLocale }) {
  const copy = COPY[locale];

  return (
    <section
      id="cases"
      aria-label={copy.sectionLabel}
      className="mx-auto w-full max-w-7xl px-6 py-24"
    >
      {/* Header */}
      <div className="mb-14 flex flex-col gap-3">
        <span className="text-xs uppercase tracking-[0.22em] text-foreground-muted">
          {copy.eyebrow}
        </span>
        <h2 className="font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          {copy.headline}
        </h2>
      </div>

      {/* Cases grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {CASES.map((c) => {
          const title = locale === "es" ? c.titleEs : c.titleEn;
          const context = locale === "es" ? c.contextEs : c.contextEn;
          const solution = locale === "es" ? c.solutionEs : c.solutionEn;
          const integrations = locale === "es" ? c.integrationsEs : c.integrationsEn;
          const impact = locale === "es" ? c.impactEs : c.impactEn;
          const stack = locale === "es" ? c.stackEs : c.stackEn;

          return (
            <article
              key={c.id}
              className="flex flex-col gap-6 rounded-xl border border-line-subtle bg-surface-strong p-6 md:p-8"
            >
              {/* Index + title */}
              <div className="flex items-start gap-4">
                <span className="font-display text-xs font-medium text-foreground-muted">
                  {c.indexLabel}
                </span>
                <h3 className="font-display text-xl font-medium text-foreground">
                  {title}
                </h3>
              </div>

              {/* Context */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs uppercase tracking-[0.18em] text-foreground-muted">
                  {copy.context}
                </span>
                <p className="text-sm leading-relaxed text-foreground-secondary">
                  {context}
                </p>
              </div>

              {/* Solution */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs uppercase tracking-[0.18em] text-foreground-muted">
                  {copy.solution}
                </span>
                <p className="text-sm leading-relaxed text-foreground-secondary">
                  {solution}
                </p>
              </div>

              {/* Integrations */}
              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-[0.18em] text-foreground-muted">
                  {copy.integrations}
                </span>
                <ul className="flex flex-wrap gap-2" role="list">
                  {integrations.map((intg) => (
                    <li key={intg}>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-line-subtle bg-background px-3 py-1 text-xs text-foreground-secondary">
                        <span
                          className="inline-block size-1.5 rounded-full bg-accent-cyan"
                          aria-hidden
                        />
                        {intg}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact */}
              <div className="flex flex-col gap-1.5 rounded-lg border border-accent-green/20 bg-background p-4">
                <span className="text-xs uppercase tracking-[0.18em] text-foreground-muted">
                  {copy.impact}
                </span>
                <p className="text-sm leading-relaxed text-foreground-secondary">
                  {impact}
                </p>
              </div>

              {/* Stack note */}
              <p className="border-t border-line-subtle pt-4 text-xs leading-relaxed text-foreground-muted">
                {stack}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
