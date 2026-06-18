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
      title: "Brand Identity System",
      category: "Design",
      description: "Complete brand package — logo, color palette, typography & social templates for a lifestyle brand.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=500&fit=crop",
      tags: ["Figma", "Branding"],
    },
    {
      title: "SaaS Landing Page",
      category: "Web",
      description: "Conversion-focused React landing page with smooth animations and dark mode support.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      tags: ["React", "Tailwind"],
    },
    {
      title: "Logo Collection",
      category: "Design",
      description: "Selection of wordmark and emblem logos crafted for small businesses and creators.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=500&fit=crop",
      tags: ["Illustrator", "Logo"],
    },
    {
      title: "Portfolio Website",
      category: "Web",
      description: "Modern responsive portfolio built with React, TypeScript and Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&h=500&fit=crop",
      tags: ["React", "TypeScript"],
    },
    {
      title: "Social Media Kit",
      category: "Design",
      description: "Eye-catching Instagram posts, story templates and promotional graphics for brands.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop",
      tags: ["Photoshop", "Social"],
    },
    {
      title: "E-commerce UI",
      category: "Web",
      description: "Product page redesign with crisp typography, custom cart drawer and smooth checkout flow.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=500&fit=crop",
      tags: ["React", "UI/UX"],
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={`flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <p className="text-sm text-primary uppercase tracking-widest mb-4">— Portfolio</p>
            <h2 className="text-4xl lg:text-6xl uppercase tracking-tight">
              Selected Work
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm">
            A mix of graphic design and web development projects from recent freelance work.
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