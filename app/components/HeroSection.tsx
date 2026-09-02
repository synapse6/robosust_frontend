import { ArrowUpRight } from "lucide-react";
import { HeroBackground } from "./HeroBackground";

type HeroSectionProps = {
  image?: string;
};

const defaultHeroImage =
  "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=2200&q=85";

export function HeroSection({ image = defaultHeroImage }: HeroSectionProps) {
  return (
    <section className="hero relative grid min-h-[780px] items-end overflow-hidden">
      <HeroBackground image={image} />
      <div className="grid-pattern absolute inset-0 opacity-35" />
      <div className="container-shell relative max-w-[930px] pb-[100px] pt-10 md:pb-[100px]">
        <div className="reveal mb-5 text-[12px] uppercase tracking-[0.22em] text-[#aeb7c7]">
          <span className="mr-3 inline-block h-px w-7 bg-[#ff3b46] align-middle" />
          Robotics Laboratory based in SUST
        </div>
        <h1 className="text-[clamp(72px,12vw,176px)] font-bold leading-[0.82] tracking-[-0.07em]">
          ROBO
          <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.7)]">
            SUST
          </span>
        </h1>
        <div className="reveal mt-7 text-[clamp(20px,2.5vw,34px)] font-medium text-[#dce2eb]">
          Robotics <b className="text-white">For Glory.</b>
        </div>
        <div className="reveal mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3.5 text-[13px] font-semibold text-[#05070c] transition hover:-translate-y-0.5"
          >
            Explore projects <ArrowUpRight size={16} />
          </a>
          <a
            href="#about"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-3.5 text-[13px] font-semibold text-white transition hover:-translate-y-0.5 hover:border-[#3d7cff]/65"
          >
            Our mission
          </a>
        </div>
      </div>
    </section>
  );
}
