import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const eventDetails = [
  { Icon: Calendar, text: "Date — To be announced" },
  { Icon: MapPin, text: "Venue — SUST Campus" },
  { Icon: Users, text: "Open to students & makers" },
];

export function EventsSection() {
  return (
    <section id="events" className="py-[110px]">
      <div className="container-shell">
        <SectionHeading
          eyebrow="04 / Next event"
          title={
            <>
              Enter the
              <br />
              arena.
            </>
          }
        />
        <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
          <div
            className="reveal relative min-h-[430px] rounded-[22px] border border-white/10 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(145deg,rgba(255,59,70,.3),rgba(61,124,255,.1)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85')",
            }}
          >
            <div className="absolute left-6 top-6 rounded-xl bg-[#05070c] px-3 py-2 text-[12px] uppercase tracking-[0.08em] text-white">
              Coming soon / 2026
            </div>
          </div>
          <article className="reveal rounded-[22px] border border-white/10 bg-[#0d111a] p-[38px]">
            <div className="text-[10px] uppercase tracking-[0.14em] text-[#7f899b]">
              RoboSUST Event
            </div>
            <h3 className="mt-2 text-[44px] font-semibold leading-[1]">
              Robotics
              <br />
              Challenge.
            </h3>
            <p className="mt-4 text-[15px] leading-7 text-[#98a1b3]">
              A competition-first showcase for autonomous machines, creative
              engineering and the people building them.
            </p>
            <div className="mt-7 grid gap-3">
              {eventDetails.map(({ Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 text-[13px] text-[#c9d0db]"
                >
                  <Icon size={16} className="text-[#3d7cff]" />
                  {text}
                </div>
              ))}
            </div>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3.5 text-[13px] font-semibold text-[#05070c] transition hover:-translate-y-0.5"
            >
              Get event updates <ArrowRight size={16} />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
