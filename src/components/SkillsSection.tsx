import { Scissors, Palette, Zap, Camera, Code2, PenTool } from "lucide-react";
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
    {
      icon: PenTool,
      title: "Graphic Design",
      description: "Brand identities, social media graphics, posters & visual assets in Figma & Photoshop.",
    },
    {
      icon: Code2,
      title: "Web Development",
      description: "Modern, responsive websites built with React, Tailwind CSS & best practices.",
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <div className={`max-w-2xl mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">Services</p>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
            What I Do
          </h2>
          <p className="text-muted-foreground">
            A versatile skill set honed through real projects and continuous learning.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className={`group border border-border bg-background rounded-2xl p-8 hover:border-foreground/20 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <skill.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;