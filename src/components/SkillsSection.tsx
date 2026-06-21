import { Palette, Code2, PenTool, Layers, Smartphone, Sparkles, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const o = new IntersectionObserver(([e]) => e.isIntersecting && setIsVisible(true), { threshold: 0.1 });
    if (sectionRef.current) o.observe(sectionRef.current);
    return () => o.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6 lg:px-8 border-t-2 border-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-10 h-10 bg-accent border-2 border-foreground flex items-center justify-center font-display text-lg">03</span>
          <span className="font-bold uppercase tracking-widest text-xs">Services</span>
          <div className="flex-1 h-0.5 bg-foreground" />
        </div>

        <div className={`max-w-3xl mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-5xl lg:text-7xl uppercase leading-[0.9]">
            What I <span className="text-primary">do</span><br />
            (and do <span className="bg-foreground text-background px-3">well</span>)
          </h2>
        </div>

        {/* Broken bento grid */}
        <div className={`grid grid-cols-1 md:grid-cols-6 gap-5 transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {/* Graphic Design — feature */}
          <div className="md:col-span-4 md:row-span-2 bg-primary border-2 border-foreground p-8 shadow-brutal brutal-hover relative overflow-hidden min-h-[340px] flex flex-col justify-between">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent border-2 border-foreground rotate-12" />
            <div className="relative">
              <div className="flex items-start justify-between">
                <Palette className="w-12 h-12" strokeWidth={2.5} />
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
            <div className="relative">
              <h3 className="font-display text-5xl lg:text-6xl uppercase mb-3">Graphic<br />Design</h3>
              <p className="text-sm font-medium max-w-md leading-snug">
                Bold brand identities, logos, social kits, posters & complete visual systems. Figma, Photoshop & Illustrator.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {["Figma", "Photoshop", "Illustrator", "Branding"].map((t) => (
                  <span key={t} className="px-2.5 py-1 bg-background text-foreground border-2 border-foreground text-xs font-bold uppercase">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Web Dev */}
          <div className="md:col-span-2 bg-background border-2 border-foreground p-6 shadow-brutal brutal-hover">
            <div className="w-12 h-12 bg-accent border-2 border-foreground flex items-center justify-center mb-4">
              <Code2 className="w-5 h-5" strokeWidth={2.5} />
            </div>
            <h3 className="font-display text-2xl uppercase mb-2">Web Dev</h3>
            <p className="text-xs font-medium text-muted-foreground leading-snug">React, TypeScript & Tailwind. Fast & responsive.</p>
          </div>

          {/* Landing Pages */}
          <div className="md:col-span-2 bg-accent border-2 border-foreground p-6 shadow-brutal brutal-hover">
            <div className="flex items-start justify-between mb-4">
              <Sparkles className="w-6 h-6" strokeWidth={2.5} />
              <ArrowUpRight className="w-5 h-5" />
            </div>
            <h3 className="font-display text-2xl uppercase mb-1">Landing Pages</h3>
            <p className="text-xs font-medium leading-snug">Conversion-focused & on-brand.</p>
          </div>

          {/* UI/UX */}
          <div className="md:col-span-2 bg-background border-2 border-foreground p-6 shadow-brutal brutal-hover">
            <Layers className="w-6 h-6 mb-3" strokeWidth={2.5} />
            <h3 className="font-display text-xl uppercase mb-1">UI / UX</h3>
            <p className="text-xs font-medium text-muted-foreground">Clean flows, sharp interfaces.</p>
          </div>

          {/* Logo */}
          <div className="md:col-span-2 bg-foreground text-background border-2 border-foreground p-6 shadow-brutal-primary brutal-hover">
            <PenTool className="w-6 h-6 mb-3 text-primary" strokeWidth={2.5} />
            <h3 className="font-display text-xl uppercase mb-1">Logo & ID</h3>
            <p className="text-xs font-medium opacity-80">Marks that stick. Systems that scale.</p>
          </div>

          {/* Responsive */}
          <div className="md:col-span-2 bg-background border-2 border-foreground p-6 shadow-brutal brutal-hover">
            <Smartphone className="w-6 h-6 mb-3" strokeWidth={2.5} />
            <h3 className="font-display text-xl uppercase mb-1">Responsive</h3>
            <p className="text-xs font-medium text-muted-foreground">Mobile-first, every screen.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
