import { useEffect, useRef, useState } from "react";
import { Film, Zap, Clock, Sparkles } from "lucide-react";

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
    <section id="about" ref={sectionRef} className="py-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">About Me</p>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
              Turning ideas
              <br />
              into reality
            </h2>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-4 border border-border rounded-2xl p-4 w-full">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <Film className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold">Adobe Premiere Pro</p>
                  <p className="text-sm text-muted-foreground">Video Editing</p>
                </div>
              </div>
              <div className="inline-flex items-center gap-4 border border-border rounded-2xl p-4 w-full">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Figma & Adobe Suite</p>
                  <p className="text-sm text-muted-foreground">Graphic Design</p>
                </div>
              </div>
              <div className="inline-flex items-center gap-4 border border-border rounded-2xl p-4 w-full">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">React & Modern Web</p>
                  <p className="text-sm text-muted-foreground">Web Development</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm <span className="text-foreground font-semibold">Ahmad Nadeem</span> — a creative professional based in Lahore, Pakistan.
              With 1+ years of experience across video editing, graphic design, and web development, I help brands and creators stand out.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I recently completed my Intermediate (ICS) and have been building my skills through real projects and continuous learning.
              Whether it's a cinematic edit, a brand identity, or a modern website — I deliver quality work with fast turnaround.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { value: "50+", label: "Projects Done", icon: Zap },
                { value: "1+", label: "Years Exp", icon: Clock },
                { value: "20+", label: "Happy Clients", icon: Sparkles },
                { value: "24h", label: "Turnaround", icon: Film },
              ].map((stat) => (
                <div key={stat.label} className="border border-border rounded-xl p-5 hover:bg-secondary transition-colors">
                  <stat.icon className="w-4 h-4 text-muted-foreground mb-2" />
                  <p className="text-2xl font-bold">{stat.value}</p>
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