import { ProjectCardProps } from "../types/project-card";

const projects: ProjectCardProps[] = [
  {
    title: "Corporate Tools",
    description: "Corporate Tools was created to make starting, running, and organizing your business easier.",
    emphasis: "10k+ downloads, 4.5★ on Google Play",
    image: "https://cdn.brandfetch.io/corporatetools.com/w/200/h/200?c=1idXRAM8o31D1eCeimF",
    link: "https://corporatetools.com"
  },
  {
    title: "Tinybeans",
    description:
      "Your Tinybeans private photo album keeps your family connected with all your child’s most special moments.",
    emphasis: "500k+ downloads, 4.1★ on Google Play",
    image:
      "https://cdn.brandfetch.io/tinybeans.com/w/200/h/200?c=1idXRAM8o31D1eCeimF",
    link: "https://play.google.com/store/apps/details?id=com.tinybeans",
  },
  {
    title: "PagerDuty",
    description:
      "PagerDuty turns any signal into insight and action to improve agility and visibility across organizations.",
    emphasis: "500k+ downloads, 4.5★ on Google Play",
    image:
      "https://cdn.brandfetch.io/pagerduty.com/w/200/h/200?c=1idXRAM8o31D1eCeimF",
    link: "https://play.google.com/store/apps/details?id=com.pagerduty.android",
  },
  {
    title: "Porthole",
    description:
      "A debug-only agent that lives inside a running Android app and answers questions about it: what recomposed and why, which frames dropped, and what is holding the main thread.",
    emphasis: "Kotlin · Compose · MCP server · Apache-2.0",
    image: "/projects/porthole.svg",
    link: "https://github.com/gravityrepos/porthole",
  },
  {
    title: "Pip",
    description:
      "An all-in-one Discord bot covering moderation, XP and rank cards, games, tickets, and more, with a web dashboard for server admins.",
    emphasis: "TypeScript · discord.js · Next.js dashboard",
    image: "/projects/pip.png",
    link: "https://getpip.bot",
  },
  {
    title: "Folieux",
    description:
      "Dating and relationship tools for the ethical non-monogamy community, built around consent-gated connections as the data model's enforcement floor.",
    emphasis: "Next.js · Drizzle · Supabase Postgres",
    image: "/projects/folieux.png",
    link: "https://folieux.com",
  },
];

export default projects;
