import { AboutSection } from "./components/AboutSection";
import { AchievementsSection } from "./components/AchievementsSection";
import { BlogSection } from "./components/BlogSection";
import { EventsSection } from "./components/EventsSection";
import { HeroSection } from "./components/HeroSection";
import { PageEffects } from "./components/PageEffects";
import { ProjectsSection } from "./components/ProjectsSection";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export default function HomePage() {
  return (
    <PageEffects>
      <SiteHeader />
      <main id="top" className="pt-[76px]">
        <HeroSection />
        <EventsSection
          image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85"
          title="RoboSUST Machine Learning Workshop 2026"
          description="Master fundamental machine learning concepts, algorithms, and
              real-world applications in this intensive 8-day hands-on workshop
              hosted by RoboSUST"
          date="12 Dec 2026"
          venue="SUST Campus"
          category="Open to all"
        />
        <AboutSection />
        <ProjectsSection />
        <AchievementsSection />
        <BlogSection />
      </main>
      <SiteFooter />
    </PageEffects>
  );
}
