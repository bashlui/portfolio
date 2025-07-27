import { FolderOpen, ExternalLink, Github, Calendar, Tag } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  return (
    <main className="min-h-screen">
      <div className="content-container">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <FolderOpen className="w-12 h-12 text-primary mr-4" />
            <h1 className="section-title">my projects</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development journey and the solutions I&apos;ve built
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          
          {/* Portfolio Website */}
          <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <h2 className="text-xl font-merriweather font-light text-foreground">Portfolio Website</h2>
              </div>
              <div className="flex space-x-2">
                <a 
                  href="#" 
                  className="p-2 bg-muted rounded-lg hover:bg-accent transition-colors"
                  title="View Live"
                >
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-muted rounded-lg hover:bg-accent transition-colors"
                  title="View Code"
                >
                  <Github className="w-4 h-4 text-muted-foreground" />
                </a>
              </div>
            </div>
            
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify mb-6 font-open-sans">
              A modern, responsive portfolio website built with Next.js and TypeScript. Features 
              dark/light theme support, smooth animations, and a clean design system. Showcases 
              my skills, projects, and professional journey in an interactive format.
            </p>
            
            <div className="flex items-center text-xs text-muted-foreground mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              <span>January 2025</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                Next.js
              </span>
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                TypeScript
              </span>
              <span className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 px-3 py-1 rounded-full text-xs font-medium">
                Tailwind CSS
              </span>
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                Responsive Design
              </span>
            </div>
          </div>

          {/* Coming Soon Project 1 */}
          <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-3 py-1 rounded-full text-xs font-medium">
                In Progress
              </span>
            </div>
            
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
              <h2 className="text-xl font-merriweather font-light text-foreground">Task Management API</h2>
            </div>
            
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify mb-6 font-open-sans">
              A RESTful API for task management with user authentication, CRUD operations, 
              and real-time updates. Built with modern backend technologies and following 
              best practices for API design and security.
            </p>
            
            <div className="flex items-center text-xs text-muted-foreground mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Expected: February 2025</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-xs font-medium">
                Node.js
              </span>
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                Express.js
              </span>
              <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-medium">
                MongoDB
              </span>
              <span className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-3 py-1 rounded-full text-xs font-medium">
                JWT Auth
              </span>
            </div>
          </div>

          {/* Coming Soon Project 2 */}
          <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                Planning
              </span>
            </div>
            
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              <h2 className="text-xl font-merriweather font-light text-foreground">Data Analytics Dashboard</h2>
            </div>
            
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify mb-6 font-chivo-mono">
              An interactive dashboard for data visualization and analytics. Features real-time 
              data processing, interactive charts, and customizable reporting. Perfect for 
              exploring my interest in data engineering.
            </p>
            
            <div className="flex items-center text-xs text-muted-foreground mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Expected: March 2025</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                React
              </span>
              <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-3 py-1 rounded-full text-xs font-medium">
                Python
              </span>
              <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-xs font-medium">
                FastAPI
              </span>
              <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 px-3 py-1 rounded-full text-xs font-medium">
                Data Visualization
              </span>
            </div>
          </div>

          {/* Coming Soon Project 3 */}
          <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-medium">
                Concept
              </span>
            </div>
            
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
              <h2 className="text-xl font-merriweather font-light text-foreground">ML Learning Platform</h2>
            </div>
            
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify mb-6 font-open-sans">
              An educational platform for machine learning concepts with interactive tutorials, 
              code examples, and practical exercises. Combines my passion for learning with 
              my goal to explore machine learning and data science.
            </p>
            
            <div className="flex items-center text-xs text-muted-foreground mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Expected: Q2 2025</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-3 py-1 rounded-full text-xs font-medium">
                Astro
              </span>
              <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-3 py-1 rounded-full text-xs font-medium">
                Python
              </span>
              <span className="bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 px-3 py-1 rounded-full text-xs font-medium">
                Machine Learning
              </span>
              <span className="bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 px-3 py-1 rounded-full text-xs font-medium">
                Interactive Learning
              </span>
            </div>
          </div>
        </div>

        {/* Project Philosophy */}
        <div className="bg-card border border-border rounded-xl p-8 mb-12">
          <div className="flex items-center justify-center mb-6">
            <Tag className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-2xl font-merriweather font-light text-foreground">My Project Philosophy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-merriweather font-light text-foreground mb-3">Purpose-Driven</h3>
              <p className="text-sm text-muted-foreground font-open-sans">
                Every project I build serves a real purpose and addresses genuine problems or learning goals.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-merriweather font-light text-foreground mb-3">Quality First</h3>
              <p className="text-sm text-muted-foreground font-open-sans">
                I focus on writing clean, maintainable code with proper documentation and testing.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-merriweather font-light text-foreground mb-3">Continuous Learning</h3>
              <p className="text-sm text-muted-foreground font-open-sans">
                Each project is an opportunity to learn new technologies and improve my skills.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center space-x-4">
          <Link 
            href="/" 
            className="bg-muted text-muted-foreground px-6 py-3 rounded-xl hover:bg-accent hover:text-accent-foreground transition-colors font-medium"
          >
            ← Back to Home
          </Link>
          <Link 
            href="/about" 
            className="bg-primary text-primary-foreground px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors font-medium"
          >
            About Me →
          </Link>
        </div>
      </div>
    </main>
  )
}
