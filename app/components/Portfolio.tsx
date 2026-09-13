import Image from "next/image"
import { projects } from "../data/projects"

type Tool = { name: string; logo: string }

const aiTools: Tool[] = [
  { name: "ChatGPT", logo: "openai" },
  { name: "Claude Code", logo: "claude" },
  { name: "Cursor", logo: "cursor" },
  { name: "OpenCode", logo: "opencode" },
  { name: "MCP", logo: "mcp" },
]

const stack: Tool[] = [
  { name: "TypeScript", logo: "typescript" },
  { name: "React", logo: "react" },
  { name: "Next.js", logo: "nextdotjs" },
  { name: "Swift", logo: "swift" },
  { name: "Python", logo: "python" },
  { name: "Node.js", logo: "nodedotjs" },
  { name: "Redis", logo: "redis" },
  { name: "Firebase", logo: "firebase" },
  { name: "Docker", logo: "docker" },
  { name: "Figma", logo: "figma" },
]

function ToolItems({ tools }: { tools: Tool[] }) {
  return (
    <ul className="tool-items">
      {tools.map(({ name, logo }) => (
        <li className="tool-item" key={name}>
          <Image src={`/tool-logos/${logo}.svg`} alt="" width={20} height={20} />
          <span>{name}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Portfolio() {
  return (
    <main className="page" id="top">
      <header className="site-header">
        <a className="site-mark" href="#top" aria-label="Antonio Bolaina, home">
          Antonio Bolaina
        </a>
        <nav aria-label="Sections">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="intro-title">
        <p className="eyebrow">Software engineer · Monterrey, Mexico</p>
        <h1 id="intro-title">I build clear, useful digital products.</h1>
        <p className="lede">
          I&apos;m Antonio, a Computer Science student working across web, AI,
          and Apple platforms. I care about thoughtful systems, direct
          interfaces, and technology that earns its place.
        </p>

        <div className="hero-footer">
          <div className="profile-links" aria-label="Profile links">
            <a
              href="https://github.com/bashlui"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/luisbolaina/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a
              href="/Antonio_Resume.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              Résumé <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="section-number">01</p>
          <h2 id="work-title">Selected work</h2>
          <p>Products and systems I&apos;ve helped design and engineer.</p>
        </div>

        <ol className="project-list">
          {projects.map((project, index) => {
            const link = project.links[0]

            return (
              <li className="project" id={project.slug} key={project.slug}>
                <p className="project-index">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <div className="project-content">
                  <div className="project-title-row">
                    <h3>{project.title}</h3>
                    {link ? (
                      <a
                        href={link.href}
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label={`${link.label}: ${project.title}`}
                      >
                        {link.label} <span aria-hidden="true">↗</span>
                      </a>
                    ) : null}
                  </div>

                  <p className="project-meta">
                    {project.eyebrow} · {project.timeframe}
                    {project.status ? ` · ${project.status}` : ""}
                  </p>
                  <p className="project-summary">{project.summary}</p>
                  <p className="project-tech">
                    {project.technologies.join(" · ")}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>
      </section>

      <section className="section" id="about" aria-labelledby="about-title">
        <div className="section-heading">
          <p className="section-number">02</p>
          <h2 id="about-title">About &amp; toolkit</h2>
          <p>Tools change. Curiosity, care, and clear thinking do not.</p>
        </div>

        <div className="about-grid">
          <p className="about-copy">
            I enjoy turning ambiguous problems into calm, dependable products.
            My work moves between product design, frontend engineering, backend
            systems, and native Apple development.
          </p>

          <dl className="tool-list">
            <div>
              <dt>AI</dt>
              <dd><ToolItems tools={aiTools} /></dd>
            </div>
            <div>
              <dt>Engineering</dt>
              <dd><ToolItems tools={stack} /></dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <p className="section-number">03</p>
        <div>
          <h2 id="contact-title">Let&apos;s make something useful.</h2>
          <a href="mailto:thisisantonio_@outlook.com">
            thisisantonio_@outlook.com <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer>
        <span>Antonio Bolaina</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </main>
  )
}
