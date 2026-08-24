"use client"

import { useEffect, useRef, useState } from "react"

const STORAGE_KEY = "antonio-welcome"
const INTRO_MS = 3200
const REVEAL_MS = 800

type IntroState = "playing" | "revealing" | "done"

type Ripple = {
  x: number
  y: number
  born: number
  life: number
  spread: number
}

function shouldSkipIntro() {
  if (typeof window === "undefined") {
    return false
  }

  try {
    if (sessionStorage.getItem(STORAGE_KEY) === "1") {
      return true
    }
  } catch {
    // Private mode can block sessionStorage.
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function persistIntro() {
  try {
    sessionStorage.setItem(STORAGE_KEY, "1")
  } catch {
    // Private mode can block sessionStorage.
  }
}

function markIntroSkipped() {
  persistIntro()
  document.documentElement.classList.add("welcome-seen")
}

function easeOut(value: number) {
  const t = Math.min(1, Math.max(0, value))
  return 1 - (1 - t) ** 3
}

type WelcomeIntroProps = {
  onComplete: () => void
}

export default function WelcomeIntro({ onComplete }: WelcomeIntroProps) {
  const [state, setState] = useState<IntroState>("playing")
  const [copyIn, setCopyIn] = useState(false)
  const completed = useRef(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  function finish() {
    if (completed.current) {
      return
    }

    completed.current = true
    markIntroSkipped()
    setState("done")
    onComplete()
    document.body.style.removeProperty("overflow")
  }

  useEffect(() => {
    if (shouldSkipIntro()) {
      finish()
      return
    }

    document.body.style.overflow = "hidden"
    const copyTimer = window.setTimeout(() => setCopyIn(true), 500)

    const revealTimer = window.setTimeout(() => {
      persistIntro()
      setState("revealing")
      onComplete()
    }, INTRO_MS)

    const doneTimer = window.setTimeout(() => {
      persistIntro()
      completed.current = true
      setState("done")
      document.body.style.removeProperty("overflow")
    }, INTRO_MS + REVEAL_MS)

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        window.clearTimeout(revealTimer)
        window.clearTimeout(doneTimer)
        finish()
      }
    }

    window.addEventListener("keydown", onKeyDown)

    return () => {
      window.clearTimeout(copyTimer)
      window.clearTimeout(revealTimer)
      window.clearTimeout(doneTimer)
      window.removeEventListener("keydown", onKeyDown)
      document.body.style.removeProperty("overflow")
    }
    // The intro should run once on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      return
    }

    const scene = canvas
    const maybeCtx = scene.getContext("2d")

    if (!maybeCtx) {
      return
    }

    const ctx: CanvasRenderingContext2D = maybeCtx
    const ripples: Ripple[] = []
    const timers: number[] = []
    const pointer = { x: 0, y: 0, lastX: -999, lastY: -999 }
    let width = 0
    let height = 0
    let frame = 0
    let start = performance.now()

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = scene.clientWidth
      height = scene.clientHeight
      scene.width = Math.max(1, Math.floor(width * dpr))
      scene.height = Math.max(1, Math.floor(height * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function spawn(x: number, y: number, life: number, spread: number) {
      ripples.push({ x, y, born: performance.now(), life, spread })
    }

    function seed() {
      const x = width * 0.42
      const y = height * 0.52
      const spread = Math.hypot(width, height) * 0.92
      spawn(x, y, 2800, spread)
      timers.push(window.setTimeout(() => spawn(x, y, 2800, spread), 220))
      timers.push(window.setTimeout(() => spawn(x, y, 3000, spread), 460))
      timers.push(window.setTimeout(() => spawn(x, y, 3200, spread), 740))
    }

    function drawAtmosphere(now: number) {
      const zoom = 1.08 - easeOut((now - start) / 2400) * 0.08
      ctx.save()
      ctx.translate(width / 2, height / 2)
      ctx.scale(zoom, zoom)
      ctx.translate(-width / 2, -height / 2)

      ctx.fillStyle = "#0b1216"
      ctx.fillRect(0, 0, width, height)

      const washes: Array<[number, number, number, string, string]> = [
        [width * 0.18, height * 0.12, width * 0.7, "rgba(46, 98, 122, 0.42)", "rgba(11, 18, 22, 0)"],
        [width * 0.78, height * 0.22, width * 0.55, "rgba(88, 132, 148, 0.28)", "rgba(11, 18, 22, 0)"],
        [width * 0.62, height * 0.78, width * 0.7, "rgba(196, 108, 72, 0.22)", "rgba(11, 18, 22, 0)"],
        [width * 0.28, height * 0.86, width * 0.5, "rgba(214, 176, 86, 0.16)", "rgba(11, 18, 22, 0)"],
        [width * 0.5, height * 0.5, width * 0.38, "rgba(18, 38, 46, 0.55)", "rgba(11, 18, 22, 0)"],
      ]

      for (const [x, y, radius, inner, outer] of washes) {
        const glow = ctx.createRadialGradient(x, y, 0, x, y, radius)
        glow.addColorStop(0, inner)
        glow.addColorStop(1, outer)
        ctx.fillStyle = glow
        ctx.fillRect(0, 0, width, height)
      }

      ctx.restore()
    }

    function drawRipples(now: number) {
      for (let index = ripples.length - 1; index >= 0; index -= 1) {
        const ripple = ripples[index]
        const progress = (now - ripple.born) / ripple.life

        if (progress >= 1) {
          ripples.splice(index, 1)
          continue
        }

        const eased = easeOut(progress)
        const radius = Math.max(8, ripple.spread * eased)
        const alpha = (1 - progress) * 0.32

        ctx.beginPath()
        ctx.arc(ripple.x, ripple.y, radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`
        ctx.lineWidth = 1
        ctx.stroke()

        if (progress < 0.55) {
          ctx.beginPath()
          ctx.arc(ripple.x, ripple.y, radius * 0.64, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.45})`
          ctx.stroke()
        }
      }
    }

    function tick(now: number) {
      drawAtmosphere(now)
      drawRipples(now)
      frame = window.requestAnimationFrame(tick)
    }

    function onPointerMove(event: PointerEvent) {
      pointer.x = event.clientX
      pointer.y = event.clientY
      const distance = Math.hypot(pointer.x - pointer.lastX, pointer.y - pointer.lastY)

      if (distance > 36) {
        spawn(pointer.x, pointer.y, 1700, Math.min(width, height) * 0.42)
        pointer.lastX = pointer.x
        pointer.lastY = pointer.y
      }
    }

    resize()
    seed()
    start = performance.now()
    frame = window.requestAnimationFrame(tick)
    window.addEventListener("resize", resize)
    window.addEventListener("pointermove", onPointerMove)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("resize", resize)
      window.removeEventListener("pointermove", onPointerMove)
      for (const timer of timers) {
        window.clearTimeout(timer)
      }
    }
  }, [])

  if (state === "done") {
    return null
  }

  return (
    <div
      className={`welcome-intro${state === "revealing" ? " welcome-intro--revealing" : ""}`}
      role="dialog"
      aria-label="Welcome"
      aria-modal="true"
    >
      <canvas ref={canvasRef} className="welcome-intro__scene" aria-hidden="true" />

      <svg className="welcome-intro__frame" aria-hidden="true">
        <circle className="welcome-intro__orb" cx="28%" cy="54%" pathLength="1" r="38%" />
        <line x1="18%" y1="0" x2="18%" y2="100%" />
        <line x1="0" y1="52%" x2="100%" y2="52%" />
      </svg>

      <div className={`welcome-intro__copy${copyIn ? " is-in" : ""}`}>
        <p className="welcome-intro__kicker">Antonio</p>
        <p className="welcome-intro__title">Welcome</p>
        <p className="welcome-intro__lede">
          Design-minded engineering for useful products.
        </p>
      </div>

      <button className="welcome-intro__skip" type="button" onClick={finish}>
        Skip
      </button>
    </div>
  )
}
