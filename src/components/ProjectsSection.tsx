import { ArrowUpRight, Play } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Brand Commercial",
      category: "Commercial",
      description: "High-energy brand commercial with cinematic color grading and dynamic text animations.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=500&fit=crop",
      tags: ["Premiere Pro", "After Effects", "Color Grading"],
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
      tags: ["CapCut", "Premiere Pro"],
    },
    {
      title: "Music Video",
      category: "Cinematic",
      description: "Cinematic music video with VFX overlays, speed ramps, and creative transitions.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=500&fit=crop",
      tags: ["DaVinci Resolve", "After Effects"],
    },
    {
      title: "Podcast Edit",
      category: "Long Form",
      description: "Multi-camera podcast with dynamic captions, background music, and clean audio.",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop",
      tags: ["Premiere Pro", "Audition"],
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
    <section id="projects" className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-4">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">Portfolio</p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
              Selected Work
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            A collection of my best video editing projects across different styles and formats.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <a
              key={index}
              href="#"
              className="group block rounded-2xl overflow-hidden border border-border hover:border-muted-foreground/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Play overlay */}
                <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-foreground/90 flex items-center justify-center">
                    <Play className="w-5 h-5 text-background fill-current ml-0.5" />
                  </div>
                </div>
                {/* Category badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold group-hover:text-muted-foreground transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-muted rounded-full text-xs text-muted-foreground"
                    >
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
