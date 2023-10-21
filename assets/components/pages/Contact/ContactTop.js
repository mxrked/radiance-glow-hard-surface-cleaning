/**
 *
 *  This is the Contact Top
 *
 */

// import { BackgroundImage } from "react-image-and-background-image-fade";
import { LazyLoadImage } from "react-lazy-load-image-component";

import {
  CONTACT_TOP_BG,
  INDEX_UPHOLSTERY_CLEANING_REPLACEMENT_BG,
} from "@/assets/cdns/CDNBgs";

import styles from "../../../styles/modules/Contact/Contact.module.css";

export const ContactTop = () => {
  return (
    <section
      id="contactTop"
      className={`${styles.contact_top} overrides_ContactTop fm-motion`}
    >
      {/**
      <BackgroundImage
        src={INDEX_UPHOLSTERY_CLEANING_REPLACEMENT_BG}
        width="100%"
        height="100%"
        className={`${styles.bg}`}
      />
      */}

      <LazyLoadImage
        src={INDEX_UPHOLSTERY_CLEANING_REPLACEMENT_BG}
        width="100%"
        height="100%"
        className={`${styles.bg}`}
      />

      <div className={`${styles.overlay}`}>
        <div className={`${styles.overlay_cnt}`}>
          <h1 className="orientation-change-element half-second">
            Contact/Book with <br />
            Radiance Glow.
          </h1>
        </div>
      </div>
    </section>
  );
};
