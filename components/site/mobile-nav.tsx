"use client";

import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import type { NavItem } from "@/lib/nav";
import { LocaleSwitcher } from "./locale-switcher";
import { ThemeToggle } from "./theme-toggle";

interface Props {
  locale: AppLocale;
  navItems: readonly NavItem[];
  cta: { href: NavItem["href"]; label: string };
  themeLabels: { dark: string; light: string };
  triggerLabels: { open: string; close: string };
}

export function MobileNav({
  locale,
  navItems,
  cta,
  themeLabels,
  triggerLabels,
}: Props) {
  const [open, setOpen] = useState(false);
  const drawerId = useId();

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls={drawerId}
        aria-label={triggerLabels.open}
        className="inline-flex size-9 cursor-pointer items-center justify-center rounded-full border border-line-subtle bg-surface text-foreground-secondary transition-colors duration-200 hover:border-line-strong hover:text-foreground md:hidden"
      >
        <Menu size={16} aria-hidden />
      </button>

      <div
        id={drawerId}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={clsx(
          "fixed inset-0 z-50 transition-opacity duration-200 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <button
          type="button"
          aria-label={triggerLabels.close}
          onClick={() => setOpen(false)}
          className="absolute inset-0 cursor-default bg-background/60 backdrop-blur-sm"
        />

        <div
          className={clsx(
            "absolute inset-x-0 top-0 flex flex-col gap-8 bg-background-elevated px-6 pb-10 pt-6 shadow-2xl transition-transform duration-300 ease-out",
            open ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-lg tracking-tight text-foreground">
              Syllabri
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={triggerLabels.close}
              className="inline-flex size-9 cursor-pointer items-center justify-center rounded-full border border-line-subtle bg-surface text-foreground-secondary transition-colors duration-200 hover:border-line-strong hover:text-foreground"
            >
              <X size={16} aria-hidden />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg border border-transparent px-3 py-3 text-base text-foreground transition-colors duration-150 hover:border-line-subtle hover:bg-surface"
              >
                {item.label[locale]}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-between gap-3 border-t border-line-subtle pt-6">
            <LocaleSwitcher />
            <ThemeToggle labels={themeLabels} />
          </div>

          <Link
            href={cta.href}
            onClick={() => setOpen(false)}
            className="inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors duration-150 hover:bg-foreground-secondary"
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </>
  );
}
