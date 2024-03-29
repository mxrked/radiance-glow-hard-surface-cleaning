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
import { AboutTop } from "@/assets/components/pages/About/AboutTop";
import { AboutVideo } from "@/assets/components/pages/About/AboutVideo";
import { AboutText } from "@/assets/components/pages/About/AboutText";
import { AboutBacklinks } from "@/assets/components/pages/About/AboutBacklinks";
import { AboutReviews } from "@/assets/components/pages/About/AboutReviews";

// Style Imports
import "../assets/styles/modules/About/About.module.css";

export default function About() {
  const router = useRouter();

  // Triggering exit animations
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  return (
    <div id="PAGE" className="overrides_About page full-second">
      <PageHead />
      <MobileNavMenu disableLink="/about" />
      <PaymentRequiredWall />

      <main id="PAGE_CNT">
        <NavTop />
        <DesktopNav disableLink="/about" />
        <MobileNav disableLink="/about" />

        <AboutTop />
        <AboutVideo />
        <AboutText />
        <AboutBacklinks />
        <AboutReviews />
        {/**  */}

        <Footer disableLink="/about" />
      </main>
    </div>
  );
}
