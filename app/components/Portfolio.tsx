import Experience from "./Experience"
import GradientField from "./GradientField"
import ExpandingFooter from "./ExpandingFooter"
import Practice from "./Practice"
import SiteHeader from "./SiteHeader"
import Work from "./Work"
import Tools from "./Tools"

export default function Portfolio() {
  return (
    <>
      <a className="skip" href="#work">
        Skip to work
      </a>

      <SiteHeader />

      <main className="page" id="top">

        <section className="hero" aria-labelledby="intro-title">
          <div className="hero-art">
            <GradientField variant="hero" />
            <h1 className="hero-statement" id="intro-title">hey! welcome</h1>
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
