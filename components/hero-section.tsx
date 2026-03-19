"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Twitter, Mail, ArrowDown, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

const roles = [
  "Full Stack Developer",
  "React Enthusiast",
  "Node.js Developer",
  "UI/UX Lover",
]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-4 pt-16 overflow-hidden"
    >
      {/* Background image - positioned to the right */}
      <div 
        className="absolute top-0 right-0 w-full md:w-3/5 h-full bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/images/profile-bg.jpg')", backgroundPosition: "center top 20%" }}
      />
      {/* Gradient overlay for image - no overlay in light mode, slight overlay in dark mode */}
      <div className="absolute top-0 right-0 w-full md:w-3/5 h-full bg-gradient-to-l from-transparent via-transparent to-background dark:via-background/20 dark:to-background" />
      {/* Additional overlay for brightness control - none in light mode, slight in dark mode */}
      <div className="absolute top-0 right-0 w-full md:w-3/5 h-full bg-transparent dark:bg-background/10" />
      {/* Full page subtle gradient - only affects left side for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="max-w-2xl text-left md:pl-8 lg:pl-16">
          <p className="text-primary font-medium mb-4 opacity-0 animate-fade-in-up">
            Hello, I&apos;m
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6 opacity-0 animate-fade-in-up animate-delay-100">
            Aditya Prajapati
          </h1>
          <div className="h-12 mb-8">
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground opacity-0 animate-fade-in-up animate-delay-200">
              I&apos;m a{" "}
              <span className="text-primary font-semibold">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </p>
          </div>
          <p className="text-muted-foreground mb-10 opacity-0 animate-fade-in-up animate-delay-300 leading-relaxed">
            I build accessible, pixel-perfect digital experiences for the web.
            Passionate about creating robust, scalable solutions that make a real
            impact.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-12 opacity-0 animate-fade-in-up animate-delay-400">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              asChild
            >
              <a
                href="https://github.com/aditya-prajapati1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              asChild
            >
              <a
                href="https://linkedin.com/in/aditya-prajapati-ap2006"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              asChild
            >
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              asChild
            >
              <a href="mailto:adityaprajapati6354@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 opacity-0 animate-fade-in-up animate-delay-400">
            <Button size="lg" className="rounded-full px-8" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              asChild
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-5 w-5" />
                Resume
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors z-10"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  )
}
