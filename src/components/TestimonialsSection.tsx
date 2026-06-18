import { Star, Quote } from "lucide-react";
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
      name: "Brand Client",
      role: "Startup Founder",
      content: "Ahmad delivered a complete brand identity that perfectly captured our vision. Clean, modern, and on-time.",
      rating: 5,
    },
    {
      name: "Small Business",
      role: "Business Owner",
      content: "He built our website from scratch — fast, responsive, and beautifully designed. Exceeded expectations.",
      rating: 5,
    },
    {
      name: "Creator",
      role: "Content Creator",
      content: "Amazing logo and social media kit. Professional, creative, and always responsive to feedback.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 px-6 lg:px-8 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <div className={`max-w-2xl mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm text-primary uppercase tracking-widest mb-4">— Testimonials</p>
          <h2 className="text-4xl lg:text-6xl uppercase tracking-tight">
            What Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`bg-background border border-border rounded-2xl p-7 transition-all duration-700 hover:border-primary/40 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Quote className="w-7 h-7 text-primary/30 mb-4" />
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                "{t.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-medium text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
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
