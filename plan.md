# Plan de implementación — Syllabri

Implementación por fases del wireframe definido en `README.md`. Cada fase es un bloque autónomo: se cierra antes de arrancar la siguiente.

Stack: Next.js App Router · TypeScript · Tailwind CSS v4 · lucide-react · next-intl.

---

## Fase 1 — Bootstrap del proyecto

- `create-next-app` con TypeScript, App Router, Tailwind CSS v4
- Estructura de carpetas: `app/[locale]/`, `components/`, `data/content/`, `lib/`, `public/`
- Dependencias: `lucide-react`, `next-intl`, `clsx`
- Configuración base de TypeScript y ESLint
- Verificar que el dev server arranca

## Fase 2 — Sistema visual

- `globals.css` con todos los tokens CSS (dark/light, colores, gradientes, glows)
- `tailwind.config.ts` mapeando las variables CSS a utilidades semánticas
- `SitePreferencesProvider` — contexto para tema y locale
- Lógica de theme switching (cookie + `data-theme` en `<html>`)
- Respeto de `prefers-color-scheme` en primera carga

## Fase 3 — Layout shell + routing

- `lib/routing.ts` — mapa de slugs ES/EN, helpers para resolver hrefs
- `app/[locale]/layout.tsx` — layout raíz con providers
- `SiteHeader` — logo, nav, selector idioma, selector tema, CTA
- `SiteFooter` — institucional con links localizados
- Menú mobile con overlay y cierre por Escape
- Blur y compactación del header al hacer scroll
- Redirecciones de rutas heredadas

## Fase 4 — Hero + Trust Band

- `HeroSection` — eyebrow, headline, supporting copy, 2 CTAs
- Visual tipo control room: Sources → Decision Engine → Ops + barra inferior de gobierno/auditoría/revisión humana
- Glows radiales cyan y green en el fondo
- `TrustBand` — chips de capacidad real, microfrase, layout horizontal con scroll en mobile

## Fase 5 — Sistemas + Arquitectura

- `SystemsSection` — 3 sistemas (agentes operativos, RAG, automatización) con problema, integración, resultado, nota técnica
- `ArchitectureSection` — 2 columnas: visual operativa izquierda + lista de controles enterprise derecha
- Flujo cyan para conectividad, verde para estados válidos

## Fase 6 — Casos + Workflow + Contacto

- `CaseStudiesSection` — 2 casos uniformes (vigilancia tecnológica, agente de operaciones) con contexto, solución, integraciones, impacto
- `WorkflowSection` — barra secuencial de 3 pasos con salida clara
- `ContactSection` — jerarquía de CTAs (discovery > llamada > WhatsApp > formulario)
- Form básico con validación y envío

## Fase 7 — Contenido & i18n

- `data/content/es.json` y `data/content/en.json` con toda la copy
- Estructura del diccionario: `seo`, `header`, `hero`, `trustBand`, `systems`, `architecture`, `cases`, `workflow`, `contact`, `footer`
- Metadata dinámica por ruta y locale (title, description, canonical, alternates)
- `lang` y `hreflang` correctos por ruta

## Fase 8 — Páginas internas

- `/agentes` / `/agents` — multiagente, conocimiento conectado, supervisión y observabilidad
- `/soluciones` / `/solutions` — vigilancia, decision support, copilotos, IA soberana
- `/ecosistema` / `/ecosystem` — open data layer, knowledge graph, memoria y gobierno
- `/contacto` / `/contact` — discovery, piloto, alianza estratégica
- Equivalencia funcional entre rutas ES/EN

## Fase 9 — Polish final

- Animaciones con `motion-safe` (entrada hero, stagger en bloques, hover corto)
- Respeto de `prefers-reduced-motion`
- Auditoría de accesibilidad (contraste 4.5:1, focus-visible, alt text, labels)
- SEO técnico (sitemap, robots, OG tags, canonical, hreflang)
- Performance (`next/font` para tipografías, imágenes optimizadas, lazy loading)
- Checklist final del README §14

---

## Estado actual

- [x] Fase 1 — Bootstrap
- [x] Fase 2 — Sistema visual
- [x] Fase 3 — Layout shell + routing
- [x] Fase 4 — Hero + Trust Band
- [ ] Fase 5 — Sistemas + Arquitectura
- [ ] Fase 6 — Casos + Workflow + Contacto
- [ ] Fase 7 — Contenido & i18n
- [ ] Fase 8 — Páginas internas
- [ ] Fase 9 — Polish final
