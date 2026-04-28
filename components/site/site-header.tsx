import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { CTA, PRIMARY_NAV } from "@/lib/nav";
import { LocaleSwitcher } from "./locale-switcher";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

const COPY = {
  es: {
    brandLink: "Inicio",
    primary: "Navegación principal",
    themeDark: "Activar tema oscuro",
    themeLight: "Activar tema claro",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
  },
  en: {
    brandLink: "Home",
    primary: "Primary navigation",
    themeDark: "Switch to dark theme",
    themeLight: "Switch to light theme",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },
} as const satisfies Record<AppLocale, Record<string, string>>;

export async function SiteHeader() {
  const locale = (await getLocale()) as AppLocale;
  const copy = COPY[locale];

  return (
    <header className="sticky top-0 z-30 border-b border-line-subtle bg-background/72 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
        <Link
          href="/"
          aria-label={copy.brandLink}
          className="flex items-center gap-2 font-display text-lg tracking-tight text-foreground transition-opacity duration-150 hover:opacity-80"
        >
          <span
            aria-hidden
            className="inline-block size-2 rounded-full bg-accent-cyan"
          />
          Syllabri
        </Link>

        <nav
          aria-label={copy.primary}
          className="hidden items-center gap-1 md:flex"
        >
          {PRIMARY_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm text-foreground-secondary transition-colors duration-150 hover:bg-surface hover:text-foreground"
            >
              {item.label[locale]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex md:items-center md:gap-2">
            <LocaleSwitcher />
            <ThemeToggle
              labels={{ dark: copy.themeDark, light: copy.themeLight }}
            />
          </div>
          <Link
            href={CTA.primary.href}
            className="hidden cursor-pointer items-center rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors duration-150 hover:bg-foreground-secondary md:inline-flex"
          >
            {CTA.primary.label[locale]}
          </Link>
          <MobileNav
            locale={locale}
            navItems={PRIMARY_NAV}
            cta={{
              href: CTA.primary.href,
              label: CTA.primary.label[locale],
            }}
            themeLabels={{ dark: copy.themeDark, light: copy.themeLight }}
            triggerLabels={{ open: copy.menuOpen, close: copy.menuClose }}
          />
        </div>
      </div>
    </header>
  );
}
