import { Star, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const o = new IntersectionObserver(([e]) => e.isIntersecting && setIsVisible(true), { threshold: 0.2 });
    if (sectionRef.current) o.observe(sectionRef.current);
    return () => o.disconnect();
  }, []);

  const testimonials = [
    { name: "Brand Client", role: "Startup Founder", content: "Ahmad delivered a complete brand identity that perfectly captured our vision. Clean, modern, and on-time.", bg: "bg-primary", rot: "-rotate-1" },
    { name: "Small Business", role: "Business Owner", content: "Built our website from scratch — fast, responsive, beautifully designed. Exceeded expectations.", bg: "bg-accent", rot: "rotate-1" },
    { name: "Creator", role: "Content Creator", content: "Amazing logo & social kit. Professional, creative, always responsive to feedback.", bg: "bg-background", rot: "-rotate-1" },
  ];

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 px-6 lg:px-8 border-t-2 border-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-10 h-10 bg-accent border-2 border-foreground flex items-center justify-center font-display text-lg">05</span>
          <span className="font-bold uppercase tracking-widest text-xs">Words</span>
          <div className="flex-1 h-0.5 bg-foreground" />
        </div>

        <div className={`max-w-2xl mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-5xl lg:text-7xl uppercase leading-[0.9]">
            Client <span className="bg-foreground text-background px-3">love</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`${t.bg} border-2 border-foreground p-6 shadow-brutal brutal-hover ${t.rot} transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Quote className="w-8 h-8 mb-3" strokeWidth={2.5} />
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-foreground" />
                ))}
              </div>
              <p className="leading-snug mb-6 text-sm font-medium">"{t.content}"</p>
              <div className="flex items-center gap-3 pt-4 border-t-2 border-foreground">
                <div className="w-10 h-10 bg-background border-2 border-foreground flex items-center justify-center font-display text-lg">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold uppercase text-sm">{t.name}</p>
                  <p className="text-xs font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
