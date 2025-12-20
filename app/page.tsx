import { Hero } from "@/components/hero"
import { AboutMe } from "@/components/about-me"
import { TechnicalSkills } from "@/components/technical-skills"
import { Projects } from "@/components/projects"
import { Connect } from "@/components/connect"
import { AnimatedBackground } from "@/components/animated-background"

export default function Portfolio() {
  return (
    <main className="min-h-screen">
      <AnimatedBackground />
      <div className="relative z-10">
        <Hero />
        <AboutMe />
        <TechnicalSkills />
        <Projects />
        <Connect />
      </div>
    </main>
  )
}
