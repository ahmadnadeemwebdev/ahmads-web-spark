import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const sections = ["home", "about", "projects", "skills", "experience", "contact"];
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(section);
          break;
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${isScrolled ? "bg-background border-b-2 border-foreground" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-10 h-10 bg-primary border-2 border-foreground flex items-center justify-center font-display text-xl shadow-brutal-sm group-hover:rotate-6 transition-transform">
            AN
          </span>
          <span className="hidden sm:inline font-display text-lg uppercase tracking-wide">Ahmad Nadeem</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                activeSection === link.href.slice(1)
                  ? "bg-foreground text-background"
                  : "text-foreground hover:bg-accent"
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="ml-2 border-l-2 border-foreground pl-2">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 bg-background border-2 border-foreground flex items-center justify-center shadow-brutal-sm"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-t-2 border-foreground">
          <div className="flex flex-col p-3 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`py-3 px-4 text-sm font-bold uppercase border-2 border-foreground ${
                  activeSection === link.href.slice(1) ? "bg-primary" : "bg-background"
                }`}
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
