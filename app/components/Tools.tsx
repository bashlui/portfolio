import type { CSSProperties } from "react"

const toolGroups = [
  {
    id: "ai-tools",
    title: "AI tools",
    tools: [
      { name: "Cursor", icon: "cursor" },
      { name: "Claude", icon: "claude" },
      { name: "ChatGPT", icon: "openai" },
    ],
  },
  {
    id: "interface-tools",
    title: "Design & interfaces",
    tools: [
      { name: "Figma", icon: "figma" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Swift", icon: "swift" },
    ],
  },
  {
    id: "backend-tools",
    title: "Backend & infrastructure",
    tools: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Python", icon: "python" },
      { name: "Redis", icon: "redis" },
      { name: "Firebase", icon: "firebase" },
      { name: "Docker", icon: "docker" },
    ],
  },
] as const

export default function Tools() {
  return (
    <section className="tools" id="tools" aria-labelledby="tools-title">
      <h2 id="tools-title">Tools I use</h2>
      <div className="tool-groups">
        {toolGroups.map((group) => (
          <section className="tool-group" key={group.id} aria-labelledby={group.id}>
            <h3 id={group.id}>{group.title}</h3>
            <ul>
              {group.tools.map((tool) => (
                <li key={tool.name}>
                  <span
                    className="tool-icon"
                    style={{ "--tool-icon": `url(/tool-logos/${tool.icon}.svg)` } as CSSProperties}
                    aria-hidden="true"
                  />
                  <span>{tool.name}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  )
}
