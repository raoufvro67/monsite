import Link from "next/link";
import CommandPalette from "@/components/CommandPalette";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-12 py-5 border-b border-zinc-200 dark:border-zinc-800">
      <Link
        href="/"
        className="font-bold text-xl tracking-tight text-zinc-900 dark:text-white hover:opacity-70 transition-opacity"
      >
        vro
      </Link>
      <div className="flex items-center gap-3">
        <nav>
          <Link
            href="/blog"
            className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            Blog
          </Link>
        </nav>
        <ThemeToggle />
        <CommandPalette />
      </div>
    </header>
  );
}
