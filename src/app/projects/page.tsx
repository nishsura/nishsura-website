import { content } from "@/content/data";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {content.projects.map((p) => (
          <section id={p.slug} key={p.slug}>
            <ProjectCard project={p} />
          </section>
        ))}
      </div>
    </div>
  );
}
