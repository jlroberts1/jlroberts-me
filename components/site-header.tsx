import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-surface/85 px-6 py-5 backdrop-blur-[8px] md:px-12">
      <Link
        href="#top"
        className="font-mono text-[15px] font-medium tracking-[-0.02em]"
      >
        James Roberts
      </Link>
      <nav className="flex gap-6 text-sm font-medium sm:gap-8">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-ink-muted transition-colors hover:text-ink"
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
