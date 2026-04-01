import { Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Freelance Video Editor",
      company: "Self-Employed",
      location: "Remote",
      period: "2024 - Present",
      description: [
        "Edited short-form content (Reels, TikToks, Shorts) for multiple clients",
        "Created cinematic edits with professional color grading using DaVinci Resolve",
        "Designed custom motion graphics and text animations in After Effects",
        "Delivered 50+ projects with fast turnaround and client satisfaction",
      ],
    },
    {
      title: "Learning & Skill Building",
      company: "Self-taught",
      location: "Online Courses & YouTube",
      period: "2023 - 2024",
      description: [
        "Mastered Premiere Pro, After Effects & DaVinci Resolve",
        "Studied color science, storytelling, and editing psychology",
        "Built a portfolio through practice edits and passion projects",
        "Learned sound design and audio mixing with Adobe Audition",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm tracking-widest uppercase">My Journey</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6 tracking-tight">
              WORK <span className="text-gradient">EXPERIENCE</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
              My journey in the world of video editing and content creation
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
                }`}
              >
                <div className="absolute left-0 md:left-auto md:right-0 top-0 w-4 h-4 bg-primary rounded-full glow-primary -translate-x-1/2 md:translate-x-1/2" 
                  style={{ [index % 2 === 0 ? 'right' : 'left']: '-8px' }}
                />

                <div className="glass p-6 rounded-xl ml-8 md:ml-0 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-2 text-primary text-sm font-mono mb-2">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
                    <span>{exp.company}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="text-primary mt-1">▹</span>
                        {item}
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