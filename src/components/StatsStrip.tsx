const stats = [
  { value: "40+", label: "Projects shipped" },
  { value: "15+", label: "Happy clients" },
  { value: "8", label: "Countries served" },
  { value: "24h", label: "Avg. reply time" },
  { value: "98%", label: "On-time delivery" },
];

const StatsStrip = () => {
  return (
    <section className="border-y-2 border-foreground bg-foreground text-background">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 divide-x-2 divide-background/20">
        {stats.map((s, i) => (
          <div key={s.label} className={`p-6 text-center ${i >= 2 ? "border-t-2 md:border-t-0 border-background/20" : ""}`}>
            <p className="font-display text-5xl lg:text-6xl leading-none text-primary">{s.value}</p>
            <p className="text-[10px] font-black uppercase tracking-widest mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsStrip;
