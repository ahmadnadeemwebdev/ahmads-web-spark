import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Logo + brand identity: 5–7 days. Full website: 10–14 days. Rush jobs available with a 30% rush fee. I send a fixed timeline with every quote.",
  },
  {
    q: "Do you work with clients outside Pakistan?",
    a: "Yes — 100%. I work with clients in the US, UK, UAE, and across Europe. All communication over email / WhatsApp / Zoom. Payments via Wise, Payoneer, or bank transfer.",
  },
  {
    q: "What do you need from me to get started?",
    a: "A short brief (goals, audience, references you like), any existing brand assets, and a 50% deposit. That's it — I'll guide you through the rest.",
  },
  {
    q: "Do you offer revisions?",
    a: "Two rounds of revisions included in every package. Extra rounds are billed at a small flat rate so you always know what you're paying.",
  },
  {
    q: "Will my website be fast and SEO-friendly?",
    a: "Yes. Every site I build hits 90+ on Lighthouse, ships with meta tags, sitemap, robots.txt, and structured data. Mobile-first by default.",
  },
  {
    q: "Can you redesign my existing site or brand?",
    a: "Absolutely. Send me what you have — I'll audit it for free and tell you honestly whether a refresh or a full rebuild makes more sense.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 lg:px-8 border-t-2 border-foreground bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="w-10 h-10 bg-accent border-2 border-foreground flex items-center justify-center font-display text-lg">07</span>
          <span className="font-bold uppercase tracking-widest text-xs">FAQ</span>
          <div className="flex-1 h-0.5 bg-foreground" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <h2 className="font-display text-5xl lg:text-7xl uppercase leading-[0.9] sticky top-32">
              Things<br />
              people<br />
              <span className="bg-primary text-primary-foreground px-3">always ask.</span>
            </h2>
            <p className="mt-6 text-base font-medium leading-snug max-w-sm">
              Still not sure? <a href="#contact" className="underline decoration-4 decoration-accent underline-offset-4 font-bold">Drop me a line</a> — I reply within 24 hours.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={f.q}
                  className={`border-2 border-foreground shadow-brutal-sm transition-all ${
                    isOpen ? "bg-accent" : "bg-background"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-2xl uppercase leading-tight">{f.q}</span>
                    <span className="shrink-0 w-8 h-8 bg-foreground text-background flex items-center justify-center">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 border-t-2 border-foreground pt-4">
                      <p className="text-sm font-medium leading-relaxed">{f.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
