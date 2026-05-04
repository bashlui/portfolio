"use client"

import Link from "next/link"
import GlobeLoader from "./GlobeLoader"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-background text-foreground overflow-hidden px-4">

      {/* Subtle indigo glow behind globe */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[480px] h-[480px] rounded-full bg-indigo-500/6 dark:bg-indigo-500/10 blur-3xl" />
      </div>

      {/* Globe */}
      <div className="mb-10 relative z-10">
        <GlobeLoader fontSize={11} speed={40} />
      </div>

      {/* Identity */}
      <div className="text-center space-y-2 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
          antonio.
        </h1>
        <p className="text-sm md:text-base text-muted-foreground">
          <span className="text-accent font-bold">{'//'} </span>cs student &amp; software developer
        </p>
        <p className="text-xs text-muted-foreground opacity-50 tracking-widest">
          monterrey, mx
        </p>

        {/* CTAs */}
        <div className="flex gap-3 justify-center pt-5">
          <Link
            href="/projects"
            className="inline-block px-7 py-2.5 bg-accent text-accent-foreground hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors text-xs tracking-widest uppercase font-bold"
          >
            projects
          </Link>
          <a
            href="/Antonio_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-7 py-2.5 border border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors text-xs tracking-widest uppercase"
          >
            resume
          </a>
        </div>
      </div>
    </section>
  )
}
