export type ProjectLink = {
  label: "GitHub" | "Live site"
  href: string
}

export type Project = {
  slug: string
  title: string
  timeframe: string
  summary: string
  contribution: string
  impact: string
  resumeHighlights?: string[]
  technologies: string[]
  links: ProjectLink[]
  visual: "opsight" | "theos" | "brew" | "heatshield" | "cipheria"
  featured: boolean
  status?: "Ongoing"
  ai: {
    where: "product" | "practice"
    note: string
  }
}

export const projects: Project[] = [
  {
    slug: "opsight",
    title: "Opsight",
    timeframe: "2025",
    summary:
      "An iPad companion for airline catering teams. On-device vision reads a cart before the door closes, so verification is a look instead of a guess.",
    contribution:
      "Designed the confirmation flow around a YOLO detector running on-device with MLX and Apple Foundation Models, keeping a human in the loop when the model is unsure.",
    impact:
      "Turned a physical checklist into a focused interface that reduces waste without asking a caterer to trust a black box.",
    technologies: ["Swift", "ARKit", "MLX", "YOLO", "Apple Foundation"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/HackMTY-2025-GateGroup/opsight-app",
      },
    ],
    visual: "opsight",
    featured: true,
    ai: {
      where: "product",
      note: "The model lives in the product. I designed what the person sees when it is wrong.",
    },
  },
  {
    slug: "brew",
    title: "Brew",
    timeframe: "Now",
    summary:
      "A native iOS app for coffee producers in Chiapas to monitor coffee plot health.",
    contribution:
      "Built on-device plant disease detection with Core ML and translation from Spanish to Tsotsil with MLX.",
    impact:
      "Gave growers real-time agronomic recommendations and accessible information in an indigenous language.",
    resumeHighlights: [
      "Developed a native iOS app for Káapeh México so coffee producers in Chiapas can monitor and manage coffee plot health.",
      "Integrated a Core ML vision model for on-device plant disease detection and real-time agronomic recommendations.",
      "Used MLX for on-device translation from Spanish to Tsotsil.",
    ],
    technologies: ["Swift", "Core ML", "MLX"],
    links: [{ label: "GitHub", href: "https://github.com/brew-kafe/brew-app" }],
    visual: "brew",
    featured: true,
    ai: {
      where: "product",
      note: "On-device models support disease detection and translation for growers.",
    },
  },
  {
    slug: "theos-learning",
    title: "Theos Learning",
    timeframe: "2025",
    summary:
      "The API for a learning platform at GP Construcción: courses, auth, and analytics for hundreds of people at once.",
    contribution:
      "Built REST services in Node.js with Redis-backed sessions, using models as a daily drafting partner on the backend — not as a feature in the classroom.",
    impact:
      "Held 600 concurrent learners without making the product feel like infrastructure.",
    resumeHighlights: [
      "Developed and maintained the JavaScript/Node.js API backend for GP Construcción’s learning platform.",
      "Built REST APIs for authentication, course management, and learning analytics.",
      "Used Redis for session management and caching, improving performance for 600 concurrent users.",
    ],
    technologies: ["Node.js", "JavaScript", "Redis", "REST APIs"],
    links: [],
    visual: "theos",
    featured: true,
    ai: {
      where: "practice",
      note: "AI stayed in the studio. The product is still a learning system, not a chatbot.",
    },
  },
  {
    slug: "heatshield",
    title: "Heatshield",
    timeframe: "2025",
    summary:
      "Live heat, mapped to what you can actually do about it — shade, timing, a route that is less punishing.",
    contribution:
      "Built the SwiftUI experience on location and weather data. Models helped shape the information architecture, not the forecast.",
    impact:
      "Connected environmental data to a few clear actions instead of a wall of numbers.",
    resumeHighlights: [
      "Co-developed a SwiftUI app with heat safety alerts, shelter locations, and preparedness tools.",
      "Built a Cool Zones map with MapKit and CoreLocation for nearby shelters and Apple Maps navigation.",
      "Integrated OpenWeather for live heat index monitoring and SwiftData for on-device assessments and alerts.",
    ],
    technologies: ["Swift", "MapKit", "CoreLocation", "OpenWeather API"],
    links: [{ label: "GitHub", href: "https://github.com/bashlui/Heatshield-Swift" }],
    visual: "heatshield",
    featured: false,
    ai: {
      where: "practice",
      note: "Made with AI in the loop. The product itself is still weather, maps, and judgment.",
    },
  },
  {
    slug: "cipheria",
    title: "Cipheria",
    timeframe: "2025",
    summary:
      "A fast public face for an early-stage company — one place to understand the product and the brand.",
    contribution:
      "Designed, built, and shipped the site. Cursor and Claude were in the room for layout and copy; the company is not an AI product.",
    impact:
      "Gave a young team a destination that loads quickly and reads clearly.",
    resumeHighlights: [
      "Designed, built, and deployed a startup landing page with React and Firebase.",
      "Created reusable Tailwind CSS components to keep future features consistent.",
      "Worked with the founders through sprint planning and code reviews to align the site with their brand.",
    ],
    technologies: ["React", "Astro", "Tailwind CSS", "Firebase"],
    links: [{ label: "Live site", href: "https://cipheria.pro" }],
    visual: "cipheria",
    featured: false,
    ai: {
      where: "practice",
      note: "A site made with AI tools. Intelligence is not the product.",
    },
  },
]
