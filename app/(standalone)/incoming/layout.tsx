import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "../../globals.css";

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

export const metadata: Metadata = {
  title: "Pronto — Syllabri",
  description: "Estamos preparando algo. Syllabri — Software e IA aplicada.",
  robots: { index: false, follow: false },
};

export default function IncomingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      data-theme="dark"
      className={`${spaceGrotesk.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
