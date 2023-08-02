/**
 *
 *  This is the Contact Form
 *
 */

import { useRouter } from "next/router";

import EmailSend from "@/assets/functions/data/email/EmailSend";

import styles from "../../../styles/modules/Contact/Contact.module.css";
import { useEffect } from "react";

export const ContactForm = () => {
  const router = useRouter();

  // Displaying form submission success message
  useEffect(() => {
    console.log(document.getElementById("emailSubject").value);

    if (sessionStorage.getItem("Submission Sent")) {
      document.getElementById("formNotice").innerText = "Submission sent!";
      document.getElementById("formNotice").style.color = "green";
      document.getElementById("formNotice").style.opacity = 1;
    }
  }, []);

  return (
    <section id="contactFormHolder" className={`${styles.contact_form_holder}`}>
      <div className={`${styles.contact_form_inner}`}>
        <span id="formNotice" className={`${styles.form_notice}`}>
          Test
        </span>

        <form
          id="contactForm"
          noValidate="noValidate"
          autoComplete={"false"}
          onSubmit={(e) => {
            EmailSend(router, e);
          }}
        >
          <div className={`${styles.form_box} container-fluid`}>
            <div className={`${styles.form_row} ${styles.row_1} row`}>
              <div
                className={`${styles.form_side} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
              >
                <div className={`${styles.form_side_cnt}`}>
                  <label className="orientation-change-element half-second">
                    First Name
                  </label>

                  <input
                    autoComplete={"off"}
                    role={"presentation"}
                    type="text"
                    id="emailFirstName"
                    name="emailFirstName"
                    className="orientation-change-element half-second"
                  />
                </div>
              </div>
              <div
                className={`${styles.form_side} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
              >
                <div className={`${styles.form_side_cnt}`}>
                  <label className="orientation-change-element half-second">
                    Last Name
                  </label>

                  <input
                    autoComplete={"off"}
                    role={"presentation"}
                    type="text"
                    id="emailLastName"
                    name="emailLastName"
                    className="orientation-change-element half-second"
                  />
                </div>
              </div>
            </div>
            <div className={`${styles.form_row} ${styles.row_2} row`}>
              <div
                className={`${styles.form_side} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
              >
                <div className={`${styles.form_side_cnt}`}>
                  <label className="orientation-change-element half-second">
                    Email Address
                  </label>

                  <input
                    autoComplete={"off"}
                    role={"presentation"}
                    type="email"
                    id="emailClientEmail"
                    name="emailClientEmail"
                    className="orientation-change-element half-second"
                  />
                </div>
              </div>
              <div
                className={`${styles.form_side} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
              >
                <div className={`${styles.form_side_cnt}`}>
                  <label className="orientation-change-element half-second">
                    Phone Number <span>(Ex: +1336....)</span>
                  </label>

                  <input
                    autoComplete={"off"}
                    role={"presentation"}
                    type="tel"
                    id="emailPhoneNumber"
                    name="emailPhoneNumber"
                    className="orientation-change-element half-second"
                  />
                </div>
              </div>
            </div>
            <div className={`${styles.form_row} ${styles.row_3} row`}>
              <div
                className={`${styles.form_side} col-lg-12 col-md-12 col-sm-12 col-xs-12`}
              >
                <div className={`${styles.form_side_cnt}`}>
                  <label className="orientation-change-element half-second">
                    Type of Service
                  </label>

                  <select
                    id="emailSubject"
                    className="orientation-change-element half-second"
                  >
                    <option selected={true}>-- NOT SELECTED --</option>
                    <option>Contact/Support</option>
                    <option>Pressure Washing</option>
                    <option>Tile & Grout Cleaning</option>
                    <option>Carpet Cleaning</option>
                    <option>Upholstery Cleaning</option>
                  </select>
                </div>
              </div>
            </div>
            <div className={`${styles.form_row} ${styles.row_4} row`}>
              <div
                className={`${styles.form_side} col-lg-12 col-md-12 col-sm-12 col-xs-12`}
              >
                <div className={`${styles.form_side_cnt}`}>
                  <label className="orientation-change-element half-second">
                    Message/Comments
                  </label>

                  <textarea
                    id="emailMessage"
                    className="orientation-change-element half-second"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.form_btns}`}>
            <button
              type={"reset"}
              className={`${styles.clear} orientation-change-element half-second`}
            >
              <span>CLEAR INPUTS</span>
            </button>
            <button
              className={`${styles.send} orientation-change-element half-second`}
            >
              <span>SUBMIT</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
