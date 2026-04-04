import { ArrowUpRight, Play, Sparkles } from "lucide-react";
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
      category: "Commercial",
      description: "High-energy brand commercial with cinematic color grading and dynamic text animations.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=500&fit=crop",
      tags: ["Premiere Pro", "Color Grading"],
    },
    {
      title: "YouTube Content",
      category: "Long Form",
      description: "Full video editing for tech content including cuts, sound design, and custom animations.",
      image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=500&fit=crop",
      tags: ["Premiere Pro", "Sound Design"],
    },
    {
      title: "Instagram Reels",
      category: "Short Form",
      description: "Viral-worthy reels with trending transitions, beat-synced cuts, and eye-catching overlays.",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=500&fit=crop",
      tags: ["Premiere Pro", "Reels"],
    },
    {
      title: "Music Video",
      category: "Cinematic",
      description: "Cinematic music video with speed ramps and creative transitions.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=500&fit=crop",
      tags: ["Premiere Pro", "Color Grading"],
    },
    {
      title: "Podcast Edit",
      category: "Long Form",
      description: "Multi-camera podcast with dynamic captions, background music, and clean audio.",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop",
      tags: ["Premiere Pro", "Audio"],
    },
    {
      title: "Product Showcase",
      category: "Commercial",
      description: "Sleek product video with smooth movements and premium color treatment.",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=500&fit=crop",
      tags: ["Premiere Pro", "Color Grading"],
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-32 px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-primary uppercase tracking-widest mb-4">
              <Sparkles className="w-3 h-3" />
              Portfolio
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Selected <span className="gradient-text-primary">Work</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm">
            A collection of my best video editing projects across different styles and formats.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <a
              key={index}
              href="#"
              className={`group block rounded-2xl overflow-hidden glass hover:glow-box transition-all duration-500 hover-shine ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Play overlay */}
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center glow-box"
                    style={{ background: "linear-gradient(135deg, hsl(var(--glow)), hsl(var(--glow-secondary)))" }}>
                    <Play className="w-6 h-6 text-white fill-current ml-0.5" />
                  </div>
                </div>
                {/* Category badge */}
                <span className="absolute top-4 left-4 px-3 py-1 glass rounded-full text-xs font-medium">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold group-hover:gradient-text-primary transition-all">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all shrink-0 mt-1" />
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full text-xs text-muted-foreground bg-muted/50">
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
