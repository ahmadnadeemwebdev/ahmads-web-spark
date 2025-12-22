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
              <h3 className="text-xl font-semibold text-primary mb-3">🙋‍♂️ Main Kaun Hoon?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Main <span className="text-foreground font-medium">Ahmad Nadeem</span> hoon — ek passionate 
                <span className="text-primary font-medium"> Frontend Developer</span> jo modern web applications 
                banata hai. Mera focus clean code, fast performance aur user-friendly interfaces par hai.
              </p>
            </div>

            {/* Experience Card */}
            <div className="glass rounded-3xl p-8 flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
              <span className="text-6xl font-bold text-gradient">1+</span>
              <span className="text-muted-foreground mt-2">Years of Experience</span>
            </div>

            {/* Skills Card */}
            <div className="glass rounded-3xl p-8 border border-primary/20 hover:border-primary/40 transition-colors">
              <h3 className="text-xl font-semibold text-primary mb-3">💡 Meri Skills</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>✅ React.js & Component-Based Architecture</li>
                <li>✅ Responsive & Mobile-First Design</li>
                <li>✅ JavaScript (ES6+) & TypeScript</li>
                <li>✅ Tailwind CSS & Modern Styling</li>
                <li>✅ Git & Version Control</li>
              </ul>
            </div>

            {/* What I Learned Card */}
            <div className="glass rounded-3xl p-8 border border-primary/20 hover:border-primary/40 transition-colors">
              <h3 className="text-xl font-semibold text-primary mb-3">📚 Kya Seekha?</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>🔹 Real-world projects build karna</li>
                <li>🔹 Problem solving & debugging</li>
                <li>🔹 Clean & maintainable code likhna</li>
                <li>🔹 API integration & state management</li>
              </ul>
            </div>

            {/* Future Goal Card */}
            <div className="glass rounded-3xl p-8 border border-primary/20 hover:border-primary/40 transition-colors">
              <h3 className="text-xl font-semibold text-primary mb-3">🎯 Future Goal</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Mera goal hai ek <span className="text-foreground font-medium">Full Stack Developer</span> banna 
                aur innovative web applications banana jo logon ki life easy karein. Backend technologies 
                seekhna aur freelance projects lena bhi plan mein hai.
              </p>
            </div>

            {/* Tech Stack Card */}
            <div className="md:col-span-2 glass rounded-3xl p-8 border border-primary/20 hover:border-primary/40 transition-colors">
              <span className="text-primary text-sm font-mono mb-4 block">// Technologies I Use</span>
              <div className="flex flex-wrap gap-3">
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
