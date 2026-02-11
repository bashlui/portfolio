"use client";

import { motion } from "framer-motion";

export default function Hero() {

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-background text-foreground">

      <div className="z-10 text-center px-4 md:px-6 max-w-5xl mx-auto space-y-8 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-thin tracking-tight text-center leading-[0.9] text-primary dark:text-white drop-shadow-lg"
        >
          hi, I&apos;m antonio <br className="hidden md:block" />
          <span className="text-muted-foreground dark:text-white"></span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light dark:text-white drop-shadow-md"
        >
          welcome to my portfolio
        </motion.p>
      </div>
    </section>
  );
}
