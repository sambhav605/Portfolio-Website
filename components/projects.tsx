import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

const projects = [
  {
    title: "SelfBalancingRobot",
    description:
      "An autonomous two-wheeled robot that maintains balance using PID control and MPU6050 gyroscope sensor. Implements real-time sensor fusion and motor control for stable upright positioning.",
    tags: ["Arduino", "PID Control", "Robotics", "MPU6050", "Motor Control"],
    image: "/robot-with-camera-doing-object-detection.jpg",
    github: "https://github.com/sambhav605/SelfBalancingRobot",
  },
  {
    title: "ParkSense-IOT-Arduino",
    description:
      "Smart parking system using IoT sensors to detect available parking spots in real-time. Integrates ultrasonic sensors with cloud connectivity for live parking availability monitoring.",
    tags: ["IoT", "Arduino", "Sensors", "Cloud Integration", "Real-time Data"],
    image: "/smart-parking-system-with-sensors.jpg",
    github: "https://github.com/sambhav605/ParkSense-IOT-Arduino",
  },
  {
    title: "Setu",
    description:
      "AI-powered legal assistance platform empowering Nepali citizens with a law chatbot for legal queries, bias detection tool for analyzing discriminatory language in documents, and intelligent letter generator for government correspondence..",
    tags: ["Next.js", "TypeScript", "Python", "FastAPI", "AI/ML", "RAG", "Tailwind CSS"],
    image: "/setu.png",
    github: "https://github.com/sambhav605/Setu",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 lg:px-24 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Projects</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Building innovative solutions at the intersection of AI, ML, and Robotics
          </p>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-secondary">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-3 leading-relaxed text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-secondary rounded text-xs border border-border">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="gap-2 bg-transparent" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
