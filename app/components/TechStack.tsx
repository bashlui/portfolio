"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaSwift,
  FaGithub,
  FaDocker,
  FaSlack
} from "react-icons/fa"
import { 
  SiTypescript, 
  SiPostman,
  SiFigma,
  SiXcode,
  SiFirebase,
  SiVercel,
  SiLinear
} from "react-icons/si"

const TechItem = ({ Icon, name, color }: { Icon: React.ComponentType<{ className: string; ref: React.Ref<SVGElement> }>; name: string; color: string }) => {
  const iconRef = React.useRef<SVGElement>(null);

  return (
    <div className="flex flex-col items-center gap-2 group cursor-pointer">
      <div 
        className="w-20 h-20 bg-muted/50 rounded-2xl flex items-center justify-center border border-border transition-all duration-300 dark:bg-muted/30"
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = color;
          (e.currentTarget as HTMLElement).style.backgroundColor = color + '15';
          if (iconRef.current) {
            iconRef.current.style.color = color;
          }
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = 'hsl(var(--border))';
          (e.currentTarget as HTMLElement).style.backgroundColor = 'hsl(var(--muted))';
          if (iconRef.current) {
            iconRef.current.style.color = '';
          }
        }}
      >
        {Icon && (
          <Icon 
            ref={iconRef}
            className="w-10 h-10 transition-colors duration-300 text-foreground dark:text-white" 
          />
        )}
      </div>
      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">{name}</span>
    </div>
  );
};

export default function TechStack() {
  const codinglanguages = [
    { Icon: FaReact, name: "React", color: "#61DAFB" },
    { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { Icon: FaNodeJs, name: "Node.js", color: "#339933" },
    { Icon: FaPython, name: "Python", color: "#3776AB" },
    { Icon: FaSwift, name: "Swift", color: "#FA7343" },
  ];

  const tools = [
    { Icon: FaGithub, name: "GitHub", color: "#181717" },
    { Icon: SiPostman, name: "Postman", color: "#FF6C37" },
    { Icon: SiFigma, name: "Figma", color: "#F24E1E" },
    { Icon: SiXcode, name: "Xcode", color: "#147EFB" },
    { Icon: FaDocker, name: "Docker", color: "#2496ED" },
    { Icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
    { Icon: SiVercel, name: "Vercel", color: "#000000" },
  ];

  const teamOrganization = [
    { Icon: SiLinear, name: "Linear", color: "#5E6AD2" },
    { Icon: FaSlack, name: "Slack", color: "#E01E5A" },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl font-semibold tracking-tight text-foreground"
          >
            Tech Stack
          </motion.h3>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl text-muted-foreground mb-16 text-center"
        >
          Technologies and tools I use to bring ideas to life
        </motion.p>

        {/* Coding Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h4 className="text-2xl font-semibold text-foreground mb-8 text-center">Coding Languages & Frameworks</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {codinglanguages.map((tech) => (
              <TechItem key={tech.name} {...tech} />
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h4 className="text-2xl font-semibold text-foreground mb-8 text-center">Tools & Services</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {tools.map((tech) => (
              <TechItem key={tech.name} {...tech} />
            ))}
          </div>
        </motion.div>

        {/* Team Organization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h4 className="text-2xl font-semibold text-foreground mb-8 text-center">Team Organization</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-8 items-center justify-items-center">
            {teamOrganization.map((tech) => (
              <TechItem key={tech.name} {...tech} />
            ))}
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-30 text-center"
        >
          <p className="text-xl text-muted-foreground mb-30 max-w-2xl mx-auto">
            I&apos;m always open to new opportunities and collaborations. Let&apos;s create something amazing together!
          </p>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20 text-3xl md:text-4xl font-bold text-foreground max-w-3xl mx-auto leading-tight"
          >
            &quot;The only way to do great work is to love what you do.&quot;
          </motion.blockquote>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:antonio@example.com"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300"
            >
              Get in Touch
            </a>
            <a
              href="/Antonio_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-card border border-border text-foreground rounded-xl font-medium hover:bg-accent hover:-translate-y-1 transition-all duration-300"
            >
              View Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}