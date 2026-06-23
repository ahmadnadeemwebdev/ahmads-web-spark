const steps = [
  {
    no: "01",
    title: "Brief",
    time: "Day 1",
    desc: "You send goals, references, audience. I send back a few smart questions to nail the scope.",
    bg: "bg-background",
  },
  {
    no: "02",
    title: "Concept",
    time: "Day 2–4",
    desc: "First direction in Figma. Bold options, not safe ones. We pick one and refine.",
    bg: "bg-accent",
  },
  {
    no: "03",
    title: "Build",
    time: "Day 5–10",
    desc: "Final design or live React build. Daily updates, no ghosting. Revisions baked in.",
    bg: "bg-primary text-primary-foreground",
  },
  {
    no: "04",
    title: "Ship",
    time: "Day 11+",
    desc: "Files handed off, site deployed. You get source files and a 14-day support window.",
    bg: "bg-foreground text-background",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 px-6 lg:px-8 border-t-2 border-foreground bg-secondary/60">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="w-10 h-10 bg-accent border-2 border-foreground flex items-center justify-center font-display text-lg">04</span>
          <span className="font-bold uppercase tracking-widest text-xs">The Process</span>
          <div className="flex-1 h-0.5 bg-foreground" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <h2 className="lg:col-span-7 font-display text-5xl lg:text-7xl uppercase leading-[0.9]">
            From brief<br />
            to <span className="bg-primary text-primary-foreground px-3">launch</span><br />
            in <span className="underline decoration-4 underline-offset-4 decoration-primary">2 weeks</span>.
          </h2>
          <p className="lg:col-span-5 text-base font-medium leading-snug lg:mt-6">
            Same process for every project — design or code. Predictable timelines, clear deliverables, no scope creep mid-way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.no}
              className={`${s.bg} border-2 border-foreground p-6 shadow-brutal brutal-hover relative ${
                i % 2 === 0 ? "lg:mt-0" : "lg:mt-10"
              }`}
            >
              <div className="font-display text-7xl leading-none mb-4 opacity-90">{s.no}</div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display text-3xl uppercase">{s.title}</h3>
                <span className="text-[10px] font-black uppercase tracking-widest border-2 border-current px-2 py-0.5">
                  {s.time}
                </span>
              </div>
              <p className="text-sm font-medium leading-snug">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
