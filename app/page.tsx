import Image from "next/image";
import Link from "next/link";
import FailureCaseCard from "@/components/failure-case-card";
import MoonletLabsCard from "@/components/moonlet-labs-card";
import ProjectCard from "@/components/project-card";
import SiteHeader from "@/components/site-header";
import { SocialLink } from "@/components/social-link";
import TinybeansCard from "@/components/tinybeans-card";
import {
  independentProjects,
  professionalProjects,
} from "@/app/data/project-cards";

const email = "james.lee.roberts1@gmail.com";

const socials = [
  { href: "https://github.com/jlroberts1", label: "GitHub" },
  { href: "https://linkedin.com/in/jlroberts1", label: "LinkedIn" },
  { href: "https://x.com/codetheliar", label: "X" },
];

const results = [
  {
    value: "2.2 → 4+",
    label: "Play Store rating after rewrite",
    context: "Team result · Tinybeans",
  },
  {
    value: "0 → 45%",
    label: "Mobile test coverage",
    context: "Team result · Tinybeans",
  },
  {
    value: "18",
    label: "Android apps & games shipped",
    context: "Solo · Moonlet Labs",
  },
];

const sectionHeading =
  "text-[28px] font-semibold tracking-[-0.02em] md:text-[32px]";
const groupHeading =
  "col-span-full mt-6 font-mono text-[13px] uppercase tracking-[0.06em] text-ink-subtle";
const outlineButton =
  "inline-flex items-center gap-2 rounded-md border border-line-strong px-[22px] py-[13px] text-[15px] font-medium transition-colors hover:border-line-focus";
const projectGrid =
  "grid grid-cols-[repeat(auto-fill,minmax(min(320px,100%),1fr))] gap-6";
const pairGrid = "col-span-full grid gap-6 md:grid-cols-2";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main id="top" className="mx-auto max-w-[1120px] px-6 md:px-12">
        <section className="flex flex-col-reverse items-center gap-10 pb-14 pt-10 md:pt-14 lg:flex-row lg:gap-[72px]">
          <div className="flex flex-col gap-6 lg:flex-[1.3]">
            <h1 className="text-[40px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[60px] xl:text-[72px]">
              James Roberts
            </h1>
            <p className="max-w-[560px] text-[22px] font-medium leading-[1.4] text-ink-strong md:text-[24px]">
              Engineering leader building reliable mobile products and strong
              teams.
            </p>
            <p className="max-w-[560px] text-[17px] leading-[1.6] text-ink-soft">
              I build Android at{" "}
              <strong className="font-semibold text-ink">Corporate Tools</strong>{" "}
              and previously managed mobile engineering at{" "}
              <strong className="font-semibold text-ink">Tinybeans</strong>.
              Before software, I spent years leading retail teams at CarMax.
            </p>

            <div className="mt-2 flex flex-wrap gap-3">
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 rounded-md bg-ink px-[22px] py-[13px] text-[15px] font-medium text-surface transition-colors hover:bg-ink-raised"
              >
                Resume
              </Link>
              <a href={`mailto:${email}`} className={outlineButton}>
                Contact
              </a>
            </div>

            <div className="mt-2 flex gap-6">
              {socials.map((social) => (
                <SocialLink key={social.href} {...social} />
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:flex-1">
            <div className="relative h-[220px] w-[220px] md:h-[260px] md:w-[260px] xl:h-[310px] xl:w-[310px]">
              <div className="absolute -inset-[3px] rounded-full border border-line-strong" />
              <Image
                src="/headshot.jpg"
                alt="James Roberts"
                fill
                priority
                sizes="(min-width: 1280px) 310px, 260px"
                className="rounded-full object-cover p-[10px]"
              />
            </div>
          </div>
        </section>

        <section aria-label="Results" className="pb-20">
          <dl className="grid gap-px overflow-hidden rounded-[10px] border border-line bg-line sm:grid-cols-3">
            {results.map((result) => (
              <div
                key={result.value}
                className="flex flex-col gap-1.5 bg-surface-raised p-6"
              >
                <dt className="text-[32px] font-bold leading-none tracking-[-0.03em] text-brand-deep">
                  {result.value}
                </dt>
                <dd className="text-[15px] leading-snug text-ink-muted">
                  {result.label}
                </dd>
                <dd className="mt-1 font-mono text-[12px] text-ink-subtle">
                  {result.context}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section
          id="projects"
          className="scroll-mt-20 border-t border-line pb-20 pt-14"
        >
          <h2 className={`${sectionHeading} mb-8`}>Selected work</h2>
          <div className={projectGrid}>
            <TinybeansCard />
            <MoonletLabsCard />

            <h3 className={groupHeading}>Professional experience</h3>
            <div className={pairGrid}>
              {professionalProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>

            <h3 className={groupHeading}>Independent projects</h3>
            <FailureCaseCard />
            <div className={pairGrid}>
              {independentProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-20 border-t border-line py-20"
        >
          <h2 className={`${sectionHeading} mb-6`}>How I lead</h2>
          <div className="flex max-w-[780px] flex-col gap-5 text-[19px] leading-[1.65] text-ink-strong">
            <p>
              I&apos;ve led teams for nearly two decades. For 17 years I ran
              cross-functional store operations at CarMax, where I learned to
              hire, coach, and keep a team steady under pressure. For the last 9
              years I&apos;ve brought that into software.
            </p>
            <p>
              I care most about coaching engineers and building teams that ship
              reliably: clear standards, honest feedback, tests and
              observability that let people move fast without breaking things.
            </p>
            <p className="text-[17px] text-ink-subtle">
              Based in Minneapolis. Outside of work I explore new technologies,
              play guitar, and go hiking and motorcycling.
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-20 border-t border-line py-20"
        >
          <h2 className={`${sectionHeading} mb-4`}>Let&apos;s talk</h2>
          <p className="mb-6 max-w-[620px] text-[17px] leading-[1.6] text-ink-soft">
            I&apos;m always glad to hear about engineering leadership roles,
            mobile teams that need a steady hand, or interesting problems. The
            quickest way to reach me is email.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-md bg-ink px-[22px] py-[13px] text-[15px] font-medium text-surface transition-colors hover:bg-ink-raised"
            >
              Email me
            </a>
            <span className="break-all font-mono text-[14px] text-ink-muted">
              {email}
            </span>
          </div>
        </section>
      </main>

      <footer className="flex items-center justify-center gap-2 border-t border-line px-6 py-8 text-sm text-ink-faint md:px-12">
        &#169; James Roberts 2026
      </footer>
    </div>
  );
}
