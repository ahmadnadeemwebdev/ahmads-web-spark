import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AIChatBot from "@/components/AIChatBot";
import MarqueeStrip from "@/components/MarqueeStrip";
import StatsStrip from "@/components/StatsStrip";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <MarqueeStrip
          items={["Available for projects", "Based in Lahore PK", "Worldwide clients", "Replies in 24h", "Figma → React"]}
          variant="accent"
          speed={35}
        />
        <AboutSection />
        <ServicesSection />
        <StatsStrip />
        <ProjectsSection />
        <MarqueeStrip
          items={["Brand Identity", "Logo Design", "Web Development", "UI / UX", "Social Kits", "React + Tailwind"]}
          variant="dark"
          speed={30}
        />
        <ProcessSection />
        <SkillsSection />
        <ExperienceSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <AIChatBot />
    </div>
  );
};

export default Index;
