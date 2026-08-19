import Link from "next/link";
import PrintButton from "@/components/print-button";
import {
  contact,
  education,
  jobs,
  leadershipSkills,
  role,
  summary,
  techSkills,
} from "@/app/data/resume";

const sectionHeading =
  "border-b border-line pb-2 font-mono text-[13px] uppercase tracking-[0.06em] text-ink-faint";
const meta = "font-mono text-[12.5px] text-ink-faint";

export default function Resume() {
  return (
    <div className="min-h-screen">
      <header className="flex items-center justify-between border-b border-line px-6 py-5 md:px-12 print:hidden">
        <Link
          href="/"
          className="font-mono text-[15px] font-medium transition-colors hover:text-brand"
        >
          &larr; James Roberts
        </Link>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${contact.email}`}
            className="hidden text-sm font-medium text-brand transition-colors hover:text-brand-strong sm:inline"
          >
            {contact.email}
          </a>
          <PrintButton />
        </div>
      </header>

      <main className="mx-auto max-w-[760px] px-6 pb-24 pt-14 md:px-12 print:max-w-none print:px-0 print:pb-0 print:pt-0">
        <div className="mb-10">
          <h1 className="mb-1.5 text-[40px] font-bold tracking-[-0.02em]">
            James Roberts
          </h1>
          <div className="mb-4 font-mono text-sm uppercase tracking-[0.06em] text-brand">
            {role}
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-ink-muted">
            <span>{contact.location}</span>
            <span>{contact.phone}</span>
            <span>{contact.email}</span>
          </div>
        </div>

        <section className="mb-10">
          <h2 className={`${sectionHeading} mb-4`}>Professional Summary</h2>
          <p className="text-base leading-[1.7] text-ink-strong">{summary}</p>
        </section>

        <section className="mb-10">
          <h2 className={`${sectionHeading} mb-5`}>Employment History</h2>
          <div className="flex flex-col gap-7">
            {jobs.map((job) => (
              <div
                key={`${job.company}-${job.title}`}
                className="print:break-inside-avoid"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 className="text-[17px] font-semibold">
                    {job.title}{" "}
                    <span className="font-normal text-ink-subtle">
                      | {job.company}
                    </span>
                  </h3>
                  <span className={`${meta} whitespace-nowrap`}>
                    {job.dates}
                  </span>
                </div>
                {job.location && (
                  <div className="mb-2 text-[13.5px] text-ink-faint">
                    {job.location}
                  </div>
                )}
                {job.bullets && job.bullets.length > 0 && (
                  <ul className="flex list-disc flex-col gap-1 pl-5">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-[15px] leading-[1.6] text-ink-strong"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className={`${sectionHeading} mb-4`}>Education</h2>
          <div className="flex flex-col gap-3.5">
            {education.map((entry) => (
              <div key={entry.credential} className="print:break-inside-avoid">
                <h3 className="text-[15.5px] font-semibold">
                  {entry.credential}{" "}
                  <span className="font-normal text-ink-subtle">
                    | {entry.institution}
                  </span>
                </h3>
                <div className={meta}>
                  {entry.dates} | {entry.location}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className={`${sectionHeading} mb-4`}>Skills</h2>
          <div className="flex flex-col gap-4">
            <div>
              <div className="mb-2 text-[13.5px] font-semibold">
                Leadership &amp; Management
              </div>
              <div className="flex flex-wrap gap-2">
                {leadershipSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-[5px] bg-brand-tint px-2.5 py-[5px] font-mono text-[12.5px] text-brand-deep"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="mb-2 text-[13.5px] font-semibold">
                Technical Skills
              </div>
              <div className="flex flex-wrap gap-2">
                {techSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-[5px] bg-surface-muted px-2.5 py-[5px] font-mono text-[12.5px] text-ink-soft"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
