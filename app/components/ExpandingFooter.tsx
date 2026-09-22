"use client"

import { useEffect, useState } from "react"
import GradientField from "./GradientField"

const links = [
  { href: "https://github.com/bashlui", label: "GitHub" },
  { href: "https://www.linkedin.com/in/luisbolaina/", label: "LinkedIn" },
  { href: "/Antonio_Resume.pdf", label: "Résumé" },
] as const

const monterreyFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "America/Monterrey",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23",
})

function MonterreyClock() {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    const update = () => setNow(new Date())
    update()
    const id = window.setInterval(update, 1000)
    return () => window.clearInterval(id)
  }, [])

  const parts = now ? monterreyFormatter.formatToParts(now) : []
  const read = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value
  const hour = Number(read("hour") ?? 0)
  const minute = Number(read("minute") ?? 0)
  const second = Number(read("second") ?? 0)
  const digital = now ? `${read("hour")}:${read("minute")}:${read("second")}` : "--:--:--"

  return (
    <div className="monterrey-clock" role="group" aria-label={`Local time in Monterrey, México: ${digital}`}>
      <svg className="footer-clock" viewBox="0 0 120 120" aria-hidden="true">
        <circle className="clock-face" cx="60" cy="60" r="59" />
        {Array.from({ length: 60 }, (_, tick) => (
          <line
            key={tick}
            className={tick % 5 === 0 ? "clock-tick clock-tick-hour" : "clock-tick"}
            x1="60" y1="6" x2="60" y2={tick % 5 === 0 ? "13" : "9"}
            transform={`rotate(${tick * 6} 60 60)`}
          />
        ))}
        {Array.from({ length: 12 }, (_, index) => {
          const value = index + 1
          const angle = value * Math.PI / 6
          return (
            <text key={value} className="clock-number" x={(60 + Math.sin(angle) * 39).toFixed(4)} y={(60 - Math.cos(angle) * 39).toFixed(4)}>
              {value}
            </text>
          )
        })}
        <g opacity={now ? 1 : 0}>
          <line className="clock-hour" x1="60" y1="65" x2="60" y2="36" transform={`rotate(${(hour % 12 + minute / 60 + second / 3600) * 30} 60 60)`} />
          <line className="clock-minute" x1="60" y1="67" x2="60" y2="21" transform={`rotate(${(minute + second / 60) * 6} 60 60)`} />
          <line className="clock-second" x1="60" y1="70" x2="60" y2="17" transform={`rotate(${second * 6} 60 60)`} />
          <circle className="clock-pin" cx="60" cy="60" r="2.7" />
        </g>
      </svg>
    </div>
  )
}

export default function ExpandingFooter() {
  return (
    <footer className="expand-footer" id="contact">
      <GradientField variant="warm" />
      <div className="expand-footer-panel">
        <p className="expand-kicker">Monterrey</p>
        <h2 id="contact-title">Let’s make something useful.</h2>
        <a className="expand-mail" href="mailto:thisisantonio_@outlook.com">
          thisisantonio_@outlook.com
        </a>

        <nav className="expand-links" aria-label="Elsewhere">
          {links.map((link) => (
            <a href={link.href} rel="noopener noreferrer" target="_blank" key={link.label}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="expand-meta">
          <span>Antonio Bolaina</span>
          <MonterreyClock />
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
