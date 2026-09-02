import { SectionHeading } from "./SectionHeading";

export function AchievementsSection() {
  const metrics = [
    [
      "12+",
      "Competition and research projects across autonomous robotics, embedded systems and intelligent machines.",
    ],
    ["24/7", "A builder mindset: test, break, learn, iterate and ship."],
  ];
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
          title={
            <>
              Proof of
              <br />
              progress.
            </>
          }
          description="A modular showcase for competition results, milestones and moments worth remembering."
        />
        <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
          <article
            className="reveal flex min-h-[390px] flex-col justify-end rounded-[22px] border border-white/10 bg-cover bg-center p-[36px]"
            style={{
              backgroundImage:
                "linear-gradient(0deg,#090c13 5%,rgba(9,12,19,.15)), url('https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&w=1600&q=85')",
            }}
          >
            <div className="text-[10px] uppercase tracking-[0.14em] text-[#7f899b]">
              Featured milestone
            </div>
            <h3 className="mt-3 text-[42px] font-semibold leading-[1]">
              From prototype
              <br />
              to podium.
            </h3>
            <p className="mt-4 max-w-[440px] text-[14px] leading-7 text-[#98a1b3]">
              Replace this with the laboratory&apos;s latest major competition
              result or research milestone.
            </p>
          </article>
          <div className="grid gap-4">
            {metrics.map(([value, text]) => (
              <div
                key={value}
                className="reveal rounded-[22px] border border-white/10 bg-[#0d111a] p-[26px]"
              >
                <div className="text-[46px] font-bold tracking-[-0.05em]">
                  {value}
                </div>
                <p className="mt-3 text-[13px] leading-6 text-[#98a1b3]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
