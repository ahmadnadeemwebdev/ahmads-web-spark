interface MarqueeStripProps {
  items: string[];
  variant?: "dark" | "accent" | "primary";
  speed?: number;
}

const MarqueeStrip = ({ items, variant = "dark", speed = 30 }: MarqueeStripProps) => {
  const bg =
    variant === "dark"
      ? "bg-foreground text-background"
      : variant === "accent"
      ? "bg-accent text-foreground"
      : "bg-primary text-primary-foreground";

  const star =
    variant === "dark" ? "text-primary" : variant === "accent" ? "text-foreground" : "text-background";

  return (
    <div className={`${bg} border-y-2 border-foreground py-3 overflow-hidden`}>
      <div className="flex animate-marquee whitespace-nowrap" style={{ animationDuration: `${speed}s` }}>
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="flex items-center gap-8 px-4 font-display text-2xl uppercase tracking-wide shrink-0">
            {items.map((item) => (
              <span key={item} className="flex items-center gap-8">
                {item}
                <span className={star}>✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
