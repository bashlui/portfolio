export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-bar">
        <a className="site-mark" href="#top" aria-label="Antonio Bolaina, home">
          <span className="site-face" aria-hidden="true">
            <span className="site-face-eye site-face-eye--left" />
            <span className="site-face-eye site-face-eye--right" />
            <span className="site-face-smile" />
          </span>
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
