import { ArrowUpRight } from "lucide-react";
import { PageEffects } from "../components/PageEffects";
import { PageIntro } from "../components/PageIntro";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../components/ProjectsSection";
import { SectionHeading } from "../components/SectionHeading";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export default function ProjectsPage() {
  return (
    <PageEffects>
      <SiteHeader />
      <main id="top" className="pt-[76px]">
        <PageIntro
          eyebrow="04 / Selected work"
          title={
            <>
              Machines with
              <br />
              <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.7)]">
                a purpose.
              </span>
            </>
          }
          description="Every RoboSUST project starts with a real problem, a curious team and the willingness to test an idea until it works outside the sketchbook."
          image="https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1800&q=85"
        />
        <section id="content" className="py-[110px]">
          <div className="container-shell">
            <SectionHeading
              eyebrow="01 / The project shelf"
              title={
                <>
                  What we
                  <br />
                  build.
                </>
              }
              description="From autonomous navigation to human-robot interaction, our work brings together electronics, mechanics, software and a lot of iteration."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>
        <section className="border-t border-white/10 py-[110px]">
          <div className="container-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-[#8e98aa]">
                02 / Keep building
              </div>
              <h2 className="mt-3 max-w-[650px] text-[clamp(38px,5vw,68px)] font-bold leading-[0.94] tracking-[-0.05em]">
                The next prototype is already taking shape.
              </h2>
            </div>
            <a
              href="/events"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-white transition hover:text-[#3d7cff]"
            >
              Join the next event <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </PageEffects>
  );
}
