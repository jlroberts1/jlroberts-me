import { SocialLinkProps } from "@/app/types/social-link";

export const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => (
  <a
    href={href}
    className="text-white/70 hover:text-white transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon className="w-6 h-6" />
    <span className="sr-only">{label}</span>
  </a>
);
