import { ArrowDown, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto w-full pt-20">
        {/* Status */}
        <div className="mb-8 animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            Available for freelance work
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Video Editor
          <br />
          <span className="text-muted-foreground">& Content Creator</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          I craft cinematic edits and scroll-stopping social media content using Adobe Premiere Pro.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap gap-4 mb-20 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View My Work
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-sm font-medium hover:bg-secondary transition-colors"
          >
            Get In Touch
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-12 sm:gap-16 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {[
            { value: "50+", label: "Projects" },
            { value: "1+", label: "Year Exp" },
            { value: "20+", label: "Clients" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl sm:text-4xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
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
