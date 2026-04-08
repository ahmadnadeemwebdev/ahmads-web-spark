import { Scissors, Palette, Zap, Camera, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      icon: Scissors,
      title: "Video Editing",
      description: "Clean cuts, smooth transitions & compelling storytelling in Premiere Pro.",
    },
    {
      icon: Palette,
      title: "Color Grading",
      description: "Professional color correction & LUTs using Premiere Pro's Lumetri panel.",
    },
    {
      icon: Zap,
      title: "Short Form Content",
      description: "Scroll-stopping reels, TikToks & Shorts optimized for engagement.",
    },
    {
      icon: Camera,
      title: "Thumbnail Design",
      description: "Click-worthy thumbnails that drive views and CTR.",
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-32 px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 neon-line opacity-30" />

      {/* Orb */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(190 100% 55% / 0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`max-w-2xl mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-primary uppercase tracking-widest mb-4">
            <Sparkles className="w-3 h-3" />
            Services
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-4">
            What I <span className="gradient-text-neon">Do</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Skills honed through hundreds of hours of editing and real client projects.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className={`group card-3d transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="glass rounded-2xl p-8 lg:p-10 hover:glow-box-strong transition-all duration-500 hover-shine relative overflow-hidden h-full">
                {/* Top neon line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                  style={{ boxShadow: "0 0 10px hsl(var(--glow) / 0.5)" }}
                />
                
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:animate-pulse-neon"
                  style={{ background: "hsl(var(--glow) / 0.1)" }}>
                  <skill.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:gradient-text-primary transition-all">{skill.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
