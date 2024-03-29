// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import { TriggerExitAnimations } from "@/assets/functions/dom/triggers/TriggerExitAnimations";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { NavTop } from "@/assets/components/global/Nav/Both/NavTop";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";
import { MobileNav } from "@/assets/components/global/Nav/Mobile/MobileNav";
import { MobileNavMenu } from "@/assets/components/global/Nav/Mobile/MobileNavMenu";
import { Footer } from "@/assets/components/global/Footer/Footer";
import { PaymentRequiredWall } from "@/assets/components/global/All/PaymentRequiredWall";
import { ContactTop } from "@/assets/components/pages/Contact/ContactTop";
import { ContactAboveForm } from "@/assets/components/pages/Contact/ContactAboveForm";
import { ContactForm } from "@/assets/components/pages/Contact/ContactForm";

// Style Imports
import "../assets/styles/modules/Contact/Contact.module.css";

export default function Contact() {
  const router = useRouter();

  // Triggering exit animations
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  return (
    <div id="PAGE" className="overrides_Contact page full-second">
      <PageHead />
      <MobileNavMenu disableLink="/contact" />
      <PaymentRequiredWall />

      <main id="PAGE_CNT">
        <NavTop />
        <DesktopNav disableLink="/contact" />
        <MobileNav disableLink="/contact" />

        <ContactTop />
        <ContactAboveForm />
        <ContactForm />

        <Footer disableLink="/contact" />
      </main>
    </div>
  );
}
