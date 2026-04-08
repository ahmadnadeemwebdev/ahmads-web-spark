import { Star, Sparkles, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Client Name",
      role: "YouTuber",
      content: "Ahmad's editing skills are top-notch. He understood my vision perfectly and delivered cinematic edits that boosted my channel's engagement.",
      rating: 5,
    },
    {
      name: "Brand Client",
      role: "Business Owner",
      content: "We hired Ahmad for our social media reels and the results were amazing. He knows how to make content that goes viral.",
      rating: 5,
    },
    {
      name: "Creative Partner",
      role: "Content Creator",
      content: "His color grading skills really elevated our music video. Professional, creative, and always delivers on time.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" ref={sectionRef} className="py-32 px-6 lg:px-8 relative">
      <div className="absolute top-0 left-0 right-0 neon-line opacity-30" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(190 100% 55% / 0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`max-w-2xl mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-primary uppercase tracking-widest mb-4">
            <Sparkles className="w-3 h-3" />
            Testimonials
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
            What Clients <span className="gradient-text-neon">Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`card-3d transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="glass rounded-2xl p-8 hover:glow-box-strong transition-all duration-500 hover-shine relative group h-full">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold animate-pulse-neon"
                    style={{ background: "linear-gradient(135deg, hsl(var(--glow) / 0.3), hsl(var(--glow-secondary) / 0.3))" }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
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
