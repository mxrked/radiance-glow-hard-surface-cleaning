/**
 *
 *  This is the About Text
 *
 */

import styles from "../../../styles/modules/About/About.module.css";

export const AboutText = () => {
  return (
    <section id="aboutText" className={`${styles.about_text}`}>
      <div className={`${styles.about_text_inner}`}>
        <h1 className="orientation-change-element half-second">
          About
          <br /> Radiance Glow.
        </h1>

        <p className="orientation-change-element half-second">
          Radiance Glow Hard Surface Cleaning is a fully licensed and insured
          company with the goal of providing our customers with astonishing
          service and the best investment in cleaning and restoring hard
          surfaces as well as carpet.
        </p>

        <p className="orientation-change-element half-second">
          We strive to ensure 100% satisfaction by providing professional,
          affordable, high quality service. Our certified technicians are
          committed to continuing-education, and we provide them with the most
          advanced equipment in the industry. There are no surprises and no
          hidden charges. We'll clean your floor or hard surface like it has
          never been cleaned before!
        </p>

        <p className="orientation-change-element half-second">
          We are a local family owned business that specializes in tile and
          grout cleaning, natural stone cleaning, carpet cleaning and pressure
          washing. We can seal any surface to protect it and have amazing
          results in our cleaning.
        </p>
      </div>
    </section>
  );
};
