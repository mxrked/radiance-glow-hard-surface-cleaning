/**
 *
 *  This is the Index About
 *
 */
import { useEffect } from "react";

// import { BackgroundImage } from "react-image-and-background-image-fade";
import { LazyLoadImage } from "react-lazy-load-image-component";

import {
  INDEX_UPHOLSTERY_CLEANING_BG,
  INDEX_UPHOLSTERY_CLEANING_REPLACEMENT_BG,
} from "@/assets/cdns/CDNBgs";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexAbout = () => {
  // Changing BG side position based on window size
  useEffect(() => {
    const SIDE_L = document.getElementById("aboutSideL");
    const SIDE_R = document.getElementById("aboutSideR");

    window.addEventListener("resize", () => {
      if (window.matchMedia("(max-width: 991px)")) {
        if (SIDE_L.classList.contains("order-md-0")) {
          SIDE_L.classList.remove("order-md-0");
          SIDE_L.classList.add("order-md-1");
        }

        if (SIDE_R.classList.contains("order-md-1")) {
          SIDE_R.classList.remove("order-md-1");
          SIDE_R.classList.add("order-md-0");
        }
      }

      if (navigator.userAgent.match(/iPad/i)) {
        if (!window.matchMedia("(max-width: 823px)")) {
          if (SIDE_L.classList.contains("order-md-0")) {
            SIDE_L.classList.remove("order-md-0");
            SIDE_L.classList.add("order-md-1");
          }

          if (SIDE_R.classList.contains("order-md-1")) {
            SIDE_R.classList.remove("order-md-1");
            SIDE_R.classList.add("order-md-0");
          }
        }
      }

      if (navigator.userAgent.match("Pixel 2 XL")) {
        if (SIDE_L.classList.contains("order-md-1")) {
          SIDE_L.classList.remove("order-md-1");
          SIDE_L.classList.add("order-md-0");
        }

        if (SIDE_R.classList.contains("order-md-0")) {
          SIDE_R.classList.remove("order-md-0");
          SIDE_R.classList.add("order-md-1");
        }
      }
    });
  }, []);

  return (
    <section
      id="indexAbout"
      className={`${styles.index_about} overrides_IndexAbout fm-motion`}
    >
      <div className={`${styles.index_about_inner}`}>
        <div className={`${styles.index_about_inner_box} container-fluid`}>
          <div className={`${styles.index_about_inner_row} row`}>
            <div
              id="aboutSideL"
              className={`${styles.index_about_inner_side} ${styles.index_about_L} col-lg-7 col-md-7 col-sm-7 col-xs-7 order-lg-0 order-md-0 order-sm-1 order-1`}
            >
              <div className={`${styles.index_about_inner_side_cnt}`}>
                <h1 className="orientation-change-element">
                  Radiance Glow's history.
                </h1>

                <p className="orientation-change-element">
                  We aren't your typical franchise or subcontractor for a
                  national cleaning company. What we are is a locally owned
                  company that provides dependable, quality cleaning services
                  for homes and small businesses. We have been in business since
                  2012.
                </p>

                <p className="orientation-change-element">
                  At our core, we believe in the power of community. Since 2012,
                  we've grown by deepening our roots in the neighborhoods we
                  serve. Our dedicated professionals offer tailored cleaning
                  services to meet your specific needs, all while maintaining an
                  eco-friendly approach, ensuring your space looks great and
                  contributes to a healthier planet.
                </p>

                <a href="/about" className="half-second">
                  <span>About RGHSC</span>
                </a>
              </div>
            </div>
            <div
              id="aboutSideR"
              className={`${styles.index_about_inner_side} ${styles.index_about_R} col-lg-5 col-md-5 col-sm-5 col-xs-5 order-lg-1 order-md-1 order-sm-0 order-0`}
            >
              <div className={`${styles.index_about_inner_side_cnt}`}>
                {/**
                <BackgroundImage
                  src={INDEX_UPHOLSTERY_CLEANING_REPLACEMENT_BG}
                  className={`${styles.bg}`}
                  width="100%"
                  height="100%"
                />
                */}

                <LazyLoadImage
                  src={INDEX_UPHOLSTERY_CLEANING_REPLACEMENT_BG}
                  className={`${styles.bg}`}
                  width="100%"
                  height="100%"
                  alt="Image of vaccuumed carpet. Example of carpet cleaning."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
