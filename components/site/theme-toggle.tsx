"use client";

import clsx from "clsx";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useSitePreferences } from "./site-preferences-provider";

interface Props {
  className?: string;
  labels: { dark: string; light: string };
}

export function ThemeToggle({ className, labels }: Props) {
  const { theme, toggleTheme } = useSitePreferences();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => setHydrated(true), []);

  const showSun = hydrated && theme === "dark";
  const showMoon = hydrated && theme === "light";
  const ariaLabel = hydrated
    ? theme === "dark"
      ? labels.light
      : labels.dark
    : labels.dark;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={clsx(
        "inline-flex size-9 cursor-pointer items-center justify-center rounded-full border border-line-subtle bg-surface text-foreground-secondary transition-colors duration-200 hover:border-line-strong hover:text-foreground",
        className
      )}
      aria-label={ariaLabel}
      suppressHydrationWarning
    >
      {showSun && <Sun size={16} aria-hidden />}
      {showMoon && <Moon size={16} aria-hidden />}
      {!hydrated && <span className="size-4" aria-hidden />}
    </button>
  );
}
