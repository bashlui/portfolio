"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import GlobeLoader from "./GlobeLoader"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-background text-foreground overflow-hidden px-4">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] rounded-full bg-foreground/[0.02] blur-3xl" />
      </div>

      <motion.div
        className="mb-8 relative z-10"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <GlobeLoader fontSize={11} speed={40} />
      </motion.div>

      <motion.div
        className="text-center space-y-3 relative z-10"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
          antonio.
        </h1>
        <p className="text-sm md:text-base text-muted-foreground">
          cs student &amp; software developer
        </p>
        <p className="text-xs text-muted-foreground/60 tracking-widest">
          monterrey, mx
        </p>

        <div className="flex gap-3 justify-center pt-6">
          <Link
            href="/projects"
            className="inline-block px-7 py-2.5 rounded-full bg-foreground text-background hover:bg-foreground/80 transition-colors text-sm font-medium"
          >
            projects
          </Link>
          <a
            href="/Antonio_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-7 py-2.5 rounded-full border border-border text-muted-foreground hover:bg-muted hover:text-foreground transition-colors text-sm"
          >
            resume
          </a>
        </div>
      </motion.div>
    </section>
  )
}
