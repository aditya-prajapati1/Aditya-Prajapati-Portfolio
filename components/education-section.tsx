"use client"

import { GraduationCap, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const educationList = [
  {
    role: "B.Tech in Computer Science",
    company: "United Institute of Technology, Prayagraj",
    companyUrl: "#",
    duration: "2023 - Present",
    description:
      "CGPA: 6.7",
    technologies: [],
  },
  {
    role: "Senior Secondary (XII) | CBSE",
    company: "Jawahar Navodaya Vidyalaya",
    companyUrl: "#",
    duration: "2023",
    description:
      "Percentage: 66.4%",
    technologies: [],
  },
  {
    role: "Secondary (X) | CBSE",
    company: "Jawahar Navodaya Vidyalaya",
    companyUrl: "#",
    duration: "2021",
    description:
      "Percentage: 76.4%",
    technologies: [],
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">My Journey</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
          {educationList.map((edu, index) => (
            <Card
              key={index}
              className="bg-card hover:shadow-xl transition-all duration-300 border border-border/50 overflow-hidden"
            >
              <div className="h-1 w-full bg-primary/20" />
              <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                
                <div className="flex-grow">
                  <h3 className="font-bold text-xl md:text-2xl text-foreground mb-1">
                    {edu.company}
                  </h3>
                  <p className="text-primary font-medium text-md mb-2">
                    {edu.role}
                  </p>
                  <p className="text-sm font-medium text-muted-foreground">
                    {edu.description}
                  </p>
                </div>

                <div className="shrink-0 md:text-right flex flex-col items-start md:items-end justify-center">
                  <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
                    {edu.duration}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
