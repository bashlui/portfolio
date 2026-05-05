import { MapPin, Code2, Coffee, Rocket, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const experienceItems = [
  {
    title: "hackathons",
    body: "Participated in HackMTY and other regional competitions, leading cross-functional teams to deliver innovative solutions under tight deadlines.",
  },
  {
    title: "student orgs",
    body: "Building projects for student organizations — collaborating with peers and contributing to the wider campus community.",
  },
  {
    title: "team projects",
    body: "Cross-team collaboration has shaped how I communicate, set shared goals, and lift others up.",
  },
]

const approachItems = [
  {
    icon: Code2,
    color: "text-indigo-500 dark:text-indigo-400",
    bg: "bg-indigo-50 dark:bg-indigo-950/40",
    title: "clean code",
    body: "Code that's not just functional, but readable, maintainable, and efficient.",
  },
  {
    icon: Coffee,
    color: "text-amber-500 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/40",
    title: "collaboration",
    body: "Great software is built by great teams. Communication, feedback, and shared learning.",
  },
  {
    icon: Rocket,
    color: "text-orange-500 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-950/40",
    title: "innovation",
    body: "Always looking for new ways to solve problems and improve existing solutions.",
  },
]

export default function About() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-20">
          <p className="text-xs mb-4 tracking-widest uppercase text-muted-foreground">
            <span className="text-foreground font-bold">{'//'}</span> about
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
            get to know me.
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
            Beyond the code — music, outdoor adventures, and meaningful connections fuel my creativity.
            Guitar, piano, and a wide range of genres keep the balance.
          </p>
        </div>

        {/* Background + photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <div className="rounded-xl bg-card p-10">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <h2 className="text-sm font-bold tracking-widest uppercase text-foreground">background</h2>
            </div>
            <div className="space-y-5 text-sm text-muted-foreground leading-relaxed">
              <p>
                Pursuing a B.S. in Computer Science at Tecnológico de Monterrey, one of the most
                prestigious universities in Latin America. My focus: software engineering principles,
                algorithms, and system design.
              </p>
              <p>
                What drives me is the endless possibility to create solutions that make a real difference —
                web apps that simplify daily tasks, APIs that power innovative services. The craft matters.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-card p-10 flex flex-col items-center justify-center text-center">
            <div className="w-40 h-40 rounded-2xl overflow-hidden mb-5">
              <Image
                src="/ntonio.jpeg"
                alt="Antonio"
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm font-bold text-foreground mb-1">antonio</p>
            <p className="text-xs text-muted-foreground italic max-w-xs leading-relaxed">
              guitar, piano, and wide-ranging music taste.
              outdoors, friends, exploring new places.
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="rounded-xl bg-card p-10 mb-4">
          <p className="text-xs mb-8 tracking-widest uppercase text-muted-foreground">
            <span className="text-foreground font-bold">{'//'}</span> team experience &amp; leadership
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {experienceItems.map(({ title, body }) => (
              <div key={title}>
                <h3 className="text-sm font-bold text-foreground mb-3 tracking-wide">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Approach */}
        <div className="rounded-xl bg-card p-10 mb-16">
          <p className="text-xs mb-8 tracking-widest uppercase text-muted-foreground">
            <span className="text-foreground font-bold">{'//'}</span> my approach
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {approachItems.map(({ icon: Icon, color, bg, title, body }) => (
              <div key={title}>
                <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <h3 className="text-sm font-bold text-foreground mb-2 tracking-wide">{title}</h3>
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
            href="/projects"
            className="flex items-center justify-center gap-2 rounded-full bg-foreground text-background hover:bg-foreground/80 px-8 py-3 text-sm font-medium transition-colors"
          >
            projects <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </main>
  )
}
