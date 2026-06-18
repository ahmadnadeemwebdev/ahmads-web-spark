import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Brand Commercial",
      category: "Video",
      description: "High-energy brand commercial with cinematic color grading and dynamic text animations.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=500&fit=crop",
      tags: ["Premiere Pro", "Color Grading"],
    },
    {
      title: "Social Media Reels",
      category: "Video",
      description: "Viral-worthy reels with trending transitions, beat-synced cuts, and eye-catching overlays.",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=500&fit=crop",
      tags: ["Premiere Pro", "Reels"],
    },
    {
      title: "Brand Identity Design",
      category: "Design",
      description: "Complete brand package including logo, color palette, and social media templates.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=500&fit=crop",
      tags: ["Figma", "Branding"],
    },
    {
      title: "Portfolio Website",
      category: "Web",
      description: "Modern responsive portfolio built with React and Tailwind CSS for a creative client.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      tags: ["React", "Tailwind"],
    },
    {
      title: "YouTube Content",
      category: "Video",
      description: "Full video editing for tech content including cuts, sound design, and custom animations.",
      image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=500&fit=crop",
      tags: ["Premiere Pro", "Sound Design"],
    },
    {
      title: "Marketing Graphics",
      category: "Design",
      description: "Eye-catching social media posts, banners, and promotional materials for multiple brands.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop",
      tags: ["Photoshop", "Social Media"],
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={`flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">Portfolio</p>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
              Selected Work
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm">
            A mix of video editing, graphic design, and web development projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href="#"
              className={`group block rounded-2xl overflow-hidden border border-border hover:border-foreground/20 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium border border-border">
                  {project.category}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold group-hover:text-foreground transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full text-xs text-muted-foreground bg-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;