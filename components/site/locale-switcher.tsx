"use client";

import clsx from "clsx";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";

const LOCALES: ReadonlyArray<{ code: AppLocale; label: string }> = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
];

interface Props {
  className?: string;
}

export function LocaleSwitcher({ className }: Props) {
  const active = useLocale() as AppLocale;
  const router = useRouter();
  const pathname = usePathname();
  const [pending, startTransition] = useTransition();

  const handleSelect = (next: AppLocale) => {
    if (next === active || pending) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <div
      className={clsx(
        "inline-flex items-center gap-0.5 rounded-full border border-line-subtle bg-surface p-0.5 text-xs",
        className
      )}
      role="group"
      aria-label="Idioma"
    >
      {LOCALES.map((locale) => {
        const isActive = locale.code === active;
        return (
          <button
            key={locale.code}
            type="button"
            onClick={() => handleSelect(locale.code)}
            aria-pressed={isActive}
            disabled={pending}
            className={clsx(
              "cursor-pointer rounded-full px-2 py-1 font-medium transition-colors duration-150",
              isActive
                ? "bg-surface-strong text-foreground"
                : "text-foreground-muted hover:text-foreground-secondary"
            )}
          >
            {locale.label}
          </button>
        );
      })}
    </div>
  );
}
