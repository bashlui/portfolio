import GradientField from "./GradientField"

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-bar">
        <a className="site-mark" href="#top" aria-label="Antonio Bolaina, home">
          <GradientField variant="accent" />
          Antonio Bolaina
        </a>
        <nav aria-label="Sections">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a className="site-write" href="#contact">
            Write
          </a>
        </nav>
      </div>
    </header>
  )
}
