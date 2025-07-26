import { PersonStanding, ChartNoAxesGantt } from "lucide-react"

export default function Home() {
  return (
    <div className="content-container">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-16"> {/* Increased gap for more separation */}
          <div className="text-justify"> {/* Added text-justify class */}
            <h1 className="section-title">who?</h1>
            <PersonStanding className="h-24 w-24 mx-auto mb-4" />
            <p className="content-text mb-4">
              Hi! I&apos;m Antonio. I&apos;m currently a student at Tecnológico de Monterrey, pursuing a degree in Computer Science. I&apos;m always eager to learn and explore new technologies. My passion lies in creating innovative solutions that make a difference.
            </p>
          </div>
          <div className="text-justify"> {/* Added text-justify class */}
            <ChartNoAxesGantt className="h-24 w-24 mx-auto mb-4" />
            <h1 className="section-title">what?</h1>
            <p className="content-text">
              I&apos;m a full-stack developer with a focus on building scalable web applications. I enjoy working with modern frameworks and libraries to create efficient and user-friendly interfaces.
            </p>
          </div>
        </div>
      </div>
  )
}