"use client"

import { useEffect, useRef } from "react"

const FRAMES = [
  `      ~  
    ~  ~ 
   ~    ~
  .------.
  |      |
  |  ||  |
   \____/`,
  `     ~  ~
      ~   
   ~    ~ 
  .------.
  |      |
  |  ||  |
   \____/`,
  `    ~    
   ~  ~  ~
      ~   
  .------.
  |      |
  |  ||  |
   \____/`,
  `   ~  ~  
    ~   ~ 
   ~      
  .------.
  |      |
  |  ||  |
   \____/`,
]

interface ASCIICoffeeProps {
  fontSize?: number
  speed?: number
  className?: string
}

export default function ASCIICoffee({ fontSize = 12, speed = 1, className = "" }: ASCIICoffeeProps) {
  const preRef = useRef<HTMLPreElement>(null)
  const rafRef = useRef<number>(0)
  const idxRef = useRef(0)
  const lastRef = useRef(0)
  const sinceRef = useRef(0)

  useEffect(() => {
    lastRef.current = performance.now()

    function tick(now: number) {
      const dt = now - lastRef.current
      lastRef.current = now
      sinceRef.current += dt

      const interval = 500 / speed
      if (sinceRef.current >= interval) {
        sinceRef.current = 0
        idxRef.current = (idxRef.current + 1) % FRAMES.length
        if (preRef.current) {
          preRef.current.textContent = FRAMES[idxRef.current]
        }
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [speed])

  return (
    <div className={`flex items-center justify-center ${className}`} aria-label="Animated ASCII coffee cup">
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
      >
        {FRAMES[0]}
      </pre>
    </div>
  )
}
