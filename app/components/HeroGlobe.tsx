import { Plane } from "lucide-react"

export default function HeroGlobe() {
  return (
    <div className="hero-globe" aria-hidden="true">
      <svg viewBox="0 0 520 520">
        <circle cx="260" cy="260" r="216" />
        <ellipse cx="260" cy="260" rx="104" ry="216" />
        <ellipse cx="260" cy="260" rx="180" ry="216" />
        <ellipse cx="260" cy="260" rx="216" ry="82" />
        <ellipse cx="260" cy="260" rx="216" ry="158" />
        <path className="hero-globe-route" d="M72 320 C154 138 346 106 464 221" />
      </svg>
      <span className="hero-globe-node hero-globe-node-one" />
      <span className="hero-globe-node hero-globe-node-two" />
      <span className="hero-globe-node hero-globe-node-three" />
      <span className="hero-plane-orbit">
        <span className="hero-plane">
          <Plane size={25} strokeWidth={1.8} />
        </span>
      </span>
    </div>
  )
}
