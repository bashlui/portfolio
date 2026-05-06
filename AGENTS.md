# AGENTS.md — portoflio

## Commands

Use **Bun** as package manager (not npm/yarn/pnpm).

| Task | Command |
|---|---|
| Dev server | `bun dev` |
| Production build | `bun run build` |
| Lint | `bun run lint` |

No test framework is configured.

## Stack

Next.js 15 (App Router) + React 19 + TypeScript 5 + Tailwind CSS v4

| Category | Packages |
|---|---|
| Animation | Framer Motion |
| Smooth scroll | Lenis (duration: 1.6, wheelMultiplier: 0.85) |
| UI primitives | shadcn/ui (new-york style, RSC) |
| Icons | Lucide React + React Icons |

## Architecture

```
app/                  ← Next.js App Router
  components/         ← page-scoped components (GlobeLoader, Hero, Navbar, SmoothScroll, etc.)
  context/            ← ThemeContext (dark mode provider)
  about/ contact/ projects/  ← route pages
components/           ← reusable shared components (LogoLoop)
ui/                   ← shadcn/ui primitives (button, dropdown-menu)
lib/utils.ts          ← cn() helper (clsx + tailwind-merge)
```

Path alias: `@/*` → project root.

## Design System (source of truth: `app/globals.css`)

- **Font**: JetBrains Mono (loaded via next/font/google, CSS var `--font-jetbrains-mono`). Both sans and mono families use it.
- **Colors**: Neutral grayscale palette (not indigo). `--accent` resolves to `#262626` light / `#fafafa` dark.
- **Theme toggle**: Dark mode via `.dark` class on wrapper, managed by `ThemeProvider` in `app/context/ThemeContext.tsx`.
- **Radius**: `--radius: 0.75rem` (not 0). Rounded corners are used.
- **Section headers**: Use `// section name` pattern with accent-colored `//` prefix.

## GlobeLoader

`app/components/GlobeLoader.tsx` — ASCII spinning globe with real continent polygon data baked in (50×28 char grid, 360×180 land mask). Props: `fontSize` (default 7), `speed` (default 50 deg/s). Aspect ratio self-calibrates via DOM probe on mount. Used in Hero at larger size (fontSize=11).

## Tailwind CSS v4

Uses `@import "tailwindcss"` with `@tailwindcss/postcss` plugin (v4 syntax). No `tailwind.config.js` — theming is done entirely in `globals.css` via `@theme` block. `components.json` references a tailwind config that does not exist; shadcn components work via CSS vars instead.

## Verification order

`bun run lint` → `bun run build`

## Conventions

- No CI workflows or pre-commit hooks configured.
- `components.json` (shadcn) configures `@/components`, `@/ui`, `@/lib` aliases.
- CLAUDE.md exists with design system guidance; defer to `globals.css` for actual current values.
