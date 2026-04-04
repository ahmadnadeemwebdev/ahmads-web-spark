import { Sparkles } from "lucide-react";
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
      title: "Freelance Video Editor",
      company: "Self-Employed · Remote",
      points: [
        "Edited 50+ short-form videos for social media clients",
        "Created cinematic edits with professional color grading",
        "Maintained fast turnaround with high client satisfaction",
      ],
    },
    {
      period: "2023 — 2024",
      title: "Learning & Skill Building",
      company: "Self-taught · Online",
      points: [
        "Mastered Adobe Premiere Pro",
        "Studied color science, storytelling & editing psychology",
        "Built portfolio through practice edits and passion projects",
      ],
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-32 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`max-w-2xl mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-primary uppercase tracking-widest mb-4">
            <Sparkles className="w-3 h-3" />
            Experience
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
            My <span className="gradient-text-primary">Journey</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-[200px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-auto md:right-[-27px] top-1 w-3 h-3 rounded-full border-2 border-primary bg-background" />
                  <p className="text-sm text-primary font-mono pl-6 md:pl-0">{exp.period}</p>
                </div>
                <div className="glass rounded-2xl p-6 hover:glow-box transition-all duration-300 ml-6 md:ml-0">
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
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
