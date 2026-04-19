import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ton Nom — Portfolio",
  description: "Développeur fullstack passionné par les belles interfaces et les systèmes bien construits.",
  openGraph: {
    title: "Ton Nom — Portfolio",
    description: "Développeur fullstack passionné.",
    url: "https://tonsite.fr",
    siteName: "Ton Nom",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');document.documentElement.classList.toggle('dark',t?t==='dark':true)})()`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
