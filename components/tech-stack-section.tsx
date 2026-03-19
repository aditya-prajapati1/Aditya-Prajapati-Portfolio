"use client"

const technologies = {
  Frontend: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ],
  Backend: [
    "Node.js",
    "Express",
    "NestJS",
    "Python",
    "Django",
    "REST APIs",
  ],
  Database: ["MongoDB", "PostgreSQL", "MySQL"],
  "DevOps & Tools": [
    "Git",
    "GitHub",
    "Docker",
    "AWS",
    "Vercel",
    "CI/CD",
    "VS Code",
  ],
}

export function TechStackSection() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Technologies</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Tech Stack
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 text-sm bg-card text-foreground rounded-full border border-border hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
