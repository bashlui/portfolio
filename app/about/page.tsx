import { MapPin, Code2, Coffee, Rocket, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function About() {
  return (
    <main className="min-h-screen">
      <div className="content-container">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <h1 className="section-title">about me</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          
          {/* Personal Info */}
          <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-6">
              <MapPin className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-2xl font-merriweather font-light text-foreground">Background</h2>
            </div>
            <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p className="text-justify font-open-sans">
                I&apos;m currently pursuing my B.S. in Computer Science at Tecnológico de Monterrey, 
                one of the most prestigious universities in Latin America. My academic journey 
                has been focused on building a strong foundation in software engineering principles, 
                algorithms, and system design.
              </p>
              <p className="text-justify font-open-sans">
                What drives me is the endless possibility to create solutions that can make a 
                real difference. Whether it&apos;s building a web application that simplifies daily 
                tasks or developing APIs that power innovative services, I find joy in the 
                process of turning ideas into reality through code.
              </p>
            </div>
          </div>

          {/* Personal Photo Section */}
          <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col items-center justify-center text-center h-full">
              <div className="w-48 h-48 md:w-56 md:h-56 bg-muted border-2 border-dashed border-border rounded-xl flex items-center justify-center mb-6 overflow-hidden">
                <Image
                  src="/ntonio.jpeg" 
                  alt="Antonio - Computer Science Student" 
                  width={224} 
                  height={224} 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="max-w-sm">
                <h3 className="text-lg font-merriweather font-light text-foreground mb-2">
                  Antonio
                </h3>
                <p className="text-sm text-muted-foreground font-open-sans">
                </p>
                <p className="text-xs text-muted-foreground font-open-sans mt-2 italic">
                    I like a lot of things, music is one of them. Instruments like guitar and piano are my favorites, but I also enjoy listening to a wide range of genres.
                    I also enjoy being outdoors, hanging out with friends, and exploring new places.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="bg-card border border-border rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-merriweather font-light text-foreground text-center mb-8">
            Team Experience and Leadership
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-merriweather font-light text-foreground mb-2">Hackathons</h3>
              <p className="text-sm text-muted-foreground font-open-sans">
                Participated in multiple hackathons including HackMTY and other regional competitions, where I&apos;ve had the opportunity to lead cross-functional teams and develop innovative solutions under tight deadlines. These experiences have strengthened my leadership skills, taught me to think creatively under pressure, and enhanced my ability to coordinate diverse talents toward a common goal.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-merriweather font-light text-foreground mb-2">Student Organizations</h3>
              <p className="text-sm text-muted-foreground font-open-sans">
                Making projects for student organizations has been a rewarding experience, allowing me to collaborate with peers and contribute to the community.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-merriweather font-light text-foreground mb-2">Team Projects</h3>
              <p className="text-sm text-muted-foreground font-open-sans">
                Working with teams on various projects has taught me the importance of communication, collaboration, and shared goals. I thrive in environments where I can contribute my skills while learning from others.
              </p>
            </div>
          </div>
        </div>

        {/* Values & Approach */}
        <div className="bg-card border border-border rounded-xl p-8 mb-20">
          <div className="flex items-center justify-center mb-8">
            <Code2 className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-2xl font-merriweather font-light text-foreground">My Approach</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-merriweather font-light text-foreground mb-2">Clean Code</h3>
              <p className="text-sm text-muted-foreground font-open-sans">
                I believe in writing code that&apos;s not just functional, but readable, maintainable, and efficient.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-merriweather font-light text-foreground mb-2">Collaboration</h3>
              <p className="text-sm text-muted-foreground font-open-sans">
                Great software is built by great teams. I value communication, feedback, and shared learning.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-merriweather font-light text-foreground mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground font-open-sans">
                Always looking for new ways to solve problems and improve existing solutions.
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
              href="/projects" 
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300 font-medium group"
            >
              <div className="flex items-center justify-center">
                <span>View My Projects</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
