# 🚀 Portfolio Moderno - Astro + Tailwind CSS# 🚀 Portfolio Moderno - Astro + Tailwind CSS

Portfolio profesional con diseño atrevido, tema oscuro y experiencia inmersiva.Portfolio profesional con diseño atrevido, tema oscuro y experiencia inmersiva.

## ✨ Características## ✨ Características

-   🎨 **Diseño Moderno**: Tema oscuro con gradientes cyan y purple- 🎨 **Diseño Moderno**: Tema oscuro con gradientes cyan y purple

-   🚀 **Rendimiento**: Construido con Astro para máxima velocidad- 🚀 **Rendimiento**: Construido con Astro para máxima velocidad

-   📱 **Responsive**: Funciona perfectamente en todos los dispositivos- 📱 **Responsive**: Funciona perfectamente en todos los dispositivos

-   🎯 **SEO Optimizado**: Meta tags y estructura semántica- 🎯 **SEO Optimizado**: Meta tags y estructura semántica

-   💼 **Secciones Completas**: - 💼 **Secciones Completas**:

    -   Hero con animaciones - Hero con animaciones

    -   Sobre mí con habilidades técnicas - Sobre mí con habilidades técnicas

    -   Experiencia profesional timeline - Experiencia profesional timeline

    -   Formación y certificaciones - Formación y certificaciones

    -   Galería de proyectos - Galería de proyectos

    -   Páginas individuales de proyectos - Páginas individuales de proyectos

    -   Contacto - Contacto

## 🛠️ Tecnologías## �️ Tecnologías

-   [Astro 5](https://astro.build) - Framework web moderno- [Astro 5](https://astro.build) - Framework web moderno

-   [Tailwind CSS 4](https://tailwindcss.com) - Framework CSS utility-first- [Tailwind CSS 4](https://tailwindcss.com) - Framework CSS utility-first

-   TypeScript - Tipado estático- TypeScript - Tipado estático

## 📦 Instalación## 📦 Instalación

1. Clona el repositorio1. Clona el repositorio

2. Instala las dependencias:2. Instala las dependencias:

`bash`bash

npm installnpm install

````



3. Configura tus variables de entorno:3. Configura tus variables de entorno:



Copia el archivo `.env.example` a `.env` y actualiza con tus datos:Copia el archivo `.env.example` a `.env` y actualiza con tus datos:



```env```env

GITHUB_URL=https://github.com/tu-usuarioGITHUB_URL=https://github.com/tu-usuario

EMAIL=tu.email@example.comEMAIL=tu.email@example.com

LINKEDIN_URL=https://www.linkedin.com/in/tu-perfilLINKEDIN_URL=https://www.linkedin.com/in/tu-perfil

````

## 🚀 Uso## 🚀 Uso

### Desarrollo### Desarrollo

`bash`bash

npm run devnpm run dev

````



El sitio estará disponible en `http://localhost:4321`El sitio estará disponible en `http://localhost:4321`



### Build### Build



```bash```bash

npm run buildnpm run build

````

### Preview### Preview

`bash`bash

npm run previewnpm run preview

````



## 📁 Estructura del Proyecto## 📁 Estructura del Proyecto



```Inside of your Astro project, you'll see the following folders and files:

/

├── public/              # Archivos estáticos```text

├── src//

│   ├── components/      # Componentes reutilizables├── public/

│   │   ├── Header.astro│   └── favicon.svg

│   │   └── Footer.astro├── src

│   ├── layouts/         # Layouts│   ├── assets

│   │   └── Layout.astro│   │   └── astro.svg

│   ├── pages/           # Páginas del sitio│   ├── components

│   │   ├── index.astro│   │   └── Welcome.astro

│   │   └── proyectos/│   ├── layouts

│   │       ├── index.astro│   │   └── Layout.astro

│   │       └── [id].astro│   └── pages

│   └── styles/          # Estilos globales│       └── index.astro

│       └── global.css└── package.json

├── .env                 # Variables de entorno (no commitear)```

├── .env.example         # Ejemplo de variables

└── package.jsonTo learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

```

## 🧞 Commands

## 🎨 Personalización

All commands are run from the root of the project, from a terminal:

### Colores

| Command                   | Action                                           |

El portfolio usa una paleta de colores con cyan y purple. Puedes modificarlos en:| :------------------------ | :----------------------------------------------- |

- `src/styles/global.css` - Para los gradientes y animaciones personalizadas| `npm install`             | Installs dependencies                            |

- Directamente en las clases de Tailwind en los componentes| `npm run dev`             | Starts local dev server at `localhost:4321`      |

| `npm run build`           | Build your production site to `./dist/`          |

### Contenido| `npm run preview`         | Preview your build locally, before deploying     |

| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

1. **Información Personal**: Edita `src/pages/index.astro` para actualizar tu información| `npm run astro -- --help` | Get help using the Astro CLI                     |

2. **Proyectos**: Actualiza el array de proyectos en `src/pages/proyectos/[id].astro`

3. **Experiencia**: Modifica el array `experience` en `src/pages/index.astro`## 👀 Want to learn more?

4. **Educación**: Edita el array `education` en `src/pages/index.astro`

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

### Imágenes

Actualmente usa placeholders de placehold.co. Reemplázalos con tus propias imágenes:
- Coloca tus imágenes en la carpeta `public/`
- Actualiza las rutas en los componentes

## 🌐 Deploy

Puedes desplegar este sitio en:
- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)
- [Cloudflare Pages](https://pages.cloudflare.com)

## 📝 Licencia

MIT

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request.
````
