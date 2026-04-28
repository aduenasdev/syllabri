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
  const seo = getPageSeo(safeLocale, "solutions");
  const alternates = buildAlternates("/solutions", safeLocale);
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
    eyebrow: "Soluciones",
    title: "Formatos de producto desplegables",
    description:
      "Cuatro formas concretas de aplicar IA sobre operaciones reales. Cada una con alcance definido, integración a tus sistemas y tiempo de entrega acotado.",
    products: [
      {
        index: "01",
        label: "Vigilancia tecnológica",
        heading: "Monitor de señales del mercado y la competencia",
        body: "Un agente recorre continuamente fuentes abiertas, patentes, publicaciones y noticias relevantes para tu sector. Cada semana entrega un informe estructurado con señales clasificadas por relevancia e impacto potencial.",
        outputs: ["Informe semanal estructurado", "Alertas por umbral de relevancia", "Histórico consultable por tema"],
        stack: "RAG + agente de síntesis + índice vectorial sectorial",
      },
      {
        index: "02",
        label: "Decision support",
        heading: "Contexto para decisiones complejas",
        body: "El sistema recupera precedentes, normativa aplicable y datos internos relevantes antes de cada decisión. El analista recibe un briefing estructurado con fuentes citadas, no una respuesta genérica.",
        outputs: ["Briefing pre-decisión con citas", "Comparativa de escenarios", "Registro de decisiones tomadas"],
        stack: "RAG multimodal + recuperación sobre ERP/CRM + validación de reglas",
      },
      {
        index: "03",
        label: "Copilotos operativos",
        heading: "Asistencia integrada en flujos de trabajo",
        body: "Un copiloto que vive dentro de tus herramientas (CRM, ERP, soporte, operaciones) y ayuda a los equipos a completar tareas con contexto real: historial del cliente, estado del proceso, reglas del negocio.",
        outputs: ["Sugerencias contextuales en tiempo real", "Autocompletado de formularios y registros", "Escalada inteligente a humano"],
        stack: "Agente conversacional + conectores API + memoria por sesión",
      },
      {
        index: "04",
        label: "IA soberana",
        heading: "Infraestructura bajo tu control",
        body: "Despliegue en tu nube privada, tus servidores o un entorno air-gapped. Ningún dato sale de tu perímetro. Modelos propios u open-source auditados. Cumplimiento con RGPD y normativas sectoriales.",
        outputs: ["Despliegue on-premise o cloud privada", "Modelos open-source auditados", "Documentación de cumplimiento"],
        stack: "LLM local (Llama, Mistral, Qwen) + VPN + pipeline de auditoría",
      },
    ],
  },
  en: {
    eyebrow: "Solutions",
    title: "Deployable product formats",
    description:
      "Four concrete ways to apply AI to real operations. Each with defined scope, integration to your systems, and bounded delivery time.",
    products: [
      {
        index: "01",
        label: "Technology intelligence",
        heading: "Market and competitive signal monitor",
        body: "An agent continuously scans open sources, patents, publications, and relevant news for your sector. Every week it delivers a structured report with signals classified by relevance and potential impact.",
        outputs: ["Weekly structured report", "Threshold-based alerts", "Queryable historical archive by topic"],
        stack: "RAG + synthesis agent + sector vector index",
      },
      {
        index: "02",
        label: "Decision support",
        heading: "Context for complex decisions",
        body: "The system retrieves precedents, applicable regulations, and relevant internal data before each decision. The analyst receives a structured briefing with cited sources, not a generic answer.",
        outputs: ["Pre-decision briefing with citations", "Scenario comparison", "Decision log"],
        stack: "Multimodal RAG + ERP/CRM retrieval + rule validation",
      },
      {
        index: "03",
        label: "Operational copilots",
        heading: "Integrated assistance in workflows",
        body: "A copilot that lives inside your tools (CRM, ERP, support, operations) and helps teams complete tasks with real context: customer history, process state, business rules.",
        outputs: ["Real-time contextual suggestions", "Form and record autocomplete", "Smart human escalation"],
        stack: "Conversational agent + API connectors + per-session memory",
      },
      {
        index: "04",
        label: "Sovereign AI",
        heading: "Infrastructure under your control",
        body: "Deployed in your private cloud, your servers, or an air-gapped environment. No data leaves your perimeter. Audited open-source models. GDPR and sector regulation compliance.",
        outputs: ["On-premise or private cloud deployment", "Audited open-source models", "Compliance documentation"],
        stack: "Local LLM (Llama, Mistral, Qwen) + VPN + audit pipeline",
      },
    ],
  },
} as const;

export default async function SolutionsPage() {
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

      {/* ── Product grid ── */}
      <div className="grid gap-6 md:grid-cols-2">
        {copy.products.map((product) => (
          <article
            key={product.index}
            className="flex flex-col gap-5 rounded-xl border border-line-subtle bg-surface p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="font-display text-3xl font-medium text-foreground-muted opacity-30">
                {product.index}
              </span>
              <span className="rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-2.5 py-0.5 text-xs text-accent-cyan">
                {product.label}
              </span>
            </div>

            <h2 className="font-display text-xl font-medium tracking-tight text-foreground">
              {product.heading}
            </h2>

            <p className="text-sm leading-relaxed text-foreground-secondary">
              {product.body}
            </p>

            <ul className="flex flex-col gap-1.5">
              {product.outputs.map((out) => (
                <li key={out} className="flex items-start gap-2 text-sm text-foreground-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-green" aria-hidden />
                  {out}
                </li>
              ))}
            </ul>

            <p className="mt-auto border-t border-line-subtle pt-4 text-xs text-foreground-muted">
              {product.stack}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

