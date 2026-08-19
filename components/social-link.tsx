import { SocialLinkProps } from "@/app/types/social-link";

export const SocialLink = ({ href, label }: SocialLinkProps) => (
  <a
    href={href}
    className="border-b border-transparent font-mono text-sm text-ink-subtle transition-colors hover:border-brand hover:text-brand"
    target="_blank"
    rel="noopener noreferrer"
  >
    {label}
  </a>
);
