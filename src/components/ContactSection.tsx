import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, Loader2, Instagram, ArrowUpRight, Globe } from "lucide-react";
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
    const o = new IntersectionObserver(([e]) => e.isIntersecting && setIsVisible(true), { threshold: 0.15 });
    if (sectionRef.current) o.observe(sectionRef.current);
    return () => o.disconnect();
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
      toast({ title: "Failed to send", description: error.message || "Please try again.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-6 lg:px-8 border-t-2 border-foreground bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-10 h-10 bg-primary text-primary-foreground border-2 border-background flex items-center justify-center font-display text-lg">06</span>
          <span className="font-bold uppercase tracking-widest text-xs">Contact</span>
          <div className="flex-1 h-0.5 bg-background" />
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          <div className={`lg:col-span-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="font-display text-6xl lg:text-8xl uppercase leading-[0.85] mb-6">
              Let's<br />
              <span className="inline-block bg-primary text-primary-foreground px-3">make</span><br />
              <span className="inline-block bg-accent text-accent-foreground px-3">stuff.</span>
            </h2>
            <p className="text-lg max-w-md mb-10 font-medium">
              Need a brand identity, logo, or fresh website? Drop a message — I reply within 24h.
            </p>

            <div className="space-y-3 mb-8">
              <a href="mailto:ahmadnadeemwebdev@gmail.com" className="flex items-center gap-3 bg-background text-foreground border-2 border-background px-4 py-3 hover:bg-primary hover:text-primary-foreground transition-colors group">
                <Mail className="w-5 h-5" />
                <span className="font-bold text-sm">ahmadnadeemwebdev@gmail.com</span>
                <ArrowUpRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100" />
              </a>
              <div className="flex items-center gap-3 px-4 py-3 border-2 border-background">
                <MapPin className="w-5 h-5" />
                <span className="font-bold text-sm">Lahore, Pakistan</span>
              </div>
            </div>

            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "https://instagram.com/ahmadnadeem", label: "Instagram" },
                { icon: Globe, href: "#", label: "Website" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-background text-foreground border-2 border-background flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label={s.label}
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`lg:col-span-6 bg-background text-foreground border-2 border-background p-8 space-y-5 shadow-brutal-lg transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ boxShadow: "10px 10px 0 0 hsl(var(--primary))" }}
          >
            <div>
              <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-wider mb-2 block">Name</label>
              <Input id="contact-name" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" required maxLength={100} className="bg-background border-2 border-foreground rounded-none h-12 font-medium focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary" />
            </div>
            <div>
              <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-wider mb-2 block">Email</label>
              <Input id="contact-email" name="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="you@example.com" required maxLength={255} className="bg-background border-2 border-foreground rounded-none h-12 font-medium focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary" />
            </div>
            <div>
              <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-wider mb-2 block">Project Details</label>
              <Textarea id="contact-message" name="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell me about your project..." required rows={5} maxLength={2000} className="bg-background border-2 border-foreground rounded-none font-medium resize-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary" />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-14 bg-primary text-primary-foreground border-2 border-foreground font-bold uppercase tracking-wider shadow-brutal brutal-hover flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
