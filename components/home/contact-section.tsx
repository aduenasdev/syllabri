import type { AppLocale } from "@/i18n/routing";
import { BRAND, CTA } from "@/lib/nav";
import { Link } from "@/i18n/navigation";
import { ContactForm } from "./contact-form";

const COPY = {
  es: {
    sectionLabel: "Contacto",
    eyebrow: "Contacto",
    headline: "El siguiente paso",
    ctaDiscoveryLabel: "Solicitar discovery",
    ctaDiscoveryDesc:
      "Evaluamos viabilidad, arquitectura y el siguiente paso concreto para tu caso.",
    ctaCallLabel: "Agendar una llamada",
    ctaCallDesc:
      "Si ya tenés un caso de uso definido, agendamos y lo analizamos juntos.",
    ctaWhatsappLabel: "WhatsApp España",
    ctaWhatsappDesc: "Primera conversación rápida sin compromiso.",
    formTitle: "Escríbenos directamente",
    formCopy: { name: "Nombre", email: "Email", company: "Empresa", message: "Mensaje", submit: "Enviar", sending: "Enviando…", successTitle: "Mensaje recibido.", successDesc: "Te responderemos a la brevedad.", errorDesc: "Hubo un error al enviar. Escríbenos directamente a contact@syllabri.com." },
  },
  en: {
    sectionLabel: "Contact",
    eyebrow: "Contact",
    headline: "Next step",
    ctaDiscoveryLabel: "Request a discovery",
    ctaDiscoveryDesc:
      "We assess feasibility, architecture, and the concrete next step for your case.",
    ctaCallLabel: "Book a call",
    ctaCallDesc:
      "If you already have a defined use case, let's schedule and analyze it together.",
    ctaWhatsappLabel: "WhatsApp Spain",
    ctaWhatsappDesc: "Quick first conversation, no commitment.",
    formTitle: "Write to us directly",
    formCopy: { name: "Name", email: "Email", company: "Company", message: "Message", submit: "Send", sending: "Sending…", successTitle: "Message received.", successDesc: "We will get back to you shortly.", errorDesc: "There was an error sending. Write us directly at contact@syllabri.com." },
  },
} as const;

export function ContactSection({ locale }: { locale: AppLocale }) {
  const copy = COPY[locale];
  const whatsappHref = `https://wa.me/${BRAND.whatsapp.replace(/[^\d]/g, "")}`;

  return (
    <section
      id="contact"
      aria-label={copy.sectionLabel}
      className="mx-auto w-full max-w-7xl px-6 py-24"
    >
      {/* Header */}
      <div className="mb-14 flex flex-col gap-3">
        <span className="text-xs uppercase tracking-[0.22em] text-foreground-muted">
          {copy.eyebrow}
        </span>
        <h2 className="font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          {copy.headline}
        </h2>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        {/* ── Left: CTA hierarchy ── */}
        <div className="flex flex-col gap-4">
          {/* 1. Discovery — primary */}
          <Link
            href={CTA.primary.href}
            className="group flex flex-col gap-2 rounded-xl border border-accent-cyan/30 bg-surface-strong p-5 transition-colors duration-150 hover:border-accent-cyan/60"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-base font-medium text-foreground">
                {copy.ctaDiscoveryLabel}
              </span>
              <span
                className="inline-block size-2 rounded-full bg-accent-cyan transition-transform duration-150 group-hover:scale-125"
                aria-hidden
              />
            </div>
            <p className="text-sm leading-relaxed text-foreground-secondary">
              {copy.ctaDiscoveryDesc}
            </p>
          </Link>

          {/* 2. Call — secondary */}
          <a
            href={`mailto:${BRAND.email}?subject=${encodeURIComponent(locale === "es" ? "Agendar llamada" : "Book a call")}`}
            className="group flex flex-col gap-2 rounded-xl border border-line-strong bg-surface p-5 transition-colors duration-150 hover:border-line-strong/80 hover:bg-surface-strong"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-base font-medium text-foreground">
                {copy.ctaCallLabel}
              </span>
              <span
                className="inline-block size-2 rounded-full bg-accent-green transition-transform duration-150 group-hover:scale-125"
                aria-hidden
              />
            </div>
            <p className="text-sm leading-relaxed text-foreground-secondary">
              {copy.ctaCallDesc}
            </p>
          </a>

          {/* 3. WhatsApp — tertiary */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2 rounded-xl border border-line-subtle bg-background p-5 transition-colors duration-150 hover:border-line-strong"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-base font-medium text-foreground">
                {copy.ctaWhatsappLabel}
              </span>
              <span className="text-xs text-foreground-muted">{BRAND.whatsapp}</span>
            </div>
            <p className="text-sm leading-relaxed text-foreground-secondary">
              {copy.ctaWhatsappDesc}
            </p>
          </a>

          {/* Email links */}
          <div className="flex flex-col gap-1 pl-1 pt-2">
            {[BRAND.email, BRAND.emailAlt].map((mail) => (
              <a
                key={mail}
                href={`mailto:${mail}`}
                className="text-sm text-foreground-muted transition-colors duration-150 hover:text-foreground"
              >
                {mail}
              </a>
            ))}
          </div>
        </div>

        {/* ── Right: form ── */}
        <div className="flex flex-col gap-5 rounded-xl border border-line-subtle bg-surface-strong p-6 md:p-8">
          <p className="font-display text-base font-medium text-foreground">
            {copy.formTitle}
          </p>
          <ContactForm copy={copy.formCopy} />
        </div>
      </div>
    </section>
  );
}
