import { ArrowDown, ArrowRight, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 lg:px-8 relative overflow-hidden pt-28 pb-16">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative blobs */}
      <div className="hidden lg:block absolute top-32 right-20 w-28 h-28 bg-accent border-2 border-foreground rotate-12 shadow-brutal" />
      <div className="hidden lg:block absolute bottom-40 left-16 w-20 h-20 bg-primary border-2 border-foreground -rotate-6 rounded-full shadow-brutal-sm" />

      <div className="max-w-6xl mx-auto w-full relative">
        {/* Tag */}
        <div className="mb-6 animate-fade-up flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent border-2 border-foreground text-foreground text-xs font-bold uppercase tracking-wider shadow-brutal-sm">
            <span className="w-2 h-2 bg-foreground rounded-full animate-pulse" />
            Available for freelance
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3 h-3 fill-foreground" /> Lahore, PK
          </span>
        </div>

        {/* Mega headline — broken grid */}
        <div className="relative animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="font-display text-[18vw] sm:text-[14vw] lg:text-[11rem] leading-[0.82] uppercase">
            <span className="block">Graphic</span>
            <span className="block ml-[6%] text-primary">Design<span className="text-foreground">/</span></span>
            <span className="block ml-[14%]">
              Web&nbsp;<span className="inline-block bg-foreground text-background px-3">Dev</span>
            </span>
          </h1>
        </div>

        {/* Bottom row — asymmetric */}
        <div className="grid lg:grid-cols-12 gap-6 mt-12 items-end">
          <p className="lg:col-span-5 text-lg leading-snug font-medium animate-fade-up" style={{ animationDelay: "0.2s" }}>
            I make <span className="bg-accent px-1.5">bold brand identities</span> and build <span className="bg-primary text-primary-foreground px-1.5">fast, modern websites</span>. Figma to React — no fluff, just pixels that hit.
          </p>

          <div className="lg:col-span-4 lg:col-start-7 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a href="#projects" className="inline-flex items-center gap-2 px-6 py-4 bg-primary text-primary-foreground border-2 border-foreground font-bold uppercase text-sm shadow-brutal brutal-hover">
              See the Work <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-4 bg-background text-foreground border-2 border-foreground font-bold uppercase text-sm shadow-brutal brutal-hover">
              Hire Me
            </a>
          </div>

          <div className="lg:col-span-2 lg:col-start-11 flex lg:justify-end animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-accent border-2 border-foreground p-3 -rotate-3 shadow-brutal-sm">
              <p className="font-display text-4xl leading-none">1+</p>
              <p className="text-[10px] font-bold uppercase">yrs exp</p>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t-2 border-b-2 border-foreground bg-foreground text-background py-2 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4 font-display text-xl uppercase tracking-wide shrink-0">
              <span>Graphic Design</span><span className="text-primary">★</span>
              <span>Web Development</span><span className="text-primary">★</span>
              <span>Brand Identity</span><span className="text-primary">★</span>
              <span>Logo Design</span><span className="text-primary">★</span>
              <span>UI / UX</span><span className="text-primary">★</span>
              <span>React + Tailwind</span><span className="text-primary">★</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
