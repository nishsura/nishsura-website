export function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-neutral-500">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} Nishith Sura</p>
        <p className="opacity-80">Built with Next.js + Tailwind</p>
      </div>
    </footer>
  );
}
