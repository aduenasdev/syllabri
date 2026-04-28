# Syllabri

Wireframe visual moderno para una web corporativa de software e IA aplicada, pensada para implementarse con Next.js App Router, TypeScript y Tailwind CSS.

## Plan de implementación

El plan de trabajo visible del proyecto está en [plan.md](./plan.md).

### Estado actual

- [x] Fase 1 — Bootstrap
- [x] Fase 2 — Sistema visual
- [x] Fase 3 — Layout shell + routing
- [ ] Fase 4 — Hero + Trust Band
- [ ] Fase 5 — Sistemas + Arquitectura
- [ ] Fase 6 — Casos + Workflow + Contacto
- [ ] Fase 7 — Contenido & i18n
- [ ] Fase 8 — Páginas internas
- [ ] Fase 9 — Polish final

### Ver plan completo

- [Abrir plan.md](./plan.md)

## 1. Objetivo

Este README redefine la propuesta como una superficie comercial premium, sobria y técnicamente creible.

La web debe transmitir cuatro ideas en menos de un minuto:

- Syllabri construye software y sistemas de IA en producción
- el foco está en agentes, automatización, RAG y despliegue real
- hay una capa seria de arquitectura, gobierno y trazabilidad
- el siguiente paso es abrir un discovery, agendar una llamada o iniciar un piloto

## 2. Dirección visual

La referencia no es una landing de marketing recargada. La dirección correcta está más cerca de plataformas enterprise actuales: jerarquía clara, superficies sobrias, contraste alto, prueba social temprana y visuales que parecen producto o sistema, no ilustración decorativa.

### Rasgos visuales clave

- estética editorial y técnica
- fondos con profundidad, no fondos planos
- tipografía con carácter en titulares y alta legibilidad en UI
- bloques con bastante aire y ritmo vertical claro
- visuales que parezcan consola, panel operativo o arquitectura viva
- microinteracciones precisas, no animación excesiva

### Qué evitar

- exceso de pills compitiendo entre sí
- gradientes genéricos sin estructura
- iconografía como sustituto de producto
- tarjetas todas iguales con la misma densidad
- claims futuristas sin evidencia operativa

## 3. Sistema visual propuesto

### Tipografía

- Display: Space Grotesk o Sora para titulares
- Sans UI: Manrope o Plus Jakarta Sans para cuerpo, navegación y formularios

### Paleta base

La paleta debe sentirse sobria, tecnológica y estable. No debe caer en el azul corporativo genérico ni en contrastes excesivamente fríos.

#### Dark theme base

- bg-primary: #07111A
- bg-secondary: #0C1822
- bg-elevated: #10202B
- surface: rgba(16, 32, 43, 0.72)
- surface-strong: #132634
- line-subtle: rgba(151, 176, 196, 0.14)
- line-strong: rgba(151, 176, 196, 0.28)
- fg-primary: #F3F7FA
- fg-secondary: #B8C7D3
- fg-muted: #8AA0B2
- accent-cyan: #3FD0C9
- accent-cyan-strong: #20B8C8
- accent-green: #72E6A6
- accent-green-strong: #49C97F
- accent-sand: #D8C7AE
- danger-soft: #FF8A7A

#### Light theme base

- bg-primary: #F5F7F4
- bg-secondary: #EDF2EE
- bg-elevated: #FFFFFF
- surface: rgba(255, 255, 255, 0.84)
- surface-strong: #FFFFFF
- line-subtle: rgba(27, 46, 58, 0.10)
- line-strong: rgba(27, 46, 58, 0.18)
- fg-primary: #14212B
- fg-secondary: #355061
- fg-muted: #627786
- accent-cyan: #168F99
- accent-cyan-strong: #0E7680
- accent-green: #218A59
- accent-green-strong: #166B44
- accent-sand: #CBB89C
- danger-soft: #D96A5B

#### Rol de color

- el cian debe comunicar sistema, conectividad, nodos, foco tecnico y estados activos
- el verde debe comunicar validacion, despliegue, operacion y señales positivas
- el arena debe usarse solo como tono editorial de apoyo en tema claro o detalles de contraste calido
- el rojo no debe entrar como acento principal, solo como estado funcional

#### Gradientes recomendados

- hero glow dark: radial-gradient(circle at 20% 20%, rgba(63, 208, 201, 0.16), transparent 42%), radial-gradient(circle at 80% 10%, rgba(114, 230, 166, 0.10), transparent 36%)
- hero glow light: radial-gradient(circle at 18% 18%, rgba(22, 143, 153, 0.10), transparent 42%), radial-gradient(circle at 82% 12%, rgba(33, 138, 89, 0.08), transparent 34%)
- panel line glow: linear-gradient(90deg, rgba(63, 208, 201, 0.00), rgba(63, 208, 201, 0.72), rgba(114, 230, 166, 0.00))

### Lenguaje de superficies

- paneles con borde fino y semitransparencia controlada
- glow interior muy sutil en piezas estratégicas
- grids y trazas técnicas solo en fondos o paneles de arquitectura
- sombras largas y suaves, nunca pesadas

#### Aplicacion por bloque

- header dark: bg rgba(7, 17, 26, 0.72) con borde line-subtle
- hero dark: bg-primary con glows cyan y green de baja opacidad
- trust band dark: bg-secondary con chips surface y line-strong
- architecture panel dark: surface-strong con acentos cyan para flujo y green para estados validos
- footer dark: bg-secondary mas denso que el body para cierre institucional
- light theme: mantener el contraste desde fg-primary y evitar grises demasiado debiles

## 4. Estructura de la home

La home debe cambiar de una narrativa de capacidades a una narrativa de confianza, sistema y despliegue.

### Orden recomendado

1. Header fijo
2. Hero con visual de sistema
3. Banda de confianza
4. Bloque de sistemas que construimos
5. Bloque de arquitectura y gobernanza
6. Casos o escenarios de uso
7. Workflow de trabajo
8. CTA final con contacto y agenda
9. Footer institucional

## 5. Wireframe desktop

```text
+----------------------------------------------------------------------------------+
| HEADER                                                                           |
| Syllabri                    Soluciones  Arquitectura  Casos  Proceso  Contacto  |
| ES/EN  Theme  CTA: Agendar discovery                                            |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| HERO                                                                             |
| Empresa de software e IA aplicada                                                |
| Construimos agentes, RAG y automatización para operaciones reales                |
| Software desplegable, trazable y conectado a tus sistemas                        |
| [Solicitar discovery] [Ver arquitectura]                                         |
|                                                                                  |
|                                PANEL DE SISTEMA                                  |
|                                Sources -> Decision Engine -> Ops                 |
|                                Governance / Audit / Human review                 |
+----------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------+
| TRUST BAND                                                                       |
| Sectores | Integraciones | Infraestructura | Seguridad | Disponibilidad bilingue |
+----------------------------------------------------------------------------------+

+-----------------------------------+----------------------------------------------+
| SISTEMAS QUE CONSTRUIMOS          | RESULTADO ESPERADO                            |
| Agentes operativos                | menos tiempo operativo                        |
| Inteligencia documental y RAG     | mejor decision y trazabilidad                 |
| Automatizacion y copilotos        | integracion con ERP, CRM y apps               |
+-----------------------------------+----------------------------------------------+

+----------------------------------------------------------------------------------+
| ARQUITECTURA Y GOBIERNO                                                          |
| Ingesta | Conectores | Memoria | Agentes | Reglas | Observabilidad | Auditoria   |
| Bloque lateral: permisos, revision humana, despliegue soberano, logs            |
+----------------------------------------------------------------------------------+

+-----------------------------------+----------------------------------------------+
| CASO 01                           | CASO 02                                      |
| Vigilancia tecnologica            | Operaciones asistidas por agentes             |
| fuentes, ranking, resumen         | intake, clasificacion, handoff                |
| impacto y stack                   | impacto y stack                               |
+-----------------------------------+----------------------------------------------+

+----------------------------------------------------------------------------------+
| PROCESO                                                                           |
| 01 Diagnostico    02 Arquitectura y piloto    03 Despliegue y evolucion          |
+----------------------------------------------------------------------------------+

+-----------------------------------+----------------------------------------------+
| CONTACTO                          | FORM / CTA                                    |
| contact@syllabri.com              | nombre                                        |
| WhatsApp Espana +34 600 000 000   | email                                         |
| hello@syllabri.com                | empresa                                       |
| [Agendar llamada]                 | mensaje                                       |
|                                   | [Enviar]                                      |
+-----------------------------------+----------------------------------------------+

+----------------------------------------------------------------------------------+
| FOOTER                                                                           |
| marca | email | WhatsApp Espana | idioma | links | copyright                    |
+----------------------------------------------------------------------------------+
```

## 6. Wireframe mobile

```text
+----------------------------------+
| HEADER                           |
| Syllabri               Menu      |
+----------------------------------+

+----------------------------------+
| HERO                             |
| Empresa de software              |
| Construimos agentes, RAG y       |
| automatizacion para operaciones  |
| reales                           |
| [Solicitar discovery]            |
| [Ver arquitectura]               |
|                                  |
| Panel de sistema vertical        |
+----------------------------------+

+----------------------------------+
| TRUST BAND                       |
| Sectores / Seguridad / Bilingue  |
+----------------------------------+

+----------------------------------+
| SISTEMAS QUE CONSTRUIMOS         |
| Card 1                           |
| Card 2                           |
| Card 3                           |
+----------------------------------+

+----------------------------------+
| ARQUITECTURA Y GOBIERNO          |
| visual operativa                 |
| controles y auditoria            |
+----------------------------------+

+----------------------------------+
| CASOS                            |
| Caso 1                           |
| Caso 2                           |
+----------------------------------+

+----------------------------------+
| PROCESO                          |
| 1 Diagnostico                    |
| 2 Piloto                         |
| 3 Despliegue                     |
+----------------------------------+

+----------------------------------+
| CONTACTO                         |
| email                            |
| WhatsApp Espana                  |
| agenda                           |
| formulario                       |
+----------------------------------+
```

## 7. Secciones en detalle

### 7.1 Header

Debe sentirse institucional y ligero.

Contenido:

- logotipo tipografico Syllabri
- navegacion principal
- selector de idioma
- selector de tema
- CTA de agenda o discovery

Comportamiento:

- blur y transparencia suave al hacer scroll
- estado compactado despues del hero
- menu movil con overlay limpio y cierre por Escape

### 7.2 Hero

El hero debe ser mas limpio que la version anterior y mas fuerte en la promesa.

Copy recomendado:

- eyebrow: Software e IA aplicada
- headline: Construimos sistemas de IA que operan sobre procesos reales
- supporting copy: Agentes, RAG y automatizacion integrados con tus datos, tus reglas y tu infraestructura

CTAs:

- primaria: Solicitar discovery
- secundaria: Ver arquitectura

Visual:

- un panel tipo control room
- nodos de entrada a la izquierda
- motor de decision en el centro
- salidas operativas a la derecha
- barra inferior de gobierno, auditoria y revision humana

### 7.3 Banda de confianza

Esta franja debe aparecer justo despues del hero.

No debe ser un placeholder ambiguo. Debe construirse con senales verificables aunque al inicio no existan logos de clientes.

Contenido minimo recomendado para la primera version:

- sectores atendidos o priorizados: industria, operaciones, conocimiento, equipos internos
- integraciones tipo ERP, CRM, APIs, documentos, correo y herramientas internas
- disponibilidad bilingue: espanol e ingles
- despliegue cloud, private cloud o soberano segun caso
- controles de seguridad y trazabilidad
- modalidad de trabajo: discovery, piloto y despliegue

Orden visual recomendado:

1. fila de chips de capacidad real
2. microfrase de confianza
3. una metrica o senal verificable cuando exista

Microfrases validas para esta franja:

- Integracion con sistemas existentes y fuentes documentales
- Arquitectura trazable con supervision humana
- Despliegue bilingue y orientado a operacion real

Cuando existan activos comerciales reales, esta franja debe evolucionar a uno de estos formatos:

- logos de clientes o partners
- logos de herramientas integradas
- dos mini resultados con contexto real

Hasta que eso exista, no usar logos inventados ni nombres de marca no verificados.

### 7.4 Sistemas que construimos

En lugar de seis tarjetas equivalentes, conviene presentar tres sistemas claros.

#### Sistema 1

Agentes operativos para ventas, soporte y operaciones.

#### Sistema 2

Inteligencia documental y RAG con fuentes verificables, permisos y memoria operativa.

#### Sistema 3

Automatizacion y copilotos conectados a procesos internos.

Cada bloque debe incluir:

- problema que resuelve
- tipo de integracion
- resultado esperado
- nota tecnica corta

### 7.5 Arquitectura y gobernanza

Esta es la seccion que diferencia a Syllabri de una consultora generica.

Debe tener dos columnas:

- izquierda: visual operativa del sistema
- derecha: lista de controles enterprise

Controles recomendados:

- permisos por rol
- trazabilidad de respuestas
- auditoria de eventos
- aprobacion humana
- politicas de acceso
- despliegue soberano cuando aplique

### 7.6 Casos o escenarios

La web necesita al menos dos ejemplos de uso con estructura uniforme.

Formato:

- contexto
- solucion implementada
- integraciones
- impacto esperado

Casos sugeridos:

- vigilancia tecnologica con ranking y resumen accionable
- agente para operaciones con intake, clasificacion y handoff humano

### 7.7 Workflow

El proceso debe verse como una barra secuencial, no solo como tres tarjetas.

Pasos:

1. Diagnostico tecnico y operativo
2. Arquitectura, piloto y validacion
3. Despliegue, observabilidad y evolucion

Cada paso debe tener una linea de salida clara.

### 7.8 Contacto

El cierre debe ofrecer mas de una via de conversion, pero con una prioridad clara.

Jerarquia de conversion recomendada:

1. CTA principal: Solicitar discovery
2. CTA secundaria: Agendar una llamada
3. CTA terciaria: WhatsApp Espana
4. Via alternativa: formulario general

Canales visibles:

- contact@syllabri.com
- hello@syllabri.com
- WhatsApp Espana: +34 600 000 000
- CTA para agendar una llamada

Comportamiento esperado del funnel:

- el hero empuja a discovery
- la navegacion fija mantiene acceso a agenda
- el bloque final resume opciones sin competir por igual
- el formulario queda orientado a consultas abiertas o briefs iniciales

Copy funcional recomendado para el cierre:

- Discovery tecnico para evaluar viabilidad, arquitectura y siguiente paso
- Agenda una llamada si ya tenes un caso de uso definido
- Escribinos por WhatsApp si queres una primera conversacion rapida

El formulario debe quedarse, pero no ser el unico camino ni el camino principal.

## 8. Paginas internas

### Agentes

Hero mas tecnico, visual de orquestacion y tres bloques:

- multiagente
- conocimiento conectado
- supervison y observabilidad

### Soluciones

Pagina orientada a formatos concretos de producto.

- vigilancia tecnologica
- decision support
- copilotos operativos
- IA soberana

### Ecosistema

Pagina para la capa de datos y conocimiento.

- open data layer
- knowledge graph operativo
- memoria, gobierno y contexto persistente

### Contacto

Pagina de cierre institucional con tres entradas:

- discovery tecnico
- piloto acotado
- alianza estrategica

## 9. Motion y comportamiento

La interaccion debe sentirse premium pero controlada.

### Animaciones utiles

- entrada suave del hero
- stagger ligero en bloques de sistemas
- desplazamiento sutil en halos y grids
- hover muy corto en tarjetas y CTAs

### Animaciones a evitar

- float excesivo
- rebotes
- loaders decorativos
- scroll effects complejos que resten legibilidad

Siempre respetar prefers-reduced-motion.

## 10. Implementacion en Next.js y Tailwind CSS

### Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- lucide-react para iconografia puntual

### Estructura recomendada

```text
app/
  [locale]/
    page.tsx
    agentes/page.tsx
    soluciones/page.tsx
    ecosistema/page.tsx
    contacto/page.tsx
    agents/page.tsx
    solutions/page.tsx
    ecosystem/page.tsx
    contact/page.tsx
  api/
    content/route.ts
    contact/route.ts
components/
  site/
  home/
  route-shell/
data/
  content/
lib/
public/
  images/
```

### Estrategia bilingue de rutas

El sitio necesita una unica fuente de verdad para slugs por idioma.

Mapa recomendado:

```text
es:
  home: /
  agentes: /agentes
  soluciones: /soluciones
  ecosistema: /ecosistema
  contacto: /contacto

en:
  home: /
  agentes: /agents
  soluciones: /solutions
  ecosistema: /ecosystem
  contacto: /contact
```

Implementacion recomendada:

- definir el mapa en lib/routing.ts
- resolver hrefs desde helpers, no hardcodeados en componentes
- usar el mismo mapa para header, footer, alternates y canonical
- redirigir rutas heredadas a la version localizada correcta
- mantener cookie de locale para coherencia entre servidor y cliente

Comportamiento esperado:

- /es/agentes y /en/agents son equivalentes funcionales
- cambiar idioma no envia al home, mantiene la pagina equivalente cuando exista
- metadata y lang se actualizan por ruta y locale

### Componentes recomendados

- SiteHeader
- HeroSection
- TrustBand
- SystemsSection
- ArchitectureSection
- CaseStudiesSection
- WorkflowSection
- ContactSection
- SiteFooter
- SitePreferencesProvider

### Tokens visuales

Definir en globals.css y consumir desde Tailwind con variables CSS:

- --bg
- --bg-secondary
- --bg-elevated
- --surface
- --surface-strong
- --fg
- --fg-secondary
- --fg-muted
- --line-subtle
- --line-strong
- --accent-cyan
- --accent-cyan-strong
- --accent-green
- --accent-green-strong
- --accent-sand
- --danger-soft
- --glow-cyan
- --glow-green

Implementacion sugerida:

```css
:root {
  --bg: #07111A;
  --bg-secondary: #0C1822;
  --bg-elevated: #10202B;
  --surface: rgba(16, 32, 43, 0.72);
  --surface-strong: #132634;
  --fg: #F3F7FA;
  --fg-secondary: #B8C7D3;
  --fg-muted: #8AA0B2;
  --line-subtle: rgba(151, 176, 196, 0.14);
  --line-strong: rgba(151, 176, 196, 0.28);
  --accent-cyan: #3FD0C9;
  --accent-cyan-strong: #20B8C8;
  --accent-green: #72E6A6;
  --accent-green-strong: #49C97F;
  --accent-sand: #D8C7AE;
  --danger-soft: #FF8A7A;
  --glow-cyan: rgba(63, 208, 201, 0.16);
  --glow-green: rgba(114, 230, 166, 0.12);
}

html[data-theme="light"] {
  --bg: #F5F7F4;
  --bg-secondary: #EDF2EE;
  --bg-elevated: #FFFFFF;
  --surface: rgba(255, 255, 255, 0.84);
  --surface-strong: #FFFFFF;
  --fg: #14212B;
  --fg-secondary: #355061;
  --fg-muted: #627786;
  --line-subtle: rgba(27, 46, 58, 0.10);
  --line-strong: rgba(27, 46, 58, 0.18);
  --accent-cyan: #168F99;
  --accent-cyan-strong: #0E7680;
  --accent-green: #218A59;
  --accent-green-strong: #166B44;
  --accent-sand: #CBB89C;
  --danger-soft: #D96A5B;
  --glow-cyan: rgba(22, 143, 153, 0.10);
  --glow-green: rgba(33, 138, 89, 0.08);
}
```

Mapeo util a Tailwind:

- bg-[var(--bg)]
- bg-[var(--surface)]
- text-[var(--fg)]
- text-[var(--fg-secondary)]
- border-[var(--line-subtle)]
- shadow-[0_0_0_1px_var(--line-subtle)]
- ring-[var(--accent-cyan)]

### Tailwind: principios de uso

- layout y responsive en utilidades
- fondos complejos y keyframes en CSS global
- clases semanticas solo para patrones repetidos
- motion-safe y focus-visible en todos los componentes interactivos

## 11. Contenido y localizacion

Mantener contenido desacoplado en JSON por idioma.

Archivos sugeridos:

- data/content/es.json
- data/content/en.json

La metadata, los slugs internos y el texto del panel de arquitectura deben salir del mismo sistema de contenido.

Estructura minima sugerida para cada diccionario:

- seo
- header
- hero
- trustBand
- systems
- architecture
- cases
- workflow
- contact
- footer

Tambien conviene separar dos capas:

- contenido editable por idioma en JSON
- configuracion de rutas y slugs en lib/routing.ts

Eso evita mezclar copy con decisiones de navegacion.

## 12. Criterios de calidad

La propuesta final debe sentirse:

- mas sobria que una startup experimental
- mas visual que una consultora tradicional
- mas concreta que una agencia de marketing
- mas confiable que una landing con copy inflado

Si una seccion no aporta claridad, evidencia o conversion, no entra.

## 13. Fases de construccion

1. montar layout global, rutas localizadas y providers
2. definir lib/routing.ts, equivalencias de slugs y metadata localizada
3. implementar sistema visual, tokens y fondos
4. construir hero, trust band y systems section
5. construir arquitectura, casos y workflow
6. integrar contacto, agenda, WhatsApp y formulario con jerarquia de conversion
7. cerrar accesibilidad, SEO, responsive y performance

## 14. Checklist de salida

Antes de considerar terminada la primera version, deben cumplirse estas condiciones:

- existe una banda de confianza con senales verificables y no decorativas
- el sitio mantiene equivalencia real entre rutas en espanol e ingles
- el CTA principal del hero y el CTA final apuntan al mismo objetivo comercial
- el contacto ofrece agenda, email, WhatsApp y formulario con prioridad clara
- la metadata cambia correctamente por locale y por ruta
- el visual principal parece sistema operando, no ilustracion abstracta

## 15. Resultado esperado

El resultado no debe parecer una web generica de servicios, sino una compania que sabe disenar, construir y desplegar software con IA para entornos reales, con criterio de producto, control tecnico y presencia visual de nivel enterprise.

## 16. El siguiente paso lógico sería uno de estos:

1. bajar esta paleta a un globals.css real con tokens y theme switching
2. definir los tokens de Tailwind para usar esta paleta en clases semánticas
3. aplicar esta paleta al hero, trust band y arquitectura en la primera implementación visual