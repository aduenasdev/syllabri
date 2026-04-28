import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
  localePrefix: "always",
  localeCookie: {
    name: "NEXT_LOCALE",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  },
  pathnames: {
    "/": "/",
    "/agents": { es: "/agentes", en: "/agents" },
    "/solutions": { es: "/soluciones", en: "/solutions" },
    "/ecosystem": { es: "/ecosistema", en: "/ecosystem" },
    "/contact": { es: "/contacto", en: "/contact" },
  },
});

export type AppLocale = (typeof routing.locales)[number];
export type AppPathname = keyof typeof routing.pathnames;
