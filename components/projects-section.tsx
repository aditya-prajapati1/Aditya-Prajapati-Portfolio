"use client"

import { Github, ExternalLink, Folder } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Netflix Clone",
    description:
      "Built a responsive frontend application replicating Netflix UI. Implemented reusable components and dynamic content rendering. Followed component-based architecture for scalable UI development.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/aditya-prajapati1",
    demo: null,
    featured: true,
  },
  {
    title: "Travel Website",
    description:
      "Developed a fully responsive travel and tour booking website. Designed and implemented dynamic UI components to showcase tour packages. Applied responsive web design principles to ensure cross-browser and mobile compatibility.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/aditya-prajapati1",
    demo: null,
    featured: true,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">My Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden"
            >
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Folder className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 text-muted-foreground hover:text-foreground"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-5 w-5" />
                          <span className="sr-only">GitHub</span>
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 text-muted-foreground hover:text-foreground"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-5 w-5" />
                          <span className="sr-only">Live Demo</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="rounded-full" asChild>
            <a
              href="https://github.com/aditya-prajapati1"
              target="_blank"
              rel="noopener noreferrer"
            >
              View More on GitHub
              <Github className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
