"use client"

import Image from "next/image"
import type { CSSProperties } from "react"
import {
  ArrowUpRight,
  Bot,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react"
import {
  siClaude,
  siCursor,
  siDocker,
  siFigma,
  siFirebase,
  siModelcontextprotocol,
  siNextdotjs,
  siNodedotjs,
  siOpencode,
  siPython,
  siReact,
  siRedis,
  siSwift,
  siTypescript,
  type SimpleIcon,
} from "simple-icons"
import { projects } from "../data/projects"
import SpotlightCard from "./react-bits/SpotlightCard"

type Tool = {
  label: string
  icon?: SimpleIcon
  color?: string
}

const aiTools: Tool[] = [
  { label: "ChatGPT", color: "#10A37F" },
  { label: "Claude Code", icon: siClaude },
  { label: "Cursor", icon: siCursor },
  { label: "OpenCode", icon: siOpencode },
  { label: "MCP", icon: siModelcontextprotocol },
]

const stack: Tool[] = [
  { label: "TypeScript", icon: siTypescript },
  { label: "React", icon: siReact },
  { label: "Next.js", icon: siNextdotjs },
  { label: "Swift", icon: siSwift },
  { label: "Python", icon: siPython },
  { label: "Node.js", icon: siNodedotjs },
  { label: "Redis", icon: siRedis },
  { label: "Firebase", icon: siFirebase },
  { label: "Docker", icon: siDocker },
  { label: "Figma", icon: siFigma },
]

const projectColors: Record<string, string> = {
  opsight: "#5f7869",
  "theos-learning": "#76658c",
  brew: "#936c54",
}

function BrandIcon({ tool, compact = false }: { tool: Tool; compact?: boolean }) {
  const background = tool.color ?? `#${tool.icon?.hex ?? "181818"}`

  return (
    <span
      className={`brand-icon${compact ? " brand-icon--compact" : ""}`}
      style={{ "--brand-color": background } as CSSProperties}
      title={tool.label}
      aria-label={tool.label}
      role="img"
    >
      {tool.icon ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d={tool.icon.path} />
        </svg>
      ) : (
        <Bot aria-hidden="true" />
      )}
    </span>
  )
}

export default function Portfolio() {
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <main className="minimal-page">
      <article className="portfolio-sheet">
        <section className="identity-hero" aria-labelledby="intro-title">
          <div className="identity-copy">
            <p className="availability">
              <span aria-hidden="true" />
              Available for thoughtful work
            </p>

            <p className="identity-role">Software &amp; Product Engineering</p>

            <h1 id="intro-title">
              Design-minded engineering for{" "}
              <em>useful products.</em>
            </h1>

            <p className="identity-summary">
              I&apos;m Antonio, a Computer Science student and software engineer
              turning ambitious ideas into clear digital experiences across web,
              AI, and Apple platforms.
            </p>

            <div className="identity-actions" aria-label="Profile links">
              <a
                className="icon-button icon-button--primary"
                href="https://github.com/bashlui"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a
                className="icon-button"
                href="https://www.linkedin.com/in/luisbolaina/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <a
                className="icon-button"
                href="/Antonio_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText aria-hidden="true" />
                <span>Résumé</span>
              </a>
            </div>
          </div>

          <div className="portrait-wrap">
            <div className="portrait-frame">
              <Image
                alt="Illustrated portrait of Antonio"
                className="portrait-image"
                fill
                priority
                sizes="(max-width: 680px) 180px, 300px"
                src="/antonio-notion-face.png"
              />
            </div>
            <div className="portrait-location">
              <MapPin aria-hidden="true" />
              MTY, MX
            </div>
          </div>
        </section>

        <section className="minimal-section" id="work" aria-labelledby="work-title">
          <div className="section-label">
            <div>
              <h2 id="work-title">Selected work</h2>
            </div>
            <p>A few things I&apos;ve designed and engineered.</p>
          </div>

          <div className="project-grid">
            {featuredProjects.map((project, index) => (
              <SpotlightCard
                className="project-card"
                id={project.slug}
                key={project.slug}
              >
                <div className="project-card__top">
                  <div
                    className="project-card__mark"
                    style={{ "--project-color": projectColors[project.slug] } as CSSProperties}
                    aria-hidden="true"
                  >
                    {project.title
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>
                  <span>0{index + 1}</span>
                </div>

                <div className="project-card__body">
                  <p>{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>

                <div className="project-card__footer">
                  <ul aria-label={`${project.title} technologies`}>
                    {project.technologies.slice(0, 3).map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>

                  {project.links[0] && (
                    <a
                      href={project.links[0].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} ${project.links[0].label}`}
                    >
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </section>

        <section className="minimal-section" id="tools" aria-labelledby="tools-title">
          <div className="section-label">
            <div>
              <h2 id="tools-title">Toolkit</h2>
            </div>
            <p>Technology should support the idea, never distract from it.</p>
          </div>

          <div className="tool-groups">
            <div className="tool-group">
              <p>AI collaborators</p>
              <div className="tool-list">
                {aiTools.map((tool) => (
                  <div className="tool-item" key={tool.label}>
                    <BrandIcon compact tool={tool} />
                    <span>{tool.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tool-group">
              <p>Engineering &amp; design</p>
              <div className="tool-list">
                {stack.map((tool) => (
                  <div className="tool-item" key={tool.label}>
                    <BrandIcon compact tool={tool} />
                    <span>{tool.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact-note" id="contact" aria-labelledby="contact-title">
          <div>
            <span>Start a conversation</span>
            <h2 id="contact-title">Let&apos;s build something clear and useful.</h2>
          </div>

          <a
            className="contact-circle"
            href="mailto:thisisantonio_@outlook.com"
            aria-label="Email Antonio"
          >
            <Mail aria-hidden="true" />
          </a>
        </section>

        <footer>
          <span>Antonio Bolaina · Software engineer</span>
          <span>Monterrey, MX · © {new Date().getFullYear()}</span>
        </footer>
      </article>
    </main>
  )
}
