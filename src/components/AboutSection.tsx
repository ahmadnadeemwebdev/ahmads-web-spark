const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Main About Card - Spans 2 columns */}
            <div className="md:col-span-2 glass rounded-3xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-500">
              <span className="text-primary text-sm font-mono">{"<AboutMe />"}</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                Full Stack Developer & Creative Coder
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                I design and build modern web applications with focus on 
                performance, accessibility, and beautiful user interfaces. 
                Currently crafting digital experiences with React & Node.js.
              </p>
            </div>

            {/* Experience Card */}
            <div className="glass rounded-3xl p-8 flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
              <span className="text-6xl font-bold text-gradient">1+</span>
              <span className="text-muted-foreground mt-2">Years of Experience</span>
            </div>

            {/* Projects Card */}
            <div className="glass rounded-3xl p-8 flex flex-col justify-center items-center text-center border border-primary/20 hover:border-primary/40 transition-colors">
              <span className="text-6xl font-bold text-gradient">10+</span>
              <span className="text-muted-foreground mt-2">Projects Completed</span>
            </div>

            {/* Tech Stack Card */}
            <div className="md:col-span-2 glass rounded-3xl p-8 border border-primary/20 hover:border-primary/40 transition-colors">
              <span className="text-primary text-sm font-mono mb-4 block">// Tech I Love</span>
              <div className="flex flex-wrap gap-3">
                {["React", "TypeScript", "Node.js", "Tailwind CSS", "MongoDB", "Git"].map((tech) => (
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
