"use client"

import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Aditya Prajapati. Built with</span>
            <Heart className="h-4 w-4 text-primary fill-primary" />
          </div>


        </div>
      </div>
    </footer>
  )
}
