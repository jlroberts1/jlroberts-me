import { notFound } from "next/navigation";

// The editor writes to the local filesystem, which is read-only on Vercel, so
// it is only useful while running `npm run dev`. Hiding it in production keeps
// a half-working admin screen off the public site.
export default function KeystaticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (process.env.NODE_ENV === "production") notFound();
  return children;
}
