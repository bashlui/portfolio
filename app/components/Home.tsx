"use client"

import { Code, GraduationCap, ArrowRight, Library, MapPin, Coffee, Rocket, Code2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import BentoGrid from "./BentoGrid"

export default function Home() {
  const [loadingLink, setLoadingLink] = useState<string | null>(null)
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="content-container">
        
        {/* About Me Section - Integrated */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
            {/* Profile Card */}
            <div className="lg:col-span-5 bg-card border border-border rounded-xl p-8 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-muted mb-6">
                    <Image 
                        src="/ntonio.jpeg" 
                        alt="Antonio" 
                        width={192} 
                        height={192} 
                        className="w-full h-full object-cover"
                    />
                </div>
                <h2 className="text-2xl font-merriweather font-light text-foreground mb-2">Antonio</h2>
                <div className="flex items-center text-muted-foreground text-sm mb-6">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Monterrey, MX</span>
                </div>
                <p className="text-muted-foreground font-open-sans text-sm leading-relaxed mb-6">
                    Computer Science Student at Tecnológico de Monterrey. Passionate about building high-quality software solutions and exploring new technologies.
                </p>
                <div className="flex gap-4">
                    <a href="https://github.com/bashlui" target="_blank" rel="noopener noreferrer" className="p-2 bg-muted rounded-full hover:bg-foreground hover:text-background transition-colors">
                        <Code className="w-5 h-5" />
                    </a>
                    <a href="https://linkedin.com/in/luisbolaina" target="_blank" rel="noopener noreferrer" className="p-2 bg-muted rounded-full hover:bg-foreground hover:text-background transition-colors">
                         <GraduationCap className="w-5 h-5" />
                    </a>
                </div>
            </div>

            {/* Details Column */}
            <div className="lg:col-span-7 space-y-8">
                {/* Highlights */}
                <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                     <h3 className="text-lg font-merriweather font-light text-foreground mb-4">Experience & Leadership</h3>
                     <div className="space-y-4">
                        <div className="flex items-start">
                            <Rocket className="w-5 h-5 text-primary mr-3 mt-1" />
                            <div>
                                <h4 className="font-medium text-foreground">Hackathons</h4>
                                <p className="text-sm text-muted-foreground font-open-sans">
                                    Led diverse teams in competitions like HackMTY, developing innovative solutions under pressure.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Code2 className="w-5 h-5 text-primary mr-3 mt-1" />
                            <div>
                                <h4 className="font-medium text-foreground">Team Projects</h4>
                                <p className="text-sm text-muted-foreground font-open-sans">
                                    Collaborated on complex software engineering projects, focusing on clean architecture and scalable design.
                                </p>
                            </div>
                        </div>
                     </div>
                </div>

                {/* My Approach */}
                <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-lg font-merriweather font-light text-foreground mb-4">My Approach</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-2">
                             <div className="mx-auto w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-2">
                                <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                             </div>
                             <span className="text-sm font-medium">Clean Code</span>
                        </div>
                        <div className="text-center p-2">
                             <div className="mx-auto w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-2">
                                <Coffee className="w-5 h-5 text-green-600 dark:text-green-400" />
                             </div>
                             <span className="text-sm font-medium">Collaboration</span>
                        </div>
                        <div className="text-center p-2">
                             <div className="mx-auto w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mb-2">
                                <Rocket className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                             </div>
                             <span className="text-sm font-medium">Innovation</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Selected Projects */}
        <BentoGrid />

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
                  Go Language
                </span>
                <span className="bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 px-3 py-1 rounded-full text-xs font-medium">
                  Cloud Technologies
                </span>
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                  Kubernetes
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
                    <span>Detailed About Me</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </div>
            </Link>
          </div>
        </div>

        {/* Resume Button Section */}
        <div className="mt-12 text-center">
          <a
            href="/Antonio_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold shadow hover:bg-primary/90 transition-colors text-base"
          >
            View My Resume
          </a>
        </div>
      </div>
    </main>
  )
}