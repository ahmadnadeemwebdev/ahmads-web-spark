import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Client Name",
      role: "YouTuber",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "Ahmad's editing skills are top-notch! He understood my vision perfectly and delivered cinematic edits that boosted my channel's engagement. Highly recommend for any content creator!",
      rating: 5,
    },
    {
      name: "Brand Client",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "We hired Ahmad for our social media reels and the results were amazing. He has an eye for trendy edits and knows how to make content that goes viral. Great turnaround time too!",
      rating: 5,
    },
    {
      name: "Creative Partner",
      role: "Content Creator",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face",
      content: "Working with Ahmad was a pleasure. His color grading and motion graphics skills really elevated our music video. Professional, creative, and always delivers on time!",
      rating: 4,
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm tracking-widest uppercase">Testimonials</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6 tracking-tight">
              WHAT CLIENTS <span className="text-gradient">SAY</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
              Feedback from creators and brands I've had the pleasure of working with
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 hover:border-primary/40 transition-all duration-500 group relative"
              >
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;