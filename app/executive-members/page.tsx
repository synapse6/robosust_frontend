import { Linkedin, Mail } from "lucide-react";
import { PageEffects } from "../components/PageEffects";
import { PageIntro } from "../components/PageIntro";
import { SectionHeading } from "../components/SectionHeading";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

const members = [
  {
    role: "President",
    focus: "Direction, community and the long view",
    accent: "01",
  },
  {
    role: "Vice President",
    focus: "Operations, culture and member support",
    accent: "02",
  },
  {
    role: "General Secretary",
    focus: "Coordination, documentation and continuity",
    accent: "03",
  },
  {
    role: "Technical Secretary",
    focus: "Projects, workshops and technical standards",
    accent: "04",
  },
  {
    role: "Treasurer",
    focus: "Resources, planning and responsible growth",
    accent: "05",
  },
  {
    role: "Media & Outreach Secretary",
    focus: "Stories, partnerships and the RoboSUST voice",
    accent: "06",
  },
];

export default function ExecutiveMembersPage() {
  return (
    <PageEffects>
      <SiteHeader />
      <main id="top" className="pt-[76px]">
        <PageIntro
          eyebrow="02 / The people"
          title={
            <>
              Built by
              <br />
              <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.7)]">
                builders.
              </span>
            </>
          }
          description="Meet the executive team guiding RoboSUST's projects, programs and community. Their job is to keep the lab moving and make room for the next idea."
          image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=85"
        />
        <section id="content" className="py-[110px]">
          <div className="container-shell">
            <SectionHeading
              eyebrow="03 / Executive committee"
              title={
                <>
                  The team
                  <br />
                  behind the work.
                </>
              }
              description="A small team with a shared responsibility: create an environment where members can learn quickly, collaborate generously and take on difficult problems."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {members.map((member) => (
                <article
                  key={member.role}
                  className="reveal group relative min-h-[300px] overflow-hidden rounded-[22px] border border-white/10 bg-[#0d111a] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#3d7cff]/45"
                >
                  <div className="flex items-start justify-between text-[11px] uppercase tracking-[0.18em] text-[#7f899b]">
                    <span>{member.accent}</span>
                    <span>RoboSUST</span>
                  </div>
                  <div className="absolute -right-4 top-14 text-[150px] font-bold leading-none text-white/[0.035]">
                    {member.accent}
                  </div>
                  <div className="relative mt-24">
                    <h2 className="text-[25px] font-semibold">{member.role}</h2>
                    <p className="mt-3 max-w-[240px] text-[13px] leading-6 text-[#98a1b3]">
                      {member.focus}
                    </p>
                  </div>
                  <div className="absolute bottom-7 left-7 flex gap-3 text-[#aeb7c7]">
                    <a href="#" aria-label={`${member.role} email`}>
                      <Mail size={16} />
                    </a>
                    <a href="#" aria-label={`${member.role} LinkedIn`}>
                      <Linkedin size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </PageEffects>
  );
}
