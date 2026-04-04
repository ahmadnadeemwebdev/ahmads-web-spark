import { ArrowDown, Play, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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
      className="min-h-screen flex flex-col justify-center relative px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full animate-pulse-glow"
          style={{
            background: "radial-gradient(circle, hsl(270 100% 65% / 0.15) 0%, transparent 70%)",
            top: "10%",
            left: "60%",
            transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full animate-float-delayed"
          style={{
            background: "radial-gradient(circle, hsl(200 100% 60% / 0.1) 0%, transparent 70%)",
            bottom: "10%",
            left: "10%",
          }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full animate-float-slow"
          style={{
            background: "radial-gradient(circle, hsl(270 100% 65% / 0.08) 0%, transparent 70%)",
            top: "50%",
            right: "5%",
          }}
        />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full pt-24 relative z-10">
        {/* Status badge */}
        <div className="mb-8 animate-reveal">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Available for freelance work
            <Sparkles className="w-3 h-3 text-primary" />
          </span>
        </div>

        {/* Main heading */}
        <div className="space-y-2 mb-8">
          <h1 className="text-6xl sm:text-8xl lg:text-9xl xl:text-[10rem] font-bold tracking-tighter leading-[0.85] animate-reveal">
            <span className="gradient-text">Video</span>
          </h1>
          <h1
            className="text-6xl sm:text-8xl lg:text-9xl xl:text-[10rem] font-bold tracking-tighter leading-[0.85] animate-reveal"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-glow" style={{ color: "hsl(var(--foreground))" }}>Editor</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="max-w-xl animate-reveal" style={{ animationDelay: "0.2s" }}>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Crafting <span className="gradient-text-primary font-medium">cinematic edits</span> and 
            viral social media content using Adobe Premiere Pro.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 mt-12 animate-reveal" style={{ animationDelay: "0.3s" }}>
          <a
            href="#projects"
            className="magnetic-btn group inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden"
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
            className="magnetic-btn inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium glass hover:bg-muted/50 transition-all duration-300 gradient-border"
          >
            Get In Touch
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-12 sm:gap-16 mt-24 animate-reveal" style={{ animationDelay: "0.4s" }}>
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "1+", label: "Year Experience" },
            { value: "20+", label: "Happy Clients" },
          ].map((stat) => (
            <div key={stat.label} className="group">
              <p className="text-4xl sm:text-5xl font-bold gradient-text-primary group-hover:text-glow transition-all">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
