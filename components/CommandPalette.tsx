"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";

const commands = [
  { label: "Accueil", shortcut: "H", action: "/" },
  { label: "Blog", shortcut: "B", action: "/blog" },
  { label: "Me contacter", shortcut: "E", action: "mailto:toi@email.fr" },
  { label: "GitHub", shortcut: "G", action: "https://github.com/ton-username", external: true },
  { label: "Twitter", shortcut: "T", action: "https://twitter.com/ton-username", external: true },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const handleSelect = (action: string, external?: boolean) => {
    setOpen(false);
    if (external) {
      window.open(action, "_blank", "noopener noreferrer");
    } else if (action.startsWith("mailto:")) {
      window.location.href = action;
    } else {
      router.push(action);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100 border border-zinc-300 hover:bg-zinc-200 dark:bg-zinc-900 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors text-sm text-zinc-600 dark:text-zinc-400"
      >
        <span>Rechercher</span>
        <kbd className="text-xs bg-zinc-200 px-1.5 py-0.5 rounded border border-zinc-300 font-mono dark:bg-zinc-800 dark:border-zinc-700">⌘K</kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]">
          <div
            className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative w-full max-w-md mx-4">
            <Command className="bg-white border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-700 rounded-xl shadow-2xl overflow-hidden">
              <Command.Input
                value={search}
                onValueChange={setSearch}
                placeholder="Rechercher une page..."
                className="w-full px-4 py-3 bg-transparent text-zinc-900 placeholder-zinc-400 dark:text-white dark:placeholder-zinc-500 outline-none border-b border-zinc-200 dark:border-zinc-800 text-sm"
              />
              <Command.List className="p-2 max-h-64 overflow-y-auto">
                <Command.Empty className="py-4 text-center text-sm text-zinc-400 dark:text-zinc-500">
                  Aucun résultat.
                </Command.Empty>
                {commands.map((cmd) => (
                  <Command.Item
                    key={cmd.label}
                    value={cmd.label}
                    onSelect={() => handleSelect(cmd.action, cmd.external)}
                    className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-800"
                  >
                    <span>{cmd.label}</span>
                    <kbd className="text-xs text-zinc-400 dark:text-zinc-600 font-mono">{cmd.shortcut}</kbd>
                  </Command.Item>
                ))}
              </Command.List>
            </Command>
          </div>
        </div>
      )}
    </>
  );
}
