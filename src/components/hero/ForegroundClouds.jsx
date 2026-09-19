import cloudPuff from "../../assets/images/cloud-puff.webp";
import cloudLong from "../../assets/images/cloud-long.webp";
import { ParallaxLayer } from "./ParallaxLayer";
import styles from "./ForegroundClouds.module.css";

export function ForegroundClouds() {
  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden" aria-hidden="true">
      <ParallaxLayer layer="foreground" className="absolute inset-0">
        <div className={styles.fade}>
          <div className={styles.spots} />
        </div>
        <img
          src={cloudPuff}
          alt=""
          width={1610}
          height={510}
          decoding="async"
          fetchPriority="low"
          draggable={false}
          className="absolute -bottom-[18%] left-[18%] w-[min(86vw,800px)] max-w-none opacity-95"
        />
        <img
          src={cloudLong}
          alt=""
          width={1040}
          height={412}
          decoding="async"
          fetchPriority="low"
          draggable={false}
          className="absolute -bottom-[22%] left-[40%] w-[min(90vw,840px)] max-w-none opacity-94"
        />
        <img
          src={cloudPuff}
          alt=""
          width={1610}
          height={510}
          decoding="async"
          fetchPriority="low"
          draggable={false}
          className="absolute -bottom-[10%] -left-[18%] w-[min(88vw,820px)] max-w-none mix-blend-screen opacity-95"
        />
        <img
          src={cloudLong}
          alt=""
          width={1040}
          height={412}
          decoding="async"
          fetchPriority="low"
          draggable={false}
          className="absolute -right-[16%] -bottom-[12%] w-[min(92vw,860px)] max-w-none -scale-x-100 mix-blend-screen opacity-95"
        />
      </ParallaxLayer>
    </div>
  );
}
