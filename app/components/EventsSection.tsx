import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export type EventsSectionProps = {
  image: string;
  title: string;
  description: string;
  date: string;
  venue: string;
  category: string;
};

export function EventsSection({
  image,
  title,
  description,
  date,
  venue,
  category,
}: EventsSectionProps) {
  return (
    <section id="events" className="py-[110px]">
      <div className="container-shell">
        <SectionHeading eyebrow="" title={<>Featured Event</>} />
        <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
          <div
            className="reveal relative min-h-[430px] rounded-[22px] border border-white/10 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(145deg,rgba(255,59,70,.3),rgba(61,124,255,.1)), url('${image}')`,
            }}
          >
            <div className="absolute left-6 top-6 rounded-xl bg-[#05070c] px-3 py-2 text-[12px] uppercase tracking-[0.08em] text-white">
              Coming soon / 2026
            </div>
          </div>
          <article className="reveal rounded-[22px] border border-white/10 bg-[#0d111a] p-[38px]">
            <h3 className="mt-2 text-[44px] font-semibold leading-[1]">
              {title}
            </h3>
            <p className="mt-4 text-[15px] leading-7 text-[#98a1b3]">
              {description}
            </p>
            <div className="mt-7 grid gap-3">
              <div className="flex items-center gap-3 text-[13px] text-[#c9d0db]">
                <Calendar size={16} className="text-[#3d7cff]" />
                {date}
              </div>
              <div className="flex items-center gap-3 text-[13px] text-[#c9d0db]">
                <MapPin size={16} className="text-[#3d7cff]" />
                {venue}
              </div>
              <div className="flex items-center gap-3 text-[13px] text-[#c9d0db]">
                <Users size={16} className="text-[#3d7cff]" />
                {category}
              </div>
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
