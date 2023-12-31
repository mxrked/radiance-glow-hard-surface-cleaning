/**
 *
 *  This is the Index Top
 *
 */

// import { BackgroundImage } from "react-image-and-background-image-fade";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { INDEX_TOP_BG } from "@/assets/cdns/CDNBgs";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexTop = () => {
  return (
    <section
      id="indexTop"
      className={`${styles.index_top} overrides_IndexTop fm-motion`}
    >
      {/**
      <BackgroundImage
        src={INDEX_TOP_BG}
        width="100%"
        height="100%"
        className={`${styles.bg}`}
      />
      */}

      <LazyLoadImage
        src={INDEX_TOP_BG}
        width="100%"
        height="100%"
        className={`${styles.bg}`}
        alt="Image of pressure washing hard surface. Example of pressure washing."
      />

      <div className={`${styles.overlay}`}>
        <div className={`${styles.overlay_cnt}`}>
          <h1 className="orientation-change-element half-second">
            Clean with a <br />
            Radiance-like Glow.
          </h1>

          <p className="orientation-change-element half-second">
            A local NC cleaning service which includes:
            <br />
          </p>

          <ul>
            <li>Pressure-washing</li>
            <li>Carpet cleaning</li>
            <li>Tile-grout cleaning</li>
            <li>Upholstery</li>
            <li>Wood floor cleaning</li>
            <li>Cement driveways</li>
            <li>Wooden decks</li>
            <li>Stone Cleaning</li>
          </ul>

          {/** 
          
          */}

          <div className={`${styles.overlay_cnt_links}`}>
            <a
              href="/about"
              className={`${styles.about_link} orientation-change-element half-second`}
            >
              <span>About RGHSC</span>
            </a>

            <a
              href="/contact"
              className={`${styles.contact_link} orientation-change-element half-second`}
            >
              <span>Book A Service</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
