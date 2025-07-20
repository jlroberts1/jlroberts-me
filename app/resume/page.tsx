"use client";

import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";

export default function Resume() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch("assets/resume.md")
      .then(response => response.text())
      .then(text => setMarkdown(text));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <ReactMarkdown
        components={{
          h1: ({children}) => (
            <h1 className="text-4xl font-bold mb-6 text-gray-900 border-b pb-2">
              {children}
            </h1>
          ),
          h2: ({children}) => (
            <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-800">
              {children}
            </h2>
          ),
          h3: ({children}) => (
            <h3 className="text-xl font-medium mb-3 mt-6 text-gray-700">
              {children}
            </h3>
          ),
          p: ({children}) => (
            <p className="mb-4 text-gray-700 leading-relaxed">
              {children}
            </p>
          ),
          ul: ({children}) => (
            <ul className="mb-4 ml-6 list-disc space-y-1">
              {children}
            </ul>
          ),
          ol: ({children}) => (
            <ol className="mb-4 ml-6 list-decimal space-y-1">
              {children}
            </ol>
          ),
          li: ({children}) => (
            <li className="text-gray-700">
              {children}
            </li>
          ),
          strong: ({children}) => (
            <strong className="font-semibold text-gray-900">
              {children}
            </strong>
          ),
          em: ({children}) => (
            <em className="italic text-gray-700">
              {children}
            </em>
          ),
          blockquote: ({children}) => (
            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
              {children}
            </blockquote>
          ),
          code: ({children}) => (
            <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
              {children}
            </code>
          ),
          pre: ({children}) => (
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
              {children}
            </pre>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}