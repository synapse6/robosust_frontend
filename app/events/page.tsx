import { ArrowUpRight, MapPin, Users } from "lucide-react";
import { EventsSection } from "../components/EventsSection";
import { PageEffects } from "../components/PageEffects";
import { PageIntro } from "../components/PageIntro";
import { SectionHeading } from "../components/SectionHeading";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

const events = [
  {
    date: "12 Dec 2026",
    title: "Machine Learning Workshop",
    type: "Workshop",
    venue: "SUST Campus",
    description:
      "An intensive hands-on introduction to machine learning concepts, algorithms and real-world applications.",
  },
  {
    date: "Coming soon",
    title: "RoboSUST Recruitment",
    type: "Community",
    venue: "SUST Campus",
    description:
      "Meet the teams, explore the lab and find your place in the next generation of RoboSUST builders.",
  },
  {
    date: "Coming soon",
    title: "Inter-University Robotics Challenge",
    type: "Competition",
    venue: "Sylhet, Bangladesh",
    description:
      "A day of robots, strategy and pressure-tested engineering with teams from across the country.",
  },
];

export default function EventsPage() {
  return (
    <PageEffects>
      <SiteHeader />
      <main id="top" className="pt-[76px]">
        <PageIntro
          eyebrow="03 / Gather & compete"
          title={
            <>
              Ideas become
              <br />
              <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.7)]">
                action.
              </span>
            </>
          }
          description="Workshops, competitions and open sessions designed to bring curious people together around the joy of building machines."
          image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1800&q=85"
        />
        <div id="content">
          <EventsSection
            image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85"
            title="RoboSUST Machine Learning Workshop 2026"
            description="Master fundamental machine learning concepts, algorithms, and real-world applications in this intensive 8-day hands-on workshop hosted by RoboSUST."
            date="12 Dec 2026"
            venue="SUST Campus"
            category="Open to all"
          />
          <section className="border-t border-white/10 py-[110px]">
            <div className="container-shell">
              <SectionHeading
                eyebrow="02 / Calendar"
                title={
                  <>
                    More ways
                    <br />
                    to get involved.
                  </>
                }
                description="Keep an eye on the calendar for learning sessions, recruitment opportunities and the competitions that bring our community together."
              />
              <div className="grid gap-4 md:grid-cols-3">
                {events.map((event) => (
                  <article
                    key={event.title}
                    className="reveal rounded-[22px] border border-white/10 bg-[#0d111a] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#3d7cff]/45"
                  >
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-[#7f899b]">
                      <span>{event.type}</span>
                      <span>{event.date}</span>
                    </div>
                    <h2 className="mt-12 text-[25px] font-semibold leading-tight">
                      {event.title}
                    </h2>
                    <p className="mt-4 text-[13px] leading-6 text-[#98a1b3]">
                      {event.description}
                    </p>
                    <div className="mt-7 grid gap-3 border-t border-white/10 pt-5 text-[12px] text-[#c9d0db]">
                      <span className="flex items-center gap-3">
                        <MapPin size={15} className="text-[#3d7cff]" />
                        {event.venue}
                      </span>
                      <span className="flex items-center gap-3">
                        <Users size={15} className="text-[#3d7cff]" />
                        Open to the community
                      </span>
                    </div>
                    <a
                      href="#"
                      className="mt-7 inline-flex items-center gap-2 text-[12px] font-semibold text-white"
                    >
                      Event details <ArrowUpRight size={15} />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </PageEffects>
  );
}
