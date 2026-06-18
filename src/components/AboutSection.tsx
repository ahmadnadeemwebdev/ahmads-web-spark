import { useEffect, useRef, useState } from "react";
import { Palette, Code2, Layers, Sparkles } from "lucide-react";

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
    <section id="about" ref={sectionRef} className="py-24 px-6 lg:px-8 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-sm text-primary uppercase tracking-widest mb-4">— About Me</p>
            <h2 className="text-4xl lg:text-6xl uppercase tracking-tight leading-[0.95] mb-6">
              Designing
              <br />
              <span className="text-primary">& Building</span>
              <br />
              with intent
            </h2>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-4 border border-border rounded-2xl p-4 w-full bg-background">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <Palette className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold">Figma · Photoshop · Illustrator</p>
                  <p className="text-sm text-muted-foreground">Graphic Design</p>
                </div>
              </div>
              <div className="inline-flex items-center gap-4 border border-border rounded-2xl p-4 w-full bg-background">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">React · TypeScript · Tailwind</p>
                  <p className="text-sm text-muted-foreground">Web Development</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm <span className="text-foreground font-semibold">Ahmad Nadeem</span> — a graphic designer and web developer based in Lahore, Pakistan.
              I just completed my Intermediate (ICS) and have been freelancing for 1+ years across design and web.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I love the overlap between design and code — crafting brand identities that translate cleanly into living, breathing websites. Fast turnaround, clean execution.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { value: "40+", label: "Projects Done", icon: Sparkles },
                { value: "1+", label: "Years Exp", icon: Layers },
                { value: "15+", label: "Happy Clients", icon: Palette },
                { value: "24h", label: "Avg. Reply", icon: Code2 },
              ].map((stat) => (
                <div key={stat.label} className="border border-border rounded-2xl p-5 bg-background hover:border-primary/40 transition-colors">
                  <stat.icon className="w-4 h-4 text-primary mb-2" />
                  <p className="text-2xl font-display">{stat.value}</p>
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
