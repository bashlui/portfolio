export default function WhoAmI() {
  return (
    <section className="py-32 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs mb-6 tracking-widest uppercase text-muted-foreground">
          <span className="text-foreground font-bold">{'//'}</span> who am i
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-8 leading-[1.05]">
              building things<br />
              that matter.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              I&apos;m a passionate Computer Science student at Tecnológico de Monterrey,
              dedicated to building innovative solutions through code. I thrive on turning
              complex problems into elegant, user-friendly applications that make a real impact.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "5+", label: "projects shipped" },
              { value: "600+", label: "concurrent users" },
              { value: "2+", label: "hackathons" },
              { value: "∞", label: "lines of coffee" },
            ].map(({ value, label }) => (
              <div key={label} className="rounded-xl bg-card p-8 flex flex-col gap-2">
                <span className="text-3xl font-bold text-foreground">{value}</span>
                <span className="text-xs text-muted-foreground tracking-wide">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
