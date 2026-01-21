import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description:
            "Writing maintainable, scalable code that stands the test of time.",
    },
    {
        icon: Rocket,
        title: "Performance",
        description:
            "Optimizing for speed and delivering lightning-fast user experiences.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Working closely with teams to bring ideas to life.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
            "Staying ahead with the latest technologies and best practices.",
    },
];

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                        </div>

                        <h2 className="text-xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Building the future,
                            <span className="font-serif italic font-normal text-white"> one component at a time.</span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I'm a software engineering graduate with a strong interest in building
                                reliable, well-structured applications. My journey started with learning how
                                the web works and grew into a passion for backend systems, problem-solving,
                                and understanding how software operates end to end.
                            </p>
                            <p>
                                I work mainly with Java, JavaScript, and modern web technologies, and I’ve
                                built full-stack applications involving authentication, databases, APIs, and
                                real-world system constraints. Through projects and labs, I’ve also gained
                                experience with Windows Server, virtual machines, and system configuration.
                            </p>
                            <p>
                                I enjoy learning by building, breaking, and fixing things. Outside of coding,
                                I spend time improving my fundamentals, exploring new tools, and strengthening
                                my understanding of how scalable and dependable systems are designed.
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animated-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                "My goal is to build practical software with a strong focus on usability,
                                performance, and maintainability."
                            </p>
                        </div>
                    </div>

                    {/* Right Colum - Highlights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div key={idx} className="glass p-6 rounded-2xl animate-fade-in"
                            style={{animationDelay: `${(idx + 1) * 100}ms`}}>
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary"/>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
};