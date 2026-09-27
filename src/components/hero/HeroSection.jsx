import { LogoCloudHero } from "./LogoCloudHero";
import { OceanBackground } from "./OceanBackground";

export function HeroSection() {
  return (
    <section className="isolate sticky top-0 z-0 min-h-dvh min-h-screen overflow-hidden">
      <OceanBackground />

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
