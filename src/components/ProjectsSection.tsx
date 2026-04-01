import { ExternalLink, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Brand Commercial Edit",
      description: "A high-energy brand commercial with cinematic color grading, smooth transitions, and dynamic text animations. Created for a local clothing brand.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
      tags: ["Premiere Pro", "After Effects", "Color Grading"],
      videoUrl: "#",
    },
    {
      title: "YouTube Video Edit",
      description: "Full video editing for a tech YouTuber including cuts, sound design, motion graphics, and custom intro/outro animations.",
      image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&h=400&fit=crop",
      tags: ["Premiere Pro", "Sound Design", "Motion Graphics"],
      videoUrl: "#",
    },
    {
      title: "Instagram Reels Package",
      description: "A series of viral-worthy Instagram reels with trending transitions, text overlays, beat-synced cuts, and eye-catching thumbnails.",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=400&fit=crop",
      tags: ["CapCut", "Premiere Pro", "Short Form"],
      videoUrl: "#",
    },
    {
      title: "Music Video Edit",
      description: "Cinematic music video with color grading, VFX overlays, speed ramps, and creative transitions synced to the beat.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      tags: ["DaVinci Resolve", "After Effects", "VFX"],
      videoUrl: "#",
    },
    {
      title: "Podcast Editing",
      description: "Professional podcast editing with multi-camera switching, dynamic captions, background music, and clean audio mix.",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop",
      tags: ["Premiere Pro", "Audition", "Captions"],
      videoUrl: "#",
    },
    {
      title: "Product Showcase Reel",
      description: "Sleek product showcase video with smooth camera movements, macro shots editing, and premium color treatment for an e-commerce brand.",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop",
      tags: ["Premiere Pro", "Color Grading", "Commercial"],
      videoUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm tracking-widest uppercase">My Work</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6 tracking-tight">
              FEATURED <span className="text-gradient">PROJECTS</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
              A selection of my best video editing work across different styles and formats
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
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center">
                      <Play className="w-6 h-6 text-primary-foreground fill-current ml-1" />
                    </div>
                  </div>
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

                  {/* Link */}
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="gap-2 rounded-full border-primary/30 hover:bg-primary/10">
                      <Play className="w-4 h-4" />
                      Watch Video
                    </Button>
                  </a>
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