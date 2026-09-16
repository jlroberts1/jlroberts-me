import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/site-header";
import {
  formatDate,
  getNeighbours,
  getPost,
  getPosts,
  readingMinutes,
} from "@/lib/posts";
import { renderPost } from "@/lib/render-post";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — James Roberts`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
    },
  };
}

export default async function Post({ params }: Params) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const { node } = await post.content();
  const [rendered, { newer, older }] = await Promise.all([
    renderPost(node),
    getNeighbours(slug),
  ]);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-[760px] px-6 pb-24 pt-14 md:px-12">
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-x-3 font-mono text-[12.5px] text-ink-faint">
            <span>{formatDate(post.publishedAt)}</span>
            <span aria-hidden>·</span>
            <span>{readingMinutes(node)} min read</span>
          </div>
          <h1 className="mt-2 text-[40px] font-bold leading-[1.1] tracking-[-0.02em]">
            {post.title}
          </h1>
          {post.summary && (
            <p className="mt-4 border-l-2 border-brand pl-4 text-[19px] leading-[1.6] text-ink-muted">
              {post.summary}
            </p>
          )}
        </div>

        <article
          className="prose max-w-none
            prose-headings:font-semibold prose-headings:tracking-[-0.01em]
            prose-a:no-underline hover:prose-a:underline
            prose-code:font-mono prose-code:text-[0.9em] prose-code:before:content-none prose-code:after:content-none
            prose-img:rounded-lg prose-img:border prose-img:border-line"
        >
          {rendered}
        </article>

        <nav className="mt-16 flex flex-col gap-6 border-t border-line pt-7 sm:flex-row sm:justify-between">
          {newer ? (
            <Link href={`/blog/${newer.slug}`} className="group max-w-[45%]">
              <div className="font-mono text-[12.5px] text-ink-faint">
                &larr; Newer
              </div>
              <div className="mt-1 text-[15px] font-medium transition-colors group-hover:text-brand">
                {newer.title}
              </div>
            </Link>
          ) : (
            <span />
          )}
          {older ? (
            <Link
              href={`/blog/${older.slug}`}
              className="group max-w-[45%] sm:text-right"
            >
              <div className="font-mono text-[12.5px] text-ink-faint">
                Older &rarr;
              </div>
              <div className="mt-1 text-[15px] font-medium transition-colors group-hover:text-brand">
                {older.title}
              </div>
            </Link>
          ) : (
            <span />
          )}
        </nav>

        <div className="mt-10">
          <Link
            href="/blog"
            className="font-mono text-sm text-ink-subtle transition-colors hover:text-brand"
          >
            All posts
          </Link>
        </div>
      </main>
    </div>
  );
}
