/**
 *
 *  This is the Contact Above Form
 *
 */

import styles from "../../../styles/modules/Contact/Contact.module.css";

export const ContactAboveForm = () => {
  return (
    <section id="contactAboveForm" className={`${styles.contact_above_form}`}>
      <div className={`${styles.contact_above_form_inner}`}>
        <div className={`${styles.contact_above_form_inner_cnt}`}>
          <h1 className="orientation-change-element half-second">
            Radiance Glow is up to any task!
          </h1>

          <p className="orientation-change-element half-second">
            You can contact or book an appointment with RGHSC by using the
            contact form below. If you would like to contact via SMS, you can by
            clicking the button below this text.
          </p>

          <button
            onClick={() => {
              const PHONE_NUMBER = "3362591354";

              window.location.href = `sms:${PHONE_NUMBER}`;
            }}
            className="orientation-change-element half-second"
          >
            <span>Send A Text Message</span>
          </button>
        </div>
      </div>
    </section>
  );
};
