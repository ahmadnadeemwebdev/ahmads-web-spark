import { Palette, Code2, PenTool, Layers, Smartphone, Sparkles, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SkillsSection = () => {
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

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className={`max-w-2xl mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm text-primary uppercase tracking-widest mb-4">— Services</p>
          <h2 className="text-4xl lg:text-6xl uppercase tracking-tight mb-4">
            What I Do
          </h2>
          <p className="text-muted-foreground text-lg">
            Two crafts, one obsession — making things that look great and work even better.
          </p>
        </div>

        {/* Bento grid */}
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {/* Large feature: Graphic Design */}
          <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 min-h-[320px] flex flex-col justify-between hover:scale-[1.01] transition-transform">
            <div className="flex items-start justify-between">
              <Palette className="w-10 h-10" />
              <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <h3 className="text-3xl uppercase mb-3">Graphic Design</h3>
              <p className="text-sm opacity-90 max-w-md">
                Bold brand identities, logos, social media graphics, posters & complete visual systems in Figma, Photoshop & Illustrator.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {["Figma", "Photoshop", "Illustrator", "Branding"].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-primary-foreground/15 text-xs">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Web Dev */}
          <div className="md:col-span-2 group rounded-3xl border border-border bg-card p-8 min-h-[200px] hover:border-primary/50 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-xl uppercase mb-2">Web Development</h3>
            <p className="text-sm text-muted-foreground">
              Modern, fast, responsive websites built with React, TypeScript & Tailwind CSS.
            </p>
          </div>

          {/* UI/UX */}
          <div className="group rounded-3xl border border-border bg-card p-6 hover:border-primary/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-4">
              <Layers className="w-4 h-4 text-primary" />
            </div>
            <h3 className="text-base uppercase mb-1">UI / UX Design</h3>
            <p className="text-xs text-muted-foreground">Clean interfaces & user flows.</p>
          </div>

          {/* Responsive */}
          <div className="group rounded-3xl border border-border bg-card p-6 hover:border-primary/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-4">
              <Smartphone className="w-4 h-4 text-primary" />
            </div>
            <h3 className="text-base uppercase mb-1">Responsive</h3>
            <p className="text-xs text-muted-foreground">Mobile-first, every screen.</p>
          </div>

          {/* Logo/Identity */}
          <div className="md:col-span-2 group rounded-3xl border border-border bg-secondary/40 p-8 hover:bg-secondary/70 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-background flex items-center justify-center">
                <PenTool className="w-5 h-5 text-primary" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-xl uppercase mb-2">Logo & Identity</h3>
            <p className="text-sm text-muted-foreground">
              Memorable marks and full identity systems — typography, color, guidelines.
            </p>
          </div>

          {/* Creative coding */}
          <div className="md:col-span-2 group rounded-3xl border border-primary/30 bg-primary/5 p-8 hover:bg-primary/10 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-xl uppercase mb-2">Landing Pages</h3>
            <p className="text-sm text-muted-foreground">
              Conversion-focused landing pages that match your brand and ship fast.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
