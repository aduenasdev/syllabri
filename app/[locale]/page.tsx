import { getLocale } from "next-intl/server";
import type { AppLocale } from "@/i18n/routing";
import { HeroSection } from "@/components/home/hero-section";
import { TrustBand } from "@/components/home/trust-band";

export default async function HomePage() {
  const locale = (await getLocale()) as AppLocale;

  return (
    <>
      <HeroSection locale={locale} />
      <TrustBand locale={locale} />
    </>
  );
}
