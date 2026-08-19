import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/project-card";
import SiteHeader from "@/components/site-header";
import { SocialLink } from "@/components/social-link";
import projects from "@/app/data/project-cards";
import { role } from "@/app/data/resume";

const socials = [
  { href: "https://github.com/jlroberts1", label: "GitHub" },
  { href: "https://linkedin.com/in/jlroberts1", label: "LinkedIn" },
  { href: "https://twitter.com/xoomdev", label: "Twitter" },
];

const eyebrow =
  "font-mono text-[13px] uppercase tracking-[0.06em] text-brand";
const outlineButton =
  "inline-flex items-center gap-2 rounded-md border border-line-strong px-[22px] py-[13px] text-[15px] font-medium transition-colors hover:border-line-focus";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main id="top" className="mx-auto max-w-[1120px] px-6 md:px-12">
        <section className="flex flex-col-reverse items-center gap-12 py-16 lg:min-h-[calc(100vh-73px)] lg:flex-row lg:gap-[72px]">
          <div className="flex flex-col gap-7 lg:flex-[1.3]">
            <div className={eyebrow}>{role}</div>
            <h1 className="text-[40px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[60px]">
              Hi, I&apos;m James Roberts.
            </h1>
            <p className="max-w-[560px] text-[19px] leading-[1.6] text-ink-soft">
              I&apos;m a Minneapolis based{" "}
              <strong className="font-semibold text-ink">
                engineering leader
              </strong>{" "}
              with over 9 years building software and nearly two decades of
              leading teams. Today I build Android at{" "}
              <strong className="font-semibold text-ink">Corporate Tools</strong>
              ; before that I managed mobile engineering at{" "}
              <strong className="font-semibold text-ink">Tinybeans</strong>.
            </p>
            <p className="max-w-[560px] text-[17px] leading-[1.6] text-ink-subtle">
              I care most about coaching engineers and building teams that ship
              reliably. Outside of work, I explore new technologies, play guitar,
              and enjoy hiking and motorcycling.
            </p>

            <div className="mt-2 flex flex-wrap gap-3">
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 rounded-md bg-ink px-[22px] py-[13px] text-[15px] font-medium text-surface transition-colors hover:bg-ink-raised"
              >
                Resume
              </Link>
              <a href="mailto:jlroberts1@pm.me" className={outlineButton}>
                Contact
              </a>
            </div>

            <div className="mt-3 flex gap-6">
              {socials.map((social) => (
                <SocialLink key={social.href} {...social} />
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:flex-1">
            <div className="relative h-[260px] w-[260px] md:h-[300px] md:w-[300px]">
              <div className="absolute -inset-[3px] rounded-full border border-line-strong" />
              <Image
                src="/profilepic.jpg"
                alt="James Roberts"
                fill
                priority
                sizes="300px"
                className="rounded-full object-cover p-[10px]"
              />
            </div>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-20 border-t border-line py-20"
        >
          <div className={`${eyebrow} mb-4`}>About</div>
          <p className="max-w-[780px] text-[22px] leading-[1.65] text-ink-strong">
            I came to engineering after years of leading teams — running
            cross-functional store operations at CarMax before moving into
            software full time. Since then I&apos;ve led Android rewrites that
            moved a Play Store rating from 2.2 to over 4 stars, raised test
            coverage from 0 to 45%, and set observability standards across a
            mobile organization. What I enjoy most is coaching engineers, hiring
            well, and building teams that ship reliably.
          </p>
        </section>

        <section
          id="projects"
          className="scroll-mt-20 border-t border-line pb-24 pt-4"
        >
          <div className={`${eyebrow} mb-9`}>Projects</div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(min(320px,100%),1fr))] gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
      </main>

      <footer className="flex items-center justify-center gap-2 border-t border-line px-6 py-8 text-sm text-ink-faint md:px-12">
        &#169; James Roberts 2026
      </footer>
    </div>
  );
}
