import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Github, Linkedin, MapPin } from "lucide-react"

export function Connect() {
  return (
    <section id="connect" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Connect With Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {"Let's collaborate on exciting AI/ML and robotics projects, or just have a chat about technology!"}
          </p>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-colors">
            <Mail className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Email</h3>
            <p className="text-muted-foreground mb-4">Drop me an email for project collaborations or opportunities</p>
            <a href="mailto:sambhavregmi999@gmail.com" className="text-primary hover:underline font-mono">
              sambhavregmi999@gmail.com
            </a>
          </Card>

          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-colors">
            <MapPin className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Location</h3>
            <p className="text-muted-foreground mb-4">Based in Kathmandu, Nepal</p>
            <p className="text-foreground">IOE Pulchowk Campus, Lalitpur</p>
          </Card>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Find me on</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-border hover:bg-secondary hover:border-primary/50 bg-transparent"
              asChild
            >
              <a href="https://github.com/sambhav605" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-border hover:bg-secondary hover:border-primary/50 bg-transparent"
              asChild
            >
              <a href="https://www.linkedin.com/in/sambhav-regmi-350512321/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-border text-center text-muted-foreground">
          <p>© 2025 Sambhav Regmi. Built with Next.js & Tailwind CSS</p>
        </footer>
      </div>
    </section>
  )
}
