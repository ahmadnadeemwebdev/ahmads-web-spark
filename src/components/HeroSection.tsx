import { Button } from "@/components/ui/button";
import { ArrowDown, Instagram, Youtube, Mail, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 film-grain" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-primary/8 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
      
      {/* Film strip decorative elements */}
      <div className="absolute left-0 top-0 bottom-0 w-12 opacity-5 hidden lg:block">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-8 h-6 border border-foreground/30 mx-auto my-2 rounded-sm" />
        ))}
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-12 opacity-5 hidden lg:block">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-8 h-6 border border-foreground/30 mx-auto my-2 rounded-sm" />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full mb-8 animate-fade-in">
            <Play className="w-3 h-3 text-primary fill-primary" />
            <span className="text-sm text-muted-foreground tracking-wider uppercase">Available for Projects</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 animate-slide-up tracking-tight leading-none">
            AHMAD{" "}
            <span className="text-gradient">NADEEM</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up font-light tracking-widest uppercase" style={{ animationDelay: "0.1s" }}>
            Video Editor & Motion Designer
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up font-light" style={{ animationDelay: "0.2s" }}>
            I craft cinematic edits, viral reels & stunning social media content using{" "}
            <span className="text-primary font-medium">Premiere Pro</span>,{" "}
            <span className="text-primary font-medium">After Effects</span> &{" "}
            <span className="text-primary font-medium">DaVinci Resolve</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <a href="#projects" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto min-h-[52px] text-base bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 gap-2">
                <Play className="w-4 h-4 fill-current" />
                View My Work
              </Button>
            </a>
            <a href="#contact" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto min-h-[52px] text-base rounded-full px-8 border-primary/30 hover:bg-primary/10">
                Hire Me
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="https://youtube.com/@ahmadnadeem"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-300"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/ahmadnadeem"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="w-12 h-12 glass rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;