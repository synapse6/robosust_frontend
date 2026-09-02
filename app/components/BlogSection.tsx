import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const posts = [
  {
    date: "Build log / 08.26",
    title: "Teaching a robot to see",
    description: "From raw sensor data to useful perception.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
  },
  {
    date: "Engineering / 08.26",
    title: "Why autonomous systems fail",
    description: "Designing for uncertainty, recovery and real-world mess.",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1000&q=80",
  },
  {
    date: "Lab notes / 07.26",
    title: "Inside the control loop",
    description: "A practical look at making machines respond precisely.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="blog py-[110px]">
      <div className="container-shell">
        <SectionHeading
          eyebrow="05 / Field notes"
          title={
            <>
              Inside the
              <br />
              lab.
            </>
          }
          description="Technical stories, build logs and ideas from the people behind the machines."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="reveal overflow-hidden rounded-[22px] border border-white/10 bg-[#0d111a] transition duration-300 hover:-translate-y-1 hover:border-[#3d7cff]/35"
            >
              <div
                className="h-[190px] bg-cover bg-center"
                style={{ backgroundImage: `url('${post.image}')` }}
              />
              <div className="p-[22px]">
                <div className="text-[10px] uppercase tracking-[0.14em] text-[#7f899b]">
                  {post.date}
                </div>
                <h3 className="mt-2 text-[21px] font-semibold">{post.title}</h3>
                <p className="mt-3 text-[13px] leading-6 text-[#98a1b3]">
                  {post.description}
                </p>
                <div className="mt-5 flex items-center justify-between text-[12px] text-[#dfe5ef]">
                  Read article <ArrowUpRight size={16} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
