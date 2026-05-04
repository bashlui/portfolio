import React from "react"
import {
  FaReact, FaNodeJs, FaPython, FaSwift, FaGithub, FaDocker, FaSlack,
} from "react-icons/fa"
import {
  SiTypescript, SiPostman, SiFigma, SiXcode, SiFirebase, SiVercel, SiLinear,
} from "react-icons/si"

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
}

function TechItem({
  Icon, name, color,
}: {
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  name: string
  color: string
}) {
  return (
    <div className="flex flex-col items-center gap-2.5 group">
      <div className="w-16 h-16 flex items-center justify-center border border-border hover:border-accent transition-colors">
        <Icon
          className="w-8 h-8"
          style={{ color: color || "var(--foreground)" }}
        />
      </div>
      <span className="text-[10px] text-muted-foreground tracking-wide group-hover:text-foreground transition-colors">
        {name}
      </span>
    </div>
  )
}

export default function TechStack() {
  return (
    <section className="py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16">
          <p className="text-xs mb-4 tracking-widest uppercase">
            <span className="text-accent font-bold">{'//'}</span>
            <span className="text-muted-foreground"> tech stack</span>
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            tools of the trade.
          </h2>
        </div>

        <div className="mb-14">
          <p className="text-[10px] text-muted-foreground tracking-widest uppercase mb-8">
            languages &amp; frameworks
          </p>
          <div className="flex flex-wrap gap-6">
            {techItems.languages.map((t) => <TechItem key={t.name} {...t} />)}
          </div>
        </div>

        <div className="mb-14">
          <p className="text-[10px] text-muted-foreground tracking-widest uppercase mb-8">
            tools &amp; services
          </p>
          <div className="flex flex-wrap gap-6">
            {techItems.tools.map((t) => <TechItem key={t.name} {...t} />)}
          </div>
        </div>

        <div className="mb-24">
          <p className="text-[10px] text-muted-foreground tracking-widest uppercase mb-8">
            team &amp; organization
          </p>
          <div className="flex flex-wrap gap-6">
            {techItems.team.map((t) => <TechItem key={t.name} {...t} />)}
          </div>
        </div>

        <div className="border-t border-border pt-16">
          <blockquote className="text-2xl md:text-3xl font-bold text-foreground max-w-2xl mb-2 leading-snug">
            &quot;The only way to do great work is to love what you do.&quot;
          </blockquote>
          <p className="text-xs text-muted-foreground mb-10 tracking-wide">— Steve Jobs</p>
          <p className="text-sm text-muted-foreground mb-8 max-w-md">
            Always open to new opportunities and collaborations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:thisisantonio_@outlook.com"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors text-xs tracking-widest uppercase font-bold"
            >
              get in touch
            </a>
            <a
              href="/Antonio_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-colors text-xs tracking-widest uppercase"
            >
              view resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
