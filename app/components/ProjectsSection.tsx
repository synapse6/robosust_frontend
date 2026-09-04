import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export const projects = [
  {
    category: "Autonomous Systems",
    title: "Vision Rover",
    description:
      "Autonomous navigation platform combining perception, localization and motion control.",
    image:
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1000&q=80",
  },
  {
    category: "Robotics / Competition",
    title: "Race Machine",
    description:
      "A compact robotic platform tuned for speed, precision and reliable control.",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1000&q=80",
  },
  {
    category: "Research",
    title: "Human + Robot",
    description:
      "Experiments exploring how intelligent machines can understand and assist people.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-[110px]">
      <div className="container-shell">
        <SectionHeading
          eyebrow="02 / Selected work"
          title={<>What we build.</>}
        />
        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              category={project.category}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
