import type { AppLocale } from "@/i18n/routing";

interface System {
  id: string;
  titleEs: string;
  titleEn: string;
  problemEs: string;
  problemEn: string;
  integrationEs: string;
  integrationEn: string;
  outcomeEs: string;
  outcomeEn: string;
  techNoteEs: string;
  techNoteEn: string;
  accent: "cyan" | "green";
}

const SYSTEMS: System[] = [
  {
    id: "agents",
    titleEs: "Agentes operativos",
    titleEn: "Operational agents",
    problemEs: "Los equipos de ventas, soporte y operaciones gestionan tareas repetitivas que consumen tiempo sin añadir valor al proceso.",
    problemEn: "Sales, support, and ops teams handle repetitive tasks that consume time without adding process value.",
    integrationEs: "CRM, helpdesk, ERP, correo y herramientas internas vía API o conector nativo.",
    integrationEn: "CRM, helpdesk, ERP, email, and internal tools via API or native connector.",
    outcomeEs: "Reducción del tiempo operativo, menor carga manual y trazabilidad de cada acción del agente.",
    outcomeEn: "Reduced operational time, lower manual load, and traceability of every agent action.",
    techNoteEs: "Orquestación multiagente · memoria persistente · supervisión humana configurable",
    techNoteEn: "Multi-agent orchestration · persistent memory · configurable human oversight",
    accent: "cyan",
  },
  {
    id: "rag",
    titleEs: "Inteligencia documental y RAG",
    titleEn: "Document intelligence and RAG",
    problemEs: "El conocimiento relevante está disperso en documentos, sistemas legacy y fuentes externas, sin acceso estructurado ni trazabilidad.",
    problemEn: "Relevant knowledge is scattered across documents, legacy systems, and external sources with no structured access or traceability.",
    integrationEs: "Bases documentales, SharePoint, Confluence, S3, APIs externas y fuentes propietarias.",
    integrationEn: "Document bases, SharePoint, Confluence, S3, external APIs, and proprietary sources.",
    outcomeEs: "Respuestas verificables con fuente, permisos por rol y memoria operativa que mejora con el uso.",
    outcomeEn: "Source-verified responses, role-based permissions, and operational memory that improves with use.",
    techNoteEs: "Retrieval aumentado · embeddings · control de permisos · audit log por consulta",
    techNoteEn: "Augmented retrieval · embeddings · permission control · per-query audit log",
    accent: "cyan",
  },
  {
    id: "automation",
    titleEs: "Automatización y copilotos",
    titleEn: "Automation and copilots",
    problemEs: "Los procesos internos dependen de pasos manuales y coordinación entre sistemas que no se hablan entre sí.",
    problemEn: "Internal processes depend on manual steps and coordination between systems that don't communicate.",
    integrationEs: "Flujos internos, notificaciones, integraciones bidireccionales con ERP, CRM y apps propias.",
    integrationEn: "Internal flows, notifications, bidirectional integrations with ERP, CRM, and custom apps.",
    outcomeEs: "Procesos conectados, copilotos de asistencia en herramientas existentes y tiempos de ciclo reducidos.",
    outcomeEn: "Connected processes, in-tool copilot assistance, and reduced cycle times.",
    techNoteEs: "Integración nativa o vía webhook · lógica de negocio configurable · sin reemplazar el stack",
    techNoteEn: "Native or webhook integration · configurable business logic · no stack replacement",
    accent: "green",
  },
];

const COPY = {
  es: {
    sectionLabel: "Sistemas que construimos",
    eyebrow: "Sistemas",
    headline: "Lo que construimos, y cómo opera",
    problem: "Problema",
    integration: "Integración",
    outcome: "Resultado",
  },
  en: {
    sectionLabel: "Systems we build",
    eyebrow: "Systems",
    headline: "What we build, and how it operates",
    problem: "Problem",
    integration: "Integration",
    outcome: "Outcome",
  },
} as const;

export function SystemsSection({ locale }: { locale: AppLocale }) {
  const copy = COPY[locale];

  return (
    <section
      id="systems"
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

      {/* System cards */}
      <div className="flex flex-col gap-6">
        {SYSTEMS.map((sys, idx) => {
          const title = locale === "es" ? sys.titleEs : sys.titleEn;
          const problem = locale === "es" ? sys.problemEs : sys.problemEn;
          const integration = locale === "es" ? sys.integrationEs : sys.integrationEn;
          const outcome = locale === "es" ? sys.outcomeEs : sys.outcomeEn;
          const techNote = locale === "es" ? sys.techNoteEs : sys.techNoteEn;

          return (
            <article
              key={sys.id}
              className="grid gap-6 rounded-xl border border-line-subtle bg-surface-strong p-6 md:grid-cols-[2fr_1fr] md:gap-10 md:p-8"
            >
              {/* Left: problem + integration */}
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex size-7 items-center justify-center rounded-full border text-xs font-medium ${
                      sys.accent === "cyan"
                        ? "border-accent-cyan/40 text-accent-cyan"
                        : "border-accent-green/40 text-accent-green"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg font-medium text-foreground">
                    {title}
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-foreground-secondary">
                  {problem}
                </p>

                <div className="flex flex-col gap-1.5">
                  <span className="text-xs uppercase tracking-[0.18em] text-foreground-muted">
                    {copy.integration}
                  </span>
                  <p className="text-sm leading-relaxed text-foreground-secondary">
                    {integration}
                  </p>
                </div>

                {/* Tech note */}
                <p className="mt-auto border-t border-line-subtle pt-4 text-xs leading-relaxed text-foreground-muted">
                  {techNote}
                </p>
              </div>

              {/* Right: outcome */}
              <div
                className={`flex flex-col justify-center gap-3 rounded-lg border p-5 ${
                  sys.accent === "cyan"
                    ? "border-accent-cyan/20 bg-background"
                    : "border-accent-green/20 bg-background"
                }`}
              >
                <span className="text-xs uppercase tracking-[0.18em] text-foreground-muted">
                  {copy.outcome}
                </span>
                <p className="text-sm leading-relaxed text-foreground-secondary">
                  {outcome}
                </p>
                <span
                  className={`mt-2 inline-block size-1.5 rounded-full ${
                    sys.accent === "cyan" ? "bg-accent-cyan" : "bg-accent-green"
                  }`}
                  aria-hidden
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
