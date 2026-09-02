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
        <AboutSection />
        <ProjectsSection />
        <AchievementsSection />
        <EventsSection />
        <BlogSection />
      </main>
      <SiteFooter />
    </PageEffects>
  );
}
