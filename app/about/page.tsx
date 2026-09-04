import { ArrowUpRight, Cpu, Lightbulb, Trophy } from "lucide-react";
import { AboutSection } from "../components/AboutSection";
import { AchievementsSection } from "../components/AchievementsSection";
import { PageEffects } from "../components/PageEffects";
import { PageIntro } from "../components/PageIntro";
import { SectionHeading } from "../components/SectionHeading";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

const principles = [
  { icon: Lightbulb, title: "Curiosity first", text: "We ask better questions before we reach for an answer, then turn ideas into experiments." },
  { icon: Cpu, title: "Build together", text: "Hardware, software, design and research move faster when knowledge is shared openly." },
  { icon: Trophy, title: "Compete with purpose", text: "Every competition is a chance to sharpen our thinking and represent SUST with pride." },
];

export default function AboutPage() {
  return (
    <PageEffects>
      <SiteHeader />
      <main id="top" className="pt-[76px]">
        <PageIntro
          eyebrow="01 / The laboratory"
          title={<>More than a<br /><span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.7)]">robotics club.</span></>}
          description="RoboSUST is a student-led community at Shahjalal University of Science and Technology building the skills, systems and friendships that make ambitious robotics possible."
          image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=85"
        />
        <div id="content">
          <AboutSection />
          <section className="py-[110px]">
            <div className="container-shell">
              <SectionHeading eyebrow="02 / Our approach" title={<>Learn by<br />making.</>} description="The lab is a place to move between theory and practice. A sketch becomes a circuit, a circuit becomes a machine, and a machine teaches us what the sketch missed." />
              <div className="grid gap-4 md:grid-cols-3">
                {principles.map(({ icon: Icon, title, text }) => (
                  <article key={title} className="reveal rounded-[22px] border border-white/10 bg-[#0d111a] p-7">
                    <Icon size={22} className="text-[#ff3b46]" />
                    <h2 className="mt-8 text-[24px] font-semibold">{title}</h2>
                    <p className="mt-3 text-[14px] leading-7 text-[#98a1b3]">{text}</p>
                  </article>
                ))}
              </div>
              <a href="/executive-members" className="mt-8 inline-flex items-center gap-2 text-[13px] font-semibold text-white transition hover:text-[#3d7cff]">Meet the executive members <ArrowUpRight size={16} /></a>
            </div>
          </section>
          <AchievementsSection />
        </div>
      </main>
      <SiteFooter />
    </PageEffects>
  );
}