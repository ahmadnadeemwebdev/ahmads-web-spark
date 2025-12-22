import { User, Lightbulb, BookOpen, Target, Code } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-mono">{"<AboutMe />"}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">About Me</h2>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Who I Am - Main Card */}
            <div className="md:col-span-2 glass rounded-3xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-500">
              <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                <User className="w-5 h-5" /> Who Am I?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm <span className="text-foreground font-medium">Ahmad Nadeem</span> — a passionate 
                <span className="text-primary font-medium"> Frontend Developer</span> who builds modern web applications. 
                My focus is on clean code, fast performance, and user-friendly interfaces.
              </p>
            </div>

            {/* Experience Card */}
            <div className="glass rounded-3xl p-8 flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
              <span className="text-6xl font-bold text-gradient">1+</span>
              <span className="text-muted-foreground mt-2">Years of Experience</span>
            </div>

            {/* Skills Card */}
            <div className="glass rounded-3xl p-8 border border-primary/20 hover:border-primary/40 transition-colors">
              <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" /> My Skills
              </h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> React.js & Component-Based Architecture</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Responsive & Mobile-First Design</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> JavaScript (ES6+) & TypeScript</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Tailwind CSS & Modern Styling</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Git & Version Control</li>
              </ul>
            </div>

            {/* What I Learned Card */}
            <div className="glass rounded-3xl p-8 border border-primary/20 hover:border-primary/40 transition-colors">
              <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5" /> What I Learned
              </h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Building real-world projects</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Problem solving & debugging</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Writing clean & maintainable code</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> API integration & state management</li>
              </ul>
            </div>

            {/* Future Goal Card */}
            <div className="glass rounded-3xl p-8 border border-primary/20 hover:border-primary/40 transition-colors">
              <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                <Target className="w-5 h-5" /> Future Goal
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                My goal is to become a <span className="text-foreground font-medium">Full Stack Developer</span> and 
                build innovative web applications that make people's lives easier. Learning backend technologies 
                and taking freelance projects is also in my plan.
              </p>
            </div>

            {/* Tech Stack Card */}
            <div className="md:col-span-2 glass rounded-3xl p-8 border border-primary/20 hover:border-primary/40 transition-colors">
              <span className="text-primary text-sm font-mono mb-4 flex items-center gap-2">
                <Code className="w-4 h-4" /> // Technologies I Use
              </span>
              <div className="flex flex-wrap gap-3 mt-4">
                {["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Git", "GitHub", "VS Code"].map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 rounded-full bg-background/50 border border-border text-sm hover:border-primary/50 hover:text-primary transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
