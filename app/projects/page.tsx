import {
  ExternalLink,
  Github,
  Calendar,
  Tag,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="min-h-screen">
      <div className="content-container">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <h1 className="section-title">my projects</h1>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Portfolio Website */}
          <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                  <h2 className="text-xl font-merriweather font-light text-foreground">
                    FSAE TEC Web
                  </h2>
                </div>
                <div className="flex space-x-2">
                  <a
                    href="https://fsae-web-ten.vercel.app/"
                    className="p-2 bg-muted rounded-lg hover:bg-accent transition-colors"
                    title="View Live"
                  >
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </a>
                  <a
                    href="https://github.com/bashlui/fsae-web"
                    className="p-2 bg-muted rounded-lg hover:bg-accent transition-colors"
                    title="View Code"
                  >
                    <Github className="w-4 h-4 text-muted-foreground" />
                  </a>
                </div>
              </div>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify mb-6 font-open-sans">
                A modern, responsive page website built with Next.js and
                TypeScript. Features dark/light theme support, smooth
                animations, and a clean design system. Showcases the FSAE Tec
                racing club, highlighting its members, projects, and events.
              </p>

              {/** Status */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-merriweather font-light text-foreground">
                  Status
                </h3>
                <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-3 py-1 rounded-full text-xs font-medium">
                  In progress
                </span>
              </div>

              <div className="flex items-center text-xs text-muted-foreground mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>June - July 2025</span>
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
          </div>

          {/* Coming Soon Project 1 */}
          <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
                  <h2 className="text-xl font-merriweather font-light text-foreground">
                    Heatshield
                  </h2>
                </div>
                <div className="flex space-x-2">
                  <a
                    href="https://github.com/bashlui/Heatshield-Swift"
                    className="p-2 bg-muted rounded-lg hover:bg-accent transition-colors"
                    title="View Code"
                  >
                    <Github className="w-4 h-4 text-muted-foreground" />
                  </a>
                </div>
              </div>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify mb-6 font-open-sans">
                SwiftUI application focused on sustainabilty and heat related
                problems. This app aims to provide users with insights and tools
                to manage heat exposure and promote sustainable practices.
              </p>

              {/** Status */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-merriweather font-light text-foreground">
                  Status
                </h3>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-xs font-medium">
                  Completed
                </span>
              </div>

              <div className="flex items-center text-xs text-muted-foreground mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>June 2025</span>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-xs font-medium">
                  SwiftUI
                </span>
                <span className="bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 px-3 py-1 rounded-full text-xs font-medium">
                  MapKit
                </span>
                <span className="bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 px-3 py-1 rounded-full text-xs font-medium">
                  CoreLocation
                </span>
                <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-3 py-1 rounded-full text-xs font-medium">
                  OpenWeatherAPI
                </span>
              </div>
            </div>
          </div>

           
            {/* Cipheria Web */}
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                    <h2 className="text-xl font-merriweather font-light text-foreground">
                      Cipheria Web
                    </h2>
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href="https://cipheria.pro"
                      className="p-2 bg-muted rounded-lg hover:bg-accent transition-colors opacity-50"
                      title="Live Site"
                    >
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </a>
                  </div>
                </div>

                <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify mb-6 font-open-sans">
                  Cipheria Web is a modern landing page for a startup company built with cutting-edge web technologies. The site features responsive design, optimized performance, and seamless deployment infrastructure.
                </p>

                {/** Status */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-merriweather font-light text-foreground">
                    Status
                  </h3>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-xs font-medium">
                    Complete - Updates ongoing
                  </span>
                </div>

                <div className="flex items-center text-xs text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>July 2025</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                    React
                  </span>
                  <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-medium">
                    Astro
                  </span>
                  <span className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 px-3 py-1 rounded-full text-xs font-medium">
                    Tailwind CSS
                  </span>
                  <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-3 py-1 rounded-full text-xs font-medium">
                    Firebase
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                    Responsive Design
                  </span>
                </div>
              </div>
            </div>

          {/* Go Flow Backend API */}
          <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-700 rounded-full mr-3"></div>
                  <h2 className="text-xl font-merriweather font-light text-foreground">
                    Go Flow Backend API
                  </h2>
                </div>
                <div className="flex space-x-2">
                  <a
                    href="https://github.com/bashlui/go-flow"
                    className="p-2 bg-muted rounded-lg hover:bg-accent transition-colors"
                    title="View Code"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 text-muted-foreground" />
                  </a>
                </div>
              </div>
              <h3 className="text-lg font-merriweather font-light text-foreground mb-2">
                Overview
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify mb-4 font-open-sans">
                Go Flow is a backend API built with Go that provides real-time
                financial market insights. The API ingests live stock data and
                news headlines to deliver timely information to users.
              </p>
              <h3 className="text-lg font-merriweather font-light text-foreground mb-2">
                Features
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground mb-4 font-open-sans">
                <li>Real-time financial market insights</li>
                <li>Live stock data ingestion</li>
              </ul>
              <h3 className="text-lg font-merriweather font-light text-foreground mb-2">
                Development Status
              </h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300 font-open-sans mb-4">
                This project is currently under development. Stay tuned for
                updates as we continue to enhance and expand its features.
              </p>
              <h3 className="text-lg font-merriweather font-light text-foreground mb-2">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                  Go
                </span>
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                  Docker
                </span>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-xs font-medium">
                  PostgreSQL
                </span>
                <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-medium">
                  GitHub Actions
                </span>
                <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-3 py-1 rounded-full text-xs font-medium">
                  REST API
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Philosophy */}
        <div className="bg-card border border-border rounded-xl p-8 mb-12">
          <div className="flex items-center justify-center mb-6">
            <Tag className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-2xl font-merriweather font-light text-foreground">
              My Project Philosophy
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-merriweather font-light text-foreground mb-3">
                Purpose-Driven
              </h3>
              <p className="text-sm text-muted-foreground font-open-sans">
                Every project I build serves a real purpose and addresses
                genuine problems or learning goals.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-merriweather font-light text-foreground mb-3">
                Quality First
              </h3>
              <p className="text-sm text-muted-foreground font-open-sans">
                I focus on writing clean, maintainable code with proper
                documentation and testing.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-merriweather font-light text-foreground mb-3">
                Continuous Learning
              </h3>
              <p className="text-sm text-muted-foreground font-open-sans">
                Each project is an opportunity to learn new technologies and
                improve my skills.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-20 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-card border border-border text-foreground px-8 py-4 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 font-medium group"
            >
              <div className="flex items-center justify-center">
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:translate-x-[-4px] transition-transform" />
                <span>Back to Home</span>
              </div>
            </Link>
            <Link
              href="/about"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300 font-medium group"
            >
              <div className="flex items-center justify-center">
                <span>About Me</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
