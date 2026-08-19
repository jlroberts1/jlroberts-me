import { ProjectCardProps } from "@/app/types/project-card";

export default function ProjectCard({
  title,
  description,
  emphasis,
  image,
  link,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-3.5 rounded-[10px] border border-line bg-surface-raised p-7 transition-colors hover:border-line-hover">
      <div className="flex items-center gap-3.5">
        {image ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={image}
            alt={`${title} logo`}
            className="h-11 w-11 rounded-lg border border-line object-cover"
          />
        ) : (
          <div
            aria-hidden
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-brand-tint font-mono text-lg font-medium text-brand-deep"
          >
            {title.charAt(0)}
          </div>
        )}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="flex-1 text-[15px] leading-relaxed text-ink-muted">
        {description}
      </p>
      <p className="font-mono text-[12.5px] text-brand">{emphasis}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 self-start border-b border-ink text-sm font-medium transition-colors hover:border-brand hover:text-brand"
        >
          Learn more &rarr;
        </a>
      )}
    </div>
  );
}
