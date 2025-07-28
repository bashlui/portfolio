"use client"

import { Github, Linkedin, Mail, Heart, MapPin, Calendar } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted border-t border-border mt-16">
      <div className="max-w-6xl mx-auto py-8 px-6">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center md:justify-between text-center md:text-left mb-8 gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-tinos font-bold text-foreground mb-1">
              aNtonio
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Computer Science Student & Developer
            </p>
            <div className="flex items-center justify-center md:justify-start text-xs text-muted-foreground space-x-3">
              <div className="flex items-center">
                <MapPin className="w-3 h-3 mr-1" />
                <span>Monterrey, MX</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-3 h-3 mr-1" />
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-3">
            <Link 
              href="https://github.com/bashlui" 
              className="flex items-center justify-center w-9 h-9 bg-background border border-border rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:-translate-y-1"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/luisbolaina/" 
              className="flex items-center justify-center w-9 h-9 bg-background border border-border rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:-translate-y-1"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link 
              href="mailto:codewithlui@gmail.com" 
              className="flex items-center justify-center w-9 h-9 bg-background border border-border rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Navigation</h4>
            <ul className="space-y-1">
              <li><Link href="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-xs text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/projects" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Projects</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Connect</h4>
            <ul className="space-y-1">
              <li><a href="https://github.com/bashlui" className="text-xs text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/luisbolaina/" className="text-xs text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="mailto:codewithlui@gmail.com" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Email</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs text-muted-foreground italic">
              &quot;The only way to do great work is to love what you do.&quot; - Steve Jobs
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-3 pt-6 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground">
              © {currentYear} aNtonio. All rights reserved.
            </p>
          </div>
          <div>
            <p className="flex items-center justify-center md:justify-end text-xs text-muted-foreground">
              Made with <Heart className="w-3 h-3 mx-1 text-red-500" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
