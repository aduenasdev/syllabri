import type { Metadata } from "next";
import type { AppLocale, AppPathname } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import contentEs from "@/data/content/es.json";
import contentEn from "@/data/content/en.json";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://syllabri.com"
).replace(/\/$/, "");

type SeoKey = keyof typeof contentEs.seo;

const CONTENT: Record<AppLocale, typeof contentEs> = {
  es: contentEs,
  en: contentEn,
};

export function getPageSeo(locale: AppLocale, page: SeoKey) {
  return CONTENT[locale].seo[page];
}

// Maps each canonical pathname key → locale-specific URL segment
const LOCALE_SEGMENTS: Record<AppPathname, Record<AppLocale, string>> = {
  "/":           { es: "",            en: "" },
  "/agents":     { es: "agentes",     en: "agents" },
  "/solutions":  { es: "soluciones",  en: "solutions" },
  "/ecosystem":  { es: "ecosistema",  en: "ecosystem" },
  "/contact":    { es: "contacto",    en: "contact" },
};

export function localePageUrl(locale: AppLocale, pathname: AppPathname): string {
  const segment = LOCALE_SEGMENTS[pathname][locale];
  return segment
    ? `${SITE_URL}/${locale}/${segment}`
    : `${SITE_URL}/${locale}`;
}

export function buildAlternates(
  pathname: AppPathname,
  currentLocale: AppLocale = "es",
): NonNullable<Metadata["alternates"]> {
  const languages: Record<string, string> = {
    "x-default": localePageUrl("es", pathname),
  };
  for (const locale of routing.locales) {
    languages[locale] = localePageUrl(locale as AppLocale, pathname);
  }
  return {
    canonical: localePageUrl(currentLocale, pathname),
    languages,
  };
}
