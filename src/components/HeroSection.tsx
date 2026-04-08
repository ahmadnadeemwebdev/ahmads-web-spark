import { ArrowDown, Play, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center relative px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated orbs with parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main purple orb */}
        <div
          className="absolute w-[700px] h-[700px] rounded-full animate-pulse-glow"
          style={{
            background: "radial-gradient(circle, hsl(260 100% 65% / 0.2) 0%, transparent 70%)",
            top: "5%",
            right: "-5%",
            transform: `translate(${mousePos.x * 0.03}px, ${mousePos.y * 0.03}px)`,
            transition: "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        />
        {/* Cyan orb */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full animate-float-delayed"
          style={{
            background: "radial-gradient(circle, hsl(190 100% 55% / 0.1) 0%, transparent 70%)",
            bottom: "5%",
            left: "5%",
            transform: `translate(${mousePos.x * -0.02}px, ${mousePos.y * -0.02}px)`,
            transition: "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        />
        {/* Pink accent */}
        <div
          className="absolute w-[300px] h-[300px] rounded-full animate-float-slow"
          style={{
            background: "radial-gradient(circle, hsl(330 100% 60% / 0.08) 0%, transparent 70%)",
            top: "60%",
            right: "20%",
          }}
        />
        {/* Rotating ring */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full animate-spin-slow opacity-10"
          style={{
            border: "1px solid hsl(var(--glow) / 0.3)",
            top: "10%",
            left: "50%",
            transform: `translate(-50%, 0)`,
          }}
        />
      </div>

      {/* Grid bg */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      {/* Neon line separator */}
      <div className="absolute bottom-0 left-0 right-0 neon-line" />

      <div className="max-w-7xl mx-auto w-full pt-24 relative z-10">
        {/* Status */}
        <div className="mb-10 animate-reveal">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground animate-pulse-neon">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Available for freelance work
            <Sparkles className="w-3 h-3 text-primary" />
          </span>
        </div>

        {/* Main heading */}
        <div className="space-y-3 mb-10">
          <h1 className="text-7xl sm:text-8xl lg:text-[10rem] xl:text-[12rem] font-bold tracking-tighter leading-[0.85] animate-reveal">
            <span className="gradient-text-neon">Video</span>
          </h1>
          <h1
            className="text-7xl sm:text-8xl lg:text-[10rem] xl:text-[12rem] font-bold tracking-tighter leading-[0.85] animate-reveal"
            style={{ animationDelay: "0.15s" }}
          >
            <span className="text-glow-strong" style={{ color: "hsl(var(--foreground))" }}>Editor</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="max-w-xl animate-reveal" style={{ animationDelay: "0.25s" }}>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Crafting <span className="gradient-text-primary font-semibold">cinematic edits</span> and
            viral social media content using Adobe Premiere Pro.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-4 mt-14 animate-reveal" style={{ animationDelay: "0.35s" }}>
          <a
            href="#projects"
            className="magnetic-btn group inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 relative overflow-hidden glow-box-strong"
            style={{
              background: "linear-gradient(135deg, hsl(var(--glow)), hsl(var(--glow-secondary)))",
              color: "white",
            }}
          >
            <Play className="w-4 h-4 fill-current" />
            View My Work
            <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
          </a>
          <a
            href="#contact"
            className="magnetic-btn inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold glass hover:bg-muted/50 transition-all duration-300 gradient-border animate-pulse-neon"
          >
            Get In Touch
          </a>
        </div>

        {/* Stats with 3D cards */}
        <div className="flex gap-8 sm:gap-12 mt-28 animate-reveal" style={{ animationDelay: "0.45s" }}>
          {[
            { value: "50+", label: "Projects" },
            { value: "1+", label: "Year Exp" },
            { value: "20+", label: "Clients" },
          ].map((stat) => (
            <div key={stat.label} className="group card-3d">
              <div className="glass rounded-2xl px-6 py-5 hover:glow-box transition-all duration-500">
                <p className="text-3xl sm:text-4xl font-bold gradient-text-primary group-hover:text-glow-strong transition-all">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
