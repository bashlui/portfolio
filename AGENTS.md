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
| Icons | Lucide React |

## Architecture

```
app/                  ← Next.js App Router
  components/         ← interactive terminal portfolio
  data/               ← typed project content
  about/ contact/ projects/  ← redirects to terminal commands
public/               ← résumé and favicon
```

Path alias: `@/*` → project root.

## Design System (source of truth: `app/globals.css`)

- **Font**: Geist Mono for terminal UI and Geist Sans for rich command output.
- **Colors**: macOS Terminal Basic profile — white canvas, black text, and restrained ANSI colors.
- **Interaction**: Simulated commands only; never execute arbitrary system input.
- **Routes**: Legacy pages redirect to `?command=` terminal commands.

## Tailwind CSS v4

Uses `@import "tailwindcss"` with `@tailwindcss/postcss` plugin (v4 syntax). No `tailwind.config.js` — theming is done entirely in `globals.css` via `@theme` and CSS custom properties.

## Verification order

`bun run lint` → `bun run build`

## Conventions

- No CI workflows or pre-commit hooks configured.
- CLAUDE.md exists with design system guidance; defer to `globals.css` for actual current values.
