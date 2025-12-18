import { Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Freelance",
      location: "Remote",
      period: "Dec 2024 - Present",
      description: [
        "Developed responsive and interactive web pages using HTML, CSS, and JavaScript",
        "Built reusable and modular components using React.js",
        "Implemented props, state, and component-based architecture",
        "Fixed UI bugs and optimized performance for better user experience",
      ],
    },
    {
      title: "Learning & Development",
      company: "Self-taught",
      location: "Online Courses & Projects",
      period: "2024",
      description: [
        "Completed comprehensive web development courses",
        "Built multiple personal and practice projects",
        "Learned modern frameworks including React",
        "Practiced responsive design and CSS animations",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">My Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              My professional journey and continuous growth in web development
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2" />

            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-auto md:right-0 top-0 w-4 h-4 bg-primary rounded-full glow-primary -translate-x-1/2 md:translate-x-1/2" 
                  style={{ [index % 2 === 0 ? 'right' : 'left']: '-8px' }}
                />

                {/* Card */}
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
