import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio to showcase my skills, projects, and experience. Built to help recruiters and clients quickly understand my capabilities and contact me easily.",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop",
      tags: ["React", "Tailwind CSS", "TypeScript"],
      liveUrl: "https://ahmadnadeemwebdev.vercel.app",
      githubUrl: "https://github.com/ahmadnadeemwebdev",
    },
    {
      title: "E-Commerce Landing Page",
      description: "A conversion-focused landing page for online stores. Helps businesses showcase products beautifully and increase sales with modern UI and fast loading.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["HTML", "CSS", "JavaScript", "Responsive"],
      liveUrl: "#",
      githubUrl: "https://github.com/ahmadnadeemwebdev",
    },
    {
      title: "Weather App",
      description: "Get real-time weather updates for any city. Solves the problem of quickly checking weather conditions with a clean, easy-to-use interface.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      tags: ["React", "Weather API", "CSS", "Axios"],
      liveUrl: "#",
      githubUrl: "https://github.com/ahmadnadeemwebdev",
    },
    {
      title: "Live US News",
      description: "Stay updated with the latest US news in real-time. Fetches breaking news from reliable sources using News API with a clean, modern interface.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop",
      tags: ["React", "News API", "Tailwind CSS", "Axios"],
      liveUrl: "#",
      githubUrl: "https://github.com/ahmadnadeemwebdev",
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">My Work</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Here are some of my recent projects that showcase my skills and passion for web development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass rounded-2xl overflow-hidden group hover:border-primary/40 transition-all duration-500"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Button>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Github className="w-4 h-4" />
                        Code
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
