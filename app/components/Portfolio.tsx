"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
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
            <div className="hero-top">
              <div className="hero-identity">
                <p className="meta">Software &amp; product engineering</p>
                <p className="meta">Monterrey, MX · Available</p>
              </div>
              <div className="portrait">
                <Image
                  alt="Illustrated portrait of Antonio"
                  className="portrait-image"
                  fill
                  priority
                  sizes="96px"
                  src="/antonio-notion-face.png"
                />
              </div>
            </div>

            <h1 id="intro-title">
              Design-minded engineering for useful products.
            </h1>

            <p className="lede">
              I&apos;m Antonio, a Computer Science student and software engineer
              turning ambitious ideas into clear digital experiences across web,
              AI, and Apple platforms.
            </p>

            <p className="text-links" aria-label="Profile links">
              <a
                href="https://github.com/bashlui"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/luisbolaina/"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
              <a href="/Antonio_Resume.pdf" rel="noopener noreferrer" target="_blank">
                Résumé
              </a>
            </p>
          </section>

          <section className="section" id="work" aria-labelledby="work-title">
            <h2 id="work-title">Work</h2>
            <ul className="work-list">
              {projects.map((project, index) => {
                const link = project.links[0]

                return (
                  <li className="work-item" id={project.slug} key={project.slug}>
                    <div className="work-item__index">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="work-item__body">
                      <div className="work-item__title">
                        <h3>{project.title}</h3>
                        {link ? (
                          <a
                            href={link.href}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {link.label}
                          </a>
                        ) : null}
                      </div>
                      <p className="meta">
                        {project.eyebrow}
                        {project.status ? ` · ${project.status}` : ""}
                        {` · ${project.timeframe}`}
                      </p>
                      <p>{project.summary}</p>
                      <p className="meta">{project.technologies.join(" · ")}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </section>

          <section className="section" id="tools" aria-labelledby="tools-title">
            <h2 id="tools-title">Toolkit</h2>
            <dl className="tool-table">
              <div>
                <dt>AI</dt>
                <dd>{aiTools.join(", ")}</dd>
              </div>
              <div>
                <dt>Engineering</dt>
                <dd>{stack.join(", ")}</dd>
              </div>
            </dl>
          </section>

          <section className="section" id="contact" aria-labelledby="contact-title">
            <h2 id="contact-title">Contact</h2>
            <p className="contact-copy">
              Available for thoughtful work.
              <br />
              <a href="mailto:thisisantonio_@outlook.com">
                thisisantonio_@outlook.com
              </a>
            </p>
          </section>
        </article>

        <footer>
          <span>Antonio Bolaina</span>
          <span>© {new Date().getFullYear()}</span>
        </footer>
      </main>
    </>
  )
}
