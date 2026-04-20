import Header from "@/components/Header";
import AppleMusicWidget from "@/components/AppleMusicWidget";
import ChessWidget from "@/components/ChessWidget";
import Link from "next/link";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-zinc-100 border border-zinc-200 dark:bg-zinc-800 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium mx-0.5 align-middle">
      {children}
    </span>
  );
}

function SocialBadge({ href, children }: { href: string; children: React.ReactNode }) {
  const isEmail = href.startsWith("mailto:");
  return (
    <a
      href={href}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 border border-zinc-200 hover:border-zinc-400 dark:bg-zinc-800 dark:border-zinc-700 dark:hover:border-zinc-500 text-zinc-700 dark:text-zinc-300 text-sm font-medium mx-0.5 align-middle transition-colors"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 dark:bg-[#0a0a0a] dark:text-white">
      <Header />
      <div className="max-w-2xl mx-auto px-6 py-16 space-y-10">

        {/* Name */}
        <div>
          <h1 className="text-3xl font-bold">Abderaouf Boubachiche</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-1">Software Engineer</p>
        </div>

        {/* Bio */}
        <div className="space-y-5 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-300">
          <p>
            Hello 👋 Je suis un étudiant en <Badge>🎓 Licence Informatique</Badge> à l&apos;Université de Strasbourg,
            futur étudiant en master <Badge>MIAGE</Badge> rentrée 2026.
          </p>

          <p>
            Passionné par la conception logicielle, le développement et les systèmes d&apos;information,
            je combine rigueur technique et esprit d&apos;équipe.
          </p>

          <p>
            J&apos;ai eu l&apos;opportunité de faire deux stages : développeur fullstack chez{" "}
            <Badge>KYO Conseil</Badge> où j&apos;ai travaillé sur une API REST <Badge>Spring Boot</Badge> au sein
            d&apos;une équipe agile, et designer UI/UX chez <Badge>GBBS-IT</Badge> où j&apos;ai conçu
            des interfaces et maquettes sur <Badge>Figma</Badge>.
          </p>

          <p>
            En parallèle de mes études, je travaille sur des projets personnels — applications web, logiciels, jeux et IA. Retrouve-les sur la page{" "}
            <Link
              href="/blog"
              className="underline underline-offset-2 text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              blog
            </Link>.
          </p>

          <p>
            Ma stack principale :{" "}
            <Badge>React</Badge> <Badge>Next.js</Badge> <Badge>TypeScript</Badge>{" "}
            <Badge>Python</Badge> <Badge>Java</Badge> <Badge>Docker</Badge>{" "}
            <Badge>PostgreSQL</Badge>.
          </p>

          <p>
            En dehors du code, j&apos;aime la musique, le basket, les échecs et les maths (toujours un peu).
          </p>
        </div>

        {/* Chess */}
        <ChessWidget />

        {/* Apple Music */}
        <div className="space-y-2">
          <span
            className="text-lg text-zinc-500 dark:text-zinc-400"
            style={{ fontFamily: "cursive" }}
          >
            En ce moment j&apos;écoute
          </span>
          <AppleMusicWidget />
        </div>

        {/* Social links */}
        <div className="space-y-2 text-[15px] text-zinc-600 dark:text-zinc-300">
          <p>
            Vous pouvez me retrouver sur{" "}
            <SocialBadge href="https://github.com/raoufvro67">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current shrink-0">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </SocialBadge>{" "}et{" "}
            <SocialBadge href="https://www.linkedin.com/in/abderaouf-boubachiche-82541a3b7/">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current shrink-0">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </SocialBadge>.
          </p>
          <p>
            Ou me contacter par mail :{" "}
            <SocialBadge href="mailto:boubachicheraouf6@gmail.com">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current shrink-0" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              boubachicheraouf6@gmail.com
            </SocialBadge>
          </p>
        </div>

      </div>
    </main>
  );
}
