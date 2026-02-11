"use client";

import { motion } from "framer-motion";
import { FaGithub, FaPython, FaReact, FaDocker, FaSwift } from "react-icons/fa";
import { SiPostman, SiTypescript, SiPostgresql, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import LogoLoop from "../../components/LogoLoop";


export default function Hero() {
  const logos = [
    { node: <FaGithub className="w-12 h-12" />, title: "Github" },
    { node: <SiPostman className="w-12 h-12" />, title: "Postman" },
    { node: <FaPython className="w-12 h-12" />, title: "Python" },
    { node: <FaReact className="w-12 h-12" />, title: "React" },
    { node: <SiTypescript className="w-12 h-12" />, title: "Typescript" },
    { node: <SiPostgresql className="w-12 h-12" />, title: "PostgreSQL" },
    { node: <SiNextdotjs className="w-12 h-12" />, title: "Next.js" },
    { node: <SiTailwindcss className="w-12 h-12" />, title: "Tailwind" },
    { node: <FaDocker className="w-12 h-12" />, title: "Docker" },
    { node: <FaSwift className="w-12 h-12" />, title: "Swift" },
  ];

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-background text-foreground">

      <div className="z-10 text-center px-4 md:px-6 max-w-5xl mx-auto space-y-8 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-center leading-[0.9] text-primary dark:text-white drop-shadow-lg"
        >
          Hi, I&apos;m Antonio <br className="hidden md:block" />
          <span className="text-muted-foreground dark:text-white">Welcome.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light dark:text-white drop-shadow-md"
        >
          Computer Science Student, developing the future.
        </motion.p>

        {/* Logo Loop */}
        <div className="w-full">
          <LogoLoop
            logos={logos}
            speed={30}
            hoverSpeed={0}
            fadeOut
            fadeOutColor="hsl(var(--background))"
            direction="left"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          />
        </div>
      </div>
    </section>
  );
}
