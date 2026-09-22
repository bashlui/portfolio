"use client"

import { useEffect } from "react"

export default function SmoothAnchorScroll() {
  useEffect(() => {
    let animationFrame = 0
    let isAnimating = false
    let previousScrollBehavior = ""

    const stop = () => {
      window.cancelAnimationFrame(animationFrame)
      if (isAnimating) {
        document.documentElement.style.scrollBehavior = previousScrollBehavior
        isAnimating = false
      }
    }

    function onAnchorClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const link = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]')
      if (!link || link.classList.contains("skip") || link.target || link.hasAttribute("download")) return

      const hash = link.hash
      const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null
      if (!target) return

      event.preventDefault()
      stop()
      if (window.location.hash !== hash) window.history.pushState(null, "", hash)

      const destination = hash === "#top" ? 0 : Math.max(0, target.getBoundingClientRect().top + window.scrollY - 32)
      const start = window.scrollY
      const distance = destination - start
      const finish = () => {
        if (!target.hasAttribute("tabindex")) target.tabIndex = -1
        target.focus({ preventScroll: true })
      }

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || Math.abs(distance) < 2) {
        window.scrollTo(0, destination)
        finish()
        return
      }

      const duration = Math.min(1100, Math.max(450, Math.abs(distance) * 0.45))
      const started = performance.now()
      previousScrollBehavior = document.documentElement.style.scrollBehavior
      document.documentElement.style.scrollBehavior = "auto"
      isAnimating = true
      const step = (now: number) => {
        const progress = Math.min(1, (now - started) / duration)
        const eased = progress < 0.5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2
        window.scrollTo(0, start + distance * eased)
        if (progress < 1) animationFrame = window.requestAnimationFrame(step)
        else { stop(); finish() }
      }
      animationFrame = window.requestAnimationFrame(step)
    }

    document.addEventListener("click", onAnchorClick)
    window.addEventListener("wheel", stop, { passive: true })
    window.addEventListener("touchstart", stop, { passive: true })
    window.addEventListener("keydown", stop)
    return () => {
      stop()
      document.removeEventListener("click", onAnchorClick)
      window.removeEventListener("wheel", stop)
      window.removeEventListener("touchstart", stop)
      window.removeEventListener("keydown", stop)
    }
  }, [])

  return null
}
