import { content } from "@/content/data";
import { ExperienceItem } from "@/components/ExperienceItem";

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-semibold">Experience</h1>
      <div className="mt-6 space-y-8 border-l border-black/10 dark:border-white/15 pl-6">
        {content.experience.map((item, i) => (
          <ExperienceItem key={i} item={item} />
        ))}
      </div>
    </div>
  );
}
