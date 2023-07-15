/**
 *
 *  This is the Desktop Nav
 *
 */

import { LOGO } from "@/assets/cdns/CDNIcons";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const DesktopNav = (props) => {
  return (
    <nav
      id="desktopNav"
      className={`${styles.desktop_nav} overrides_DesktopNav fm-motion full-second`}
    >
      <div className={`${styles.desktop_nav_inner}`}>
        <div className={`${styles.desktop_nav_inner_box} container-fluid`}>
          <div className={`${styles.desktop_nav_inner_row} row`}>
            <div
              className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_L} col-lg-4 col-md-4 col-sm-4 col-xs-4`}
            >
              <div className={`${styles.desktop_nav_inner_side_cnt}`}>
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
              className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_R} col-lg-8 col-md-8 col-sm-8 col-xs-8`}
            >
              <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                <ul>
                  {props.disableLink === "/" ? (
                    <li className={`${styles.deactive}`}>
                      <span className="orientation-change-element half-second">
                        HOME
                      </span>
                    </li>
                  ) : (
                    <li className={`${styles.active}`}>
                      <a
                        href="/"
                        className="orientation-change-element half-second"
                      >
                        <span>HOME</span>
                      </a>
                    </li>
                  )}
                  {props.disableLink === "/about" ? (
                    <li className={`${styles.deactive}`}>
                      <span className="orientation-change-element half-second">
                        ABOUT
                      </span>
                    </li>
                  ) : (
                    <li className={`${styles.active}`}>
                      <a
                        href="/about"
                        className="orientation-change-element half-second"
                      >
                        <span>ABOUT</span>
                      </a>
                    </li>
                  )}
                  {props.disableLink === "/contact" ? (
                    <li className={`${styles.deactive}`}>
                      <span className="orientation-change-element half-second">
                        CONTACT
                      </span>
                    </li>
                  ) : (
                    <li className={`${styles.active}`}>
                      <a
                        href="/contact"
                        className="orientation-change-element half-second"
                      >
                        <span>CONTACT</span>
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
