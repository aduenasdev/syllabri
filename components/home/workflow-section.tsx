import type { AppLocale } from "@/i18n/routing";

interface WorkflowStep {
  index: string;
  titleEs: string;
  titleEn: string;
  descEs: string;
  descEn: string;
  outputEs: string;
  outputEn: string;
}

const STEPS: WorkflowStep[] = [
  {
    index: "01",
    titleEs: "Diagnóstico técnico y operativo",
    titleEn: "Technical and operational diagnosis",
    descEs:
      "Mapeamos tus procesos actuales, tus datos disponibles y tu infraestructura para identificar dónde un sistema de IA genera valor real y qué es viable construir.",
    descEn:
      "We map your current processes, available data, and infrastructure to identify where an AI system creates real value and what is viable to build.",
    outputEs: "Informe de viabilidad y arquitectura propuesta",
    outputEn: "Feasibility report and proposed architecture",
  },
  {
    index: "02",
    titleEs: "Arquitectura, piloto y validación",
    titleEn: "Architecture, pilot and validation",
    descEs:
      "Diseñamos la arquitectura del sistema, construimos un piloto acotado sobre un proceso real y validamos resultados con tu equipo antes de escalar.",
    descEn:
      "We design the system architecture, build a scoped pilot on a real process, and validate results with your team before scaling.",
    outputEs: "Piloto en producción con métricas de impacto",
    outputEn: "Production pilot with impact metrics",
  },
  {
    index: "03",
    titleEs: "Despliegue, observabilidad y evolución",
    titleEn: "Deployment, observability and evolution",
    descEs:
      "Desplegamos el sistema completo con monitoreo, auditoría y controles de gobierno. El sistema evoluciona con el uso y con el feedback del equipo operativo.",
    descEn:
      "We deploy the full system with monitoring, audit, and governance controls. The system evolves with usage and operational team feedback.",
    outputEs: "Sistema en producción con soporte y roadmap de evolución",
    outputEn: "Production system with support and evolution roadmap",
  },
];

const COPY = {
  es: {
    sectionLabel: "Proceso de trabajo",
    eyebrow: "Proceso",
    headline: "Cómo trabajamos",
    output: "Salida",
  },
  en: {
    sectionLabel: "Work process",
    eyebrow: "Process",
    headline: "How we work",
    output: "Output",
  },
} as const;

export function WorkflowSection({ locale }: { locale: AppLocale }) {
  const copy = COPY[locale];

  return (
    <section
      id="process"
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

        {/* Sequential bar — horizontal on desktop, vertical on mobile */}
        <ol
          className="relative flex flex-col gap-0 md:flex-row"
          aria-label={copy.sectionLabel}
        >
          {STEPS.map((step, idx) => {
            const isLast = idx === STEPS.length - 1;
            const title = locale === "es" ? step.titleEs : step.titleEn;
            const desc = locale === "es" ? step.descEs : step.descEn;
            const output = locale === "es" ? step.outputEs : step.outputEn;

            return (
              <li
                key={step.index}
                className="relative flex flex-1 flex-col md:pr-8"
              >
                {/* Connector line (horizontal on desktop, vertical on mobile) */}
                {!isLast && (
                  <>
                    {/* Desktop: horizontal line after the node */}
                    <span
                      className="absolute left-[calc(2rem+1px)] top-4 hidden h-px w-[calc(100%-2rem-1px)] bg-line-subtle md:block"
                      aria-hidden
                    />
                    {/* Mobile: vertical line below the node */}
                    <span
                      className="absolute left-4 top-8 block h-full w-px bg-line-subtle md:hidden"
                      aria-hidden
                    />
                  </>
                )}

                {/* Step content */}
                <div className="relative flex flex-col gap-5 pb-10 pl-12 md:pl-0 md:pb-0 md:pt-10">
                  {/* Index badge */}
                  <span className="absolute left-0 top-0 flex size-8 items-center justify-center rounded-full border border-line-strong bg-background-secondary font-display text-xs font-medium text-foreground-muted md:relative md:mb-1 md:self-start">
                    {step.index}
                  </span>

                  <h3 className="font-display text-lg font-medium text-foreground">
                    {title}
                  </h3>

                  <p className="text-sm leading-relaxed text-foreground-secondary">
                    {desc}
                  </p>

                  {/* Output line */}
                  <div className="flex items-start gap-2 rounded-lg border border-line-subtle bg-surface p-3">
                    <span
                      className="mt-0.5 inline-block size-1.5 shrink-0 rounded-full bg-accent-green"
                      aria-hidden
                    />
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs uppercase tracking-[0.16em] text-foreground-muted">
                        {copy.output}
                      </span>
                      <span className="text-xs leading-relaxed text-foreground-secondary">
                        {output}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
