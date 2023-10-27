/**
 *
 *  This is the About Backlinks
 *
 */

// import { BackgroundImage } from "react-image-and-background-image-fade";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { EXPERTISE_LOGO, BUSINESS_UP_LOGO } from "@/assets/cdns/CDNImgs";

import styles from "../../../styles/modules/About/About.module.css";

export const AboutBacklinks = () => {
  return (
    <section id="aboutBacklinks" className={`${styles.about_backlinks}`}>
      <div className={`${styles.about_backlinks_inner}`}>
        <h1 className="orientation-change-element half-second">
          Top Rated
          <br /> By Professionals.
        </h1>

        <ul>
          <li>
            <LazyLoadImage
              onClick={() => {
                window.open(
                  "https://www.expertise.com/nc/winston-salem/carpet-cleaners",
                  "_self"
                );
              }}
              className="lazyload-image orientation-change-element half-second"
              style={{ cursor: "pointer" }}
              src={EXPERTISE_LOGO}
              alt={"Expertise.com Logo."}
            />
          </li>

          <li>
            <LazyLoadImage
              onClick={() => {
                window.open(
                  "https://www.businessesup.com/high-point-nc/cleaners",
                  "_self"
                );
              }}
              className="lazyload-image orientation-change-element half-second"
              style={{ cursor: "pointer" }}
              src={BUSINESS_UP_LOGO}
              alt={"BusinessUp.com Logo."}
            />
          </li>
        </ul>

        <a
          href="/contact"
          className={`${styles.contact_link} orientation-change-element half-second`}
        >
          <span>Book A Service</span>
        </a>
      </div>
    </section>
  );
};
