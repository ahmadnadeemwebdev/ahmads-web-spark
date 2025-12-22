import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for work</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
            Hi, I'm{" "}
            <span className="text-gradient">Ahmad Nadeem</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Frontend Developer | React Developer
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            I build fast, responsive & modern web applications using{" "}
            <span className="text-primary font-medium">React</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <a href="#projects" className="w-full sm:w-auto">
              <Button variant="hero" size="lg" className="w-full sm:w-auto min-h-[48px] text-base">
                View My Work
              </Button>
            </a>
            <Link to="/cv" className="w-full sm:w-auto">
              <Button variant="glow" size="lg" className="w-full sm:w-auto min-h-[48px] text-base">
                View CV
              </Button>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="https://github.com/ahmadnadeemwebdev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmad-nadeem-848284380"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
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
