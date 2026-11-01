const trailerId = "Ou-2vRBYQpw";

export default function FailureCaseCard() {
  return (
    <div className="col-span-full overflow-hidden rounded-[10px] border border-line bg-surface-raised transition-colors hover:border-line-hover">
      <div className="relative aspect-video bg-black">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${trailerId}?rel=0`}
          title="Failure Case channel trailer"
          loading="lazy"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
      <div className="flex flex-col gap-3.5 p-7 md:p-9">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/failure-case.jpg"
            alt="Failure Case logo"
            className="h-9 w-9 rounded-md"
          />
          <h3 className="text-xl font-semibold">Failure Case</h3>
        </div>
        <p className="max-w-[720px] text-[16px] leading-relaxed text-ink-muted">
          Engineering postmortems on YouTube: dams, bridges, power grids, and
          software outages, and why they failed. Built on Slate, my
          Claude-driven production pipeline: research, fact-checked scripts,
          narration, Remotion renders, Shorts, thumbnails, and scheduled
          publishing, with human approval at every gate.
        </p>
        <p className="font-mono text-[12.5px] text-brand">
          Claude agents · Remotion · Cloudflare Workers
        </p>
        <a
          href="https://www.youtube.com/@FailureCase"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 self-start border-b border-ink text-sm font-medium transition-colors hover:border-brand hover:text-brand"
        >
          Watch on YouTube &rarr;
        </a>
      </div>
    </div>
  );
}
