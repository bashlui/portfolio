# Portfolio — Antonio

Next.js 15 / React 19 / TypeScript portfolio site.

## Design system

- Minimal editorial direction with an asymmetrical split hero and circular
  illustrated portrait.
- Large, light-weight brand typography is balanced by soft geometric project
  cards, pill controls, and compact tool icon groups.
- Light and dark palettes follow `prefers-color-scheme` automatically.
- Geist Sans leads the identity, a restrained editorial serif adds contrast, and
  Geist Mono is reserved for labels and metadata.
- Buttons remain physically static; restrained ambient effects respect
  `prefers-reduced-motion`.
- Simple Icons provides locally bundled brand marks for AI and engineering tools.
- A React Bits-inspired spotlight treatment subtly enhances project cards.
- `app/globals.css` is the source of truth for tokens and responsive behavior.

## Architecture

| File | Purpose |
|---|---|
| `app/components/Portfolio.tsx` | Main one-page portfolio composition |
| `app/components/react-bits/` | Locally owned React Bits adaptations |
| `app/data/projects.ts` | Typed project content |
| `app/globals.css` | Theme, layout, responsive rules, and motion |

The portfolio intentionally exposes a single content route: `/`.

## Development

Use Bun as the package manager and runtime.

```bash
bun dev
bun run lint
bun run build
```
