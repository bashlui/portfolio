# Portfolio — antonio

Next.js 15 / React 19 / TypeScript portfolio site.

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS v4 (PostCSS) |
| Animation | Framer Motion |
| Scroll | Lenis |
| Icons | Lucide React, React Icons |
| UI primitives | Radix UI (dropdown) |

## Design System

**Aesthetic**: Monochrome terminal — follows the Globe Loader's warm off-white / dark ink palette with Consolas-style monospace font throughout. Zero color; pure black/white/gray only.

**Font**: JetBrains Mono (Google Fonts) → Consolas → ui-monospace  
**CSS var**: `--font-jetbrains-mono` set in `layout.tsx`, consumed in `globals.css`

**Palette**

| Token | Light | Dark |
|---|---|---|
| background | `#ffffff` | `#09090b` |
| foreground | `#09090b` | `#fafafa` |
| accent | `#6366f1` (indigo-500) | `#818cf8` (indigo-400) |
| muted-foreground | `#71717a` | `#a1a1aa` |
| border | `#e4e4e7` | `#27272a` |

**Rules**
- No rounded corners (`--radius: 0`)
- No glass morphism or backdrop blur
- Accent color (`var(--accent)`, indigo) used for: CTAs, section `//` prefix, icon hover, links, stat numbers
- Tech icons keep brand colors; project tags use semantic color families (emerald=Node, blue=TS, orange=Swift…)
- Primary CTA: `bg-accent text-accent-foreground hover:bg-indigo-600`
- Secondary CTA: `border border-border hover:border-foreground hover:text-foreground`
- Section comment headers: `<span className="text-accent font-bold">{'//'}</span><span className="text-muted-foreground"> section name</span>`
- Scroll progress bar (`ScrollProgress.tsx`) at fixed top, indigo fill, z-200
- Scroll animations: `whileInView` + `viewport={{ once: true, margin: "-80px" }}`, stagger children
- `SmoothScroll`: Lenis duration=1.6, wheelMultiplier=0.85 for presentation-like feel

## Key Components

| File | Purpose |
|---|---|
| `app/components/GlobeLoader.tsx` | ASCII spinning globe; real continent polygons rasterized to 360×180 land mask. Props: `fontSize` (default 7), `speed` (default 50 deg/s) |
| `app/components/Hero.tsx` | Globe as hero centerpiece (fontSize=11), identity text, CTA buttons |
| `app/components/Navbar.tsx` | Fixed top nav, border-bottom on scroll, no glass |
| `app/components/WhoAmI.tsx` | Short bio section |
| `app/components/TechStack.tsx` | Tech icons in square bordered boxes, monochrome |
| `app/components/Footer.tsx` | Minimal footer |

## Pages

| Route | File |
|---|---|
| `/` | `app/page.tsx` — Hero + WhoAmI + TechStack + Footer |
| `/projects` | `app/projects/page.tsx` — list layout, bordered rows |
| `/about` | `app/about/page.tsx` — bordered grid panels |
| `/contact` | `app/contact/page.tsx` — dropdown + direct link list |

## Globe Loader

Source: Claude Design file `Globe Loader.html` (design bundle from `api.anthropic.com`).

The globe renders a 50×28 ASCII character grid each frame using real continent polygons:
- Ocean cells: `/`, `/ `, ` `, `/` (cycling)
- Land cells: `#`, `█`, `▓`, `#` (cycling)
- A 360×180 Uint8Array land mask is rasterized once from polygon data on first mount
- `measureCellAspect()` dynamically corrects for monospace cell dimensions to keep the disc circular

To use it larger, increase `fontSize`. The aspect ratio self-calibrates.

## Development

Uses **Bun** as the package manager and runtime.

```bash
bun dev        # start dev server
bun run build  # production build
bun run lint   # lint
bun add <pkg>  # add a dependency
```
