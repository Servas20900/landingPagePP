# Documentación del sistema (primera persona)

## 1. Qué construí

Implementé el MVP de la landing de PP Promotora en Next.js con arquitectura One Page y detalle dinámico de eventos.
Mi objetivo fue cumplir exactamente el alcance definido: posicionamiento de marca, muestra de eventos, prueba social y canales de contacto/comercial.

## 2. Cómo organicé la arquitectura

Yo estructuré el proyecto con App Router de Next.js:

- `/` para la landing one-page con scroll por secciones.
- `/eventos/[slug]` para el detalle dinámico de cada evento.

También separé lógica y presentación para mantener orden:

- `lib/events.ts` para el modelo de datos y eventos activos.
- `components/Navbar.tsx`, `components/EventCard.tsx`, `components/ContactForm.tsx` para piezas reutilizables.
- `app/page.tsx` para la orquestación de secciones del home.
- `app/eventos/[slug]/page.tsx` para el detalle con mapa, line up, edad y CTA de compra.

## 3. Decisiones de diseño y estilo

Yo respeté completamente la restricción de estilos:

- No usé CSS en cascada personalizado.
- Solo usé Tailwind CSS en todas las vistas y componentes.
- Dejé `app/globals.css` únicamente con las directivas de Tailwind.

También usé la paleta acordada como tokens de Tailwind:

- `pp.base`: `#2D0101`
- `pp.alt`: `#540000`
- `pp.dark`: `#1A0000`
- `pp.primary`: `#730202`
- `pp.hover`: `#590202`

## 4. Qué cubrí del alcance funcional

Yo implementé todas las secciones definidas para el MVP:

- Inicio (hero con valor de marca y CTAs).
- Nosotros (descripción, países, géneros, KPIs).
- Eventos (preview comercial con 4 cards activas y CTA de compra).
- Experiencias (galería y artistas destacados).
- Sponsors (beneficios, logos y solicitud de media kit).
- Contacto (formulario simple con validación básica, WhatsApp, Instagram y correo).
- Footer (marca, derechos y países).

Además, en cada evento incluí la ruta de detalle con:

- Banner principal.
- Fecha.
- Lugar.
- Line up.
- Edad permitida.
- Mapa embebido.
- CTA de compra.
- Cuenta regresiva por días.

## 5. SEO, accesibilidad y UX

Yo dejé una base de SEO y UX en línea con el documento:

- `metadata` global de título, descripción y keywords.
- Navegación sticky con blur para legibilidad.
- Scroll suave por anclas de sección.
- Labels y `required` en formulario.
- Contraste alto y estructura semántica por secciones.

## 6. Cómo mantengo y escalo el sistema

Cuando quiero agregar un evento nuevo, edito `lib/events.ts` y agrego un objeto con:

- `slug`, `name`, `date`, `dateISO`, `location`, `country`, `age`, `image`, `banner`, `lineup`, `ticketUrl`, `mapEmbedUrl`, `active`.

Si el evento es activo (`active: true`), yo lo muestro automáticamente en el bloque principal de eventos.
Si necesito cambiar la narrativa o contenido por sección, lo hago directamente en `app/page.tsx`.

## 7. Ejecución local

Yo levanto el proyecto así:

1. `npm install`
2. `npm run dev`

Para validar producción:

1. `npm run build`
2. `npm run start`
