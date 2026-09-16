import type { Node } from "@markdoc/markdoc";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "@/keystatic.config";

export const reader = createReader(process.cwd(), keystaticConfig);

/** Words / 225, the usual reading-speed approximation. */
export function readingMinutes(node: Node) {
  let words = 0;
  for (const child of node.walk()) {
    const content = child.attributes?.content;
    if (child.type === "text" && typeof content === "string") {
      words += content.trim().split(/\s+/).filter(Boolean).length;
    }
  }
  return Math.max(1, Math.round(words / 225));
}

/** Published posts, newest first. Drafts never leave the editor. */
export async function getPosts() {
  const entries = await reader.collections.posts.all();
  const published = await Promise.all(
    entries
      .filter((post) => !post.entry.draft)
      .map(async (post) => {
        const { node } = await post.entry.content();
        return {
          slug: post.slug,
          ...post.entry,
          readingMinutes: readingMinutes(node),
        };
      })
  );
  return published.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export async function getPost(slug: string) {
  const post = await reader.collections.posts.read(slug);
  return post && !post.draft ? post : null;
}

/** Older / newer neighbours for the footer nav. */
export async function getNeighbours(slug: string) {
  const posts = await getPosts();
  const index = posts.findIndex((post) => post.slug === slug);
  if (index === -1) return { newer: null, older: null };
  return {
    newer: posts[index - 1] ?? null,
    older: posts[index + 1] ?? null,
  };
}

export function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
