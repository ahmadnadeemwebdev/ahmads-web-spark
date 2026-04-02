import { ArrowDown, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full pt-24">
        {/* Status */}
        <div className="mb-8 animate-reveal">
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for freelance work
          </span>
        </div>

        {/* Main heading */}
        <div className="space-y-4 mb-8">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.9] animate-reveal">
            Video Editor
          </h1>
          <h1
            className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.9] text-muted-foreground animate-reveal"
            style={{ animationDelay: "0.1s" }}
          >
            & Motion Designer
          </h1>
        </div>

        {/* Description */}
        <div className="max-w-xl animate-reveal" style={{ animationDelay: "0.2s" }}>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I create cinematic edits, viral social media content, and stunning 
            motion graphics using Premiere Pro, After Effects & DaVinci Resolve.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-4 mt-10 animate-reveal" style={{ animationDelay: "0.3s" }}>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Play className="w-4 h-4 fill-current" />
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border px-6 py-3.5 rounded-full text-sm font-medium hover:bg-muted transition-colors"
          >
            Get In Touch
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-12 mt-20 animate-reveal" style={{ animationDelay: "0.4s" }}>
          <div>
            <p className="text-3xl font-bold">50+</p>
            <p className="text-sm text-muted-foreground mt-1">Projects Delivered</p>
          </div>
          <div>
            <p className="text-3xl font-bold">2+</p>
            <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold">20+</p>
            <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
