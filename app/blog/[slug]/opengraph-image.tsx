import { ImageResponse } from "next/og";
import { getPost, getPosts } from "@/lib/posts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Post on jlroberts.me";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// Satori (behind ImageResponse) does not parse oklch, so the site's palette is
// restated here as hex. Keep these in sync with tailwind.config.ts.
const SURFACE = "#f7f8fa";
const INK = "#1b1f26";
const INK_MUTED = "#4a515c";
const BRAND = "#0b7fc7";
const LINE = "#dfe2e7";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: SURFACE,
          color: INK,
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: BRAND,
            }}
          >
            jlroberts.me
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: post && post.title.length > 52 ? 62 : 76,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: -2,
            }}
          >
            {post?.title ?? "Writing"}
          </div>
          {post?.summary && (
            <div
              style={{
                marginTop: 26,
                fontSize: 28,
                lineHeight: 1.45,
                color: INK_MUTED,
                // Satori has no line-clamp; trim instead.
                display: "flex",
              }}
            >
              {post.summary.length > 140
                ? `${post.summary.slice(0, 140).trimEnd()}…`
                : post.summary}
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `2px solid ${LINE}`,
            paddingTop: 28,
            fontSize: 26,
            color: INK_MUTED,
          }}
        >
          <div style={{ display: "flex" }}>James Roberts</div>
          <div style={{ display: "flex" }}>Engineering Leader</div>
        </div>
      </div>
    ),
    size
  );
}
