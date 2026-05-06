"use client";

import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaSwift,
  FaGithub,
  FaDocker,
  FaSlack,
} from "react-icons/fa";
import {
  SiTypescript,
  SiPostman,
  SiFigma,
  SiXcode,
  SiFirebase,
  SiVercel,
  SiLinear,
} from "react-icons/si";
import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

const techItems = {
  languages: [
    { Icon: FaReact, name: "React", color: "#61DAFB" },
    { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { Icon: FaNodeJs, name: "Node.js", color: "#339933" },
    { Icon: FaPython, name: "Python", color: "#3776AB" },
    { Icon: FaSwift, name: "Swift", color: "#F05138" },
  ],
  tools: [
    { Icon: FaGithub, name: "GitHub", color: "" },
    { Icon: SiPostman, name: "Postman", color: "#FF6C37" },
    { Icon: SiFigma, name: "Figma", color: "#F24E1E" },
    { Icon: SiXcode, name: "Xcode", color: "#147EFB" },
    { Icon: FaDocker, name: "Docker", color: "#2496ED" },
    { Icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
    { Icon: SiVercel, name: "Vercel", color: "" },
  ],
  team: [
    { Icon: SiLinear, name: "Linear", color: "#5E6AD2" },
    { Icon: FaSlack, name: "Slack", color: "#4A154B" },
  ],
};

function TechItem({
  Icon,
  name,
  color,
  index,
}: {
  Icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  name: string;
  color: string;
  index: number;
}) {
  return (
    <motion.div
      className="flex flex-col items-center gap-2.5 group"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <div className="w-16 h-16 rounded-xl bg-card flex items-center justify-center hover:bg-muted transition-colors">
        <Icon
          className="w-8 h-8"
          style={{ color: color || "var(--foreground)" }}
        />
      </div>
      <span className="text-[10px] text-muted-foreground tracking-wide group-hover:text-foreground transition-colors">
        {name}
      </span>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section className="pt-48 pb-56 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <FadeInSection className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            tools of the trade.
          </h2>
        </FadeInSection>

        <div className="space-y-14">
          <FadeInSection>
            <p className="text-[10px] text-muted-foreground tracking-widest uppercase mb-8 text-center">
              languages &amp; frameworks
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              {techItems.languages.map((t, i) => (
                <TechItem key={t.name} {...t} index={i} />
              ))}
            </div>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <p className="text-[10px] text-muted-foreground tracking-widest uppercase mb-8 text-center">
              tools &amp; services
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              {techItems.tools.map((t, i) => (
                <TechItem key={t.name} {...t} index={i} />
              ))}
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <p className="text-[10px] text-muted-foreground tracking-widest uppercase mb-8 text-center">
              team &amp; organization
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              {techItems.team.map((t, i) => (
                <TechItem key={t.name} {...t} index={i} />
              ))}
            </div>
          </FadeInSection>
        </div>

        <FadeInSection delay={0.3}>
          <div className="border-t border-border pt-20 mt-24 text-center">
            <blockquote className="text-xl md:text-2xl font-bold text-foreground max-w-xl mx-auto mb-2 leading-snug">
              &quot;The only way to do great work is to love what you do.&quot;
            </blockquote>
            <p className="text-xs text-muted-foreground mb-10 tracking-wide">
              — Steve Jobs
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Always open to new opportunities and collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:thisisantonio_@outlook.com"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-foreground text-background hover:bg-foreground/80 transition-colors text-sm font-medium"
              >
                get in touch
              </a>
              <a
                href="/Antonio_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-border text-muted-foreground hover:bg-muted hover:text-foreground transition-colors text-sm"
              >
                view resume
              </a>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
