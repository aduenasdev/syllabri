import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createNextIntlMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createNextIntlMiddleware(routing);

export function middleware(request: NextRequest) {
  if (process.env.INCOMING_MODE === "true") {
    const { pathname } = request.nextUrl;
    // Dejar pasar la propia página incoming y las rutas de API
    if (pathname === "/incoming" || pathname.startsWith("/api/")) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/incoming", request.url));
  }

  // Modo normal: next-intl gestiona las rutas localizadas
  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!_next|_vercel|.*\\..*).*)", "/api/(.*)"],
};
