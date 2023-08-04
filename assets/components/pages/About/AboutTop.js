/**
 *
 *  This is the About Top
 *
 */

import { BackgroundImage } from "react-image-and-background-image-fade";

import { ABOUT_TOP_BG, INDEX_MEXICAN_TILES_BG } from "@/assets/cdns/CDNBgs";

import styles from "../../../styles/modules/About/About.module.css";

export const AboutTop = () => {
  return (
    <section
      id="aboutTop"
      className={`${styles.about_top} overrides_AboutTop fm-motion`}
    >
      <BackgroundImage
        src={INDEX_MEXICAN_TILES_BG}
        width="100%"
        height="100%"
        className={`${styles.bg}`}
      />

      <div className={`${styles.overlay}`}>
        <div className={`${styles.overlay_cnt}`}>
          <h1 className="orientation-change-element half-second">
            Radiance Glow's <br /> History & Reviews.
          </h1>
        </div>
      </div>
    </section>
  );
};
