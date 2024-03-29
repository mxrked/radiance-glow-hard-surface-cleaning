// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import { TriggerExitAnimations } from "@/assets/functions/dom/triggers/TriggerExitAnimations";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
// import { NavTop } from "@/assets/components/global/Nav/Both/NavTop";
// import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";
// import { MobileNav } from "@/assets/components/global/Nav/Mobile/MobileNav";
// import { MobileNavMenu } from "@/assets/components/global/Nav/Mobile/MobileNavMenu";
// import { Footer } from "@/assets/components/global/Footer/Footer";
import { NotFoundMain } from "@/assets/components/pages/404/NotFoundMain";
import { PaymentRequiredWall } from "@/assets/components/global/All/PaymentRequiredWall";

// Style Imports
import "../assets/styles/modules/404/404.module.css";

export default function NotFound() {
  const router = useRouter();

  // Triggering exit animations
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  return (
    <div id="PAGE" className="overrides_404 page full-second">
      <PageHead />
      {/** <MobileNavMenu disableLink="/404" /> */}

      <main id="PAGE_CNT">
        {/**
        <NavTop />
        <DesktopNav disableLink="/404" />
        <MobileNav disableLink="/404" />
        <Footer disableLink="/404" />
        */}

        <NotFoundMain />
      </main>
    </div>
  );
}
