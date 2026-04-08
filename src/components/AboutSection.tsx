import { useEffect, useRef, useState } from "react";
import { Film, Sparkles, Zap, Clock } from "lucide-react";

const AboutSection = () => {
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

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 lg:px-8 relative">
      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(260 100% 65% / 0.06) 0%, transparent 70%)" }}
      />
      <div className="absolute top-0 left-0 right-0 neon-line opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-primary uppercase tracking-widest mb-6">
              <Sparkles className="w-3 h-3" />
              About Me
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight mb-8">
              Crafting stories
              <br />
              <span className="gradient-text-neon">through every frame</span>
            </h2>

            {/* Tool badge - 3D card */}
            <div className="card-3d inline-block">
              <div className="inline-flex items-center gap-4 glass rounded-2xl p-5 glow-box-strong">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, hsl(var(--glow)), hsl(var(--glow-secondary)))" }}>
                  <Film className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-bold text-base">Adobe Premiere Pro</p>
                  <p className="text-xs text-muted-foreground">Primary Editing Tool</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm <span className="text-foreground font-semibold">Ahmad Nadeem</span> — a video editor based in Lahore, Pakistan.
              I specialize in creating scroll-stopping content for social media and cinematic brand videos.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With 1+ year of hands-on experience, I've worked with creators and brands
              to deliver content that not only looks great but drives real engagement.
            </p>

            {/* Stats bento grid */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {[
                { value: "50+", label: "Projects Done", icon: Zap },
                { value: "1+", label: "Year Exp", icon: Clock },
                { value: "20+", label: "Happy Clients", icon: Sparkles },
                { value: "24h", label: "Turnaround", icon: Film },
              ].map((stat) => (
                <div key={stat.label} className="card-3d">
                  <div className="glass rounded-xl p-5 hover:glow-box transition-all duration-500 hover-shine shimmer h-full">
                    <stat.icon className="w-4 h-4 text-primary mb-2" />
                    <p className="text-2xl font-bold gradient-text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </div>
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
