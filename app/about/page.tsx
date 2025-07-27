import { User, MapPin, Code2, Coffee, Rocket, Music } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <main className="min-h-screen">
      <div className="content-container">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <User className="w-12 h-12 text-primary mr-4" />
            <h1 className="section-title">about me</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
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

          {/* Journey & Goals */}
          <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-6">
              <Rocket className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-2xl font-merriweather font-light text-foreground">Journey</h2>
            </div>
            <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p className="text-justify font-open-sans">
                My coding journey started with curiosity and has evolved into a passion for 
                full-stack development. I believe in continuous learning and staying updated 
                with the latest technologies and best practices in the software development world.
              </p>
              <p className="text-justify font-open-sans">
                Looking ahead, I&apos;m excited about exploring data engineering and machine learning. 
                The intersection of software development and data science represents the future 
                of technology, and I want to be part of that evolution.
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

        {/* Music Taste Section */}
        <div className="bg-card border border-border rounded-xl p-8 mb-20">
          <div className="flex items-center justify-center mb-8">
            <Music className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-2xl font-merriweather font-light text-foreground">My Music Taste</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-sm md:text-base text-muted-foreground font-open-sans leading-relaxed max-w-2xl mx-auto">
                Music plays a huge role in my creative process and daily life. Here&apos;s an album that holds 
                special meaning to me - it was released on January 1st, 2005, the exact year and month I was born! 
                These chillout tracks perfectly capture the vibe I love when coding or just relaxing.
              </p>
            </div>
            
            {/* Apple Music Embed */}
            <div className="flex justify-center">
              <div className="w-full max-w-2xl">
                <iframe 
                  allow="autoplay *; encrypted-media *;" 
                  frameBorder="0" 
                  height="450" 
                  style={{
                    width: '100%',
                    maxWidth: '660px',
                    overflow: 'hidden',
                    background: 'transparent',
                    borderRadius: '12px'
                  }}
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                  src="https://embed.music.apple.com/mx/album/chillout-songs/1675541496?l=en-GB"
                  title="Chillout Songs Album"
                  className="mx-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-xs text-muted-foreground font-open-sans">
                🎵 Perfect coding soundtrack • Released January 1, 2005 • Born same year & month
              </p>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-card border border-border rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-merriweather font-light text-foreground text-center mb-8">
            When I&apos;m not coding...
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl">📚</div>
              <p className="text-sm text-muted-foreground font-open-sans">Reading tech blogs and staying updated with industry trends</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">🎮</div>
              <p className="text-sm text-muted-foreground font-open-sans">Gaming and exploring virtual worlds for inspiration</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">☕</div>
              <p className="text-sm text-muted-foreground font-open-sans">Discovering new coffee shops and trying different brews</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">🌱</div>
              <p className="text-sm text-muted-foreground font-open-sans">Learning about new technologies and experimenting with side projects</p>
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
            href="/projects" 
            className="bg-primary text-primary-foreground px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors font-medium"
          >
            View Projects →
          </Link>
        </div>
      </div>
    </main>
  )
}
