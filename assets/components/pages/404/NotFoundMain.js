/**
 *
 *  This is the 404 Main
 *
 */

import styles from "../../../styles/modules/404/404.module.css";

export const NotFoundMain = () => {
  return (
    <section id="404Main" className={`${styles.not_found_main}`}>
      <div className={`${styles.not_found_main_inner}`}>
        <div className={`${styles.not_found_main_inner_cnt}`}>
          <h1 className="orientation-change-element half-second">
            404: Page not found.
          </h1>

          <p className="orientation-change-element half-second">
            The page you are looking for was not found. You can return back to
            the home page using the link below.
          </p>

          <a href="/" className="orientation-change-element half-second">
            <span>Go Home</span>
          </a>
        </div>
      </div>
    </section>
  );
};
