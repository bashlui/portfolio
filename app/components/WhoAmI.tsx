import FadeInSection from "./FadeInSection"

export default function WhoAmI() {
  return (
    <section className="py-36 px-6 border-t border-border">
      <FadeInSection className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6 leading-tight">
          building things
          <br />
          that matter.
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
          I&apos;m a passionate Computer Science student at Tecnológico de Monterrey,
          dedicated to building innovative solutions through code. I thrive on turning
          complex problems into elegant, user-friendly applications that make a real impact.
        </p>
      </FadeInSection>
    </section>
  )
}
