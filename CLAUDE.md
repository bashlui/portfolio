# Portfolio — Antonio

Next.js 15 / React 19 / TypeScript portfolio site.

## Design system

- Product-forward layout inspired by Framer and Bay Area software sites:
  a direct statement, a studio surface, and work that shows where
  intelligence lives.
- Moving atmospheric gradient is the page background; it intensifies as the
  expanding footer takes the last scroll.
- Geist Sans carries display and body. Geist Mono is reserved for the studio
  chrome, clock, and technical strings.
- Light and dark palettes follow `prefers-color-scheme`. Buttons stay
  physically static. Motion respects `prefers-reduced-motion`.
- AI is shown in the work and practice split, not as a skills list.
- `app/globals.css` is the source of truth for tokens and responsive behavior.

## Architecture

| File | Purpose |
|---|---|
| `app/components/Portfolio.tsx` | Main one-page composition |
| `app/components/ExpandingFooter.tsx` | Scroll-linked contact footer |
| `app/data/projects.ts` | Typed project content, including AI role |
| `app/globals.css` | Theme, layout, responsive rules, and motion |

The portfolio intentionally exposes a single content route: `/`.

## Development

Use Bun as the package manager and runtime.

```bash
bun dev
bun run lint
bun run build
```
