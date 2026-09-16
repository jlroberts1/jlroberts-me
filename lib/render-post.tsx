import Markdoc, { type Node } from "@markdoc/markdoc";
import React from "react";
import { createHighlighter, type Highlighter } from "shiki";

const THEME = "github-light";
const LANGS = [
  "kotlin",
  "java",
  "typescript",
  "tsx",
  "javascript",
  "jsx",
  "bash",
  "json",
  "yaml",
  "sql",
  "html",
  "css",
  "xml",
  "diff",
  "python",
  "groovy",
];

// One highlighter per process — creating it is the expensive part.
let highlighterPromise: Promise<Highlighter> | null = null;
function getHighlighter() {
  highlighterPromise ??= createHighlighter({ themes: [THEME], langs: LANGS });
  return highlighterPromise;
}

const markdocConfig = {
  nodes: {
    fence: {
      render: "Fence",
      attributes: {
        content: { type: String },
        language: { type: String, required: false },
      },
    },
  },
};

export async function renderPost(node: Node) {
  const highlighter = await getHighlighter();
  const loaded = new Set(highlighter.getLoadedLanguages());

  return Markdoc.renderers.react(Markdoc.transform(node, markdocConfig), React, {
    components: {
      Fence: ({
        content,
        language,
      }: {
        content: string;
        language?: string;
      }) => (
        <div
          className="not-prose my-7 overflow-x-auto rounded-lg border border-line [&_pre]:!bg-surface-raised [&_pre]:p-5 [&_pre]:text-[13.5px] [&_pre]:leading-[1.6]"
          dangerouslySetInnerHTML={{
            __html: highlighter.codeToHtml(content, {
              lang: language && loaded.has(language) ? language : "text",
              theme: THEME,
            }),
          }}
        />
      ),
    },
  });
}
