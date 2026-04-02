import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, Loader2, Instagram, Youtube, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (response.error) {
        throw new Error(response.error.message);
      }

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">Contact</p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Let's work
              <span className="text-muted-foreground"> together</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Have a project in mind? Send me a message and I'll get back to you within 24 hours.
            </p>

            {/* Contact info */}
            <div className="space-y-4 mb-10">
              <a href="mailto:ahmadnadeemwebdev@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                <Mail className="w-4 h-4" />
                ahmadnadeemwebdev@gmail.com
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Lahore, Pakistan
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              <a
                href="https://youtube.com/@ahmadnadeem"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/ahmadnadeem"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Name</label>
              <Input
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-transparent border-border focus:border-foreground rounded-xl h-12"
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
                className="bg-transparent border-border focus:border-foreground rounded-xl h-12"
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
                className="bg-transparent border-border focus:border-foreground resize-none rounded-xl"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full h-12"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Send className="w-4 h-4 mr-2" />
              )}
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
