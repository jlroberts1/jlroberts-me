"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-md border border-line-strong px-3.5 py-2 text-sm font-medium transition-colors hover:border-line-focus"
    >
      Print / Save PDF
    </button>
  );
}
