"use client"

import { motion } from "framer-motion"

export default function WhoAmI() {
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
            Who Am I
          </motion.h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a passionate Computer Science student at Tecnológico de Monterrey, 
              dedicated to building innovative solutions through code. I thrive on turning 
              complex problems into elegant, user-friendly applications that make a real impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}