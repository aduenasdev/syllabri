import { getLocale } from "next-intl/server";
import type { AppLocale } from "@/i18n/routing";
import { ArchitectureSection } from "@/components/home/architecture-section";
import { CaseStudiesSection } from "@/components/home/case-studies-section";
import { ContactSection } from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { SystemsSection } from "@/components/home/systems-section";
import { TrustBand } from "@/components/home/trust-band";
import { WorkflowSection } from "@/components/home/workflow-section";

export default async function HomePage() {
  const locale = (await getLocale()) as AppLocale;

  return (
    <>
      <HeroSection locale={locale} />
      <TrustBand locale={locale} />
      <SystemsSection locale={locale} />
      <ArchitectureSection locale={locale} />
      <CaseStudiesSection locale={locale} />
      <WorkflowSection locale={locale} />
      <ContactSection locale={locale} />
    </>
  );
}
