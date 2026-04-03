const AboutSection = () => {
  const tools = [
    "Premiere Pro",
  ];

  return (
    <section id="about" className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">About</p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Crafting stories through
              <span className="text-muted-foreground"> every frame</span>
            </h2>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm Ahmad Nadeem — a video editor based in Lahore, Pakistan. 
              I specialize in creating scroll-stopping content for social media and 
              cinematic brand videos using Adobe Premiere Pro.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With 1+ year of hands-on experience, I've worked with creators and brands 
              to deliver content that not only looks great but drives real engagement. 
              My editing style focuses on clean cuts, smooth transitions, 
              and compelling visual storytelling.
            </p>

            {/* Tools */}
            <div className="pt-6">
              <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">Tools I Use</p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 rounded-full border border-border text-sm hover:bg-muted transition-colors cursor-default"
                  >
                    {tool}
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
