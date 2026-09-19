import cloudPuff from "../../assets/images/cloud-puff.webp";
import cloudLong from "../../assets/images/cloud-long.webp";
import cloudTall from "../../assets/images/cloud-tall.webp";
import { ParallaxLayer } from "./ParallaxLayer";
import { SparkleStar1 } from "./SparkleStar1";
import { SparkleStar2 } from "./SparkleStar2";
import { SparkleStar3 } from "./SparkleStar3";
import { SparkleStar4 } from "./SparkleStar4";
import styles from "./LogoCloudHero.module.css";

const SUPPORT_CLOUDS = [
  {
    src: cloudTall,
    width: 1188,
    height: 748,
    className: "left-[2%] top-[-8%] z-[1] w-[min(50vw,360px)] opacity-80",
  },
  {
    src: cloudLong,
    width: 1040,
    height: 412,
    className: "right-[-8%] top-[10%] z-[1] w-[min(46vw,330px)] opacity-70",
    flipped: true,
  },
  {
    src: cloudPuff,
    width: 1610,
    height: 510,
    className: "left-[-18%] top-[32%] z-[1] w-[min(42vw,300px)] opacity-80",
  },
  {
    src: cloudPuff,
    width: 1610,
    height: 510,
    className: "right-[-20%] top-[38%] z-[1] w-[min(38vw,270px)] opacity-70",
    flipped: true,
  },
];

export function LogoCloudHero() {
  return (
    <div className={styles.lockup}>
      <ParallaxLayer layer="background" className={styles.supportLayer}>
        {SUPPORT_CLOUDS.map((cloud) => (
          <img
            key={cloud.className}
            src={cloud.src}
            alt=""
            width={cloud.width}
            height={cloud.height}
            decoding="async"
            fetchPriority="low"
            draggable={false}
            className={`${styles.cloudSupport} ${cloud.className} ${cloud.flipped ? "-scale-x-100" : ""}`}
          />
        ))}
      </ParallaxLayer>

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
