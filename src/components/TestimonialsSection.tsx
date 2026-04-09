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
    <section id="testimonials" ref={sectionRef} className="py-24 px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <div className={`max-w-2xl mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">Testimonials</p>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
            What Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`bg-background border border-border rounded-2xl p-7 transition-all duration-700 hover:border-foreground/20 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Quote className="w-7 h-7 text-muted-foreground/20 mb-4" />
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                "{t.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-sm font-semibold">
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
