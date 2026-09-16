import { collection, config, fields } from "@keystatic/core";

export default config({
  // Local storage: the editor writes markdown straight into this repo, and
  // publishing is a commit. Switch to `kind: "github"` if you ever want to
  // edit from the deployed site.
  storage: { kind: "local" },
  ui: {
    brand: { name: "jlroberts.me" },
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "content/posts/*",
      format: { contentField: "content" },
      entryLayout: "content",
      columns: ["title", "publishedAt"],
      schema: {
        title: fields.slug({
          name: { label: "Title" },
          slug: { label: "URL slug", description: "Appears as /blog/<slug>" },
        }),
        publishedAt: fields.date({
          label: "Published",
          defaultValue: { kind: "today" },
          validation: { isRequired: true },
        }),
        summary: fields.text({
          label: "Summary",
          description: "Shown on the blog index and in link previews.",
          multiline: true,
          validation: { length: { min: 1, max: 300 } },
        }),
        draft: fields.checkbox({
          label: "Draft",
          description: "Drafts are hidden from the blog index and from /blog/<slug>.",
          defaultValue: false,
        }),
        content: fields.markdoc({
          label: "Content",
          options: {
            image: {
              directory: "public/images/posts",
              publicPath: "/images/posts/",
            },
          },
        }),
      },
    }),
  },
});
