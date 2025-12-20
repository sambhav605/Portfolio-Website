import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "Python"],
    color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/30",
    hoverColor: "hover:from-emerald-500/20 hover:to-teal-500/20 hover:border-emerald-500/50",
  },
  {
    title: "Frameworks",
    skills: ["React", "Next.js", "Tailwind CSS"],
    color: "from-blue-500/10 to-cyan-500/10 border-blue-500/30",
    hoverColor: "hover:from-blue-500/20 hover:to-cyan-500/20 hover:border-cyan-500/50",
  },
  {
    title: "AI & Machine Learning",
    skills: ["TensorFlow", "PyTorch"],
    color: "from-violet-500/10 to-purple-500/10 border-violet-500/30",
    hoverColor: "hover:from-violet-500/20 hover:to-purple-500/20 hover:border-purple-500/50",
  },
]

export function TechnicalSkills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Technical Skills</h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <h3 className="text-lg font-bold mb-5 text-accent">{category.title}</h3>
              <div className="space-y-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className={`p-3 rounded-lg bg-gradient-to-r ${category.color} ${category.hoverColor} transition-all border`}
                  >
                    <span className="font-medium text-foreground text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
