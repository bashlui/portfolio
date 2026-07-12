"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ExternalLink } from "lucide-react"
import { projects, type Project } from "../data/projects"

type Cwd = "~" | "~/projects" | "~/skills" | "~/contact"

type Output =
  | { kind: "help" }
  | { kind: "listing"; cwd: Cwd }
  | { kind: "about" }
  | { kind: "projects" }
  | { kind: "project"; project: Project }
  | { kind: "skills" }
  | { kind: "contact" }
  | { kind: "history"; commands: string[] }
  | { kind: "text"; text: string }
  | { kind: "error"; text: string }

type Entry = {
  id: number
  command: string
  cwd: Cwd
  output: Output
}

const commands = ["help", "ls", "pwd", "whoami", "about", "projects", "skills", "contact", "resume", "history", "date", "clear"]

const helpCommands = [
  ["help", "show every available command"],
  ["ls", "list files in the current directory"],
  ["cd <dir>", "move between portfolio directories"],
  ["cat <file>", "read a profile or project file"],
  ["whoami", "read my background and point of view"],
  ["projects", "list selected engineering work"],
  ["skills", "inspect my engineering toolkit"],
  ["contact", "show contact and social links"],
  ["resume", "open my résumé in a new tab"],
  ["history", "show commands from this session"],
  ["clear", "clear the terminal output"],
]

const directoryFiles: Record<Cwd, Array<{ name: string; command: string; type: "dir" | "file" }>> = {
  "~": [
    { name: "projects/", command: "cd projects", type: "dir" },
    { name: "skills/", command: "cd skills", type: "dir" },
    { name: "contact/", command: "cd contact", type: "dir" },
    { name: "about.md", command: "cat about.md", type: "file" },
    { name: "resume.pdf", command: "resume", type: "file" },
  ],
  "~/projects": projects.map((project) => ({ name: `${project.slug}.md`, command: `cat ${project.slug}.md`, type: "file" })),
  "~/skills": [{ name: "toolkit.json", command: "cat toolkit.json", type: "file" }],
  "~/contact": [
    { name: "email.txt", command: "cat email.txt", type: "file" },
    { name: "links.json", command: "cat links.json", type: "file" },
  ],
}

function Prompt({ cwd }: { cwd: Cwd }) {
  return (
    <span className="terminal-prompt" aria-hidden="true">
      <span>antonio@portfolio</span><em>{cwd}</em><b>%</b>
    </span>
  )
}

function TerminalOutput({ output, run }: { output: Output; run: (command: string) => void }) {
  if (output.kind === "help") {
    return (
      <div className="terminal-help">
        {helpCommands.map(([command, description]) => (
          <button key={command} onClick={() => run(command.split(" ")[0])}>
            <code>{command}</code><span>{description}</span>
          </button>
        ))}
      </div>
    )
  }

  if (output.kind === "listing") {
    return (
      <div className="terminal-listing">
        {directoryFiles[output.cwd].map((file) => (
          <button className={file.type === "dir" ? "is-directory" : ""} key={file.name} onClick={() => run(file.command)}>
            {file.name}
          </button>
        ))}
      </div>
    )
  }

  if (output.kind === "about") {
    return (
      <div className="terminal-about terminal-panel">
        <p className="terminal-meta">ABOUT.MD</p>
        <h2>I engineer ideas into purposeful experiences.</h2>
        <p>I&apos;m Antonio—Toño to the people close to me—a Computer Science student at Tecnológico de Monterrey.</p>
        <p>I&apos;m drawn to the point where rigorous engineering meets visual clarity: software that solves a real problem and feels natural in someone&apos;s hands.</p>
        <div className="terminal-facts"><span>Monterrey, MX</span><span>Software Engineering</span><span>AI Engineering</span></div>
      </div>
    )
  }

  if (output.kind === "projects") {
    return (
      <div className="terminal-project-grid">
        {projects.map((project, index) => (
          <button key={project.slug} onClick={() => run(`cat ${project.slug}.md`)}>
            <span>0{index + 1}</span>
            <strong>{project.title}</strong>
            <small>{project.eyebrow}</small>
            <code>{project.slug}.md</code>
          </button>
        ))}
      </div>
    )
  }

  if (output.kind === "project") {
    const project = output.project
    return (
      <article className="terminal-project terminal-panel">
        <header><div><p className="terminal-meta">{project.slug}.md · {project.timeframe}</p><h2>{project.title}</h2></div>{project.status && <span>{project.status}</span>}</header>
        <p className="terminal-project__summary">{project.summary}</p>
        <dl>
          <div><dt>Contribution</dt><dd>{project.contribution}</dd></div>
          <div><dt>Outcome</dt><dd>{project.impact}</dd></div>
        </dl>
        <ul>{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
        {project.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}<ExternalLink aria-hidden="true" /></a>)}
      </article>
    )
  }

  if (output.kind === "skills") {
    return (
      <div className="terminal-skills terminal-panel">
        <p className="terminal-meta">TOOLKIT.JSON</p>
        {[
          ["languages", "TypeScript · JavaScript · Python · Swift · Node.js"],
          ["frameworks", "React · Next.js · Astro · FastAPI · Redis · Firebase · Docker"],
          ["product", "GitHub · Figma · Linear · Postman · Xcode · Vercel · Obsidian"],
          ["ai_workflow", "ChatGPT · Claude Code · OpenCode · Cursor · MCP"],
        ].map(([label, value]) => <div key={label}><span>&quot;{label}&quot;:</span><p>&quot;{value}&quot;</p></div>)}
      </div>
    )
  }

  if (output.kind === "contact") {
    return (
      <div className="terminal-contact terminal-panel">
        <p className="terminal-meta">CONTACT/</p>
        <h2>Let&apos;s build something worth remembering.</h2>
        <a href="mailto:thisisantonio_@outlook.com">thisisantonio_@outlook.com<ExternalLink aria-hidden="true" /></a>
        <div><a href="https://www.linkedin.com/in/luisbolaina/" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="https://github.com/bashlui" target="_blank" rel="noopener noreferrer">GitHub</a><a href="/Antonio_Resume.pdf" target="_blank" rel="noopener noreferrer">Résumé</a></div>
      </div>
    )
  }

  if (output.kind === "history") {
    return <ol className="terminal-history-list">{output.commands.map((command, index) => <li key={`${command}-${index}`}><span>{index + 1}</span>{command}</li>)}</ol>
  }

  return <p className={output.kind === "error" ? "terminal-message is-error" : "terminal-message"}>{output.text}</p>
}

export default function TerminalPortfolio() {
  const [cwd, setCwd] = useState<Cwd>("~")
  const [input, setInput] = useState("")
  const [entries, setEntries] = useState<Entry[]>([])
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const outputRef = useRef<HTMLDivElement>(null)
  const idRef = useRef(1)
  const initializedRef = useRef(false)

  const runCommand = useCallback((rawCommand: string) => {
    const command = rawCommand.trim()
    if (!command) return

    const [baseRaw, ...args] = command.split(/\s+/)
    const base = baseRaw.toLowerCase()
    const argument = args.join(" ").toLowerCase()
    const commandCwd = cwd
    let output: Output

    if (base === "clear") {
      setEntries([])
      setCommandHistory((history) => [...history, command])
      setInput("")
      setHistoryIndex(-1)
      return
    }

    if (base === "help") output = { kind: "help" }
    else if (base === "ls") output = { kind: "listing", cwd }
    else if (base === "pwd") output = { kind: "text", text: `/home/antonio${cwd === "~" ? "" : cwd.slice(1)}` }
    else if (base === "whoami" || base === "about") output = { kind: "about" }
    else if (base === "projects") output = { kind: "projects" }
    else if (base === "skills") output = { kind: "skills" }
    else if (base === "contact") output = { kind: "contact" }
    else if (base === "history") output = { kind: "history", commands: [...commandHistory, command] }
    else if (base === "date") output = { kind: "text", text: new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" }) }
    else if (base === "resume") {
      window.open("/Antonio_Resume.pdf", "_blank", "noopener,noreferrer")
      output = { kind: "text", text: "Opening resume.pdf in a new tab…" }
    } else if (base === "cd") {
      const target = argument.replace(/\/$/, "")
      const targetMap: Record<string, Cwd> = {
        "": "~", "~": "~", "/": "~", "..": "~",
        projects: "~/projects", "~/projects": "~/projects", "/projects": "~/projects",
        skills: "~/skills", "~/skills": "~/skills", "/skills": "~/skills",
        contact: "~/contact", "~/contact": "~/contact", "/contact": "~/contact",
      }
      const nextCwd = targetMap[target]
      if (nextCwd) {
        setCwd(nextCwd)
        output = { kind: "listing", cwd: nextCwd }
      } else output = { kind: "error", text: `cd: no such directory: ${argument}` }
    } else if (base === "cat") {
      const file = argument.replace(/^\.\//, "")
      const projectSlug = file.replace(/^projects\//, "").replace(/\.md$/, "")
      const project = projects.find((item) => item.slug === projectSlug)
      if (file === "about.md" || file === "~/about.md") output = { kind: "about" }
      else if (file === "toolkit.json" && cwd === "~/skills") output = { kind: "skills" }
      else if ((file === "email.txt" || file === "links.json") && cwd === "~/contact") output = { kind: "contact" }
      else if (project && (cwd === "~/projects" || file.startsWith("projects/") || projects.some((item) => `${item.slug}.md` === file))) output = { kind: "project", project }
      else output = { kind: "error", text: `cat: ${argument || "missing file operand"}: No such file` }
    } else if (base === "open") {
      const project = projects.find((item) => item.slug === argument.replace(/\.md$/, ""))
      const link = project?.links[0]
      if (link) {
        window.open(link.href, "_blank", "noopener,noreferrer")
        output = { kind: "text", text: `Opening ${project.title}…` }
      } else output = { kind: "error", text: `open: no external destination for ${argument}` }
    } else if (base === "echo") output = { kind: "text", text: args.join(" ") }
    else output = { kind: "error", text: `command not found: ${base}. Type 'help' to see available commands.` }

    setEntries((current) => [...current, { id: idRef.current++, command, cwd: commandCwd, output }])
    setCommandHistory((history) => [...history, command])
    setInput("")
    setHistoryIndex(-1)
  }, [commandHistory, cwd])

  useEffect(() => {
    outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight, behavior: "smooth" })
  }, [entries])

  useEffect(() => {
    if (initializedRef.current) return
    initializedRef.current = true
    const initialCommand = new URLSearchParams(window.location.search).get("command")
    if (initialCommand) runCommand(initialCommand)
  }, [runCommand])

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") runCommand(input)
    else if (event.key === "ArrowUp") {
      event.preventDefault()
      if (!commandHistory.length) return
      const nextIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex
      setHistoryIndex(nextIndex)
      setInput(commandHistory[commandHistory.length - 1 - nextIndex] ?? "")
    } else if (event.key === "ArrowDown") {
      event.preventDefault()
      const nextIndex = historyIndex - 1
      setHistoryIndex(nextIndex)
      setInput(nextIndex >= 0 ? commandHistory[commandHistory.length - 1 - nextIndex] ?? "" : "")
    } else if (event.key === "Tab") {
      event.preventDefault()
      const candidates = [...commands, ...directoryFiles[cwd].map((file) => file.name.replace(/\/$/, ""))]
      const match = candidates.find((candidate) => candidate.startsWith(input.toLowerCase()))
      if (match) setInput(match)
    } else if (event.key.toLowerCase() === "l" && (event.ctrlKey || event.metaKey)) {
      event.preventDefault()
      runCommand("clear")
    }
  }

  return (
    <main className="terminal-page" onClick={() => inputRef.current?.focus()}>
      <section className="terminal-shell" aria-label="Antonio's interactive portfolio terminal">
        <header className="terminal-chrome">
          <div className="terminal-controls" aria-hidden="true"><span /><span /><span /></div>
          <p>antonio — portfolio — 80×24</p>
        </header>

        <div className="terminal-output" ref={outputRef} aria-live="polite">
          {entries.map((entry) => (
            <div className="terminal-entry" key={entry.id}>
              {entry.command && <div className="terminal-command"><Prompt cwd={entry.cwd} /><span>{entry.command}</span></div>}
              <TerminalOutput output={entry.output} run={runCommand} />
            </div>
          ))}
          <div className="terminal-input-row">
            <Prompt cwd={cwd} />
            <input
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              autoCapitalize="none"
              autoComplete="off"
              spellCheck={false}
              aria-label="Terminal command"
            />
          </div>
        </div>

        <div className="terminal-quick" aria-label="Quick commands">
          {["help", "ls", "whoami", "projects", "skills", "contact"].map((command) => <button key={command} onClick={(event) => { event.stopPropagation(); runCommand(command) }}>{command}</button>)}
        </div>

      </section>
    </main>
  )
}
