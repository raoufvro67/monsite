import Timeline from "@/components/Timeline";
import SpotifyWidget from "@/components/SpotifyWidget";
import CommandPalette from "@/components/CommandPalette";
import ThemeToggle from "@/components/ThemeToggle";
import SocialLinks from "@/components/SocialLinks";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 dark:bg-[#0a0a0a] dark:text-white">
      <div className="max-w-2xl mx-auto px-6 py-16 space-y-20">

        {/* Header */}
        <header className="flex items-center justify-between animate-fade-in">
          <span className="text-sm font-mono text-zinc-500 dark:text-zinc-400">ton-nom.fr</span>
          <div className="flex items-center gap-2">
            <CommandPalette />
            <ThemeToggle />
          </div>
        </header>

        {/* Hero */}
        <section className="space-y-4 animate-slide-up">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200 dark:bg-zinc-800 dark:border-zinc-700 flex items-center justify-center text-lg">
              👋
            </div>
            <div>
              <h1 className="text-xl font-semibold">Ton Nom</h1>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Développeur Fullstack</p>
            </div>
          </div>
          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Passionné par la création d&apos;interfaces soignées et de systèmes robustes.
            J&apos;aime construire des produits qui allient performance et expérience utilisateur.
          </p>
          <div className="flex gap-3">
            <Link
              href="mailto:toi@email.fr"
              className="text-sm px-4 py-2 rounded-lg bg-zinc-100 border border-zinc-200 hover:bg-zinc-200 dark:bg-zinc-800 dark:border-zinc-700 dark:hover:bg-zinc-700 transition-colors"
            >
              Me contacter
            </Link>
            <Link
              href="/blog"
              className="text-sm px-4 py-2 rounded-lg border border-zinc-200 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-300"
            >
              Lire le blog →
            </Link>
          </div>
        </section>

        {/* Timeline */}
        <section className="space-y-4 animate-slide-up">
          <h2 className="text-sm font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
            Parcours
          </h2>
          <Timeline />
        </section>

        {/* Interests */}
        <section className="space-y-4 animate-slide-up">
          <h2 className="text-sm font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
            Ce qui m&apos;intéresse
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {interests.map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 hover:border-zinc-400 dark:bg-zinc-900 dark:border-zinc-800 dark:hover:border-zinc-600 transition-colors"
              >
                <div className="text-xl mb-2">{item.icon}</div>
                <div className="text-sm font-medium">{item.label}</div>
                <div className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Spotify */}
        <section className="space-y-4 animate-slide-up">
          <h2 className="text-sm font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
            En ce moment
          </h2>
          <SpotifyWidget />
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-200 dark:border-zinc-800 pt-8 animate-fade-in">
          <SocialLinks />
          <p className="text-xs text-zinc-400 dark:text-zinc-600 mt-6 text-center">
            Fait avec Next.js &amp; Tailwind CSS
          </p>
        </footer>

      </div>
    </main>
  );
}

const interests = [
  {
    icon: "⚡",
    label: "Performance Web",
    desc: "Core Web Vitals, bundle size, SSR/SSG",
  },
  {
    icon: "🎨",
    label: "Design Systems",
    desc: "Composants, accessibilité, cohérence",
  },
  {
    icon: "🛠️",
    label: "Open Source",
    desc: "Contributions, outils dev, CLI",
  },
  {
    icon: "📚",
    label: "Apprentissage",
    desc: "Rust, algorithmes, systèmes distribués",
  },
];
