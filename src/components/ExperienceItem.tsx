function getAccent(company: string) {
  if (company.toLowerCase().includes("amazon") || company.toLowerCase().includes("aws")) return "bg-[#FF9900]";
  if (company.toLowerCase().includes("maryland")) return "bg-[#E21833]";
  return "bg-neutral-400";
}

import type { Experience } from "@/content/types";

export function ExperienceItem({ item }: { item: Experience }) {
  return (
    <div className="relative pl-10">
      <div className="absolute left-1 top-1.5 h-3 w-3 rounded-full bg-black dark:bg-white"></div>
      <div className="space-y-1">
        <div className="absolute left-0 top-1">
          {item.company.toLowerCase().includes("amazon") || item.company.toLowerCase().includes("aws") ? (
            <img src="/icons/aws.png" alt="AWS" className="h-6 w-6"/>
          ) : item.company.toLowerCase().includes("maryland") ? (
            <img src="/icons/umd.png" alt="UMD" className="h-6 w-6"/>
          ) : null}
        </div>
        <div className="flex flex-wrap items-baseline gap-2">
          <h3 className="font-semibold">{item.role}</h3>
          <span className="text-sm text-neutral-500">@ {item.company}</span>
        </div>
        <div className="text-sm text-neutral-500">{item.start} — {item.end} · {item.location}</div>
        <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-700 dark:text-neutral-200">
          {item.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
