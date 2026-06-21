import { useEffect, useRef, useState } from "react";

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const o = new IntersectionObserver(([e]) => e.isIntersecting && setIsVisible(true), { threshold: 0.2 });
    if (sectionRef.current) o.observe(sectionRef.current);
    return () => o.disconnect();
  }, []);

  const experiences = [
    {
      period: "2024 — Now",
      title: "Freelance Designer & Web Developer",
      company: "Self-Employed · Remote",
      bg: "bg-primary",
      points: [
        "Designed brand identities, logos & social kits for 15+ clients",
        "Built responsive React websites & landing pages",
        "Pixel-perfect Figma → React handoffs",
        "Fast turnaround, high client satisfaction",
      ],
    },
    {
      period: "2023 — 2024",
      title: "Self-Taught Skill Building",
      company: "Online · Practice Projects",
      bg: "bg-accent",
      points: [
        "Mastered Figma, Photoshop & Illustrator",
        "Learned React, TypeScript, Tailwind & modern tooling",
        "Studied typography, color theory & design systems",
        "Built portfolio through real client work",
      ],
    },
    {
      period: "2023 — 2025",
      title: "Intermediate (ICS)",
      company: "College Education",
      bg: "bg-background",
      points: [
        "Completed Intermediate in Computer Science",
        "Strong foundation in programming fundamentals",
        "Balanced academics with freelancing",
      ],
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-24 px-6 lg:px-8 border-t-2 border-foreground bg-secondary/60">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-10 h-10 bg-primary border-2 border-foreground flex items-center justify-center font-display text-lg">04</span>
          <span className="font-bold uppercase tracking-widest text-xs">Journey</span>
          <div className="flex-1 h-0.5 bg-foreground" />
        </div>

        <div className={`max-w-2xl mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-5xl lg:text-7xl uppercase leading-[0.9]">
            My <span className="text-primary">timeline</span>
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-12 gap-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="md:col-span-3">
                <div className={`${exp.bg} border-2 border-foreground p-4 shadow-brutal-sm inline-block`}>
                  <p className="font-display text-2xl uppercase leading-none">{exp.period}</p>
                </div>
              </div>
              <div className="md:col-span-9 bg-background border-2 border-foreground p-6 shadow-brutal brutal-hover">
                <h3 className="font-display text-2xl uppercase mb-1">{exp.title}</h3>
                <p className="text-xs font-bold uppercase text-muted-foreground tracking-wider mb-4">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-sm font-medium flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary border border-foreground mt-1.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
