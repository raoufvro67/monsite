import Link from "next/link";
import CommandPalette from "@/components/CommandPalette";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link
        href="/"
        className="font-bold text-lg tracking-tight text-zinc-900 dark:text-white hover:opacity-70 transition-opacity"
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
