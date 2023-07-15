/**
 *
 *  This is the Nav Top
 *
 */

import { FaYelp, FaFacebook, FaYoutube } from "react-icons/fa";
import { SiNextdoor } from "react-icons/si";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const NavTop = () => {
  return (
    <div
      id="navTop"
      className={`${styles.nav_top} overrides_NavTop fm-motion full-second`}
    >
      <div className={`${styles.nav_top_inner}`}>
        <div className={`${styles.nav_top_inner_box} container-fluid`}>
          <div className={`${styles.nav_top_inner_row} row`}>
            <div
              className={`${styles.nav_top_inner_side} ${styles.nav_top_L} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
            >
              <div className={`${styles.nav_top_inner_side_cnt}`}>
                <a
                  href="https://www.facebook.com/RadianceGHSC/"
                  className="half-second orientation-change-element"
                  target={"_blank"}
                >
                  <FaFacebook className={`${styles.icon}`} />
                </a>
                <a
                  href="https://www.yelp.com/biz/radiance-glow-hard-surface-cleaning-high-point-4"
                  className="half-second orientation-change-element"
                  target={"_blank"}
                >
                  <FaYelp className={`${styles.icon}`} />
                </a>
                <a
                  href="https://nextdoor.com/pages/radiance-glow-hard-surface-cleaning-high-point-nc/"
                  className={`${styles.next_door} half-second orientation-change-element`}
                  target={"_blank"}
                >
                  <SiNextdoor className={`${styles.icon}`} />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCJoeDkbDMPAFf_haCa5tRYQ"
                  className={`half-second orientation-change-element`}
                  target={"_blank"}
                >
                  <FaYoutube className={`${styles.icon}`} />
                </a>
              </div>
            </div>
            <div
              className={`${styles.nav_top_inner_side} ${styles.nav_top_R} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
            >
              <div className={`${styles.nav_top_inner_side_cnt}`}>
                <ul>
                  <li>info@radianceglowhsc.com</li>
                  <li>+1 (336) 259-1354</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};