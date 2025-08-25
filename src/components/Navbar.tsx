import Link from "next/link";
import { FaHome } from "react-icons/fa";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-black/40 border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold">
          <FaHome size={24} />
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/experience" className="hover:underline">Experience</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <a href="https://github.com/nishsura" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/nishsura/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
          <a href="mailto:nishsura@outlook.com" className="hover:underline">Email</a>
        </div>
      </nav>
    </header>
  );
}
