import { User, Film, BookOpen, Target, Clapperboard } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-primary text-sm tracking-widest uppercase">About Me</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 tracking-tight">ABOUT ME</h2>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Who I Am */}
            <div className="md:col-span-2 glass rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-500">
              <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                <User className="w-5 h-5" /> Who Am I?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm <span className="text-foreground font-medium">Ahmad Nadeem</span> — a passionate 
                <span className="text-primary font-medium"> Video Editor & Motion Designer</span> who creates 
                cinematic content that stops the scroll. My focus is on clean cuts, smooth transitions, 
                color grading, and storytelling through visual media.
              </p>
            </div>

            {/* Experience Card */}
            <div className="glass rounded-2xl p-8 flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
              <span className="text-6xl font-bold text-gradient">2+</span>
              <span className="text-muted-foreground mt-2">Years of Editing</span>
            </div>

            {/* Skills Card */}
            <div className="glass rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-colors">
              <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                <Film className="w-5 h-5" /> My Skills
              </h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Video Editing & Color Grading</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Motion Graphics & VFX</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Social Media Reels & Shorts</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Sound Design & Audio Mixing</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Thumbnail & Graphics Design</li>
              </ul>
            </div>

            {/* What I Learned */}
            <div className="glass rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-colors">
              <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5" /> What I Learned
              </h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Storytelling through editing</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Pacing & rhythm in cuts</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Color science & LUTs</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Client communication & delivery</li>
              </ul>
            </div>

            {/* Future Goal */}
            <div className="glass rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-colors">
              <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                <Target className="w-5 h-5" /> Future Goal
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                My goal is to become a <span className="text-foreground font-medium">Top-tier Video Editor</span> working 
                with brands and creators worldwide. I want to master cinematography, 3D motion graphics, 
                and build my own creative agency.
              </p>
            </div>

            {/* Software Stack */}
            <div className="md:col-span-2 glass rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-colors">
              <span className="text-primary text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
                <Clapperboard className="w-4 h-4" /> Software I Use
              </span>
              <div className="flex flex-wrap gap-3 mt-4">
                {["Premiere Pro", "After Effects", "DaVinci Resolve", "Photoshop", "CapCut", "Audition", "Media Encoder", "Canva"].map((tech) => (
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