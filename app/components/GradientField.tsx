"use client"

import { useEffect, useRef } from "react"

type GradientFieldProps = {
  variant?: "background" | "accent" | "hero" | "warm"
}

export default function GradientField({ variant = "background" }: GradientFieldProps) {
  const fieldRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (variant !== "warm") return
    const field = fieldRef.current
    const surface = field?.parentElement
    if (!field || !surface) return
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")

    function move(event: PointerEvent) {
      if (!field || !surface || reducedMotion.matches || event.pointerType === "touch") return
      const bounds = surface.getBoundingClientRect()
      field.style.setProperty("--pointer-x", `${((event.clientX - bounds.left) / bounds.width - 0.5) * 7}%`)
      field.style.setProperty("--pointer-y", `${((event.clientY - bounds.top) / bounds.height - 0.5) * 7}%`)
    }
    function reset() {
      field?.style.setProperty("--pointer-x", "0%")
      field?.style.setProperty("--pointer-y", "0%")
    }
    surface.addEventListener("pointermove", move)
    surface.addEventListener("pointerleave", reset)
    reducedMotion.addEventListener("change", reset)
    return () => {
      surface.removeEventListener("pointermove", move)
      surface.removeEventListener("pointerleave", reset)
      reducedMotion.removeEventListener("change", reset)
    }
  }, [variant])

  return (
    <span ref={fieldRef} className={`gradient-field gradient-field--${variant}`} aria-hidden="true">
      <span className="gradient-grain" />
    </span>
  )
}
