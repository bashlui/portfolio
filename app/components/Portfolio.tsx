import Experience from "./Experience"
import ExpandingFooter from "./ExpandingFooter"
import Practice from "./Practice"
import SiteHeader from "./SiteHeader"
import SmoothAnchorScroll from "./SmoothAnchorScroll"
import Work from "./Work"
import Tools from "./Tools"

export default function Portfolio() {
  return (
    <>
      <SmoothAnchorScroll />
      <a className="skip" href="#work">
        Skip to work
      </a>

      <SiteHeader />

      <main className="page" id="top">

        <section className="hero" aria-labelledby="intro-title">
          <div className="hero-art">
            <h1 className="hero-statement" id="intro-title" aria-label="hey! welcome">
              {Array.from("hey! welcome").map((letter, index) => (
                <span className="hero-letter" aria-hidden="true" key={index} style={{ animationDelay: `${index * 45}ms` }}>
                  {letter === " " ? "\u00a0" : letter}
                </span>
              ))}
            </h1>
          </div>
          <div className="hero-introduction">
            <h2>I’m Antonio.</h2>
            <p>
              A Computer Science student at Tecnológico de Monterrey and a software
              engineer based in Monterrey. I build web and mobile products, care
              about thoughtful interfaces, and use AI as part of my everyday work.
            </p>
          </div>
        </section>

        <Experience />
        <Work />
        <Practice />
        <Tools />
      </main>

      <ExpandingFooter />
    </>
  )
}
