import { content } from "@/content/data";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceItem } from "@/components/ExperienceItem";

export default function Home() {
  const recentExperience = content.experience.slice(0, 2);
  const topProjects = content.projects.slice(0, 3);
  return (
    <div className="min-h-screen">
      <Hero />
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-xl font-semibold">Experience</h2>
        <div className="mt-6 space-y-8 border-l border-black/10 dark:border-white/15 pl-6">
          {recentExperience.map((item, i) => (
            <ExperienceItem key={i} item={item} />
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-xl font-semibold">Featured Projects</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {topProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
