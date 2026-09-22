const NAMES = [
  "hey antonio",
  "hi antonio",
  "hola toño",
  "toño",
  "hey tony",
  "toniooo",
  "Mr Antonio",
  "toñito",
] as const

export default function HeroNames() {
  return (
    <ul className="hero-names" aria-label="What friends call me">
      {NAMES.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  )
}
