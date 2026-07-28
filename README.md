# Antonio — Portfolio

A minimalist portfolio for Antonio Bolaina, built with Next.js 15, React 19,
TypeScript, and Tailwind CSS v4.

The site is one continuous editorial page: an asymmetrical portrait-led
introduction, selected work, engineering toolkit, and contact details all live
on `/`. Its warm white and near-black palettes follow the visitor's
operating-system theme.

Brand marks come from [Simple Icons](https://simpleicons.org/), while a restrained
[React Bits](https://reactbits.dev/)-inspired spotlight treatment adds depth to
project cards without moving buttons or content.

## Development

Use Bun for every package and script command.

```bash
bun dev
bun run lint
bun run build
```

## Structure

```text
app/
  components/          Portfolio UI and React Bits components
  data/projects.ts     Typed project content
  globals.css          Theme, layout, and responsive design system
  page.tsx             Main portfolio route
public/
  Antonio_Resume.pdf
  antonio-notion-face.png
```
