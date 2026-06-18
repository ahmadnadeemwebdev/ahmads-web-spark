import { useEffect, useRef, useState } from "react";

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      period: "2024 — Present",
      title: "Freelance Designer & Web Developer",
      company: "Self-Employed · Remote",
      points: [
        "Designed brand identities, logos, and social media kits for 15+ clients",
        "Built responsive React websites and landing pages for small businesses",
        "Delivered Figma → React handoffs with pixel-perfect implementation",
        "Maintained fast turnaround with high client satisfaction",
      ],
    },
    {
      period: "2023 — 2024",
      title: "Self-Taught Skill Building",
      company: "Online · Practice Projects",
      points: [
        "Mastered Figma, Photoshop and Illustrator for design workflows",
        "Learned React, TypeScript, Tailwind CSS and modern web tooling",
        "Studied typography, color theory and design systems",
        "Built portfolio through practice projects and real client work",
      ],
    },
    {
      period: "2023 — 2025",
      title: "Intermediate (ICS)",
      company: "College Education",
      points: [
        "Completed Intermediate in Computer Science (ICS)",
        "Built strong foundation in programming and computer fundamentals",
        "Balanced academics with freelancing and skill development",
      ],
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className={`max-w-2xl mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm text-primary uppercase tracking-widest mb-4">— Experience</p>
          <h2 className="text-4xl lg:text-6xl uppercase tracking-tight">
            My Journey
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-[180px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-[180px_1fr] gap-6 md:gap-12 py-8 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative">
                  <div className="absolute left-0 md:left-auto md:right-[-27px] top-1.5 w-2.5 h-2.5 rounded-full bg-foreground border-2 border-background" />
                  <p className="text-sm text-muted-foreground font-mono pl-6 md:pl-0">{exp.period}</p>
                </div>
                <div className="ml-6 md:ml-0 border border-border rounded-2xl p-6 hover:bg-secondary/50 transition-colors">
                  <h3 className="text-lg font-semibold mb-1">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-1.5 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;