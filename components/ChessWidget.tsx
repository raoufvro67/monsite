"use client";

import { useEffect, useState } from "react";

type Stats = {
  blitz: number | null;
  rapid: number | null;
  bullet: number | null;
};

export default function ChessWidget() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/chess")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => setStats(d))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="h-16 rounded-xl bg-zinc-100 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 animate-pulse" />;
  }

  return (
    <div className="flex items-center justify-between gap-4 p-4 rounded-xl bg-zinc-100 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
      <div className="flex items-center gap-3">
        <ChessIcon className="w-8 h-8 shrink-0" />
        <div>
          <p className="text-sm font-medium">raf_vro</p>
          {stats && (
            <div className="flex gap-3 mt-0.5">
              {stats.rapid && (
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  Rapid <span className="font-mono text-zinc-700 dark:text-zinc-300">{stats.rapid}</span>
                </span>
              )}
              {stats.blitz && (
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  Blitz <span className="font-mono text-zinc-700 dark:text-zinc-300">{stats.blitz}</span>
                </span>
              )}
              {stats.bullet && (
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  Bullet <span className="font-mono text-zinc-700 dark:text-zinc-300">{stats.bullet}</span>
                </span>
              )}
            </div>
          )}
        </div>
      </div>
      <a
        href="https://www.chess.com/play/raf_vro"
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 px-3 py-1.5 rounded-lg bg-green-600 hover:bg-green-500 text-white text-xs font-medium transition-colors"
      >
        Jouer contre moi ♟
      </a>
    </div>
  );
}

function ChessIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M19 22H5v-2h14v2M7.5 12c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m4-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m4 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1M17 6V4h-2V2H9v2H7v2l-3 7h16l-3-7z" />
    </svg>
  );
}
