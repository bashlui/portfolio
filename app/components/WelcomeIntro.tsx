"use client"

import { useEffect, useRef, useState } from "react"

const STORAGE_KEY = "antonio-welcome"
const INTRO_MS = 1800
const REVEAL_MS = 700

type IntroState = "playing" | "revealing" | "done"

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

type WelcomeIntroProps = {
  onComplete: () => void
}

export default function WelcomeIntro({ onComplete }: WelcomeIntroProps) {
  const [state, setState] = useState<IntroState>("playing")
  const completed = useRef(false)

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
    setState("playing")

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
      window.clearTimeout(revealTimer)
      window.clearTimeout(doneTimer)
      window.removeEventListener("keydown", onKeyDown)
      document.body.style.removeProperty("overflow")
    }
    // The intro should run once on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <p className="welcome-intro__title">Welcome</p>
      <button className="welcome-intro__skip" type="button" onClick={finish}>
        Skip
      </button>
    </div>
  )
}
