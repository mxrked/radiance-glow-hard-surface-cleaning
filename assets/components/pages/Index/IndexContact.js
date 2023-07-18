/**
 *
 *  This is the Index Contact
 *
 */

import { BackgroundImage } from "react-image-and-background-image-fade";

import { CONTACT_TOP_BG } from "@/assets/cdns/CDNBgs";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexContact = () => {
  return (
    <section
      id="indexContact"
      className={`${styles.index_contact} overrides_IndexContact fm-motion`}
    >
      <BackgroundImage
        src={CONTACT_TOP_BG}
        width="100%"
        height="100%"
        className={`${styles.bg}`}
      />

      <div className={`${styles.overlay}`}>
        <div className={`${styles.overlay_cnt}`}>
          <h1 className="orientation-change-element">
            Contact/Book a Service.
          </h1>

          <p className="orientation-change-element">
            There are no surprises and no hidden charges. We'll clean your floor
            or hard surface like it has never been cleaned before!
          </p>

          <a href="/contact" className="half-second">
            <span>Contact/Book</span>
          </a>
        </div>
      </div>
    </section>
  );
};
