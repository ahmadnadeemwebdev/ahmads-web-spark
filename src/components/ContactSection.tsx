import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, Loader2, Instagram, Youtube, Download } from "lucide-react";
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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ahmadnadeemwebdev@gmail.com",
      href: "mailto:ahmadnadeemwebdev@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lahore, Pakistan",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Youtube,
      label: "YouTube",
      href: "https://youtube.com/@ahmadnadeem",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/ahmadnadeem",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm tracking-widest uppercase">Get In Touch</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6 tracking-tight">
              LET'S <span className="text-gradient">CONNECT</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
              Need a video edited? Let's create something amazing together. 
              Send me a message and I'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <p className="text-muted-foreground font-light">
                  Feel free to reach out for project inquiries, collaborations, 
                  or just to say hi!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="glass p-4 rounded-xl flex items-center gap-4 hover:border-primary/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass w-12 h-12 rounded-xl flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                      title={social.label}
                    >
                      <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="glass p-8 rounded-xl space-y-6">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Your Name</label>
                <Input
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Your Email</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
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
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full" disabled={isLoading}>
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
      </div>
    </section>
  );
};

export default ContactSection;