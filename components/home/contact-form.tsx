"use client";

import { useRef, useState } from "react";

interface ContactFormCopy {
  name: string;
  email: string;
  company: string;
  message: string;
  submit: string;
  sending: string;
  successTitle: string;
  successDesc: string;
  errorDesc: string;
}

export function ContactForm({ copy }: { copy: ContactFormCopy }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("non-2xx");

      setStatus("ok");
      formRef.current?.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="flex flex-col gap-3 rounded-xl border border-accent-green/30 bg-background p-6">
        <span className="inline-block size-2 rounded-full bg-accent-green" aria-hidden />
        <p className="font-display text-base font-medium text-foreground">
          {copy.successTitle}
        </p>
        <p className="text-sm leading-relaxed text-foreground-secondary">
          {copy.successDesc}
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="name" label={copy.name} type="text" required />
        <Field id="email" label={copy.email} type="email" required />
      </div>
      <Field id="company" label={copy.company} type="text" />
      <Field id="message" label={copy.message} type="textarea" required rows={4} />

      {status === "error" && (
        <p className="text-xs text-danger">{copy.errorDesc}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors duration-150 hover:bg-foreground-secondary disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cyan"
      >
        {status === "sending" ? copy.sending : copy.submit}
      </button>
    </form>
  );
}

/* ── Field helper ── */
function Field({
  id,
  label,
  type,
  required,
  rows,
}: {
  id: string;
  label: string;
  type: "text" | "email" | "textarea";
  required?: boolean;
  rows?: number;
}) {
  const base =
    "w-full rounded-lg border border-line-strong bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground-muted focus:border-accent-cyan focus:outline-none transition-colors duration-150";

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs text-foreground-secondary">
        {label}
        {required && (
          <span className="ml-0.5 text-accent-cyan" aria-hidden>
            *
          </span>
        )}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={id}
          rows={rows ?? 4}
          required={required}
          className={`${base} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          className={base}
        />
      )}
    </div>
  );
}
