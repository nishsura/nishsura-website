import { content } from "@/content/data";

export function Hero() {
  const { profile, education } = content;
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">
      <div className="grid gap-6">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{profile.name}</h1>
          <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-300">{profile.headline}</p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-neutral-600 dark:text-neutral-300">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 px-3 py-1 bg-white/70 dark:bg-white/5 backdrop-blur">{education.school}</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 px-3 py-1 bg-white/70 dark:bg-white/5 backdrop-blur">{education.degree}</span>
          {education.gpa && (
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 px-3 py-1 bg-white/70 dark:bg-white/5 backdrop-blur">{education.gpa}</span>
          )}
        </div>
        <div className="flex gap-3">
          <a href="mailto:nishsura@outlook.com" className="inline-flex items-center rounded-md bg-black text-white px-4 py-2 text-sm hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 shadow-sm">Contact</a>
          <a href="/projects" className="inline-flex items-center rounded-md border border-black/10 dark:border-white/15 px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5">View Projects</a>
        </div>
      </div>
    </section>
  );
}
