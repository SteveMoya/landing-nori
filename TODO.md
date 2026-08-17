# 📋 TODO — landing-nori (Backlog de mejoras)

> **Creado:** 2026-08-17
> **Repo:** [SteveMoya/landing-nori](https://github.com/SteveMoya/landing-nori)
> **Estado:** pendiente de implementación — orden propuesto por prioridad

---

## 🎯 Resumen

| # | Tarea | Estado | Prioridad |
|---|-------|--------|-----------|
| 1 | Imágenes que salen fuera del bento box | ⏳ Pendiente | 🔴 Alta |
| 2 | Navbar: cambiar fondo al hacer scroll y quedar encima de todo | ✅ Corregido | 🔴 Alta |
| 3 | FAQ: arreglar el desplegado de preguntas | ✅ Corregido | 🔴 Alta |
| 4 | Servicios desglosados en cards bento con 1 destacada que rompe el patrón | ⏳ Pendiente | 🔴 Alta |
| 5 | Animaciones de scroll en cada sección | ⏳ Pendiente | 🟠 Media |
| 6 | Testimonios: carrusel infinito con datos mocks | ⏳ Pendiente | 🟠 Media |
| 7 | Precios: 4 cards (3 estándar + 1 "¿no es suficiente? contactanos") | ⏳ Pendiente | 🟠 Media |
| 8 | Proceso: timeline estilo brutalista moderno con énfasis en pasos | ⏳ Pendiente | 🟠 Media |
| 9 | Bento box de Proyectos realizados con datos mocks | ⏳ Pendiente | 🔴 Alta |

**Leyenda:** ✅ Completado | 🔄 En progreso | ⏳ Pendiente

---

## 🔴 TODO 1: Imágenes que salen fuera del bento box

### 🎯 Objetivo
Aunque el hero y las secciones usen bento grid, poder añadir **imágenes/visuales que rompan la rejilla** (elementos que sobresalgan del grid: más anchos que su columna, rotados, con offset o colgando del borde).

### 📝 Pasos
- [ ] **1.1** — Patrón de "breakout": utilidad CSS `.breakout` (wider que el container, centrado) o elementos absolutos que salgan de la tarjeta
- [ ] **1.2** — Aplicar en hero: mockup/floritura visual que sobresalga del bento (ej: navegador mockup rotado asomando)
- [ ] **1.3** — En proyectos: mini-visual que cuelgue del card (offset hacia afuera)
- [ ] **1.4** — `overflow-x` controlado (nada de scroll horizontal accidental) + `prefers-reduced-motion`

### ⚠️ Consideraciones
- El desborde debe ser **visual**, nunca romper el layout (usar `relative` en el card y absoluto en la floritura)

---

## ✅ TODO 2: Navbar con fondo al hacer scroll (COMPLETADO)

### 🎯 Qué estaba mal
- El header tenía `<style>` scoped `[data-header]{background:transparent}` que **ganaba siempre** a la regla `.is-scrolled` de `global.css` (los estilos scoped no-layered vencen a `@layer components`)
- Resultado: el fondo nunca cambiaba al hacer scroll

### ✅ Fix aplicado (commit pendiente de push)
- Eliminado el `<style>` scoped del Header
- Reglas movidas a `global.css` **fuera de @layer** (base transparente + `.is-scrolled` con fondo cream 0.85 + blur + borde) — el estado scrolled ahora aplica
- Verificado con Playwright: `before: transparent → after: rgba(250,249,247,0.85)` + `is-scrolled` + `z-50` + `fixed`

---

## ✅ TODO 3: FAQ no despliega las respuestas (COMPLETADO)

### 🎯 Qué estaba mal (causa raíz real)
- Alpine.js evalúa sus expresiones con `new Function` (**eval**)
- La CSP de producción (`script-src 'self'` **sin `'unsafe-eval'`**) bloqueaba esa evaluación → el accordion no abría
- **Peor aún:** el menú móvil quedaba visible tapando la pantalla (x-cloak removido pero x-show sin aplicar) — en desktop no se veía por `lg:hidden`, por eso solo se reportó el FAQ
- El preview local no aplicaba `_headers`, por eso el QA no lo detectó

### ✅ Fix aplicado
- `'unsafe-eval'` añadido a `script-src` en `public/_headers` (requisito documentado de Alpine.js; la CSP sigue bloqueando scripts remotos/inline)
- Verificado simulando las cabeceras de producción en Playwright: **FAQ abre, menú abre, 0 violaciones CSP**
- 📌 Nota: este pitfall aplica a CUALQUIER proyecto con Alpine + CSP estricta (landing-nori es el único con Alpine de la serie)

---

## 🔴 TODO 4: Servicios desglosados en cards bento con 1 destacada

### 🎯 Objetivo
Rediseñar la sección de servicios: cards **bento box** con excelente diseño y animaciones, donde **al menos 1 card rompa el patrón tradicional** (más grande, con visual, color distinto, tilt o collage).

### 📝 Pasos
- [ ] **4.1** — Layout bento asimétrico (col-span/row-span variados, auto-rows)
- [ ] **4.2** — Card destacada (ej: "Desarrollo web"): 2×2, con mockup de código/imagen, animación más rica (parallax interior o gradiente animado)
- [ ] **4.3** — Hover con lift + icono animado (rotate/stagger) en todas
- [ ] **4.4** — Entrada escalonada al hacer scroll (stagger)
- [ ] **4.5** — Responsive: 1 col móvil → 2 tablet → 3/4 desktop

---

## 🟠 TODO 5: Animaciones de scroll en cada sección

### 🎯 Objetivo
Que cada sección tenga animación de entrada/distintiva al hacer scroll (revelado, parallax, micro-interacciones).

### 📝 Pasos
- [ ] **5.1** — Reveal escalonado (stagger) por sección (ya hay base con `data-reveal`)
- [ ] **5.2** — Variantes por sección: hero (título por palabras), servicios (cards), proyectos (mockups), proceso (timeline), precios (cards), testimonios (carrusel), FAQ (accordion), CTA (blobs)
- [ ] **5.3** — Scroll-driven (`animation-timeline`) con fallback IO
- [ ] **5.4** — `prefers-reduced-motion` → todo quieto

---

## 🟠 TODO 6: Testimonios — carrusel infinito con mocks

### 🎯 Objetivo
Convertir los testimonios en un **carrusel infinito** que vaya pasando automáticamente (y con controles), con más datos mocks.

### 📝 Pasos
- [ ] **6.1** — Ampliar mocks a 6–9 (agregar `rating`, `date`, `eventType/projectType`, `verified`)
- [ ] **6.2** — Carrusel: auto-play con pausa al hover/focus, controles (prev/next + dots), loop infinito
- [ ] **6.3** — Transición suave (fade/slide), accesible (ARIA live, teclado)
- [ ] **6.4** — `prefers-reduced-motion` → sin auto-play, navegación manual

---

## 🟠 TODO 7: Precios — 4 cards (3 estándar + 1 personalizado)

### 🎯 Objetivo
Rediseñar la sección de precios con **4 cards**: 3 planes de servicios estándar y un **último card especial** tipo "¿No es suficiente? ¿Quieres algo más personalizado? Contáctanos" (CTA directo).

### 📝 Pasos
- [ ] **7.1** — 3 planes: Landing / Sitio completo / Plataforma (ya existen) en cards iguales
- [ ] **7.2** — 4º card diferenciado: estilo distinto (borde discontinuo o fondo lavanda intenso), mensaje de personalización + botón "Hablemos"
- [ ] **7.3** — El 4º card no muestra precio; enlaza a `mailto:hola@nori.studio?subject=Proyecto%20personalizado`

---

## 🟠 TODO 8: Proceso — timeline brutalista moderno

### 🎯 Objetivo
Rehacer la sección de proceso como **timeline brutalista moderno** (contraste duro, bordes gruesos, números gigantes, tipografía display) con **énfasis en los pasos** de cada caso.

### 📝 Pasos
- [ ] **8.1** — Layout: línea central (desktop) / izquierda (móvil), nodos cuadrados con números en Baloo 2 gigantes
- [ ] **8.2** — Estilo brutalista: bordes 2px ink, sombras offset, sin redondeo (o mínimo), fondo cream contrastado
- [ ] **8.3** — Énfasis por paso: al activarse (scroll), el paso se ilumina con pastel + detalle expandido
- [ ] **8.4** — Datos mocks ampliados: duración estimada por paso, entregables

---

## 🔴 TODO 9: Bento box de Proyectos realizados con mocks

### 🎯 Objetivo
Expandir la sección de proyectos: **bento grid completo** de proyectos realizados (6–9) con datos mocks variados (nombre, sector, tags, resultado métrica, año).

### 📝 Pasos
- [ ] **9.1** — Ampliar `src/data/projects.ts` a 6–9 con campos: `sector`, `result` (métrica), `year`, `featured`
- [ ] **9.2** — Bento asimétrico (1 proyecto grande 2×2 + resto 1×1/2×1)
- [ ] **9.3** — Mockups de navegador CSS por tono (mantener) + card destacada con métrica (`+180% conversión`)
- [ ] **9.4** — Hover: lift + mockup scale + flecha

---

## 🔄 Cómo actualizar este archivo

1. Marcar checkbox `- [ ]` → `- [x]` al completar
2. Actualizar estado y prioridad en la tabla resumen
3. Añadir nota con fecha al completar cada ítem

---

**Última actualización:** 2026-08-17
**Próxima acción:** TODO 4 (servicios bento con destacada) y TODO 9 (proyectos bento con mocks)
