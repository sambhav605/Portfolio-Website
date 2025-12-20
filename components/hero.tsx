"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const scrollToConnect = () => {
    const connectSection = document.getElementById("connect")
    if (connectSection) {
      connectSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Aesthetic background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-1 shadow-2xl shadow-primary/20">
            <div className="w-full h-full rounded-full bg-secondary/50 border-2 border-primary/30 flex items-center justify-center overflow-hidden">
              <img
                src="sambhav.jpg"
                alt="Sambhav Regmi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block mb-3 px-3 py-1 bg-secondary/50 rounded-full text-xs text-muted-foreground border border-border">
            Engineering Student • Pulchowk Campus
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
            Hi, I&apos;m <span className="text-primary">Sambhav Regmi</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed max-w-2xl">
            {
              "I'm a passionate engineering student at IOE, Pulchowk Campus in Kathmandu, Nepal, exploring the intersection of artificial intelligence, machine learning, and robotics to solve real-world problems."
            }
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Link href="https://github.com/sambhav605" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                View Work
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary bg-transparent"
              onClick={scrollToConnect}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  )
}
