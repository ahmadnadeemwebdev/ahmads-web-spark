import { Code2, Palette, Zap, Atom, GitBranch, Monitor, Layout, Globe, Terminal, FileCode, Smartphone, Layers } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      name: "HTML5",
      level: 95,
      icon: FileCode,
      description: "Semantic markup & accessibility",
    },
    {
      name: "CSS3",
      level: 70,
      icon: Palette,
      description: "Animations & responsive layouts",
    },
    {
      name: "JavaScript",
      level: 65,
      icon: Zap,
      description: "ES6+ & DOM manipulation",
    },
    {
      name: "React",
      level: 80,
      icon: Atom,
      description: "Hooks, state & components",
    },
    {
      name: "Tailwind CSS",
      level: 85,
      icon: Layers,
      description: "Utility-first CSS framework",
    },
    {
      name: "Responsive Design",
      level: 90,
      icon: Smartphone,
      description: "Mobile-first approach",
    },
  ];

  const tools = [
    { name: "Git", icon: GitBranch },
    { name: "GitHub", icon: Globe },
    { name: "VS Code", icon: Terminal },
    { name: "Bootstrap", icon: Layout },
    { name: "REST APIs", icon: Code2 },
    { name: "Chrome DevTools", icon: Monitor },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">My Skills</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Technical <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Technologies I've mastered through dedicated learning and real-world projects
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
                        className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_hsl(246,75%,59%,0.5)]"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">Tools I Use</h3>
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
