import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getLocale } from "next-intl/server";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { buildAlternates, getPageSeo } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = (
    hasLocale(routing.locales, locale) ? locale : routing.defaultLocale
  ) as AppLocale;
  const seo = getPageSeo(safeLocale, "agents");
  const alternates = buildAlternates("/agents", safeLocale);
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
    eyebrow: "Agentes",
    title: "Agentes operativos para procesos reales",
    description:
      "No bots de respuesta automática. Sistemas que razonan, recuerdan y actúan sobre tus datos con supervisión humana completa.",
    blocks: [
      {
        index: "01",
        label: "Multiagente",
        heading: "Orquestación de agentes especializados",
        body: "Cada agente hace una sola cosa bien: recuperar contexto, razonar sobre datos, validar reglas o ejecutar tareas. Los orquestamos para que colaboren sin fricción en flujos complejos.",
        tags: ["Planificador", "Ejecutores", "Validador", "Memoria compartida"],
        note: "Compatible con LangGraph, CrewAI y arquitecturas propias.",
      },
      {
        index: "02",
        label: "Conocimiento conectado",
        heading: "RAG sobre tus fuentes verificables",
        body: "Cada respuesta o decisión está anclada a documentos, registros y bases de datos reales. Trazabilidad de fuentes incluida: el agente sabe de dónde viene cada dato.",
        tags: ["Ingesta documental", "Búsqueda semántica", "Citas verificables", "Actualización incremental"],
        note: "Funciona con PDFs, ERP, APIs REST, bases de datos SQL y vectoriales.",
      },
      {
        index: "03",
        label: "Supervisión y observabilidad",
        heading: "Control humano en cada paso crítico",
        body: "Los agentes registran qué decidieron, por qué y sobre qué datos. Los puntos de revisión humana se configuran por proceso. La auditoría es estructural, no un añadido.",
        tags: ["Trazas completas", "Puntos de aprobación", "Logs estructurados", "Alertas configurables"],
        note: "Integrable con LangSmith, Langfuse o tu stack de observabilidad.",
      },
    ],
    ctaLabel: "Hablar sobre tu caso",
  },
  en: {
    eyebrow: "Agents",
    title: "Operational agents for real processes",
    description:
      "Not auto-response bots. Systems that reason, remember, and act on your data with full human oversight.",
    blocks: [
      {
        index: "01",
        label: "Multi-agent",
        heading: "Orchestration of specialized agents",
        body: "Each agent does one thing well: retrieving context, reasoning over data, validating rules, or executing tasks. We orchestrate them to collaborate seamlessly on complex workflows.",
        tags: ["Planner", "Executors", "Validator", "Shared memory"],
        note: "Compatible with LangGraph, CrewAI, and custom architectures.",
      },
      {
        index: "02",
        label: "Connected knowledge",
        heading: "RAG over your verifiable sources",
        body: "Every response or decision is anchored to real documents, records, and databases. Source traceability included: the agent knows where each piece of data comes from.",
        tags: ["Document ingestion", "Semantic search", "Verifiable citations", "Incremental updates"],
        note: "Works with PDFs, ERP, REST APIs, SQL and vector databases.",
      },
      {
        index: "03",
        label: "Supervision and observability",
        heading: "Human control at every critical step",
        body: "Agents log what they decided, why, and on what data. Human review checkpoints are configured per process. Auditing is structural, not an afterthought.",
        tags: ["Full traces", "Approval checkpoints", "Structured logs", "Configurable alerts"],
        note: "Integrable with LangSmith, Langfuse, or your observability stack.",
      },
    ],
    ctaLabel: "Discuss your case",
  },
} as const;

export default async function AgentsPage() {
  const locale = (await getLocale()) as AppLocale;
  const copy = COPY[locale];

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-24">
      {/* ── Page header ── */}
      <div className="mb-20 flex flex-col gap-5">
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

      {/* ── Blocks ── */}
      <div className="flex flex-col divide-y divide-line-subtle">
        {copy.blocks.map((block) => (
          <div
            key={block.index}
            className="grid gap-8 py-14 md:grid-cols-[1fr_2fr]"
          >
            {/* Left column */}
            <div className="flex flex-col gap-2">
              <span className="font-display text-3xl font-medium text-foreground-muted opacity-40">
                {block.index}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-accent-cyan">
                {block.label}
              </span>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-6">
              <h2 className="font-display text-2xl font-medium tracking-tight text-foreground">
                {block.heading}
              </h2>
              <p className="text-base leading-relaxed text-foreground-secondary">
                {block.body}
              </p>
              <div className="flex flex-wrap gap-2">
                {block.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line-subtle bg-background px-3 py-1 text-xs text-foreground-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xs text-foreground-muted">{block.note}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

