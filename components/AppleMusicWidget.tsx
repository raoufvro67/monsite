"use client";

import { useEffect, useState } from "react";

type Track = {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  artworkUrl: string;
  songUrl: string;
};

export default function AppleMusicWidget() {
  const [track, setTrack] = useState<Track | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const res = await fetch("/api/apple-music");
        if (res.ok) {
          const data = await res.json();
          setTrack(data);
        }
      } catch {
        //
      } finally {
        setLoading(false);
      }
    };

    fetchTrack();
    const interval = setInterval(fetchTrack, 30_000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div className="h-16 rounded-xl bg-zinc-100 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 animate-pulse" />;
  }

  if (!track) {
    return (
      <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-100 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
        <AppleMusicIcon className="text-zinc-400 dark:text-zinc-600 shrink-0" />
        <span className="text-sm text-zinc-400 dark:text-zinc-500">Rien en écoute pour le moment</span>
      </div>
    );
  }

  return (
    <a
      href={track.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-4 rounded-xl bg-zinc-100 border border-zinc-200 hover:border-zinc-400 dark:bg-zinc-900 dark:border-zinc-800 dark:hover:border-zinc-600 transition-colors"
    >
      {track.artworkUrl && !track.artworkUrl.includes("2a96cbd8b46e442fc41c2b86b821562f") && (
        <img
          src={track.artworkUrl}
          alt={track.album}
          width={48}
          height={48}
          className="rounded-md shrink-0"
        />
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <AppleMusicIcon className="text-rose-500 shrink-0" />
          <span className="text-xs text-zinc-400 dark:text-zinc-500">
            {track.isPlaying ? "En écoute" : "Dernière écoute"}
          </span>
        </div>
        <p className="text-sm font-medium truncate mt-0.5">{track.title}</p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">{track.artist}</p>
      </div>
      {track.isPlaying && (
        <div className="flex items-end gap-0.5 h-4 shrink-0">
          {[1, 2, 3].map((i) => (
            <span
              key={i}
              className="w-0.5 bg-rose-500 rounded-full animate-pulse"
              style={{ height: `${40 + i * 20}%`, animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      )}
    </a>
  );
}

function AppleMusicIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`w-4 h-4 fill-current ${className}`}>
      <path d="M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 0 0-1.726-.737c-.714-.145-1.44-.188-2.17-.199-.042-.003-.115-.01-.16-.013H6.495c-.04.003-.09.01-.135.013-1.06.024-2.12.115-3.138.43A4.954 4.954 0 0 0 .605 2.92C-.063 3.936-.24 5.05-.24 6.19v11.622c0 .748.07 1.49.25 2.22.333 1.34 1.058 2.358 2.182 3.103a5.14 5.14 0 0 0 1.73.742c.72.148 1.46.19 2.19.2.046.003.12.01.163.013h11.026c.042-.003.09-.01.135-.013 1.08-.025 2.14-.12 3.164-.44a4.98 4.98 0 0 0 2.748-2.037c.426-.633.67-1.336.787-2.074.07-.455.098-.915.104-1.376.002-.05.01-.1.013-.15V6.33c-.003-.068-.01-.138-.013-.207zm-6.35 1.833v5.53c0 .482-.047.96-.2 1.423-.324.97-1.015 1.592-2.004 1.873-.473.135-.96.18-1.453.163a3.38 3.38 0 0 1-1.56-.4 2.272 2.272 0 0 1-1.13-1.64c-.104-.598.012-1.156.327-1.67.386-.628.95-1.01 1.64-1.21.49-.14.99-.186 1.496-.153.237.016.468.05.698.1V7.44c0-.5.278-.81.778-.9.057-.01.115-.013.173-.013h1.69c.5 0 .747.238.747.738v.692z" />
    </svg>
  );
}
