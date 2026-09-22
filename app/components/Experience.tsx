const experience = [
  {
    company: "Softtek",
    role: "Software Engineer Intern",
    period: "June 2026 — present",
    description: "On the Innovation Team, I build an enterprise membership platform with NestJS, Next.js, SQL Server, and Azure. I work on identity and membership flows, automated tests, and TypeScript refactors.",
  },
  {
    company: "Cipheria",
    role: "Full Stack Developer",
    period: "June — September 2025",
    description: "Designed, built, and deployed the startup’s website with React, Firebase, and Tailwind CSS. I worked with the founders on reusable UI components, code reviews, and a design that reflected the brand.",
  },
]

export default function Experience() {
  return (
    <section className="experience" id="experience" aria-labelledby="experience-title">
      <h2 id="experience-title">Experience</h2>
      <ul className="experience-list">
        {experience.map((job) => (
          <li key={job.company}>
            <div>
              <h3>{job.company}</h3>
              <p className="experience-period">{job.period}</p>
            </div>
            <div>
              <p className="experience-role">{job.role}</p>
              <p className="experience-description">{job.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
