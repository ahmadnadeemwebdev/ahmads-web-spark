import { Scissors, Palette, Zap, Camera } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      icon: Scissors,
      title: "Video Editing",
      description: "Clean cuts, smooth transitions & compelling storytelling in Premiere Pro.",
    },
    {
      icon: Palette,
      title: "Color Grading",
      description: "Professional color correction & LUTs using Premiere Pro's Lumetri panel.",
    },
    {
      icon: Zap,
      title: "Short Form Content",
      description: "Scroll-stopping reels, TikToks & Shorts optimized for engagement.",
    },
    {
      icon: Camera,
      title: "Thumbnail Design",
      description: "Click-worthy thumbnails that drive views and CTR.",
    },
  ];

  return (
    <section id="skills" className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">Services</p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            What I Do
          </h2>
          <p className="text-muted-foreground text-lg">
            Skills honed through hundreds of hours of editing and real client projects.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-background p-8 lg:p-10 hover:bg-muted/30 transition-colors duration-300 group"
            >
              <skill.icon className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors mb-6" />
              <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
