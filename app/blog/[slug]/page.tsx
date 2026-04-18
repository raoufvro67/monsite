import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.meta.title} — Ton Nom`,
    description: post.meta.description,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-2xl mx-auto px-6 py-16 space-y-10">
        <header className="space-y-4">
          <Link href="/blog" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
            ← Blog
          </Link>
          <div className="space-y-2 pt-2">
            <h1 className="text-2xl font-semibold">{post.meta.title}</h1>
            {post.meta.description && (
              <p className="text-zinc-400">{post.meta.description}</p>
            )}
            <div className="flex items-center gap-3">
              <time className="text-xs text-zinc-600 font-mono">
                {new Date(post.meta.date).toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              {post.meta.tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        <article className="prose">
          <MDXRemote source={post.content} />
        </article>
      </div>
    </main>
  );
}
