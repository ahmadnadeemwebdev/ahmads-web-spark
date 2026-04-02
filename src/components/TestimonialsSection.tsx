import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Client Name",
      role: "YouTuber",
      content:
        "Ahmad's editing skills are top-notch. He understood my vision perfectly and delivered cinematic edits that boosted my channel's engagement.",
      rating: 5,
    },
    {
      name: "Brand Client",
      role: "Business Owner",
      content:
        "We hired Ahmad for our social media reels and the results were amazing. He knows how to make content that goes viral.",
      rating: 5,
    },
    {
      name: "Creative Partner",
      role: "Content Creator",
      content:
        "His color grading and motion graphics skills really elevated our music video. Professional, creative, and always delivers on time.",
      rating: 4,
    },
  ];

  return (
    <section id="testimonials" className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            What Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="border border-border rounded-2xl p-8 hover:bg-muted/20 transition-colors duration-300"
            >
              <div className="flex gap-0.5 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                "{t.content}"
              </p>
              <div>
                <p className="font-medium text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
