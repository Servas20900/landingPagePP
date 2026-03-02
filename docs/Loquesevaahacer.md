# Documento de Levantamiento de Requerimientos

## 1. Información general del proyecto

- **Proyecto:** Landing Page PP (promotora/eventos)
- **Fecha:** 2026-03-02
- **Objetivo del producto:** Crear una landing comercial para posicionar marca, mostrar eventos y convertir tráfico hacia compra de entradas y contacto comercial.

## 2. Objetivos de negocio

1. Incrementar credibilidad de la marca ante público, sponsors y artistas.
2. Mostrar oferta actual de eventos y facilitar redirección a la tiquetera.
3. Exponer trayectoria (eventos pasados y artistas) para generar autoridad.
4. Capturar oportunidades comerciales por formulario y canales directos.

## 3. Alcance funcional (MVP)

### 3.0 Decisión de experiencia y arquitectura funcional

- Se adopta un modelo **One Page** para la marca: `/` con scroll por secciones.
- Se habilitan subpáginas dinámicas únicamente para detalle de evento: `/eventos/[slug]`.
- No se contempla blog ni rutas adicionales en el MVP.
- Este enfoque prioriza conversión y velocidad de consumo para tráfico social (especialmente Instagram).

### 3.1 Navegación principal (Navbar)

- Ítems: **Inicio**, **Nosotros**, **Eventos**, **Experiencias**, **Sponsors**, **Contacto**.
- CTA destacado en navbar: **Próximos Eventos**.
- La sección **Experiencias** integra: eventos pasados + artistas destacados.
- Navegación interna por anclas con scroll suave:
	- `#inicio`
	- `#nosotros`
	- `#eventos`
	- `#experiencias`
	- `#sponsors`
	- `#contacto`

### 3.2 Secciones de la landing

#### A) Inicio (Hero)
- Fondo visual de alto impacto (crowd/luces rojas).
- Logo principal.
- Frase principal de valor.
- CTA: **Ver eventos**.
- CTA: **Contacto**.

#### B) Nosotros
- Descripción corta (120–150 palabras aprox.).
- Países de operación.
- Géneros principales: dancehall, reguetón, electrónica.
- Mini KPIs: eventos realizados, asistentes, artistas internacionales.

#### C) Eventos
- Listado dinámico de eventos en cards.
- En Home se muestran solo **3–4 eventos activos** (preview comercial).
- Datos por card: imagen artista, nombre evento, fecha, ubicación, edad permitida (+15/+18).
- CTA por card: **Comprar entradas** (redirección externa a tiquetera).
- CTA de crecimiento: **Ver todos** (a habilitar cuando aumente el volumen de eventos).
- Requisito opcional MVP+1: filtro por país (CR/Panamá).

#### C.1) Detalle de evento (subpágina dinámica)
- Ruta dinámica: `/eventos/[slug]`.
- Contenido mínimo:
	- Banner principal del artista/evento.
	- Fecha.
	- Lugar.
	- Line up.
	- Edad permitida.
	- Mapa.
	- CTA **Comprar**.
	- Countdown (opcional).

#### D) Experiencias
- **Galería:** crowd, DJs en escenario, visuales sold out.
- **Artistas destacados:** logos/fotos + mención de giras/hitos.
- Objetivo: reforzar prueba social y autoridad de marca.

#### E) Sponsors
- Texto de invitación a colaborar.
- Beneficios de patrocinio.
- Logos de marcas aliadas.
- CTA: solicitar media kit.
- Correo corporativo de patrocinio.

#### F) Contacto
- Formulario simple: nombre, email, mensaje.
- Botón directo a WhatsApp.
- Enlaces a Instagram CR e Instagram Panamá.
- Correo oficial.

#### G) Footer
- Logo.
- Derechos reservados.
- Políticas básicas.
- Redes sociales.
- Países de operación.

## 4. Requerimientos no funcionales

1. **Responsive:** diseño mobile-first (móvil, tablet, desktop).
2. **Performance:** carga rápida en landing y optimización de imágenes.
3. **SEO básico:** metadatos, títulos, descripciones y estructura semántica.
4. **Accesibilidad base:** contraste adecuado, labels en formulario, navegación clara.
5. **Mantenibilidad:** contenido editable de eventos mediante CMS/headless simple.
6. **Navegación UX:** scroll suave entre secciones de la landing.
7. **Navbar UX:** barra sticky con efecto blur oscuro para conservar legibilidad.
8. **Animación:** transiciones sutiles tipo fade/slide, sin exceso visual.

## 5. Identidad visual y sistema de diseño

### 5.1 Paleta oficial del logo

- `#730202` (primario, CTA)
- `#590202` (hover/detalle)
- `#540000` (fondo alterno)
- `#2D0101` (fondo base)
- `#FFFFFF` (texto principal)

### 5.2 Lineamientos de uso

- Fondo general oscuro `#2D0101`.
- Alternancia de secciones con `#540000` y variante más oscura `#1A0000`.
- Botones y llamadas a la acción en `#730202`.
- Hover e indicadores activos en `#590202`.
- Evitar rojo en texto corrido: usar `#FFFFFF` para lectura y contraste.
- Bordes sutiles con transparencias blancas (5–10%).
- Uso amplio de espacio negativo para lectura premium.
- Estética: **underground premium**, evitando acabados tipo neón.
- Tipografías candidatas: Montserrat, Poppins, Bebas Neue (títulos).

## 6. Stack tecnológico aprobado

- **Framework web:** Next.js
- **UI/CSS:** Tailwind CSS
- **Plataforma de despliegue (entornos previos):** Vercel
- **Producción:** AWS

## 7. Estrategia de despliegue por entorno

### 7.1 Entornos
- **Desarrollo / Preview:** Vercel (deploy automático por rama/PR).
- **Producción:** AWS (dominio principal y operación final).

### 7.2 Propuesta técnica de producción en AWS (base)
- Estrategia objetivo: **SSG + ISR** para catálogo/eventos cuando exista CMS.
- Hosting frontend de Next.js en AWS acorde al modo de render seleccionado.
- CDN y distribución global con CloudFront.
- DNS con Route 53.
- Certificados TLS con AWS Certificate Manager.
- Variables de entorno y secretos gestionados en AWS.

> Nota: Con CMS, ISR permite actualizar eventos por revalidación incremental sin rebuild manual completo.

## 8. Estructura técnica funcional esperada

- Arquitectura recomendada:
	- `/` (Landing Scroll One Page)
	- `/eventos/[slug]` (Detalle dinámico por evento)
- Integración con CMS/headless simple para actualizar eventos y contenidos clave.
- Redirección controlada hacia tiquetera externa (sin competir con el proceso de checkout).

## 9. Integraciones y datos

1. **Tiquetera externa:** enlace por evento para compra.
2. **WhatsApp:** enlace directo con mensaje preconfigurado (opcional).
3. **Instagram:** enlaces por país (CR/Panamá).
4. **Correo corporativo:** canal de contacto y sponsors.

## 10. Criterios de aceptación del MVP

1. Navbar con todas las secciones definidas y CTA visible.
2. Secciones completas (Inicio, Nosotros, Eventos, Experiencias, Sponsors, Contacto, Footer).
3. Cards de eventos con todos los campos requeridos y botón de compra funcional.
4. Formulario de contacto operativo con validación básica.
5. Implementación visual consistente con paleta y estilo definidos.
6. Sitio responsive y publicado en entorno preview.
7. Plan de salida a producción en AWS documentado.

## 11. Fases sugeridas de ejecución

### Fase 1 — Definición
- Cierre de contenido final por sección.
- Confirmación de fuentes visuales (fotos, logos, artistas).
- Definición de CMS y modelo de datos de eventos.

### Fase 2 — Construcción MVP
- Setup proyecto Next.js + Tailwind.
- Desarrollo de secciones y componentes base.
- Integraciones de contacto y links externos.

### Fase 3 — QA y publicación
- QA funcional y responsive.
- Deploy preview en Vercel.
- Ajustes SEO/performance.

### Fase 4 — Producción AWS
- Configuración de infraestructura objetivo.
- Configuración de dominio, SSL, CDN y entorno.
- Go-live y monitoreo inicial.

## 12. Supuestos y pendientes por definir

1. CMS específico a utilizar (ej. Sanity, Strapi, Contentful o alternativa simple).
2. Flujo final del formulario (email directo, API, o servicio externo).
3. Arquitectura exacta de Next.js en AWS (estático vs SSR/ISR).
4. Responsable de carga de contenido y mantenimiento continuo.
