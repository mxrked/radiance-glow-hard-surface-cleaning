/**
 *
 *  This is the Index Services
 *
 */

import { BackgroundImage } from "react-image-and-background-image-fade";

import { INDEX_PRESSURE_WASHING_BG } from "@/assets/cdns/CDNBgs";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexServices = () => {
  return (
    <section
      id="indexServices"
      className={`${styles.index_services} overrides_IndexServices fm-motion`}
    >
      <div className={`${styles.index_services_inner}`}>
        <div className={`${styles.index_services_inner_box} container-fluid`}>
          <div className={`${styles.index_services_inner_row} row`}>
            <div
              className={`${styles.index_services_inner_side} ${styles.index_services_L} col-lg-5 col-md-5 col-sm-5 col-xs-5`}
            >
              <div className={`${styles.index_services_inner_side_cnt}`}>
                <BackgroundImage
                  src={INDEX_PRESSURE_WASHING_BG}
                  className={`${styles.bg}`}
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div
              className={`${styles.index_services_inner_side} ${styles.index_services_R} col-lg-7 col-md-7 col-sm-7 col-xs-7`}
            >
              <div className={`${styles.index_services_inner_side_cnt}`}>
                <h1 className="orientation-change-element">
                  Radiance Glow's services.
                </h1>

                <p className="orientation-change-element">
                  Radiance Glow Hard Surface Cleaning is a fully licensed and
                  bonded company with the goal of providing our customers with
                  astonishing service and the best investment in cleaning and
                  restoring hard surfaces as well as carpet.
                  <br />
                  <br />
                  We help any of the following locations: hotels, schools,
                  assisted living facilities, low & high rise office buildings,
                  common areas, call centers.
                </p>

                <a href="/contact" className="half-second">
                  <span>Book A Service</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
