import { Film, Palette, Zap, Music, Scissors, Monitor, Sparkles, Camera, Type, Layers } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      name: "Video Editing",
      level: 90,
      icon: Scissors,
      description: "Cuts, transitions & storytelling",
    },
    {
      name: "Color Grading",
      level: 85,
      icon: Palette,
      description: "LUTs, color science & mood",
    },
    {
      name: "Motion Graphics",
      level: 75,
      icon: Sparkles,
      description: "Animations & visual effects",
    },
    {
      name: "Sound Design",
      level: 70,
      icon: Music,
      description: "Audio mixing & SFX",
    },
    {
      name: "Short Form Content",
      level: 95,
      icon: Zap,
      description: "Reels, TikToks & Shorts",
    },
    {
      name: "Thumbnail Design",
      level: 80,
      icon: Camera,
      description: "Click-worthy visuals",
    },
  ];

  const tools = [
    { name: "Premiere Pro", icon: Film },
    { name: "After Effects", icon: Sparkles },
    { name: "DaVinci Resolve", icon: Palette },
    { name: "Photoshop", icon: Layers },
    { name: "Audition", icon: Music },
    { name: "CapCut", icon: Monitor },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm tracking-widest uppercase">My Skills</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6 tracking-tight">
              TECHNICAL <span className="text-gradient">EXPERTISE</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
              Skills mastered through hundreds of hours of editing and real client projects
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="glass p-6 rounded-2xl hover:border-primary/40 transition-all duration-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                    <skill.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-lg">{skill.name}</h3>
                      <span className="text-primary font-mono text-sm font-bold">{skill.level}%</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">{skill.description}</p>
                    <div className="h-2.5 bg-background/50 rounded-full overflow-hidden border border-border/30">
                      <div
                        className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_hsl(32,95%,55%,0.5)]"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tools */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">Software I Master</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="glass px-5 py-3 rounded-xl flex items-center gap-3 hover:border-primary/50 transition-all duration-300 group cursor-default"
                >
                  <tool.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;