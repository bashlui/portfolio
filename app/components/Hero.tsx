"use client";

import { motion } from "framer-motion";
import Grainient from "./animations/Grainient";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-background text-foreground">
      <div className="z-10 text-center px-4 md:px-6 max-w-5xl mx-auto space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-center leading-[0.9] text-primary dark:text-white"
        >
          Hi, I&apos;m Antonio <br className="hidden md:block" />
          <span className="text-muted-foreground dark:text-white">Welcome.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light dark:text-white"
        >
          Computer Science Student, developing the future.
        </motion.p>
      </div>

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <Grainient
          color1="#9CA3AF"
          color2="#D1D5DB"
          color3="#F3F4F6"
          timeSpeed={0.2}
          colorBalance={0.5} // Adjusted for lighter blend
          warpStrength={1.5}
          warpFrequency={4.0}
          warpSpeed={1.0}
          warpAmplitude={30.0}
          blendAngle={45.0}
          blendSoftness={0.2}
          rotationAmount={200.0}
          noiseScale={1.5}
          grainAmount={0.05} // Reduced grain for cleaner look
          grainScale={1.5}
          contrast={1.1}
          gamma={1.0}
          saturation={0.8}
          zoom={1.0}
          className="h-full w-full"
        />
      </div>
    </section>
  );
}
