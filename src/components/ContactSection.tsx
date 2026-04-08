import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, Loader2, Instagram, Youtube, ArrowUpRight, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await supabase.functions.invoke('send-contact-email', { body: formData });
      if (response.error) throw new Error(response.error.message);
      toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon!" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({ title: "Failed to send message", description: error.message || "Please try again later.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-32 px-6 lg:px-8 relative">
      <div className="absolute top-0 left-0 right-0 neon-line opacity-30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(260 100% 65% / 0.1) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-primary uppercase tracking-widest mb-6">
              <Sparkles className="w-3 h-3" />
              Contact
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Let's work
              <br />
              <span className="gradient-text-neon">together</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Have a project in mind? Send me a message and I'll get back to you within 24 hours.
            </p>

            {/* Contact info */}
            <div className="space-y-4 mb-10">
              <a href="mailto:ahmadnadeemwebdev@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center group-hover:glow-box group-hover:animate-pulse-neon transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                ahmadnadeemwebdev@gmail.com
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                Lahore, Pakistan
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {[
                { icon: Youtube, href: "https://youtube.com/@ahmadnadeem", label: "YouTube" },
                { icon: Instagram, href: "https://instagram.com/ahmadnadeem", label: "Instagram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-box-strong transition-all duration-300 card-3d"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}
            className={`glass rounded-2xl p-8 space-y-5 glow-box-strong transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Name</label>
              <Input
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background/50 border-border/50 focus:border-primary rounded-xl h-12"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Email</label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background/50 border-border/50 focus:border-primary rounded-xl h-12"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Project Details</label>
              <Textarea
                placeholder="Tell me about your video project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="bg-background/50 border-border/50 focus:border-primary resize-none rounded-xl"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full rounded-full h-12 magnetic-btn font-semibold glow-box-strong"
              style={{ background: "linear-gradient(135deg, hsl(var(--glow)), hsl(var(--glow-secondary)))", color: "white" }}
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Send className="w-4 h-4 mr-2" />}
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
