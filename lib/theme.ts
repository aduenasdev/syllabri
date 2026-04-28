export type Theme = "dark" | "light";

export const THEME_COOKIE_NAME = "theme";
export const THEME_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export const isTheme = (value: unknown): value is Theme =>
  value === "dark" || value === "light";
