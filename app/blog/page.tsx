import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import { formatDate, getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — James Roberts",
  description:
    "Writing on mobile engineering, team leadership, and the tools I build.",
};

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-[760px] px-6 pb-24 pt-14 md:px-12">
        <div className="mb-12">
          <div className="mb-4 font-mono text-[13px] uppercase tracking-[0.06em] text-brand">
            Blog
          </div>
          <h1 className="text-[40px] font-bold tracking-[-0.02em]">Writing</h1>
        </div>

        {posts.length === 0 ? (
          <p className="text-ink-subtle">Nothing published yet.</p>
        ) : (
          <div className="flex flex-col">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border-t border-line py-7"
              >
                <div className="flex flex-wrap items-center gap-x-3 font-mono text-[12.5px] text-ink-faint">
                  <span>{formatDate(post.publishedAt)}</span>
                  <span aria-hidden>·</span>
                  <span>{post.readingMinutes} min read</span>
                </div>
                <h2 className="mt-1.5 text-[22px] font-semibold transition-colors group-hover:text-brand">
                  {post.title}
                </h2>
                {post.summary && (
                  <p className="mt-2 text-[15px] leading-[1.6] text-ink-muted">
                    {post.summary}
                  </p>
                )}
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
