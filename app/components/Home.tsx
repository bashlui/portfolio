"use client"

import { Code, Layers, GraduationCap, ArrowRight, Library } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [loadingLink, setLoadingLink] = useState<string | null>(null)
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="content-container">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Who Section */}
          <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-center mb-6">
                <h1 className="section-title text-left">who?</h1>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify font-open-sans">
                Hello! My name is Antonio, and I&apos;m a student at Tecnológico de Monterrey, 
                currently pursuing a B.S. in Computer Science. I&apos;m passionate about building 
                high-quality, impactful software solutions. My mission is to deliver outstanding 
                products through collaboration, continuous learning, and a strong focus on clean, 
                efficient code.
              </p>
            </div>
            <div className="flex justify-center mt-6">
              <GraduationCap className="w-8 h-8 text-muted-foreground" />
            </div>
          </div>

          {/* What Section */}
          <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-center mb-6">
                <h1 className="section-title text-left">focus?</h1>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify font-open-sans">
                I&apos;m currently focusing on full-stack development, gaining skills in front-end 
                frameworks like React and Astro, as well as back-end experience by developing 
                APIs and database management. For the future, I&apos;m also looking forward to 
                exploring data engineering and expanding my expertise in that domain.
              </p>
            </div>
            <div className="flex justify-center mt-6">
              <Code className="w-8 h-8 text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Skills Preview */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <h3 className="text-2xl font-merriweather font-light text-foreground">
                Tools
              </h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto font-open-sans">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Frontend */}
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-merriweather font-light text-foreground mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2 text-primary" />
                Frontend
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                  React
                </span>
                <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-3 py-1 rounded-full text-xs font-medium">
                  Astro
                </span>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                  Next.js
                </span>
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                  TypeScript
                </span>
                <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-medium">
                  Tailwind CSS
                </span>
              </div>
            </div>

            {/* Backend */}
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-merriweather font-light text-foreground mb-4 flex items-center">
                <Library className="w-5 h-5 mr-2 text-primary" />
                Backend
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-xs font-medium">
                  Node.js
                </span>
                <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-3 py-1 rounded-full text-xs font-medium">
                  Firebase
                </span>
                <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                  PostgreSQL
                </span>
                <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-medium">
                  Express.js
                </span>
                <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-3 py-1 rounded-full text-xs font-medium">
                  REST APIs
                </span>
              </div>
            </div>

            {/* Future Focus */}
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <h4 className="text-lg font-merriweather font-light text-foreground mb-4 flex items-center">
                <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                Exploring
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 px-3 py-1 rounded-full text-xs font-medium">
                  Data Engineering
                </span>
                <span className="bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 px-3 py-1 rounded-full text-xs font-medium">
                  Cloud Technologies
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-merriweather font-light text-foreground mb-8">
            Explore more about me
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/about" 
              onClick={() => setLoadingLink('/about')}
              className={`bg-card border border-border text-foreground px-8 py-4 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 font-medium group relative ${
                loadingLink === '/about' ? 'opacity-75 pointer-events-none' : ''
              }`}
            >
              <div className="flex items-center justify-center">
                {loadingLink === '/about' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                    <span>Loading...</span>
                  </>
                ) : (
                  <>
                    <span>Learn About Me</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </div>
            </Link>
            <Link 
              href="/projects" 
              onClick={() => setLoadingLink('/projects')}
              className={`bg-primary text-primary-foreground px-8 py-4 rounded-xl hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300 font-medium group relative ${
                loadingLink === '/projects' ? 'opacity-75 pointer-events-none' : ''
              }`}
            >
              <div className="flex items-center justify-center">
                {loadingLink === '/projects' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                    <span>Loading...</span>
                  </>
                ) : (
                  <>
                    <span>View My Projects</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}