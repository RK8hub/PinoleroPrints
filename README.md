# PinoleroPrints

Sitio web oficial de **PinoleroPrints** — Diseño, personalización y producción en Nicaragua.

Servicios: sublimación, impresión DTF, bordado, grabado láser y diseño gráfico.

---

## Tech Stack

- [Astro](https://astro.build) v6 — Framework web
- [Tailwind CSS](https://tailwindcss.com) v4 — Estilos utilitarios
- Node.js >= 22.12.0
- Desplegado en dominio propio: [pinoleroprints.rk8.dev](https://pinoleroprints.rk8.dev)

---

## Estructura del Proyecto

```
/
├── public/                  # Archivos estáticos (favicon, CNAME, BingSiteAuth)
├── src/
│   ├── assets/              # Imágenes y recursos (WebP, SVG)
│   │   ├── icons/           # Iconos de redes sociales
│   │   └── *.webp           # Imágenes del sitio
│   ├── components/          # Componentes reutilizables (header, hero)
│   ├── layouts/             # Layout base (Layout.astro)
│   ├── pages/               # Páginas del sitio (index.astro)
│   └── styles/              # Estilos globales (global.css)
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## Comandos

| Comando | Acción |
|---|---|
| `npm install` | Instalar dependencias |
| `npm run dev` | Iniciar servidor de desarrollo (`localhost:4321`) |
| `npm run build` | Compilar sitio de producción en `./dist/` |
| `npm run preview` | Vista previa del build local |

---

## Desarrollo

1. Clonar el repositorio.
2. Ejecutar `npm install`.
3. Usar `npm run dev` para desarrollo local.
4. Antes de deployar, verificar con `npm run build`.

El sitio es estático (SSG). Todo el contenido se define directamente en los componentes Astro.

---

## Deployment

El sitio se despliega desde la rama `main`. El hosting apunta a `pinoleroprints.rk8.dev` con el archivo `public/CNAME` para el dominio personalizado.
