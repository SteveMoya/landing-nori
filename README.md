# 🍙 Nori — Landing Page

> **Diseño web con propósito.** — Landing page de marca para *Nori*, agencia boutique de diseño y desarrollo web.

Landing page estática construida con **Astro 7 + Tailwind CSS v4 + TypeScript + Alpine.js**, preparada para **Cloudflare Pages**. Serie de 9 landing pages por estilo de diseño (este proyecto: **Bento Box**).

---

## 🚀 Demo en producción

| Recurso | URL |
|---|---|
| Producción (Cloudflare Pages) | `https://nori.stevemoya.me` *(cuando conectes el repo)* |
| Preview Pages | `https://landing-nori.pages.dev` |

---

## 🧱 Stack

- **Astro 7** — SSG puro (`output: static`), sin adaptador (Cloudflare Pages sirve `dist/`)
- **Tailwind CSS v4** — tokens de marca en `src/styles/global.css` (`@theme`)
- **TypeScript 5** estricto
- **Alpine.js 3.16 + @alpinejs/collapse** — menú móvil y FAQ accordion (interactividad mínima, sin frameworks pesados)
- **@astrojs/sitemap** + Fontsource (Baloo 2, Nunito Variable) auto-hospedadas

## 📁 Arquitectura

```
src/
├── components/
│   ├── ui/          → Button, Card (bento), Badge, Icon, Section, Container, Link
│   ├── layout/      → Header, Navigation, MobileMenu (Alpine), Footer
│   ├── sections/    → HeroBento, Services, Projects (mockups CSS), Process, Pricing, Testimonials, FAQ (Alpine), CTA
│   └── brand/       → Logo (onigiri)
├── data/            → contenido tipado: site, services, projects, process, pricing, testimonials, faqs
├── layouts/BaseLayout.astro  → SEO + OG + JSON-LD + Alpine (core + collapse)
├── pages/           → index.astro, 404.astro
├── scripts/         → header (scroll state), reveal (IntersectionObserver)
└── styles/global.css → Design System Bento: tokens pastel + reveal + reduced-motion
public/              → _headers (CSP), favicon.svg, robots.txt, og.png
```

## 🎨 Design System (Bento Box / simplicidad zen)

| Token | Valor | Uso |
|---|---|---|
| `ink` | `#2D2A32` | texto principal |
| `cream` | `#FAF9F7` | fondo cálido |
| `lavanda` | `#B8B5FF` | pastel principal |
| `lavanda-deep` | `#8F8BF0` | acentos/links |
| `mint` | `#A8E6CF` | pastel |
| `peach` | `#FFD3B6` | pastel |
| `butter` | `#FFF3B0` | pastel (featured) |
| `cielo` | `#BDE0FE` | pastel |

- **Tipografía:** Baloo 2 (display redondeada) + Nunito Variable (body)
- **Lenguaje visual:** bento grid asimétrico (2x2, 2x1, 1x1), esquinas `rounded-3xl`, sombras suaves, hover lift, mucho whitespace
- **Interactividad:** Alpine.js (menú móvil, FAQ accordion con animación collapse), reveal con IntersectionObserver
- **Mockups de proyectos:** navegador CSS (puntos + URL bar) + bloque de color por tono — sin imágenes (placeholder para las reales)

## 🛠️ Scripts

```bash
pnpm install
pnpm dev            # desarrollo → http://localhost:4321
pnpm build          # build → dist/
pnpm preview        # preview local
pnpm check          # astro check (tipos)
```

## 🔐 Variables de entorno

Ninguna requerida. Sitio 100 % estático.

## ☁️ Deploy en Cloudflare Pages

1. [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages → Create → Pages → Connect to Git** → repo `landing-nori`.
2. Build: **Build command** `pnpm build` · **Output directory** `dist` · Node 22+.
3. Deploy → Custom domains → `nori.stevemoya.me`.

> ⚠️ Crearlo como **Pages**, no como Worker (el flujo Worker ejecuta `astro add cloudflare` y falla — ver skill de deploys).

## 🛡️ Seguridad

- `_headers`: CSP (`default-src 'self'`), HSTS, nosniff, frame DENY
- Sin secretos; `.env`/`.dev.vars` ignorados
- `security.checkOrigin: true`

## 📝 Decisiones de implementación

- **Alpine.js self-hosted** (importado como módulo + `Alpine.start()`) — compatible con la CSP, cero CDNs
- **Escala del bento hero**: 1 col móvil → 2 tablet → 4 desktop (card principal 2×2)
- **Contraste**: pasteles solo como fondos grandes, texto siempre en `ink` (AA verificado)
- **Sin CMS**: contenido en `src/data/*.ts` tipado
- **Datos mock** (servicios, proyectos, proceso, precios, testimonios, FAQs) — marca ficticia
- CTA vía `mailto:` con asunto pre-llenado

## 🧪 QA

```bash
pnpm check
pnpm build
```

Verificado: build limpio, contraste AA, sin overflow (desktop/móvil), Alpine funcional (menú + FAQ con animación).

---

© 2026 Nori — Proyecto de portafolio de Steve Moya.
