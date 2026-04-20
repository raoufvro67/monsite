import Link from "next/link";
import Header from "@/components/Header";
import { getAllPosts } from "@/lib/mdx";

export const metadata = { title: "Blog — Ton Nom" };

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-white text-zinc-900 dark:bg-[#0a0a0a] dark:text-white">
      <Header />
      <div className="max-w-2xl mx-auto px-6 py-16 space-y-12">
        <header className="space-y-1">
          <h1 className="text-2xl font-semibold">Blog</h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            {posts.length} article{posts.length !== 1 ? "s" : ""}
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="text-zinc-400 dark:text-zinc-500 text-sm">Aucun article pour le moment.</p>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-5 rounded-xl bg-zinc-50 border border-zinc-200 hover:border-zinc-400 dark:bg-zinc-900 dark:border-zinc-800 dark:hover:border-zinc-600 transition-colors group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h2 className="text-sm font-medium group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>
                    {post.description && (
                      <p className="text-xs text-zinc-400 dark:text-zinc-500">{post.description}</p>
                    )}
                    {post.tags.length > 0 && (
                      <div className="flex gap-1 flex-wrap pt-1">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <time className="text-xs text-zinc-400 dark:text-zinc-600 flex-shrink-0 font-mono">
                    {new Date(post.date).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
