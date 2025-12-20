import { Card } from "@/components/ui/card"

export function AboutMe() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">About Me</h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Description */}
          <div className="order-1">
            <Card className="p-6 bg-card border-border h-full">
              <h3 className="text-xl font-bold mb-5 text-primary">Who I Am</h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed text-sm">
                <p>
                  Hello! I&apos;m Sambhav Regmi, a dedicated engineering student at IOE Pulchowk Campus, one of
                  Nepal&apos;s most prestigious engineering institutions. I&apos;m pursuing my Bachelor&apos;s degree in
                  Electronics, Communication and Information Engineering.
                </p>
                <p>
                  My passion lies at the intersection of cutting-edge technologies—particularly in
                  <span className="text-primary font-semibold"> Artificial Intelligence</span>,{" "}
                  <span className="text-primary font-semibold">Machine Learning</span>, and{" "}
                  <span className="text-primary font-semibold">Robotics</span>. I believe these technologies hold the
                  key to solving complex real-world problems.
                </p>
                <p>
                  Through hands-on projects and continuous learning, I&apos;m building expertise in computer vision, IoT
                  systems, and intelligent automation. I&apos;m always excited to explore new challenges and collaborate
                  on innovative solutions that can make a meaningful impact.
                </p>
              </div>
            </Card>
          </div>

          {/* Education Timeline */}
          <div className="order-2">
            <h3 className="text-xl font-bold mb-5">Education Journey</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30" />

              <div className="space-y-8">
                {/* Bachelor's */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary border-4 border-background flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-background" />
                  </div>
                  <Card className="p-6 bg-card border-border">
                    <div className="text-sm text-primary font-semibold mb-1">Present</div>
                    <h4 className="text-lg font-bold mb-1">Bachelor of Engineering</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Electronics, Communication & Information Engineering
                    </p>
                    <p className="text-sm font-medium">IOE Pulchowk Campus, Kathmandu</p>
                  </Card>
                </div>

                {/* +2 Level */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary/50 border-4 border-background" />
                  <Card className="p-6 bg-card border-border">
                    <div className="text-sm text-muted-foreground font-semibold mb-1">Completed</div>
                    <h4 className="text-lg font-bold mb-1">+2 Level (High School)</h4>
                    <p className="text-sm text-muted-foreground mb-2">Science Stream</p>
                    <p className="text-sm font-medium">Kathmandu Model Secondary School, Bagbazar</p>
                  </Card>
                </div>

                {/* School Level */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary/50 border-4 border-background" />
                  <Card className="p-6 bg-card border-border">
                    <div className="text-sm text-muted-foreground font-semibold mb-1">Completed</div>
                    <h4 className="text-lg font-bold mb-1">School Level (SEE)</h4>
                    <p className="text-sm text-muted-foreground mb-2">Secondary Education</p>
                    <p className="text-sm font-medium">Nepal Adarsha Secondary School</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
