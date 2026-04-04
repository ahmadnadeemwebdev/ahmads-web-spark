import { useEffect, useRef, useState } from "react";
import { Film, Sparkles } from "lucide-react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 lg:px-8 relative">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(270 100% 65% / 0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-primary uppercase tracking-widest mb-6">
              <Sparkles className="w-3 h-3" />
              About Me
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Crafting stories
              <br />
              <span className="gradient-text-primary">through every frame</span>
            </h2>
            
            {/* Premiere Pro badge */}
            <div className="inline-flex items-center gap-3 glass rounded-2xl p-4 glow-box">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, hsl(var(--glow)), hsl(var(--glow-secondary)))" }}>
                <Film className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Adobe Premiere Pro</p>
                <p className="text-xs text-muted-foreground">Primary Editing Tool</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm <span className="text-foreground font-medium">Ahmad Nadeem</span> — a video editor based in Lahore, Pakistan. 
              I specialize in creating scroll-stopping content for social media and 
              cinematic brand videos.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With 1+ year of hands-on experience, I've worked with creators and brands 
              to deliver content that not only looks great but drives real engagement. 
              My editing style focuses on clean cuts, smooth transitions, 
              and compelling visual storytelling.
            </p>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {[
                { value: "50+", label: "Projects Done" },
                { value: "1+", label: "Year Exp" },
                { value: "20+", label: "Happy Clients" },
                { value: "24h", label: "Turnaround" },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-4 hover:glow-box transition-all duration-300 hover-shine">
                  <p className="text-2xl font-bold gradient-text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
