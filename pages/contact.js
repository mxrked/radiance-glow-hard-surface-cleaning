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

      <main id="PAGE_CNT">
        <NavTop />
        <DesktopNav disableLink="/contact" />
        <MobileNav disableLink="/contact" />
        <Footer disableLink="/contact" />
      </main>
    </div>
  );
}
