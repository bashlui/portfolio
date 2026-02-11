"use client"

import { MapPin, Code2, Coffee, Rocket, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Subtle Background Gradient - matching Hero */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-black dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]"></div>
      
      {/* Get to Know Me Section */}
      <section className="py-32 px-6 max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-7xl lg:text-8xl font-thin tracking-tight text-center leading-[0.9] text-primary dark:text-white mb-12"
        >
          Get to <span className="text-muted-foreground dark:text-white">Know Me</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light dark:text-white leading-relaxed">
            Beyond the code, I&apos;m a creative individual who finds inspiration in music, 
            outdoor adventures, and meaningful connections. Playing guitar and piano allows me 
            to express myself in ways that complement my technical work, while exploring new 
            places and spending time with friends keeps me grounded and energized.
          </p>
        </motion.div>
      </section>

      {/* Content Container */}
      <div className="content-container">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20 px-6 max-w-6xl mx-auto">
          
          {/* Personal Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <MapPin className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-3xl font-light tracking-tight text-foreground">Background</h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="font-light">
                I&apos;m currently pursuing my B.S. in Computer Science at Tecnológico de Monterrey, 
                one of the most prestigious universities in Latin America. My academic journey 
                has been focused on building a strong foundation in software engineering principles, 
                algorithms, and system design.
              </p>
              <p className="font-light">
                What drives me is the endless possibility to create solutions that can make a 
                real difference. Whether it&apos;s building a web application that simplifies daily 
                tasks or developing APIs that power innovative services, I find joy in the 
                process of turning ideas into reality through code.
              </p>
            </div>
          </motion.div>

          {/* Personal Photo Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex flex-col items-center justify-center text-center h-full">
              <div className="w-48 h-48 md:w-56 md:h-56 bg-muted border-2 border-dashed border-border rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
                <Image
                  src="/ntonio.jpeg" 
                  alt="Antonio - Computer Science Student" 
                  width={224} 
                  height={224} 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="max-w-sm">
                <h3 className="text-2xl font-light tracking-tight text-foreground mb-2">
                  Antonio
                </h3>
                <p className="text-muted-foreground">
                </p>
                <p className="text-sm text-muted-foreground mt-4 font-light italic">
                    I like a lot of things, music is one of them. Instruments like guitar and piano are my favorites, but I also enjoy listening to a wide range of genres.
                    I also enjoy being outdoors, hanging out with friends, and exploring new places.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 mb-20 px-6 max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-light tracking-tight text-foreground text-center mb-12">
            Team Experience and <span className="text-primary">Leadership</span>
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light tracking-tight text-foreground mb-4">Hackathons</h3>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Participated in multiple hackathons including HackMTY and other regional competitions, where I&apos;ve had the opportunity to lead cross-functional teams and develop innovative solutions under tight deadlines. These experiences have strengthened my leadership skills, taught me to think creatively under pressure, and enhanced my ability to coordinate diverse talents toward a common goal.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light tracking-tight text-foreground mb-4">Student Organizations</h3>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Making projects for student organizations has been a rewarding experience, allowing me to collaborate with peers and contribute to the community.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light tracking-tight text-foreground mb-4">Team Projects</h3>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Working with teams on various projects has taught me the importance of communication, collaboration, and shared goals. I thrive in environments where I can contribute my skills while learning from others.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values & Approach */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 mb-20 px-6 max-w-6xl mx-auto"
        >
          <div className="flex items-center justify-center mb-12">
            <Code2 className="w-10 h-10 text-primary mr-4" />
            <h2 className="text-4xl font-light tracking-tight text-foreground">My Approach</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code2 className="w-10 h-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-light tracking-tight text-foreground mb-4">Clean Code</h3>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                I believe in writing code that&apos;s not just functional, but readable, maintainable, and efficient.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-light tracking-tight text-foreground mb-4">Collaboration</h3>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Great software is built by great teams. I value communication, feedback, and shared learning.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-10 h-10 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-light tracking-tight text-foreground mb-4">Innovation</h3>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Always looking for new ways to solve problems and improve existing solutions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="mt-20 text-center px-6 pb-20">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link 
                href="/" 
                className="bg-card/50 backdrop-blur-sm border border-border text-foreground px-8 py-4 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 font-light group inline-block"
              >
                <div className="flex items-center justify-center">
                  <ArrowLeft className="w-5 h-5 mr-2 group-hover:translate-x-[-4px] transition-transform" />
                  <span>Back to Home</span>
                </div>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link 
                href="/#projects" 
                className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300 font-light group inline-block"
              >
                <div className="flex items-center justify-center">
                  <span>View My Projects</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}