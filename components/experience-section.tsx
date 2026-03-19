"use client"

import { Briefcase, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    companyUrl: "https://example.com",
    duration: "2023 - Present",
    description:
      "Leading development of scalable web applications using React, Next.js, and Node.js. Mentoring junior developers and implementing best practices for code quality.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    role: "Full Stack Developer",
    company: "Digital Innovations Co.",
    companyUrl: "https://example.com",
    duration: "2021 - 2023",
    description:
      "Developed and maintained multiple client projects. Implemented CI/CD pipelines and improved application performance by 40%.",
    technologies: ["React", "Express", "MongoDB", "AWS", "Docker"],
  },
  {
    role: "Frontend Developer",
    company: "StartupXYZ",
    companyUrl: "https://example.com",
    duration: "2020 - 2021",
    description:
      "Built responsive web interfaces and collaborated with designers to implement pixel-perfect designs. Reduced bundle size by 30%.",
    technologies: ["React", "Redux", "Tailwind CSS", "Jest"],
  },
  {
    role: "Junior Developer",
    company: "CodeCraft Agency",
    companyUrl: "https://example.com",
    duration: "2019 - 2020",
    description:
      "Started my professional journey building websites and web applications for various clients. Learned best practices and modern development workflows.",
    technologies: ["JavaScript", "HTML", "CSS", "PHP", "MySQL"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">My Journey</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

          {/* Experience cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 md:-translate-x-1/2 border-4 border-background z-10" />

                {/* Content */}
                <div
                  className={`flex-1 ml-8 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <Card className="bg-card hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Briefcase className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">
                              {exp.role}
                            </h3>
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                            >
                              {exp.company}
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full whitespace-nowrap">
                          {exp.duration}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for timeline alignment */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
