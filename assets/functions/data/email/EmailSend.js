/**
 *
 *  This is used to send an email to info@radianceglowhsc.com using EmailJS
 *
 */

import emailjs from "@emailjs/browser";

import CheckValidEmail from "./CheckValidEmail";
import CheckValidPhoneNumber from "./CheckValidPhoneNumber";
import DeclareStorageVariable from "../storage/DeclareStorageVariable";

const SERVICE_ID = "service_upn0kl8";
const TEMPLATE_ID = "template_6nf1yfo";
const PUBLIC_KEY = "9f1hVWFncUz7ATjYn";

emailjs.init(PUBLIC_KEY);

// const CURRENT_TIME = new Date().getTime();
// const CURRENT_DATE = new Date().getDate();

function CheckForSpaceInFirstCharacter(input) {
  const CHECK_FOR_SPACE = /^\s/.test(input.value);

  if (CHECK_FOR_SPACE) {
    return true;
  } else {
    return false;
  }
}

export default function EmailSend(rooter, formTarget) {
  // const COMPANY_NAME = "Radiance Glow HSC";
  // const CREATION_DATE_TIME = `${CURRENT_DATE} - ${CURRENT_TIME}`;
  const FORM_NOTICE = document.getElementById("formNotice");
  const FIRST_NAME = document.getElementById("emailFirstName");
  const LAST_NAME = document.getElementById("emailLastName");
  const CLIENT_EMAIL_ADDRESS = document.getElementById("emailClientEmail");
  const PHONE_NUMBER = document.getElementById("emailPhoneNumber");
  const SERVICE = document.getElementById("emailService");
  const SERVICE_SELECTED_INDEX = SERVICE.selectedIndex;
  const LOCATION = document.getElementById("emailLocation");
  const LOCATION_SELECTED_INDEX = LOCATION.selectedIndex;
  const MESSAGE = document.getElementById("emailMessage");

  const TEMPLATE_PARAMS = {
    // email_company_name: COMPANY_NAME,
    // email_creation_date_time: CREATION_DATE_TIME,
    email_subject:
      "RGHSC Contact Form Submission - " +
      SERVICE.options[SERVICE_SELECTED_INDEX].text +
      " (" +
      LOCATION.options[LOCATION_SELECTED_INDEX].text +
      ")",
    email_first_name: FIRST_NAME.value,
    email_last_name: LAST_NAME.value,
    email_phone_number: PHONE_NUMBER.value,
    email_client_email: CLIENT_EMAIL_ADDRESS.value,
    email_service:
      "RGHSC Contact Form Submission - " +
      SERVICE.options[SERVICE_SELECTED_INDEX].text,
    email_location: LOCATION.options[LOCATION_SELECTED_INDEX].text,
    email_message: MESSAGE.value,
  };

  // Value checkers
  const CHECK_PHONE_NUMBER = CheckValidPhoneNumber(PHONE_NUMBER);
  const CHECK_EMAIL = CheckValidEmail(CLIENT_EMAIL_ADDRESS);

  // Value spacers
  const SPACE_FIRST_NAME = CheckForSpaceInFirstCharacter(FIRST_NAME);
  const SPACE_LAST_NAME = CheckForSpaceInFirstCharacter(LAST_NAME);
  const SPACE_EMAIL = CheckForSpaceInFirstCharacter(CLIENT_EMAIL_ADDRESS);
  const SPACE_SERVICE = CheckForSpaceInFirstCharacter(SERVICE);
  const SPACE_MESSAGE = CheckForSpaceInFirstCharacter(MESSAGE);

  // Validation checks
  let nonEmptyInputs = false;
  let noSpacesAsFirstCharacter = false;
  let validEmail = false;
  let validPhone = false;
  let sentSuccess = false; // This is used to determine if the email was sent successfully

  // Prevents the form send
  formTarget.preventDefault();

  // Sending for after all valid checks
  if (
    FIRST_NAME.value != "" &&
    LAST_NAME.value != "" &&
    CLIENT_EMAIL_ADDRESS.value != "" &&
    PHONE_NUMBER.value != "" &&
    SERVICE.value != "-- NOT SELECTED --" &&
    LOCATION.value != "-- NOT SELECTED --" &&
    MESSAGE.value != ""
  ) {
    nonEmptyInputs = true;
    FORM_NOTICE.style.opacity = 0;
    FORM_NOTICE.innerHTML = "Test";

    if (CHECK_EMAIL) {
      validEmail = true;
      FORM_NOTICE.style.opacity = 0;
      FORM_NOTICE.innerHTML = "Test";

      if (CHECK_PHONE_NUMBER) {
        validPhone = true;
        FORM_NOTICE.style.opacity = 0;
        FORM_NOTICE.innerHTML = "Test";

        if (
          !SPACE_FIRST_NAME &&
          !SPACE_LAST_NAME &&
          !SPACE_EMAIL &&
          !SPACE_SERVICE &&
          !SPACE_MESSAGE
        ) {
          noSpacesAsFirstCharacter = true;
          FORM_NOTICE.style.opacity = 0;
          FORM_NOTICE.innerHTML = "Test";

          formTarget.preventDefault();

          // Sending the email
          emailjs
            .send(SERVICE_ID, TEMPLATE_ID, TEMPLATE_PARAMS)
            .then((res) => {
              console.log("Email sent successfully: " + res);

              sentSuccess = true;

              DeclareStorageVariable("session", "Submission Sent", true);

              setTimeout(() => {
                if (sentSuccess) {
                  rooter.reload();
                }
              }, 300);
            })
            .catch((error) => {
              console.error("Error sending email: " + error);
            });
        } else {
          noSpacesAsFirstCharacter = false;
          FORM_NOTICE.style.color = "red";
          FORM_NOTICE.style.opacity = 1;
          ("Error: You cannot have a space as the first character in an input.");
        }
      } else {
        validPhone = false;
        FORM_NOTICE.style.color = "red";
        FORM_NOTICE.style.opacity = 1;
        FORM_NOTICE.innerHTML = "Error: That is an invalid phone number.";
      }
    } else {
      validEmail = false;
      FORM_NOTICE.style.color = "red";
      FORM_NOTICE.style.opacity = 1;
      FORM_NOTICE.innerHTML = "Error: That is an invalid email address.";
    }
  } else {
    nonEmptyInputs = false;
    FORM_NOTICE.style.color = "red";
    FORM_NOTICE.style.opacity = 1;
    FORM_NOTICE.innerHTML = "Error: You cannot have empty inputs.";
  }
}
