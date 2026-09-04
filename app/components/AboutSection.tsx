import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  const stats = [
    { value: "01", label: "Think" },
    { value: "02", label: "Build" },
    { value: "03", label: "Compete" },
  ];
  return (
    <section
      id="about"
      className="relative overflow-hidden py-[110px]"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(5,7,12,0.35), rgba(5,7,12,0.72)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-shell">
        <SectionHeading
          eyebrow="About RoboSUST"
          title={<>About RoboSUST</>}
          description=""
        />
        <div className="grid gap-[18px] md:grid-cols-[1.15fr_0.85fr]">
          <div
            className="reveal min-h-[380px] rounded-[22px] border border-white/10 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80')",
            }}
          >
            <div className="flex h-full items-end">
              <div className="mb-5 ml-5 rounded-lg bg-black/45 px-3 py-2 text-[10px] tracking-[0.2em] text-white">
                LAB / 01
              </div>
            </div>
          </div>
          <article className="panel reveal rounded-[22px] border border-white/10 bg-[#0d111a] p-[42px]">
            <div className="kicker mb-3 text-[11px] uppercase tracking-[0.18em] text-[#8e98aa]">
              RoboSUST
            </div>
            <p className="max-w-[660px] text-[15px] leading-8 text-[#aeb7c7]">
              Fostering innovation across disciplines, the club empowers members
              to transform theoretical knowledge into real-world technological
              solutions. Through hands-on workshops, competitive events, and
              collaborative projects, RoboSUST nurtures the next generation of
              engineers, coders, and automation enthusiasts, driving
              technological advancements and representing the university on
              national and international robotics platforms.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
