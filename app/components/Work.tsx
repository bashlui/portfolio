import { projects, type Project } from "../data/projects"

function ProjectLink({ project }: { project: Project }) {
  const link = project.links[0]

  if (!link) {
    return null
  }

  return (
    <a href={link.href} rel="noopener noreferrer" target="_blank">
      {link.label}
    </a>
  )
}

export default function Work() {
  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <h2 id="work-title">Selected work</h2>
      <ul className="work-index">
        {projects.map((project) => (
          <li id={project.slug} key={project.slug}>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <ProjectLink project={project} />
          </li>
        ))}
      </ul>
    </section>
  )
}
