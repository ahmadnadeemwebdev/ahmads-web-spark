import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const o = new IntersectionObserver(([e]) => e.isIntersecting && setIsVisible(true), { threshold: 0.1 });
    if (sectionRef.current) o.observe(sectionRef.current);
    return () => o.disconnect();
  }, []);

  const projects = [
    { title: "Brand Identity System", category: "Design", description: "Complete brand package — logo, palette, typography & social templates.", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=500&fit=crop", tags: ["Figma", "Branding"], accent: "bg-primary" },
    { title: "SaaS Landing Page", category: "Web", description: "Conversion-focused React landing with smooth animations & dark mode.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop", tags: ["React", "Tailwind"], accent: "bg-accent" },
    { title: "Logo Collection", category: "Design", description: "Wordmark & emblem logos for small businesses and creators.", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=500&fit=crop", tags: ["Illustrator", "Logo"], accent: "bg-accent" },
    { title: "Portfolio Website", category: "Web", description: "Modern responsive portfolio with React + TypeScript + Tailwind.", image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&h=500&fit=crop", tags: ["React", "TypeScript"], accent: "bg-primary" },
    { title: "Social Media Kit", category: "Design", description: "Eye-catching IG posts, story templates & promotional graphics.", image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop", tags: ["Photoshop", "Social"], accent: "bg-primary" },
    { title: "E-commerce UI", category: "Web", description: "Product redesign — crisp type, custom cart drawer, smooth checkout.", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=500&fit=crop", tags: ["React", "UI/UX"], accent: "bg-accent" },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-6 lg:px-8 border-t-2 border-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-10 h-10 bg-foreground text-background border-2 border-foreground flex items-center justify-center font-display text-lg">02</span>
          <span className="font-bold uppercase tracking-widest text-xs">Selected Work</span>
          <div className="flex-1 h-0.5 bg-foreground" />
        </div>

        <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-5xl lg:text-7xl uppercase leading-[0.9]">
            Recent<br />
            <span className="inline-block bg-primary text-primary-foreground px-3">projects</span>
          </h2>
          <p className="max-w-sm text-sm font-medium leading-snug">
            A mix of graphic design & web dev from recent freelance work. Click any card to dive in.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href="#"
              className={`group block bg-background border-2 border-foreground shadow-brutal brutal-hover transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-foreground">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" loading="lazy" />
                <span className={`absolute top-3 left-3 px-3 py-1 ${project.accent} border-2 border-foreground text-xs font-bold uppercase`}>
                  {project.category}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-display text-2xl uppercase">{project.title}</h3>
                  <ArrowUpRight className="w-5 h-5 shrink-0 mt-1" />
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4 font-medium">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-[10px] font-bold uppercase border-2 border-foreground">{tag}</span>
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
