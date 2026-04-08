import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ["home", "about", "projects", "skills", "experience", "contact"];
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Work" },
    { href: "#skills", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }`}
    >
      {/* Bottom neon line when scrolled */}
      {isScrolled && <div className="absolute bottom-0 left-0 right-0 neon-line opacity-40" />}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-tight gradient-text-neon">
          AN
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                activeSection === link.href.slice(1)
                  ? "bg-primary/20 text-primary font-medium glow-box"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="rounded-full">
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden glass-strong mt-2 mx-4 rounded-2xl overflow-hidden glow-box">
          <div className="flex flex-col p-3 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`py-3 px-4 rounded-xl text-sm transition-colors ${
                  activeSection === link.href.slice(1)
                    ? "bg-primary/20 text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
