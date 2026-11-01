import { Bricolage_Grotesque } from "next/font/google";

// Display face from moonletlabs.com, so the wordmark matches the studio site.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["700"],
});

export default function MoonletLabsCard() {
  return (
    <a
      href="https://moonletlabs.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group col-span-full overflow-hidden rounded-[10px] border border-line bg-surface-raised transition-colors hover:border-line-hover"
    >
      <div className="relative h-[200px] bg-[#13131a] md:h-[240px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/projects/moonlet-labs-hero.webp"
          alt="A crescent moon in a dark blue sky above a bank of purple cloud"
          className="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
        />
        <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/45 via-transparent to-transparent p-6 text-[#ece8de] md:p-9">
          <div className="flex items-center gap-3 text-[13px] font-bold tracking-[0.05em]">
            <svg
              viewBox="22 18 64 68"
              aria-hidden
              className="h-[30px] w-[30px] text-[#a9a2ff]"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M54 25A29 29 0 1 0 54 83A29 29 0 1 0 54 25ZM51 28A26 26 0 1 0 51 80A26 26 0 1 0 51 28Z"
              />
              <rect x="51" y="21" width="6" height="11" rx="3" fill="currentColor" />
            </svg>
            MOONLET LABS
          </div>
          <h3
            className={`${bricolage.className} text-[48px] font-bold leading-[0.82] tracking-[-0.05em] md:text-[80px]`}
          >
            Moonlet{" "}
            <span className="text-[#a9a2ff]">
              Labs<span className="text-[0.6em]">.</span>
            </span>
          </h3>
        </div>
      </div>
      <div className="flex flex-col gap-3.5 p-7 md:p-9">
        <p className="max-w-[720px] text-[16px] leading-relaxed text-ink-muted">
          My independent Android studio: small tools you open for ten seconds
          and trust, from a bubble level to a metronome and tuner, plus
          logic-only puzzle games with no guessing. Designed, built, and
          shipped solo on Google Play.
        </p>
        <p className="font-mono text-[12.5px] text-brand">
          18 Android apps &amp; games · Kotlin · Compose
        </p>
        <span className="mt-1 self-start border-b border-ink text-sm font-medium transition-colors group-hover:border-brand group-hover:text-brand">
          Explore Moonlet Labs &rarr;
        </span>
      </div>
    </a>
  );
}
