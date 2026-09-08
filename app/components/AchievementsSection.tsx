import { AchievementSlideshow } from "./AchievementSlideshow";
import { SectionHeading } from "./SectionHeading";

const achievementSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Students presenting a robotics project at a competition",
    label: "Featured milestone",
    title: "From prototype to podium.",
    description:
      "At RoboSust, every competition result begins with disciplined experimentation. Our teams move from sketches and simulations to tested mechanisms, refining each subsystem until the whole robot performs with confidence. This milestone represents the moment when a promising prototype becomes a dependable competitor: faster decisions, cleaner engineering, stronger collaboration, and a clear path toward the next challenge ahead on the course.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Robot prototype being tested in a research workspace",
    label: "Research in motion",
    title: "Intelligence in the field.",
    description:
      "Robotics research matters when it leaves the workbench and meets a real environment. Our navigation systems combine sensing, mapping, planning, and control to help machines respond intelligently to uncertainty. Each field test reveals another question, and each question guides a sharper design. Progress is measured not only by performance, but by repeatability, resilience, and responsible deployment in the world.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Engineering team collaborating around a robotic machine",
    label: "People behind progress",
    title: "Built by shared momentum.",
    description:
      "Strong teams turn difficult problems into shared momentum. Across design reviews, late-night builds, and demanding trials, RoboSust members learn to communicate clearly, challenge assumptions, and trust careful measurement. The result is more than a functioning machine: it is a culture of curiosity and accountability that prepares young engineers to create technology people can rely on every single day with confidence.",
  },
];

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden py-[110px]"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(5,7,12,0.5), rgba(5,7,12,0.82)), url('https://images.unsplash.com/photo-1564053489984-317bbd7f4a8f?auto=format&fit=crop&w=1800&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-shell">
        <SectionHeading
          eyebrow="03 / Achievements"
          title={<>Proof of progress.</>}
          description=""
        />
        <AchievementSlideshow slides={achievementSlides} />
      </div>
    </section>
  );
}
