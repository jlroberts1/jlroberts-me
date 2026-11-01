const story = [
  {
    heading: "The problem",
    body: "The family photo-sharing app had a 2.2★ Android rating, no automated tests, and little visibility into how releases behaved in the wild.",
  },
  {
    heading: "What I did",
    body: "Led the Android rewrite, then managed the mobile team: hired and mentored engineers, introduced feature flags, and set an observability standard across the mobile projects.",
  },
  {
    heading: "The result",
    body: "The rewrite lifted the rating above 4 stars, feature flags and tests made releases safer to ship, and features the team delivered grew user engagement by 27%.",
  },
];

const screens = [
  {
    src: "/projects/tinybeans/screen1.webp",
    alt: "Tinybeans app screen for adding photos as memories, with a hidden-moment toggle",
  },
  {
    src: "/projects/tinybeans/screen2.webp",
    alt: "Tinybeans family calendar view with a photo on each day and a comment thread",
  },
];

export default function TinybeansCard() {
  return (
    <div className="col-span-full grid gap-8 rounded-[10px] border border-line bg-surface-raised p-7 transition-colors hover:border-line-hover md:p-9 lg:grid-cols-[3fr_2fr]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[12.5px] uppercase tracking-[0.06em] text-brand">
            Selected leadership work
          </span>
          <div className="flex items-center gap-3.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://cdn.brandfetch.io/tinybeans.com/w/200/h/200?c=1idXRAM8o31D1eCeimF"
              alt="Tinybeans logo"
              className="h-11 w-11 rounded-lg border border-line object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold">Tinybeans</h3>
              <p className="text-sm text-ink-subtle">
                Lead Android Engineer → Engineering Manager, Mobile ·{" "}
                <span className="font-medium text-ink-muted">
                  Aug 2022 – Nov 2024
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
          {story.map((part) => (
            <div key={part.heading}>
              <h4 className="mb-1.5 text-sm font-semibold">{part.heading}</h4>
              <p className="text-[15px] leading-relaxed text-ink-muted">
                {part.body}
              </p>
            </div>
          ))}
        </div>
        <a
          href="https://play.google.com/store/apps/details?id=com.tinybeans"
          target="_blank"
          rel="noopener noreferrer"
          className="self-start border-b border-ink text-sm font-medium transition-colors hover:border-brand hover:text-brand"
        >
          View Android app &rarr;
        </a>
      </div>
      <div className="flex items-center justify-center">
        {screens.map((screen, index) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={screen.src}
            src={screen.src}
            alt={screen.alt}
            loading="lazy"
            className={`h-auto w-[58%] max-w-[260px] object-contain drop-shadow-sm ${
              index === 0
                ? "relative z-10 -mr-[12%] -translate-y-4"
                : "translate-y-4"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
