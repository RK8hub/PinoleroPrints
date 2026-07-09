# PinoleroPrints

Sitio web oficial de **PinoleroPrints** — Diseño, personalización y producción en Nicaragua.

Servicios: sublimación, impresión DTF, bordado, grabado láser y diseño gráfico.

---

## Tech Stack

- [Astro](https://astro.build) v6 — Framework web
- [Tailwind CSS](https://tailwindcss.com) v4 — Estilos utilitarios
- Node.js >= 22.12.0
- pnpm — Package manager
- Desplegado en dominio propio: [pinoleroprints.rk8.dev](https://pinoleroprints.rk8.dev)

---

## Estructura del Proyecto

```
/
├── public/                          # Archivos estáticos (favicon, CNAME, BingSiteAuth)
├── src/
│   ├── assets/                      # Imágenes y recursos (WebP, SVG)
│   │   ├── icons/                   # Iconos de redes sociales
│   │   ├── index.ts                 # Barrel file: re-exporta todas las imágenes
│   │   └── *.webp                   # Imágenes del sitio
│   ├── components/                  # Componentes Astro reutilizables
│   │   ├── Header.astro             # Navegación + menú responsive
│   │   ├── HeroSection.astro        # Hero principal con CTA
│   │   ├── ServicesSection.astro    # Grid de servicios
│   │   ├── CatalogSection.astro     # Grid de productos del catálogo
│   │   ├── AboutSection.astro       # Sección "Nosotros"
│   │   ├── Footer.astro             # Footer con redes sociales
│   │   └── index.ts                 # Barrel file: re-exporta todos los componentes
│   ├── constants/                   # Datos y configuración tipados
│   │   ├── urls.ts                  # URLs de redes sociales y contacto
│   │   ├── services.ts              # Lista de servicios (tipada)
│   │   ├── products.ts              # Lista de productos (tipada)
│   │   ├── navigation.ts            # Links de navegación (tipados)
│   │   └── index.ts                # Barrel file: re-exporta todas las constantes
│   ├── layouts/
│   │   └── Layout.astro             # Layout base con SEO, Open Graph, Twitter Cards
│   ├── pages/
│   │   └── index.astro              # Página principal (ensambla componentes)
│   └── styles/
│       └── global.css               # Tailwind CSS + estilos globales
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── tsconfig.json
```

---

## Conventions

- **Path alias** `@/` → mapea a `src/`. Ej: `import { URLS } from "@/constants"`
- **Barrel files** (`index.ts`) en cada carpeta para importar limpio
- **Componentes** en PascalCase: `Header.astro`, `HeroSection.astro`
- **Datos** separados de la vista en `src/constants/` con tipos explícitos
- **Imágenes** se pasan como props desde la página a los componentes

---

## Comandos

| Comando | Acción |
|---|---|
| `pnpm install` | Instalar dependencias |
| `pnpm dev` | Iniciar servidor de desarrollo (`localhost:4321`) |
| `pnpm build` | Compilar sitio de producción en `./dist/` |
| `pnpm preview` | Vista previa del build local |

---

## Desarrollo

1. Clonar el repositorio.
2. Ejecutar `pnpm install`.
3. Usar `pnpm dev` para desarrollo local.
4. Antes de deployar, verificar con `pnpm build`.

---

## Deployment

El sitio se despliega desde la rama `main`. El hosting apunta a `pinoleroprints.rk8.dev` con el archivo `public/CNAME` para el dominio personalizado.