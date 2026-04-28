import type { AppLocale, AppPathname } from "@/i18n/routing";

export interface NavItem {
  href: AppPathname;
  label: Record<AppLocale, string>;
}

export const PRIMARY_NAV: readonly NavItem[] = [
  {
    href: "/solutions",
    label: { es: "Soluciones", en: "Solutions" },
  },
  {
    href: "/agents",
    label: { es: "Agentes", en: "Agents" },
  },
  {
    href: "/ecosystem",
    label: { es: "Ecosistema", en: "Ecosystem" },
  },
  {
    href: "/contact",
    label: { es: "Contacto", en: "Contact" },
  },
];

export const FOOTER_NAV: readonly NavItem[] = PRIMARY_NAV;

export const CTA = {
  primary: {
    href: "/contact" satisfies AppPathname,
    label: { es: "Agendar discovery", en: "Book a discovery" },
  },
} as const;

export const BRAND = {
  email: "contact@syllabri.com",
  emailAlt: "hello@syllabri.com",
  whatsapp: "+34 600 000 000",
};
