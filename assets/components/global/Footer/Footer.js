/**
 *
 *  This is the Footer
 *
 */
import { useEffect } from "react";

import {
  FaCopyright,
  FaYelp,
  FaFacebook,
  FaYoutube,
  FaGoogle,
} from "react-icons/fa";
import { SiNextdoor } from "react-icons/si";

import { LOGO } from "@/assets/cdns/CDNIcons";

import styles from "../../../styles/modules/Footer/Footer.module.css";

export const Footer = (props) => {
  // Apply current year
  useEffect(() => {
    document.getElementById("year").innerHTML = new Date().getFullYear();
  }, []);

  return (
    <footer id="footer" className={`${styles.footer}`}>
      <div className={`${styles.footer_main}`}>
        <div className={`${styles.footer_main_inner}`}>
          <div className={`${styles.footer_main_inner_box} container-fluid`}>
            <div className={`${styles.footer_main_inner_row} row`}>
              <div
                className={`${styles.footer_main_inner_side} ${styles.footer_L} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
              >
                <div className={`${styles.footer_main_inner_side_cnt}`}>
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

                  <div className={`${styles.copyright}`}>
                    <FaCopyright className={`${styles.icon}`} />

                    <span>
                      <span id="year"></span> RGHSC, LLC. All rights reserved.
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.footer_main_inner_side} ${styles.footer_M} col-lg-3 col-md-3 col-sm-3 col-xs-3`}
              >
                <div className={`${styles.footer_main_inner_side_cnt}`}>
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
              <div
                className={`${styles.footer_main_inner_side} ${styles.footer_R} col-lg-3 col-md-3 col-sm-3 col-xs-3`}
              >
                <div className={`${styles.footer_main_inner_side_cnt}`}>
                  <ul className={`${styles.socials}`}>
                    <li>
                      <span
                        onClick={() => {
                          window.open(
                            "https://www.facebook.com/RadianceGHSC/",
                            "_self"
                          );
                        }}
                        // href="https://www.facebook.com/RadianceGHSC/"
                        className="half-second orientation-change-element"
                        // target={"_blank"}
                      >
                        <FaFacebook className={`${styles.icon}`} />
                      </span>
                    </li>
                    <li>
                      <span
                        onClick={() => {
                          // window.open(
                          //   "https://www.facebook.com/RadianceGHSC/",
                          //   "_blank"
                          // );

                          const SQ = "radiance glow hard surface cleaning";
                          const EQ = encodeURIComponent(SQ);
                          const URL = `https://www.google.com/search?q=${EQ}`;

                          window.open(URL, "_self");
                        }}
                        // href="https://www.facebook.com/RadianceGHSC/"
                        className="half-second orientation-change-element"
                        // target={"_blank"}
                      >
                        <FaGoogle className={`${styles.icon}`} />
                      </span>
                    </li>
                    <li>
                      <span
                        onClick={() => {
                          window.open(
                            "https://www.yelp.com/biz/radiance-glow-hard-surface-cleaning-high-point-4",
                            "_self"
                          );
                        }}
                        // href="https://www.yelp.com/biz/radiance-glow-hard-surface-cleaning-high-point-4"
                        className="half-second orientation-change-element"
                        // target={"_blank"}
                      >
                        <FaYelp className={`${styles.icon}`} />
                      </span>
                    </li>
                    <li>
                      <span
                        onClick={() => {
                          window.open(
                            "https://nextdoor.com/pages/radiance-glow-hard-surface-cleaning-high-point-nc/",
                            "_self"
                          );
                        }}
                        // href="https://nextdoor.com/pages/radiance-glow-hard-surface-cleaning-high-point-nc/"
                        className={`${styles.next_door} half-second orientation-change-element`}
                        // target={"_blank"}
                      >
                        <SiNextdoor className={`${styles.icon}`} />
                      </span>
                    </li>
                    <li>
                      <span
                        onClick={() => {
                          window.open(
                            "https://www.youtube.com/channel/UCJoeDkbDMPAFf_haCa5tRYQ",
                            "_self"
                          );
                        }}
                        // href="https://www.youtube.com/channel/UCJoeDkbDMPAFf_haCa5tRYQ"
                        className={`half-second orientation-change-element`}
                        // target={"_blank"}
                      >
                        <FaYoutube className={`${styles.icon}`} />
                      </span>
                    </li>
                  </ul>

                  <ul className={`${styles.contact}`}>
                    <li>info@radianceglowhsc.com</li>
                    <li>+1 (336) 259-1354</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.footer_bottom}`}>
        <span>
          Website created by{" "}
          <span
            onClick={() => {
              window.open("https://www.codingthefront.com/", "_blank");
            }}
          >
            codingthefront.com
          </span>
        </span>
      </div>
    </footer>
  );
};
