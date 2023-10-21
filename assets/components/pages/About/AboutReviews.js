/**
 *
 *  This is the About Reviews
 *
 */

// import { BackgroundImage } from "react-image-and-background-image-fade";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { REVIEWS } from "@/assets/data/variables/ARRAYS";

import styles from "../../../styles/modules/About/About.module.css";

export const AboutReviews = () => {
  return (
    <section id="aboutReviews" className={`${styles.about_reviews}`}>
      <div className={`${styles.about_reviews_inner}`}>
        <h1 className="orientation-change-element half-second">
          Radiance Glow's
          <br /> Reviews.
        </h1>

        <button
          className="orientation-change-element half-second"
          onClick={() => {
            const URL =
              "https://reviewthis.biz/radiance-glow-hard-surface-cleaning";

            window.open(URL, "_self");
          }}
        >
          <span>Leave A Review</span>
        </button>

        <div className={`${styles.about_reviews_inner_reviews}`}>
          <div
            className={`${styles.about_reviews_inner_reviews_box} container-fluid`}
          >
            <div className={`${styles.about_reviews_inner_reviews_row} row`}>
              {REVIEWS.map((review) => (
                <div
                  key={review.getReviewID}
                  id={review.getReviewID}
                  className={`${styles.review} col-12`}
                >
                  <div className={`${styles.review_box} container-fluid`}>
                    <div className={`${styles.review_row} row`}>
                      <div
                        className={`${styles.review_side} ${styles.review_L} col-lg-5 col-md-5 col-sm-12 col-xs-12`}
                      >
                        <div className={`${styles.review_side_cnt}`}>
                          <div
                            className={`${styles.bg_holder} orientation-change-element half-second`}
                          >
                            {/**
                            <BackgroundImage
                              width="100%"
                              height="100%"
                              src={review.getReviewPfp}
                              className={`${styles.bg}`}
                            />
                            */}

                            <LazyLoadImage
                              width="100%"
                              height="100%"
                              src={review.getReviewPfp}
                              className={`${styles.bg}`}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className={`${styles.review_side} ${styles.review_R} col-lg-7 col-md-7 col-sm-12 col-xs-12`}
                      >
                        <div className={`${styles.review_side_cnt}`}>
                          <span
                            className={`${styles.review_top_text} orientation-change-element half-second`}
                          >
                            {review.getReviewName} recommends <span>RGHSC</span>
                            .
                          </span>

                          <p className="orientation-change-element half-second">
                            "{review.getReviewText}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
