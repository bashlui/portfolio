"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { projects, type Project } from "../data/projects"

function ProjectLinks({ project }: { project: Project }) {
  return project.links.map((link) => {
    const Icon = link.label === "GitHub" ? Github : ExternalLink
    return (
      <a className="work-project-link" href={link.href} rel="noopener noreferrer" target="_blank" key={link.href} aria-label={`${project.title} — ${link.label}`}>
        <span className="work-project-link-label" aria-hidden="true">{link.label}</span>
        <Icon className="work-project-link-icon" aria-hidden="true" size={18} strokeWidth={1.8} />
      </a>
    )
  })
}

export default function Work() {
  const [expanded, setExpanded] = useState<string | null>(null)
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
  }, [])

  const cancelHover = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
    hoverTimer.current = null
  }

  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <h2 id="work-title">Selected work</h2>
      <ul className="work-index">
        {projects.map((project) => {
          const isExpanded = expanded === project.slug
          return (
            <li
              id={project.slug}
              className="work-item"
              key={project.slug}
              onPointerEnter={(event) => {
                if (event.pointerType !== "mouse") return
                cancelHover()
                hoverTimer.current = setTimeout(() => setExpanded(project.slug), 1000)
              }}
              onPointerLeave={(event) => {
                if (event.pointerType !== "mouse") return
                cancelHover()
                if (!event.currentTarget.contains(document.activeElement)) setExpanded(null)
              }}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setExpanded(null)
              }}
            >
              <h3>
                <button
                  className="work-toggle"
                  type="button"
                  aria-expanded={isExpanded}
                  aria-controls={`${project.slug}-details`}
                  onClick={() => { cancelHover(); setExpanded(isExpanded ? null : project.slug) }}
                >
                  {project.title}
                </button>
              </h3>
              <div className="work-details" data-expanded={isExpanded}>
                <div className="work-details-inner" id={`${project.slug}-details`} aria-hidden={!isExpanded} inert={!isExpanded}>
                  <div className="work-details-content">
                    <div className="work-copy">
                      <p>{project.summary}</p>
                      <ul className="work-highlights">
                        {(project.resumeHighlights ?? [project.contribution, project.impact]).map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                    <ProjectLinks project={project} />
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
