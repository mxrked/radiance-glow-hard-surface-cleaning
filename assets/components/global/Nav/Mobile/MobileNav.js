/**
 *
 *  This is the Mobile Nav
 *
 */

import { LOGO } from "@/assets/cdns/CDNIcons";

import styles from "../../../../styles/modules/Nav/Nav.module.css";
import DeclareStorageVariable from "@/assets/functions/data/storage/DeclareStorageVariable";

export const MobileNav = (props) => {
  return (
    <nav
      id="mobileNav"
      className={`${styles.mobile_nav} overrides_MobileNav fm-motion full-second`}
    >
      <div className={`${styles.mobile_nav_inner}`}>
        <div className={`${styles.mobile_nav_inner_box} container-fluid`}>
          <div className={`${styles.mobile_nav_inner_row} row`}>
            <div
              className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_L} col-lg-4 col-md-4 col-sm-4 col-xs-4`}
            >
              <div className={`${styles.mobile_nav_inner_side_cnt}`}>
                {props.disableLink === "/" ? (
                  <div className={`${styles.logo} ${styles.deactive}`}>
                    <img
                      data-src={LOGO}
                      className="lazyload"
                      alt="Radiance Glow HSC Logo."
                    />
                  </div>
                ) : (
                  <div className={`${styles.logo} ${styles.active}`}>
                    <a href="/">
                      <img
                        data-src={LOGO}
                        className="lazyload"
                        alt="Radiance Glow HSC Logo."
                      />
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div
              className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_R} col-lg-8 col-md-8 col-sm-8 col-xs-8`}
            >
              <div className={`${styles.mobile_nav_inner_side_cnt}`}>
                <button
                  id="mobileNavToggler"
                  onClick={() => {
                    DeclareStorageVariable(
                      "session",
                      "Mobile Nav Opened",
                      true
                    );

                    document.body.style.overflowY = "hidden";
                    document.body.style.pointerEvents = "none";

                    document.getElementById("mobileNavMenu").style.display =
                      "block";

                    const DARKEN = document.getElementById(
                      "mobileNavMenuDarken"
                    );
                    const MAIN = document.getElementById("mobileNavMenuMain");
                    const CNT = document.getElementById("mobileNavMenuMainCnt");

                    setTimeout(() => {
                      DARKEN.style.opacity = 1;
                      DARKEN.style.visibility = "visible";
                    }, 700);

                    setTimeout(() => {
                      MAIN.style.transform = "translateX(0)";
                    }, 900);

                    setTimeout(() => {
                      CNT.style.opacity = 1;
                      CNT.style.visibility = "visible";
                    }, 1500);

                    setTimeout(() => {
                      DARKEN.style.pointerEvents = "auto";
                      MAIN.style.overflowY = "auto";
                      MAIN.style.pointerEvents = "auto";
                    }, 2300);
                  }}
                >
                  <span className="half-second" />
                  <span className="half-second" />
                  <span className="half-second" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
