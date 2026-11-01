import { ProjectCardProps } from "../types/project-card";

export const professionalProjects: ProjectCardProps[] = [
  {
    title: "Corporate Tools",
    description:
      "Senior Android developer since 2025. I help lead development of the business-management app, set mobile best practices, and coach and review the work of other engineers.",
    emphasis: "10k+ downloads · 4.5★ on Google Play",
    image: "https://cdn.brandfetch.io/corporatetools.com/w/200/h/200?c=1idXRAM8o31D1eCeimF",
    link: "https://corporatetools.com",
    linkLabel: "Visit Corporate Tools",
    badge: "Current role",
  },
  {
    title: "PagerDuty",
    description:
      "Android engineer on the incident-response app. I shipped features, led code reviews, fixed crashes to improve stability, and added automated tests to raise coverage.",
    emphasis: "500k+ downloads · 4.5★ on Google Play",
    image:
      "https://cdn.brandfetch.io/pagerduty.com/w/200/h/200?c=1idXRAM8o31D1eCeimF",
    link: "https://play.google.com/store/apps/details?id=com.pagerduty.android",
    linkLabel: "View Android app",
    badge: "Previous role",
  },
];

export const independentProjects: ProjectCardProps[] = [
  {
    title: "Porthole",
    description:
      "A debug-only agent that lives inside a running Android app and answers questions about it: what recomposed and why, which frames dropped, and what is holding the main thread.",
    emphasis: "Kotlin · Compose · MCP server · Apache-2.0",
    image: "/projects/porthole.svg",
    link: "https://github.com/gravityrepos/porthole",
    linkLabel: "View on GitHub",
  },
  {
    title: "Pip",
    description:
      "An all-in-one Discord bot covering moderation, XP and rank cards, games, tickets, and more, with a web dashboard for server admins.",
    emphasis: "TypeScript · discord.js · Next.js dashboard",
    image: "/projects/pip.png",
    link: "https://getpip.bot",
    linkLabel: "Visit getpip.bot",
  },
];
