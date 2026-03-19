"use client"

import { Code2, Palette, Rocket, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code is my priority.",
  },
  {
    icon: Palette,
    title: "UI/UX Focus",
    description: "Creating beautiful, intuitive user experiences.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimized applications for the best user experience.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively with teams to deliver results.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Get to Know Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m a passionate Full Stack Developer with expertise in building
              modern web applications. I specialize in React, Next.js, Node.js,
              and various other technologies that power the modern web.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently, I&apos;m focused on building accessible, human-centered
              products that make a real difference. I love turning complex
              problems into simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through technical articles and tutorials.
            </p>

            {/* Tech Stack Preview */}
            <div className="pt-4">
              <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                Technologies I Work With
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "Tailwind CSS",
                  "MongoDB",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="bg-card hover:bg-accent/50 transition-colors group"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
