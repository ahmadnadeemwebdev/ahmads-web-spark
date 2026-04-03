const ExperienceSection = () => {
  const experiences = [
    {
      period: "2024 — Present",
      title: "Freelance Video Editor",
      company: "Self-Employed · Remote",
      points: [
        "Edited 50+ short-form videos for social media clients",
        "Created cinematic edits with professional color grading",
        "Designed motion graphics and text animations",
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
    <section id="experience" className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">Experience</p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            My Journey
          </h2>
        </div>

        <div className="space-y-0 border-t border-border">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10 border-b border-border group"
            >
              <div>
                <p className="text-sm text-muted-foreground font-mono">{exp.period}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 shrink-0" />
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
