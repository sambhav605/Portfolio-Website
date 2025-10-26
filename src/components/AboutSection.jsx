import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () =>{
    return <section id="about" className="py-24 px-4 relative">
        {""}
        <div className="container mx-auto maz-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Engineering Student & Web Developer</h3>
                    <p className="text-muted-foreground">I’m an Electronics, Communication and Information Engineering student at Pulchowk Campus, passionate about blending hardware, software, and intelligence.
                    I love building things that connect the physical and digital worlds — from embedded systems and IoT devices to C++-based software and AI-driven tools.
                    My curiosity drives me to explore how systems work at their core, and my goal is to create solutions that are both innovative and impactful.</p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {""}
                            Get In Touch
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">Creating responsice websites and web applications with modern frameworks</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">Creating responsice websites and web applications with modern frameworks</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">Creating responsice websites and web applications with modern frameworks</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}