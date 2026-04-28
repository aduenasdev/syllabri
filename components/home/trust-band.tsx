import type { AppLocale } from "@/i18n/routing";

interface TrustChip {
  labelEs: string;
  labelEn: string;
}

const CHIPS: TrustChip[] = [
  { labelEs: "Sectores industriales",      labelEn: "Industry verticals" },
  { labelEs: "Integraciones API & ERP",    labelEn: "API & ERP integrations" },
  { labelEs: "Infraestructura cloud",      labelEn: "Cloud infrastructure" },
  { labelEs: "Seguridad y trazabilidad",   labelEn: "Security & traceability" },
  { labelEs: "Bilingüe ES/EN",             labelEn: "Bilingual ES/EN" },
  { labelEs: "Despliegue soberano",        labelEn: "Sovereign deployment" },
];

const COPY = {
  es: {
    label: "Capacidades",
    tagline: "Sistemas que se integran con lo que ya tienes, no contra ello.",
  },
  en: {
    label: "Capabilities",
    tagline: "Systems that integrate with what you already have, not against it.",
  },
} as const;

export function TrustBand({ locale }: { locale: AppLocale }) {
  const copy = COPY[locale];

  return (
    <section
      aria-label={copy.label}
      className="border-y border-line-subtle bg-background-secondary py-8"
    >
      {/* Tagline */}
      <p className="mb-5 text-center text-xs uppercase tracking-[0.22em] text-foreground-muted">
        {copy.tagline}
      </p>

      {/* Chips — horizontal scroll on mobile */}
      <div className="overflow-x-auto">
        <ul
          className="mx-auto flex w-max items-center gap-3 px-6 md:w-auto md:flex-wrap md:justify-center"
          role="list"
        >
          {CHIPS.map((chip) => (
            <li key={chip.labelEs}>
              <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-4 py-2 text-sm text-foreground-secondary whitespace-nowrap">
                <span
                  className="inline-block size-1.5 rounded-full bg-accent-cyan"
                  aria-hidden
                />
                {locale === "es" ? chip.labelEs : chip.labelEn}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
