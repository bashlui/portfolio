"use client"

import Image from "next/image"
import type { CSSProperties } from "react"
import { useEffect, useState } from "react"
import {
  ArrowUpRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react"
import { projects } from "../data/projects"
import WelcomeIntro from "./WelcomeIntro"

const aiTools = ["ChatGPT", "Claude Code", "Cursor", "OpenCode", "MCP"]

const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Swift",
  "Python",
  "Node.js",
  "Redis",
  "Firebase",
  "Docker",
  "Figma",
]

const projectColors: Record<string, string> = {
  opsight: "#5f7869",
  "theos-learning": "#76658c",
  brew: "#936c54",
  heatshield: "#5d7384",
  cipheria: "#8a5a4a",
}

function projectMark(title: string) {
  return title
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
}

export default function Portfolio() {
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    if (document.documentElement.classList.contains("welcome-seen")) {
      setEntered(true)
    }
  }, [])

  return (
    <>
      <WelcomeIntro onComplete={() => setEntered(true)} />
      <main className={`page${entered ? " is-entered" : ""}`}>
        <header className="site-header">
          <a className="site-mark" href="#top">
            Antonio
          </a>
          <nav aria-label="Sections">
            <a href="#work">Work</a>
            <a href="#tools">Toolkit</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <article id="top">
          <section className="hero" aria-labelledby="intro-title">
            <div className="hero-copy">
              <p className="availability">
                <span aria-hidden="true" />
                Available for thoughtful work
              </p>
              <p className="identity-role">Software &amp; product engineering</p>
              <h1 id="intro-title">
                Design-minded engineering for{" "}
                <em>useful products.</em>
              </h1>
              <p className="lede">
                I&apos;m Antonio, a Computer Science student and software engineer
                turning ambitious ideas into clear digital experiences across web,
                AI, and Apple platforms.
              </p>
              <div className="identity-actions" aria-label="Profile links">
                <a
                  className="btn btn--primary"
                  href="https://github.com/bashlui"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Github aria-hidden="true" />
                  GitHub
                </a>
                <a
                  className="btn"
                  href="https://www.linkedin.com/in/luisbolaina/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Linkedin aria-hidden="true" />
                  LinkedIn
                </a>
                <a
                  className="btn"
                  href="/Antonio_Resume.pdf"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FileText aria-hidden="true" />
                  Résumé
                </a>
              </div>
            </div>

            <div className="portrait-wrap">
              <div className="portrait">
                <Image
                  alt="Illustrated portrait of Antonio"
                  className="portrait-image"
                  fill
                  priority
                  sizes="(max-width: 620px) 132px, 196px"
                  src="/antonio-notion-face.png"
                />
              </div>
              <p className="portrait-location">
                <MapPin aria-hidden="true" />
                Monterrey, MX
              </p>
            </div>
          </section>

          <section className="section" id="work" aria-labelledby="work-title">
            <div className="section-head">
              <h2 id="work-title">Selected work</h2>
              <p>Things I&apos;ve designed and engineered end to end.</p>
            </div>

            <ul className="project-grid">
              {projects.map((project, index) => {
                const link = project.links[0]

                return (
                  <li
                    className={`project-card${index === 0 ? " project-card--lead" : ""}`}
                    id={project.slug}
                    key={project.slug}
                  >
                    <div className="project-card__top">
                      <div
                        className="project-card__mark"
                        style={
                          {
                            "--project-color":
                              projectColors[project.slug] ?? "#5f7869",
                          } as CSSProperties
                        }
                        aria-hidden="true"
                      >
                        {projectMark(project.title)}
                      </div>
                      <span className="project-card__index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="project-card__body">
                      <p className="project-card__eyebrow">
                        {project.eyebrow}
                        {project.status ? (
                          <span className="status-pill">{project.status}</span>
                        ) : null}
                      </p>
                      <div className="project-card__title">
                        <h3>{project.title}</h3>
                        {link ? (
                          <a
                            className="project-card__link"
                            href={link.href}
                            rel="noopener noreferrer"
                            target="_blank"
                            aria-label={`${link.label}: ${project.title}`}
                          >
                            <span>{link.label}</span>
                            <ArrowUpRight aria-hidden="true" />
                          </a>
                        ) : null}
                      </div>
                      <p className="project-card__summary">{project.summary}</p>
                    </div>

                    <ul
                      className="project-card__tech"
                      aria-label={`${project.title} technologies`}
                    >
                      {project.technologies.slice(0, 4).map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                  </li>
                )
              })}
            </ul>
          </section>

          <section className="section" id="tools" aria-labelledby="tools-title">
            <div className="section-head">
              <h2 id="tools-title">Toolkit</h2>
              <p>Technology should support the idea, never distract from it.</p>
            </div>

            <div className="tool-groups">
              <div className="tool-group">
                <p>AI collaborators</p>
                <ul className="tool-list">
                  {aiTools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </div>
              <div className="tool-group">
                <p>Engineering &amp; design</p>
                <ul className="tool-list">
                  {stack.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="contact-band" id="contact" aria-labelledby="contact-title">
            <div>
              <span>Start a conversation</span>
              <h2 id="contact-title">Let&apos;s build something clear and useful.</h2>
            </div>
            <a
              className="contact-cta"
              href="mailto:thisisantonio_@outlook.com"
            >
              <Mail aria-hidden="true" />
              Email Antonio
            </a>
          </section>
        </article>

        <footer>
          <span>Antonio Bolaina · Software engineer</span>
          <span>Monterrey, MX · © {new Date().getFullYear()}</span>
        </footer>
      </main>
    </>
  )
}
