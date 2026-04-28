import type { MetadataRoute } from "next";
import { SITE_URL, localePageUrl } from "@/lib/seo";
import type { AppLocale, AppPathname } from "@/i18n/routing";

interface RouteEntry {
  pathname: AppPathname;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}

const ROUTES: RouteEntry[] = [
  { pathname: "/",          priority: 1.0,  changeFrequency: "weekly" },
  { pathname: "/agents",    priority: 0.85, changeFrequency: "monthly" },
  { pathname: "/solutions", priority: 0.85, changeFrequency: "monthly" },
  { pathname: "/ecosystem", priority: 0.8,  changeFrequency: "monthly" },
  { pathname: "/contact",   priority: 0.9,  changeFrequency: "monthly" },
];

const LOCALES: AppLocale[] = ["es", "en"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.flatMap(({ pathname, priority, changeFrequency }) =>
    LOCALES.map((locale) => ({
      url: localePageUrl(locale, pathname),
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [l, localePageUrl(l, pathname)])
        ),
      },
    }))
  );
}
