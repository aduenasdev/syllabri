import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { BRAND, FOOTER_NAV } from "@/lib/nav";

const COPY = {
  es: {
    tagline: "Software e IA aplicada para operaciones reales.",
    explore: "Explorar",
    contact: "Contacto",
    rights: "Todos los derechos reservados.",
    sectionLabel: "Footer",
  },
  en: {
    tagline: "Applied software and AI for real operations.",
    explore: "Explore",
    contact: "Contact",
    rights: "All rights reserved.",
    sectionLabel: "Footer",
  },
} as const satisfies Record<AppLocale, Record<string, string>>;

export async function SiteFooter() {
  const locale = (await getLocale()) as AppLocale;
  const copy = COPY[locale];
  const year = new Date().getFullYear();

  return (
    <footer
      aria-label={copy.sectionLabel}
      className="mt-auto border-t border-line-subtle bg-background-secondary"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1fr_auto_auto]">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 font-display text-lg tracking-tight text-foreground">
            <span
              aria-hidden
              className="inline-block size-2 rounded-full bg-accent-cyan"
            />
            Syllabri
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-foreground-secondary">
            {copy.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.2em] text-foreground-muted">
            {copy.explore}
          </span>
          <ul className="flex flex-col gap-2 text-sm">
            {FOOTER_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-foreground-secondary transition-colors duration-150 hover:text-foreground"
                >
                  {item.label[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.2em] text-foreground-muted">
            {copy.contact}
          </span>
          <ul className="flex flex-col gap-2 text-sm text-foreground-secondary">
            <li>
              <a
                href={`mailto:${BRAND.email}`}
                className="transition-colors duration-150 hover:text-foreground"
              >
                {BRAND.email}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${BRAND.emailAlt}`}
                className="transition-colors duration-150 hover:text-foreground"
              >
                {BRAND.emailAlt}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${BRAND.whatsapp.replace(/[^\d]/g, "")}`}
                target="_blank"
                rel="noopener"
                className="transition-colors duration-150 hover:text-foreground"
              >
                WhatsApp {BRAND.whatsapp}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line-subtle">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-xs text-foreground-muted">
          <span>
            © {year} Syllabri. {copy.rights}
          </span>
          <span className="font-mono uppercase tracking-[0.2em]">
            {locale.toUpperCase()}
          </span>
        </div>
      </div>
    </footer>
  );
}
