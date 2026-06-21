import { useEffect, useRef, useState } from "react";
import { Palette, Code2, Layers, Sparkles } from "lucide-react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const o = new IntersectionObserver(([e]) => e.isIntersecting && setIsVisible(true), { threshold: 0.15 });
    if (sectionRef.current) o.observe(sectionRef.current);
    return () => o.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6 lg:px-8 border-t-2 border-foreground bg-secondary/60">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-10 h-10 bg-primary border-2 border-foreground flex items-center justify-center font-display text-lg">01</span>
          <span className="font-bold uppercase tracking-widest text-xs">About</span>
          <div className="flex-1 h-0.5 bg-foreground" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Big statement */}
          <div className={`lg:col-span-7 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="font-display text-5xl lg:text-7xl uppercase leading-[0.9]">
              Designing<br />
              <span className="inline-block bg-foreground text-background px-3">& building</span><br />
              with <span className="text-primary">intent.</span>
            </h2>

            <p className="mt-8 text-lg leading-snug font-medium max-w-xl">
              I'm <span className="bg-accent px-1.5 font-bold">Ahmad Nadeem</span> — graphic designer & web developer from Lahore. Just wrapped my Intermediate (ICS) and freelancing 1+ years across design and code.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-xl">
              I live in the overlap — brand identities that translate cleanly into living websites. Fast turnaround, clean execution, no fluff.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-3 bg-background border-2 border-foreground px-4 py-3 shadow-brutal-sm">
                <Palette className="w-5 h-5 text-primary" />
                <span className="font-bold uppercase text-sm">Figma · PS · AI</span>
              </div>
              <div className="inline-flex items-center gap-3 bg-background border-2 border-foreground px-4 py-3 shadow-brutal-sm">
                <Code2 className="w-5 h-5 text-primary" />
                <span className="font-bold uppercase text-sm">React · TS · Tailwind</span>
              </div>
            </div>
          </div>

          {/* Stats stack — offset broken-grid */}
          <div className={`lg:col-span-5 grid grid-cols-2 gap-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            {[
              { value: "40+", label: "Projects shipped", icon: Sparkles, bg: "bg-primary", rot: "rotate-2" },
              { value: "1+", label: "Years freelance", icon: Layers, bg: "bg-accent", rot: "-rotate-2" },
              { value: "15+", label: "Happy clients", icon: Palette, bg: "bg-background", rot: "-rotate-1" },
              { value: "24h", label: "Avg. reply", icon: Code2, bg: "bg-background", rot: "rotate-1" },
            ].map((s) => (
              <div key={s.label} className={`${s.bg} border-2 border-foreground p-5 shadow-brutal brutal-hover ${s.rot}`}>
                <s.icon className="w-5 h-5 mb-3" />
                <p className="font-display text-5xl leading-none">{s.value}</p>
                <p className="text-xs font-bold uppercase mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
