/**
 *
 *  This is the Mobile Nav Menu
 *
 */

import { FaTimes } from "react-icons/fa";

import RemoveStorageVariable from "@/assets/functions/data/storage/RemoveStorageVariable";
import CloseMobileNav from "@/assets/functions/dom/closers/CloseMobileNav";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNavMenu = (props) => {
  return (
    <div id="mobileNavMenu" className={`${styles.mobile_nav_menu}`}>
      <div
        id="mobileNavMenuDarken"
        className={`${styles.darken} full-second`}
        onClick={() => {
          CloseMobileNav();
        }}
      />

      <div
        id="mobileNavMenuMain"
        className={`${styles.mobile_nav_menu_main} full-second`}
      >
        <div
          id="mobileNavMenuMainCnt"
          className={`${styles.mobile_nav_menu_main_cnt} half-second`}
        >
          <div className={`${styles.mobile_nav_menu_main_cnt_top}`}>
            <button
              id="mobileNavCloser"
              className="half-second"
              onClick={() => {
                CloseMobileNav();
              }}
            >
              <FaTimes className={`${styles.icon}`} />
            </button>
          </div>

          <div className={`${styles.mobile_nav_menu_main_cnt_links}`}>
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
                    className="orientation-change-element nav-link half-second"
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
                    className="orientation-change-element nav-link half-second"
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
                    className="orientation-change-element nav-link half-second"
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
  );
};
