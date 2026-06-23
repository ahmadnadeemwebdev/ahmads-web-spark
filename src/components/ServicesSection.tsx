import { Palette, Code2, Layout, Sparkles, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    price: "From PKR 15K",
    desc: "Logo, color system, type scale, mini brand book. Built to live on screens AND printed merch.",
    bullets: ["Logo + variations", "Color & type system", "Social kit", "Brand guidelines PDF"],
    bg: "bg-primary text-primary-foreground",
    rot: "-rotate-1",
  },
  {
    icon: Code2,
    title: "Web Development",
    price: "From PKR 35K",
    desc: "Fast React websites with clean code, real animations, and SEO baked in. Figma → live URL.",
    bullets: ["React + TypeScript", "Tailwind styling", "Mobile-first", "SEO + analytics"],
    bg: "bg-background",
    rot: "rotate-1",
  },
  {
    icon: Layout,
    title: "UI / UX Design",
    price: "From PKR 20K",
    desc: "Figma mockups that ship. Real components, real states, hand-off ready.",
    bullets: ["Wireframes", "Hi-fi mockups", "Component library", "Dev hand-off"],
    bg: "bg-accent text-foreground",
    rot: "-rotate-1",
  },
  {
    icon: Sparkles,
    title: "Social Media Kit",
    price: "From PKR 8K",
    desc: "Templates for Instagram, Facebook, LinkedIn. Consistent feed, every time.",
    bullets: ["10+ post templates", "Story templates", "Highlight covers", "Editable PSD/Figma"],
    bg: "bg-background",
    rot: "rotate-1",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-6 lg:px-8 border-t-2 border-foreground bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="w-10 h-10 bg-primary border-2 border-foreground flex items-center justify-center font-display text-lg">02</span>
          <span className="font-bold uppercase tracking-widest text-xs">Services & Pricing</span>
          <div className="flex-1 h-0.5 bg-foreground" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mb-12 items-end">
          <h2 className="lg:col-span-8 font-display text-5xl lg:text-7xl uppercase leading-[0.9]">
            What I <span className="bg-foreground text-background px-3">make</span><br />
            for <span className="text-primary">clients</span> like you
          </h2>
          <p className="lg:col-span-4 text-base font-medium leading-snug">
            Pick a service, send a brief, get a quote in <span className="bg-accent px-1.5 font-bold">24 hours</span>. Fixed-price packages — no hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className={`${s.bg} ${s.rot} border-2 border-foreground p-6 shadow-brutal brutal-hover relative`}>
              <div className="absolute top-4 right-4 bg-foreground text-background px-2 py-1 text-[10px] font-black uppercase tracking-widest">
                {s.price}
              </div>
              <s.icon className="w-8 h-8 mb-4" />
              <h3 className="font-display text-4xl uppercase mb-2">{s.title}</h3>
              <p className="text-sm font-medium mb-4 leading-snug max-w-sm">{s.desc}</p>
              <ul className="space-y-1.5 mb-4">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm font-bold">
                    <span className="font-display text-xl leading-none mt-0.5">→</span>
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-widest border-b-2 border-foreground pb-0.5 hover:gap-2 transition-all"
              >
                Start a project <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>

        {/* Add-ons strip */}
        <div className="mt-10 border-2 border-foreground bg-foreground text-background p-6 flex flex-wrap items-center gap-4 justify-between">
          <div>
            <p className="font-display text-2xl uppercase">Need something custom?</p>
            <p className="text-sm opacity-80">Combo packages, retainers, or one-off pieces — let's talk.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground border-2 border-background px-6 py-3 font-bold uppercase text-sm shadow-[6px_6px_0_0_hsl(var(--accent))] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
          >
            Get a custom quote <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
