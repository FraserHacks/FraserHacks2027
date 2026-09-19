import { LogoCloudHero } from "./LogoCloudHero";
import { OceanBackground } from "./OceanBackground";

export function HeroSection() {
  return (
    <section className="relative isolate sticky top-0 z-0 min-h-dvh min-h-screen overflow-hidden">
      <OceanBackground />

      <div className="relative z-10 flex min-h-dvh min-h-screen w-full flex-col items-center overflow-x-hidden px-5 pt-[4.5vh] pb-[34vh] sm:pt-[4vh] md:pt-[3.5vh]">
        <LogoCloudHero />
      </div>
    </section>
  );
}
