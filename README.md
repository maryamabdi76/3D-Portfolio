# Maryam Abdi — 3D Portfolio

A modern, interactive portfolio showcasing front-end engineering work with React, Three.js, and glassmorphism UI.

**Live site:** [https://maryamabdi76.github.io/3D-Portfolio/](https://maryamabdi76.github.io/3D-Portfolio/)

## Features

- **3D hero** — Animated MacBook laptop with LinkedIn profile on screen, floating wireframe shapes, and starfield background
- **Glassmorphism UI** — Consistent glass cards, panels, and gradient accents across all sections
- **Work experience timeline** — Expandable role cards with company logos and project highlights
- **Project showcase** — Screenshot carousels, live demo links, and tech tags
- **Tech stack grid** — Clean icon grid for languages, frameworks, and tools
- **Education & contact** — Academic background, mailto contact form, and 3D Earth canvas
- **Footer** — Resume download, social links, and back-to-top navigation
- **Fully responsive** — Optimized for desktop and mobile

## Tech Stack

| Category | Tools |
|----------|-------|
| Framework | React 18, Vite 5 |
| 3D | Three.js, React Three Fiber, Drei |
| Styling | Tailwind CSS, custom glass design system |
| Animation | Framer Motion |
| UI | React Vertical Timeline, React Tilt |
| Routing | React Router |
| Deploy | gh-pages |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```sh
git clone https://github.com/maryamabdi76/3D-Portfolio.git
cd 3D-Portfolio
npm install
```

### Development

```sh
npm run dev
```

Open [http://localhost:5173/3D-Portfolio/](http://localhost:5173/3D-Portfolio/) in your browser.

### Production build

```sh
npm run build
npm run preview
```

## Deploy to GitHub Pages

The site auto-deploys on every push to **`master`** via [GitHub Actions](.github/workflows/deploy.yml).

1. Push your changes to `master`
2. GitHub builds the project and publishes `dist/` to the **`gh-pages`** branch
3. The live site updates in 1–2 minutes: [maryamabdi76.github.io/3D-Portfolio](https://maryamabdi76.github.io/3D-Portfolio/)

Check deployment status under the **Actions** tab in your repository.

### Manual deploy (optional)

You can still deploy locally if needed:

```sh
npm run deploy
```

## Project Structure

```
src/
├── components/
│   ├── canvas/       # 3D scenes (Laptop, Stars, Earth, FloatingShapes)
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Tech.jsx
│   ├── Works.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── Navbar.jsx
├── constants/
│   └── index.js      # Nav links, experience, projects, contact info
├── assets/           # Images, logos, project screenshots
└── index.css         # Glass UI design system
public/
├── Maryam_Abdi_Resume.pdf
├── image.png         # Laptop screen + OG preview image
└── mac-draco.glb     # 3D laptop model (via public or root)
```

## Customization

Most portfolio content lives in **`src/constants/index.js`**:

- `navLinks` — Navigation items
- `profileTitle` — Job title used across the site
- `services` — About section cards
- `technologies` — Tech stack icons
- `experiences` — Work history timeline
- `projects` — Project cards with images and links
- `contactInfo` — Email, phone, LinkedIn, GitHub, resume path

Replace screenshots in `src/assets/company/` and update `public/Maryam_Abdi_Resume.pdf` when your resume changes.

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Intro, CTA buttons (Projects, Resume, Contact), 3D laptop |
| **About** | Bio and service overview cards |
| **Experience** | Vertical timeline with expandable bullet points |
| **Tech** | Technology grid |
| **Projects** | Portfolio cards with live links |
| **Education** | Master's and Bachelor's degrees |
| **Contact** | Contact form and 3D Earth |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local dev server |
| `npm run build` | Create production build in `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Build and publish to GitHub Pages |
| `npm run lint` | Run ESLint |

## Contact

- **Email:** maryamabdi9776@gmail.com
- **LinkedIn:** [maryam-abdi-1b3a29140](https://ir.linkedin.com/in/maryam-abdi-1b3a29140)
- **GitHub:** [maryamabdi76](https://github.com/maryamabdi76)

## License

This project is open source and available for personal portfolio use.
