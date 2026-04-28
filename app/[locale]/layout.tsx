import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Manrope, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { SitePreferencesProvider } from "@/components/site/site-preferences-provider";
import { routing } from "@/i18n/routing";
import type { AppLocale } from "@/i18n/routing";
import { buildAlternates, getPageSeo, SITE_URL } from "@/lib/seo";
import "../globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const METADATA = {
  es: {
    title: "Syllabri — Software e IA aplicada",
    description:
      "Construimos sistemas de IA que operan sobre procesos reales. Agentes, RAG y automatización integrados con tus datos y tu infraestructura.",
  },
  en: {
    title: "Syllabri — Applied software and AI",
    description:
      "We build AI systems that operate over real processes. Agents, RAG, and automation integrated with your data and infrastructure.",
  },
} as const;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = (
    hasLocale(routing.locales, locale) ? locale : routing.defaultLocale
  ) as AppLocale;
  const seo = getPageSeo(safeLocale, "home");
  const alternates = buildAlternates("/", safeLocale);
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
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
    metadataBase: new URL(SITE_URL),
  };
}

const themeInitScript = `(function(){try{var d=document.documentElement;if(d.getAttribute('data-theme'))return;var m=document.cookie.match(/(?:^|; )theme=(dark|light)/);var t=m?m[1]:(window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');d.setAttribute('data-theme',t);}catch(e){}})();`;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${spaceGrotesk.variable} ${manrope.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SitePreferencesProvider>
            <SiteHeader />
            <main className="flex flex-1 flex-col">{children}</main>
            <SiteFooter />
          </SitePreferencesProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
