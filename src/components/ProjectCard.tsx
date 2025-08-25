import Link from "next/link";
import type { Project } from "@/content/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-xl border border-black/10 dark:border-white/15 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <div className="flex gap-1 flex-wrap justify-end max-w-[60%]">
          {project.stack.slice(0, 4).map((tag) => (
            <span key={tag} className="text-xs rounded-full border border-black/10 dark:border-white/15 px-2 py-0.5 text-neutral-600 dark:text-neutral-300">{tag}</span>
          ))}
        </div>
      </div>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{project.summary}</p>
      <ul className="mt-3 list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-200 space-y-1">
        {project.bullets.slice(0, 3).map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <div className="mt-4 flex gap-3 text-sm">
        {project.links.demo && (
          <a className="text-blue-600 hover:underline" href={project.links.demo} target="_blank" rel="noreferrer">Live Demo</a>
        )}
        {project.links.repo && (
          <a className="text-blue-600 hover:underline" href={project.links.repo} target="_blank" rel="noreferrer">Source</a>
        )}
        <Link className="text-neutral-700 hover:underline dark:text-neutral-200" href={`/projects#${project.slug}`}>Details</Link>
      </div>
    </div>
  );
}
