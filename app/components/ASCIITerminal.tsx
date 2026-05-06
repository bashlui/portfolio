"use client"

import { useEffect, useRef } from "react"

interface TerminalLine {
  prompt?: string
  text: string
  output?: string[]
  speed?: number // chars per second
  pauseAfter?: number // ms to pause after typing
}

const SCENES: TerminalLine[] = [
  { prompt: "~/portfolio $ ", text: "npm run dev", speed: 14, pauseAfter: 400 },
  { text: "", output: ["> ready on http://localhost:3000", "> compiled successfully"], pauseAfter: 1200 },
  { prompt: "~/portfolio $ ", text: "git push origin main", speed: 12, pauseAfter: 400 },
  { text: "", output: ["Enumerating objects: 24, done.", "Writing objects: 100% (24/24), 4.12 KiB", "To github.com:antonio/portfolio.git", "   a1b2c3d..e4f5g6h  main -> main"], pauseAfter: 1400 },
  { prompt: "~/portfolio $ ", text: "docker build -t app .", speed: 11, pauseAfter: 400 },
  { text: "", output: ["[1/4] Resolving packages...", "[2/4] Fetching packages...", "[3/4] Linking dependencies...", "[4/4] Building fresh packages...", "Successfully built app:latest"], pauseAfter: 1600 },
  { prompt: "~/portfolio $ ", text: "clear", speed: 8, pauseAfter: 300 },
]

const TERM_WIDTH = 38
const TERM_HEIGHT = 10

function padLine(line: string): string {
  const visibleLen = line.replace(/\u001b\[.*?m/g, "").length
  if (visibleLen >= TERM_WIDTH) return line.slice(0, TERM_WIDTH)
  return line + " ".repeat(TERM_WIDTH - visibleLen)
}

function renderTerminal(lines: string[]): string {
  const out: string[] = []
  out.push("┌" + "─".repeat(TERM_WIDTH) + "┐")
  for (let i = 0; i < TERM_HEIGHT; i++) {
    const content = lines[i] ?? ""
    out.push("│" + padLine(content) + "│")
  }
  out.push("└" + "─".repeat(TERM_WIDTH) + "┘")
  return out.join("\n")
}

interface ASCIITerminalProps {
  fontSize?: number
  speed?: number
  className?: string
}

export default function ASCIITerminal({ fontSize = 10, speed = 1, className = "" }: ASCIITerminalProps) {
  const preRef = useRef<HTMLPreElement>(null)
  const rafRef = useRef<number>(0)
  const stateRef = useRef({
    sceneIdx: 0,
    phase: "typing" as "typing" | "output" | "pause",
    charIdx: 0,
    lineIdx: 0,
    lines: [] as string[],
    since: 0,
  })
  const lastRef = useRef(0)

  useEffect(() => {
    lastRef.current = performance.now()

    function tick(now: number) {
      const dt = now - lastRef.current
      lastRef.current = now
      const st = stateRef.current
      const scene = SCENES[st.sceneIdx]

      if (st.phase === "typing") {
        st.since += dt
        const interval = 1000 / ((scene.speed ?? 10) * speed)
        if (st.since >= interval) {
          st.since = 0
          st.charIdx++
          const fullText = (scene.prompt ?? "") + scene.text
          if (st.charIdx >= fullText.length) {
            st.phase = scene.output ? "output" : "pause"
            st.lineIdx = 0
            st.since = 0
            st.lines.push(fullText)
          }
        }
      } else if (st.phase === "output") {
        st.since += dt
        if (st.since >= 180 / speed) {
          st.since = 0
          if (scene.output && st.lineIdx < scene.output.length) {
            st.lines.push(scene.output[st.lineIdx])
            st.lineIdx++
          } else {
            st.phase = "pause"
            st.since = 0
          }
        }
      } else if (st.phase === "pause") {
        st.since += dt
        if (st.since >= (scene.pauseAfter ?? 800) / speed) {
          // advance scene
          st.sceneIdx = (st.sceneIdx + 1) % SCENES.length
          st.phase = "typing"
          st.charIdx = 0
          st.lineIdx = 0
          st.since = 0
          const nextScene = SCENES[st.sceneIdx]
          if (nextScene.text === "clear") {
            st.lines = []
          } else {
            // scroll lines if needed
            const maxRows = TERM_HEIGHT - 1
            if (st.lines.length > maxRows) {
              st.lines = st.lines.slice(st.lines.length - maxRows)
            }
          }
        }
      }

      // build visible lines
      const visible = [...st.lines]
      if (st.phase === "typing") {
        const fullText = (scene.prompt ?? "") + scene.text
        visible.push(fullText.slice(0, st.charIdx) + "▌")
      } else if (st.phase === "output" || st.phase === "pause") {
        visible.push("▌")
      }

      // keep within terminal height
      const displayLines = visible.slice(-TERM_HEIGHT)

      if (preRef.current) {
        preRef.current.textContent = renderTerminal(displayLines)
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [speed])

  return (
    <div className={`flex items-center justify-center ${className}`} aria-label="Animated terminal">
      <pre
        ref={preRef}
        style={{
          margin: 0,
          lineHeight: 1,
          letterSpacing: 0,
          fontSize: `${fontSize}px`,
          fontWeight: 700,
          fontFamily: '"JetBrains Mono", "Consolas", ui-monospace, monospace',
          userSelect: "none",
          whiteSpace: "pre",
          color: "inherit",
        }}
      />
    </div>
  )
}
