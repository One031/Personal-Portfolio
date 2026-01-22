import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
    {
        title: "KleenPride Mobile Detailing App",
        description:
            "Led backend development for a dual-user mobile booking platform. Architected Firebase database, real-time scheduling logic, and authentication system for a team of 5 developers.",
        image: "/projects/project1.png",
        tags: ["Kotlin", "Jetpack Compose", "Firebase", "Android"],
        link: "#",
        github: "https://github.com/One031/KleenPride-MobileCarWash",
    },
    {
        title: "iKasiMarket E-Commerce Platform",
        description:
            "Full-stack marketplace connecting informal vendors with customers. Features user authentication, product management, real-time messaging, and responsive design.",
        image: "/projects/project2.png",
        tags: ["PHP", "MYSQL", "Bootstrap", "JavaScript"],
        link: "#",
        github: "https://github.com/One031/ikasimarket",
    },
    {
        title: "Tattoo Booking Website",
        description:
            "Custom booking platform for tattoo studio with appointment scheduling, design consultation requests, and automated email notifications. Features dynamic pricing based on tattoo size and complexity.",
        image: "/projects/project3.png",
        tags: ["Node.js", "Express", "EJS", "Nodemailer"],
        link: "https://similostats.onrender.com",
        github: "https://github.com/One031/similostats",
    },
    {
        title: "Bakery Ordering Website",
        description:
            "Automated ordering platform with dynamic pricing engine calculating costs based on cake size, flavor, and customizations. Integrated email notifications for order confirmations.",
        image: "/projects/project4.png",
        tags: ["Node.js", "Express", "EJS", "Nodemailer"],
        link: "https://sonwas-treats.onrender.com",
        github: "https://github.com/One031/Sonwas-Treats",
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* Bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects that
                        <span className="font-serif italic font-normal text-white"> make an impact.</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-300">
                        A selection of my recent work, from complex web applications to
                        innovative tools that solve real-world problems.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                            {/* Image */}
                            <div className="relative aspect-video overflow-hidden bg-muted flex items-center justify-center">
                                {/* Blurred background (fills space nicely) */}
                                <img
                                    src={project.image}
                                    alt=""
                                    aria-hidden
                                    className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-40"
                                />

                                {/* Main image (keeps correct aspect ratio) */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="
            relative z-10
            max-h-[85%] max-w-[90%]
            object-contain
            transition-transform duration-700
            group-hover:scale-105
        "
                                />

                                {/* Gradient overlay */}
                                <div
                                    className="absolute inset-0 
        bg-gradient-to-t from-card via-card/50
        to-transparent opacity-60"
                                />

                                {/* Overlay Links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 md:group-hover:opacity-100 md:opacity-0 opacity-100 transition-opacity duration-300 z-20">
                                    {project.link && project.link !== '#' && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                        >
                                            <ArrowUpRight className="w-5 h-5" />
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                        >
                                            <Github className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight
                                        className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                                    />
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span
                                            key={tagIdx}
                                            className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* View All CTA */}
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <a
                        href="https://github.com/One031?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AnimatedBorderButton>
                            View All Projects
                            <ArrowUpRight className="w-5 h-5" />
                        </AnimatedBorderButton>
                    </a>
                </div>
            </div>
        </section>
    );
};