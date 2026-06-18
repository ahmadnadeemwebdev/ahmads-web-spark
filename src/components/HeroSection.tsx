import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full pt-20 relative">
        <div className="mb-8 animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/50 backdrop-blur text-sm text-muted-foreground">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Available for freelance work
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.95] mb-8 animate-fade-up uppercase" style={{ animationDelay: "0.1s" }}>
          Graphic
          <br />
          <span className="text-primary">Designer</span>
          <br />
          <span className="text-muted-foreground">& Web Dev</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          I design bold brand identities and build modern, fast websites. From Figma to React — turning ideas into pixel-perfect experiences.
        </p>

        <div className="flex flex-wrap gap-4 mb-20 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            View My Work
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-sm font-semibold hover:bg-secondary transition-colors"
          >
            Get In Touch
          </a>
        </div>

        <div className="flex gap-12 sm:gap-16 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {[
            { value: "1+", label: "Years Exp" },
            { value: "40+", label: "Projects" },
            { value: "15+", label: "Clients" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl sm:text-4xl font-display">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
