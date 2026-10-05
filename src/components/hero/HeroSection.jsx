import { LogoCloudHero } from "./LogoCloudHero";
import { OceanBackground } from "./OceanBackground";

export function HeroSection() {
  return (
    <section className="isolate sticky top-0 z-0 min-h-dvh min-h-screen overflow-hidden">
      <OceanBackground />

      <a
        className="absolute right-4 top-4 z-30 inline-flex items-center gap-1.5 rounded-xl bg-[#e8a45c] px-4 py-2 font-['Fredoka','Quicksand',system-ui,sans-serif] text-sm font-bold tracking-[0.04em] text-[#fffdf8] no-underline shadow-[0_8px_20px_rgba(184,108,40,0.28)] transition-colors hover:bg-[#f0b36e] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#c47ad4] sm:right-6 sm:top-6 sm:text-base"
        href="/FH27_Sponsorship.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Become a sponsor (opens sponsorship document in a new tab)"
      >
        Become a sponsor
        <svg
          className="size-3.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7 17 17 7M8 7h9v9" />
        </svg>
      </a>

      <div className="relative z-10 flex min-h-dvh min-h-screen w-full flex-col items-center overflow-x-hidden px-5 pt-[4.5vh] pb-[34vh] sm:pt-[4vh] md:pt-[3.5vh]">
        <LogoCloudHero />
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          background:
            "radial-gradient(circle at 50% 69%, rgba(255, 242, 190, 0.55) 0%, rgba(255, 200, 110, 0.22) 26%, rgba(255, 160, 90, 0.08) 48%, transparent 72%)",
          mixBlendMode: "soft-light",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
