import { Github, ExternalLink, Calendar, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

const tagColors: Record<string, string> = {
  "Node.js": "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
  "JavaScript": "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800",
  "Redis": "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800",
  "RESTful APIs": "bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/40 dark:text-violet-300 dark:border-violet-800",
  "Swift": "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/40 dark:text-orange-300 dark:border-orange-800",
  "MapKit": "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800",
  "CoreLocation": "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800",
  "OpenWeatherAPI": "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/40 dark:text-cyan-300 dark:border-cyan-800",
  "React": "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/40 dark:text-cyan-300 dark:border-cyan-800",
  "Astro": "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800",
  "Tailwind CSS": "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/40 dark:text-teal-300 dark:border-teal-800",
  "Firebase": "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800",
  "Responsive Design": "bg-zinc-100 text-zinc-600 border-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:border-zinc-700",
  "MLX": "bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-950/40 dark:text-pink-300 dark:border-pink-800",
  "Apple Foundation": "bg-zinc-100 text-zinc-700 border-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-300 dark:border-zinc-700",
  "ARKit": "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800",
  "YOLO": "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800",
  "FastAPI": "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/40 dark:text-teal-300 dark:border-teal-800",
  "CoreData": "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800",
  "TypeScript": "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800",
  "Python": "bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950/40 dark:text-yellow-300 dark:border-yellow-800",
}

const defaultTag = "bg-zinc-50 text-zinc-600 border-zinc-200 dark:bg-zinc-900/40 dark:text-zinc-400 dark:border-zinc-700"

function Tag({ label }: { label: string }) {
  return (
    <span className={`border rounded-full px-3 py-0.5 text-[10px] font-medium tracking-wide ${tagColors[label] ?? defaultTag}`}>
      {label}
    </span>
  )
}

const projects = [
  {
    title: "Theos Learning",
    date: "November – December 2025",
    description: "Developed and maintained the API backend for the Theo Learning Platform, a comprehensive LMS built with JavaScript/Node.js for GP Construcción. Engineered RESTful APIs for authentication, course management, and learning analytics. Implemented Redis caching for session management supporting 600 concurrent users.",
    tags: ["Node.js", "JavaScript", "Redis", "RESTful APIs"],
    links: [] as { label: string; href: string; Icon: React.ComponentType<{ className?: string }> }[],
  },
  {
    title: "Heatshield",
    date: "June 2025",
    description: "SwiftUI application focused on sustainability and heat-related problems. Provides users with real-time insights and tools to manage heat exposure and promote sustainable practices.",
    tags: ["Swift", "MapKit", "CoreLocation", "OpenWeatherAPI"],
    links: [{ label: "github", href: "https://github.com/bashlui/Heatshield-Swift", Icon: Github }],
  },
  {
    title: "Cipheria Web",
    date: "July 2025",
    description: "Modern landing page for a startup built with cutting-edge web technologies. Features responsive design, optimized performance, and seamless deployment infrastructure.",
    tags: ["React", "Astro", "Tailwind CSS", "Firebase", "Responsive Design"],
    links: [{ label: "live", href: "https://cipheria.pro", Icon: ExternalLink }],
  },
  {
    title: "Opsight",
    date: "October 2025",
    description: "iOS/iPadOS application for Gategroup airline catering operations. Streamlines the complete catering workflow with batch management, waste reduction, and on-device computer vision for cart verification.",
    tags: ["MLX", "Apple Foundation", "ARKit", "Swift", "YOLO"],
    links: [{ label: "github", href: "https://github.com/HackMTY-2025-GateGroup/opsight-app", Icon: Github }],
  },
  {
    title: "Brew",
    date: "Coming soon",
    description: "Coffee brewing app that helps users discover new recipes, track their brewing habits, and improve their coffee-making skills through personalized AI recommendations.",
    tags: ["Swift", "MapKit", "FastAPI", "Apple Foundation", "CoreData"],
    links: [{ label: "github", href: "https://github.com/brew-kafe/brew-app", Icon: Github }],
  },
]

export default function Projects() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-20">
          <p className="text-xs mb-4 tracking-widest uppercase text-muted-foreground">
            <span className="text-foreground font-bold">{'//'}</span> projects
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-4">work.</h1>
          <p className="text-sm text-muted-foreground max-w-xl">
            A collection of projects showcasing skills and passion for building innovative solutions.
          </p>
        </div>

        {/* Project list */}
        <div className="mb-20">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`border-t border-border py-10 ${i === projects.length - 1 ? "border-b" : ""}`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-1">{project.title}</h2>
                  <div className="flex items-center text-xs text-muted-foreground gap-1.5">
                    <Calendar className="w-3 h-3" />
                    <span>{project.date}</span>
                  </div>
                </div>
                {project.links.length > 0 && (
                  <div className="flex gap-2 shrink-0">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-full border border-border text-muted-foreground hover:border-foreground hover:text-foreground px-4 py-1.5 text-[10px] tracking-wider uppercase transition-colors"
                      >
                        <link.Icon className="w-3 h-3" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-3xl">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => <Tag key={tag} label={tag} />)}
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy */}
        <div className="rounded-xl bg-card p-10 mb-16">
          <p className="text-xs mb-8 tracking-widest uppercase text-muted-foreground">
            <span className="text-foreground font-bold">{'//'}</span> philosophy
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "purpose-driven", body: "Every project serves a real purpose and addresses genuine problems or learning goals." },
              { title: "quality first", body: "Focused on writing clean, maintainable code with proper documentation and testing." },
              { title: "continuous learning", body: "Each project is an opportunity to learn new technologies and sharpen existing skills." },
            ].map(({ title, body }) => (
              <div key={title}>
                <h3 className="text-sm font-bold text-foreground mb-3 tracking-wide">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 rounded-full border border-border text-muted-foreground hover:bg-muted hover:text-foreground px-8 py-3 text-sm transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> home
          </Link>
          <Link
            href="/about"
            className="flex items-center justify-center gap-2 rounded-full bg-foreground text-background hover:bg-foreground/80 px-8 py-3 text-sm font-medium transition-colors"
          >
            about <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </main>
  )
}
