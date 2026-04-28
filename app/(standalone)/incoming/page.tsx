import Image from "next/image";
import { BRAND } from "@/lib/nav";

export default function IncomingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12 px-6 py-20">
      {/* ── Logo mark ── */}
      <div className="flex items-center gap-2.5">
        {/* Inline icon mark */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <rect width="32" height="32" rx="7" fill="#07111A" />
          <line x1="9.5" y1="16" x2="12" y2="16" stroke="#3FD0C9" strokeWidth="1.5" strokeOpacity="0.45" />
          <line x1="20" y1="16" x2="22.5" y2="16" stroke="#72E6A6" strokeWidth="1.5" strokeOpacity="0.45" />
          <circle cx="7.5" cy="16" r="2.5" fill="#3FD0C9" fillOpacity="0.65" />
          <rect x="12" y="11.5" width="8" height="9" rx="2.5" fill="#3FD0C9" />
          <circle cx="24.5" cy="16" r="2.5" fill="#72E6A6" fillOpacity="0.65" />
        </svg>

        <span className="font-display text-base font-medium tracking-tight text-foreground">
          Syllabri
          <span className="text-accent-cyan">.</span>
        </span>
      </div>

      {/* ── Illustration ── */}
      <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-line-subtle shadow-2xl">
        <Image
          src="/images/incoming.svg"
          alt="Sistema en construcción — Syllabri"
          width={640}
          height={420}
          priority
          className="w-full"
          unoptimized
        />
      </div>

      {/* ── Copy ── */}
      <div className="flex max-w-md flex-col items-center gap-4 text-center">
        <h1 className="font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Estamos preparando algo.
        </h1>
        <p className="text-base leading-relaxed text-foreground-secondary">
          Software e IA aplicada para operaciones reales. Agentes, RAG y
          automatización — próximamente disponibles.
        </p>
      </div>

      {/* ── Contact ── */}
      <div className="flex flex-col items-center gap-3">
        <p className="text-xs uppercase tracking-[0.2em] text-foreground-muted">
          Contacto anticipado
        </p>
        <a
          href={`mailto:${BRAND.email}`}
          className="text-sm text-foreground transition-colors duration-150 hover:text-accent-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
        >
          {BRAND.email}
        </a>
      </div>
    </main>
  );
}
