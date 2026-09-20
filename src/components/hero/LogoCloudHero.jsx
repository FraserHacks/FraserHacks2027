import { ParallaxLayer } from "./ParallaxLayer";
import { SparkleStar1 } from "./SparkleStar1";
import { SparkleStar2 } from "./SparkleStar2";
import { SparkleStar3 } from "./SparkleStar3";
import { SparkleStar4 } from "./SparkleStar4";
import styles from "./LogoCloudHero.module.css";

export function LogoCloudHero() {
  return (
    <div className={styles.lockup}>
      <ParallaxLayer layer="main" className={styles.mainLayer}>
        <span className="animate-twinkle pointer-events-none absolute inline-block -left-8 top-10 sm:-left-12">
          <SparkleStar1 size={34} />
        </span>
        <span className="animate-twinkle pointer-events-none absolute inline-block -right-6 top-6 sm:-right-10 [animation-duration:4.2s]">
          <SparkleStar4 size={48} />
        </span>
        <span className="animate-twinkle pointer-events-none absolute inline-block -right-4 top-28 sm:right-[-14%] [animation-duration:3.8s]">
          <SparkleStar2 size={40} />
        </span>
        <span className="animate-twinkle pointer-events-none absolute inline-block bottom-16 left-10 [animation-duration:2.8s]">
          <SparkleStar3 size={22} />
        </span>
        <span className="animate-twinkle pointer-events-none absolute inline-block right-[18%] top-8 [animation-duration:5s]">
          <SparkleStar1 size={18} />
        </span>
        <h1 className={styles.mark}>
          <span className={styles.logoWrap}>
            <img
              className={styles.logo}
              src="/logo.webp"
              alt="FraserHacks 27"
              width={680}
              height={494}
              decoding="async"
              fetchPriority="high"
            />
          </span>
        </h1>
        <p className={styles.comingSoon}>site coming soon!</p>
      </ParallaxLayer>
    </div>
  );
}
