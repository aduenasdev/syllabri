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
  const seo = getPageSeo(safeLocale, "ecosystem");
  const alternates = buildAlternates("/ecosystem", safeLocale);
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
    eyebrow: "Ecosistema",
    title: "La capa de datos y conocimiento",
    description:
      "Lo que diferencia un agente útil de un generador de texto es el acceso a contexto real. Construimos la infraestructura que conecta tus datos con tus agentes.",
    intro:
      "El ecosistema de Syllabri es la base sobre la que operan los agentes: ingesta estructurada, relaciones persistentes y gobierno explícito.",
    layers: [
      {
        index: "01",
        accent: "cyan" as const,
        label: "Open data layer",
        heading: "Ingesta estructurada desde cualquier fuente",
        body: "Conectores para APIs REST, bases de datos SQL/NoSQL, ERP, ficheros, correo y documentos. Los datos entran normalizados con esquemas validados. Actualización continua o batch según el caso.",
        capabilities: [
          "Conectores preconfigurados (SAP, Salesforce, HubSpot, PostgreSQL)",
          "Normalización y validación de esquemas automática",
          "Pipeline de ingesta auditable con logs de cambio",
          "Soporte batch e incremental",
        ],
      },
      {
        index: "02",
        accent: "green" as const,
        label: "Knowledge graph operativo",
        heading: "Relaciones y contexto que persisten",
        body: "Los datos no se almacenan en silos. Los conectamos en un grafo de conocimiento que representa entidades, relaciones y jerarquías propias de tu dominio. El agente entiende que un cliente tiene contratos activos, que un proveedor está vinculado a una categoría de riesgo, que un producto tiene dependencias.",
        capabilities: [
          "Modelado de entidades y relaciones por dominio",
          "Búsqueda semántica sobre el grafo",
          "Actualizaciones propagadas sin reindexado completo",
          "Exportable a formatos estándar (RDF, GraphQL)",
        ],
      },
      {
        index: "03",
        accent: "sand" as const,
        label: "Memoria, gobierno y contexto",
        heading: "Control explícito sobre qué sabe cada agente",
        body: "No toda la información debe estar disponible para todos los agentes. Gestionamos permisos a nivel de entidad, versionado de conocimiento y retención configurable. El contexto de cada conversación o proceso se almacena y puede recuperarse, auditarse o eliminarse.",
        capabilities: [
          "Permisos granulares por agente y por rol",
          "Versionado de knowledge base con rollback",
          "Retención configurable (TTL por tipo de dato)",
          "Auditoría de accesos y modificaciones",
        ],
      },
    ],
  },
  en: {
    eyebrow: "Ecosystem",
    title: "The data and knowledge layer",
    description:
      "What differentiates a useful agent from a text generator is access to real context. We build the infrastructure that connects your data with your agents.",
    intro:
      "The Syllabri ecosystem is the foundation on which agents operate: structured ingestion, persistent relationships, and explicit governance.",
    layers: [
      {
        index: "01",
        accent: "cyan" as const,
        label: "Open data layer",
        heading: "Structured ingestion from any source",
        body: "Connectors for REST APIs, SQL/NoSQL databases, ERP, files, email, and documents. Data enters normalized with validated schemas. Continuous or batch updates depending on the use case.",
        capabilities: [
          "Pre-configured connectors (SAP, Salesforce, HubSpot, PostgreSQL)",
          "Automatic schema normalization and validation",
          "Auditable ingestion pipeline with change logs",
          "Batch and incremental support",
        ],
      },
      {
        index: "02",
        accent: "green" as const,
        label: "Operational knowledge graph",
        heading: "Relationships and context that persist",
        body: "Data is not stored in silos. We connect it in a knowledge graph that represents entities, relationships, and hierarchies specific to your domain. The agent understands that a customer has active contracts, a supplier is linked to a risk category, a product has dependencies.",
        capabilities: [
          "Domain-specific entity and relationship modeling",
          "Semantic search over the graph",
          "Updates propagated without full reindexing",
          "Exportable to standard formats (RDF, GraphQL)",
        ],
      },
      {
        index: "03",
        accent: "sand" as const,
        label: "Memory, governance and context",
        heading: "Explicit control over what each agent knows",
        body: "Not all information should be available to all agents. We manage entity-level permissions, knowledge versioning, and configurable retention. Each conversation or process context is stored and can be retrieved, audited, or deleted.",
        capabilities: [
          "Granular permissions by agent and role",
          "Knowledge base versioning with rollback",
          "Configurable retention (TTL by data type)",
          "Access and modification audit trail",
        ],
      },
    ],
  },
} as const;

const ACCENT_CLASSES = {
  cyan: "border-accent-cyan/40 text-accent-cyan",
  green: "border-accent-green/40 text-accent-green",
  sand: "border-accent-sand/40 text-accent-sand",
} as const;

const DOT_CLASSES = {
  cyan: "bg-accent-cyan",
  green: "bg-accent-green",
  sand: "bg-accent-sand",
} as const;

export default async function EcosystemPage() {
  const locale = (await getLocale()) as AppLocale;
  const copy = COPY[locale];

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-24">
      {/* ── Page header ── */}
      <div className="mb-6 flex flex-col gap-5">
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

      <p className="mb-20 max-w-3xl text-sm leading-relaxed text-foreground-muted">
        {copy.intro}
      </p>

      {/* ── Layers ── */}
      <div className="flex flex-col gap-12">
        {copy.layers.map((layer) => (
          <div
            key={layer.index}
            className="rounded-xl border border-line-subtle bg-surface p-8"
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="font-display text-2xl font-medium text-foreground-muted opacity-30">
                {layer.index}
              </span>
              <span
                className={`rounded-full border px-2.5 py-0.5 text-xs ${ACCENT_CLASSES[layer.accent]}`}
              >
                {layer.label}
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-[3fr_2fr]">
              <div className="flex flex-col gap-4">
                <h2 className="font-display text-xl font-medium tracking-tight text-foreground">
                  {layer.heading}
                </h2>
                <p className="text-sm leading-relaxed text-foreground-secondary">
                  {layer.body}
                </p>
              </div>

              <ul className="flex flex-col gap-3 rounded-lg border border-line-subtle bg-background px-5 py-4">
                {layer.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-start gap-2.5 text-sm text-foreground-secondary"
                  >
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${DOT_CLASSES[layer.accent]}`}
                      aria-hidden
                    />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

