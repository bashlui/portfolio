"use client"

import { motion } from "framer-motion"
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa"
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si"


export default function TechStack() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl font-semibold tracking-tight text-foreground"
          >
            Tech Stack
          </motion.h3>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg text-muted-foreground mb-12 text-center"
        >
          Technologies I work with to bring ideas to life
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
        >
          {/* React */}
          <div className="flex flex-col items-center gap-2 group cursor-pointer">
            <div className="w-20 h-20 bg-muted/50 rounded-2xl flex items-center justify-center border border-border group-hover:border-[#61DAFB] group-hover:bg-[#61DAFB]/10 transition-all duration-300">
              <FaReact className="w-10 h-10 text-muted-foreground group-hover:text-[#61DAFB] transition-colors duration-300" />
            </div>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">React</span>
          </div>

          {/* TypeScript */}
          <div className="flex flex-col items-center gap-2 group cursor-pointer">
            <div className="w-20 h-20 bg-muted/50 rounded-2xl flex items-center justify-center border border-border group-hover:border-[#3178C6] group-hover:bg-[#3178C6]/10 transition-all duration-300">
              <SiTypescript className="w-10 h-10 text-muted-foreground group-hover:text-[#3178C6] transition-colors duration-300" />
            </div>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">TypeScript</span>
          </div>

          {/* Node.js */}
          <div className="flex flex-col items-center gap-2 group cursor-pointer">
            <div className="w-20 h-20 bg-muted/50 rounded-2xl flex items-center justify-center border border-border group-hover:border-[#339933] group-hover:bg-[#339933]/10 transition-all duration-300">
              <FaNodeJs className="w-10 h-10 text-muted-foreground group-hover:text-[#339933] transition-colors duration-300" />
            </div>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">Node.js</span>
          </div>

          {/* Python */}
          <div className="flex flex-col items-center gap-2 group cursor-pointer">
            <div className="w-20 h-20 bg-muted/50 rounded-2xl flex items-center justify-center border border-border group-hover:border-[#3776AB] group-hover:bg-[#3776AB]/10 transition-all duration-300">
              <FaPython className="w-10 h-10 text-muted-foreground group-hover:text-[#3776AB] transition-colors duration-300" />
            </div>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">Python</span>
          </div>

          {/* Tailwind */}
          <div className="flex flex-col items-center gap-2 group cursor-pointer">
            <div className="w-20 h-20 bg-muted/50 rounded-2xl flex items-center justify-center border border-border group-hover:border-[#06B6D4] group-hover:bg-[#06B6D4]/10 transition-all duration-300">
              <SiTailwindcss className="w-10 h-10 text-muted-foreground group-hover:text-[#06B6D4] transition-colors duration-300" />
            </div>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">Tailwind</span>
          </div>

          {/* Next.js */}
          <div className="flex flex-col items-center gap-2 group cursor-pointer">
            <div className="w-20 h-20 bg-muted/50 rounded-2xl flex items-center justify-center border border-border group-hover:border-foreground group-hover:bg-foreground/5 transition-all duration-300">
              <SiNextdotjs className="w-10 h-10 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
            </div>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">Next.js</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}