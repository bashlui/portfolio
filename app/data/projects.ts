export type ProjectLink = {
  label: "GitHub" | "Live site"
  href: string
}

export type Project = {
  slug: string
  title: string
  timeframe: string
  eyebrow: string
  summary: string
  contribution: string
  impact: string
  technologies: string[]
  links: ProjectLink[]
  visual: "opsight" | "theos" | "brew" | "heatshield" | "cipheria"
  featured: boolean
  status?: "Ongoing"
}

export const projects: Project[] = [
  {
    slug: "opsight",
    title: "Opsight",
    timeframe: "October 2025",
    eyebrow: "Computer vision · iPadOS",
    summary:
      "An operational companion for airline catering teams, designed to make cart verification faster and more dependable.",
    contribution:
      "Built an iOS and iPadOS workflow that combines batch management, ARKit, and on-device computer vision.",
    impact:
      "Turned a complex physical verification process into a focused interface for reducing waste and operational friction.",
    technologies: ["Swift", "ARKit", "MLX", "YOLO", "Apple Foundation"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/HackMTY-2025-GateGroup/opsight-app",
      },
    ],
    visual: "opsight",
    featured: true,
  },
  {
    slug: "theos-learning",
    title: "Theos Learning",
    timeframe: "November — December 2025",
    eyebrow: "Backend systems · Learning",
    summary:
      "The API foundation for a learning platform built for GP Construcción, supporting courses, authentication, and learning analytics.",
    contribution:
      "Developed and maintained RESTful services in Node.js, including authentication, course management, and Redis-backed sessions.",
    impact:
      "Engineered the platform to support 600 concurrent users while keeping the learning experience responsive.",
    technologies: ["Node.js", "JavaScript", "Redis", "REST APIs"],
    links: [],
    visual: "theos",
    featured: true,
  },
  {
    slug: "brew",
    title: "Brew",
    timeframe: "In development",
    eyebrow: "Personal product · iOS",
    summary:
      "A thoughtful brewing companion for discovering recipes, building better habits, and making every cup more intentional.",
    contribution:
      "Designing a native Swift experience with recipe tracking, location-aware discovery, and personalized AI guidance.",
    impact:
      "Explores how software can make a familiar daily ritual feel more personal without adding unnecessary complexity.",
    technologies: ["Swift", "CoreData", "FastAPI", "MapKit", "Apple Foundation"],
    links: [{ label: "GitHub", href: "https://github.com/brew-kafe/brew-app" }],
    visual: "brew",
    featured: true,
    status: "Ongoing",
  },
  {
    slug: "heatshield",
    title: "Heatshield",
    timeframe: "June 2025",
    eyebrow: "Climate · Native iOS",
    summary:
      "Real-time heat insights and practical tools that help people manage exposure and make more sustainable choices.",
    contribution: "Built the SwiftUI experience around location and live weather data.",
    impact: "Connected environmental information to clear, everyday actions.",
    technologies: ["Swift", "MapKit", "CoreLocation", "OpenWeather API"],
    links: [{ label: "GitHub", href: "https://github.com/bashlui/Heatshield-Swift" }],
    visual: "heatshield",
    featured: false,
  },
  {
    slug: "cipheria",
    title: "Cipheria Web",
    timeframe: "July 2025",
    eyebrow: "Web · Startup",
    summary:
      "A fast, responsive landing experience that gives an early-stage company a clear digital presence.",
    contribution: "Built and deployed the responsive interface and supporting web infrastructure.",
    impact: "Created a focused destination for communicating the product and brand.",
    technologies: ["React", "Astro", "Tailwind CSS", "Firebase"],
    links: [{ label: "Live site", href: "https://cipheria.pro" }],
    visual: "cipheria",
    featured: false,
  },
]
