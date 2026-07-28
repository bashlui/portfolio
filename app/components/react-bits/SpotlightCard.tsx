"use client"

import type { CSSProperties, MouseEvent, ReactNode } from "react"

type SpotlightCardProps = {
  children: ReactNode
  className?: string
  id?: string
}

export default function SpotlightCard({
  children,
  className = "",
  id,
}: SpotlightCardProps) {
  function handlePointerMove(event: MouseEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect()

    event.currentTarget.style.setProperty(
      "--spotlight-x",
      `${event.clientX - bounds.left}px`,
    )
    event.currentTarget.style.setProperty(
      "--spotlight-y",
      `${event.clientY - bounds.top}px`,
    )
  }

  return (
    <article
      className={className}
      id={id}
      onMouseMove={handlePointerMove}
      style={
        {
          "--spotlight-x": "50%",
          "--spotlight-y": "50%",
        } as CSSProperties
      }
    >
      {children}
    </article>
  )
}
