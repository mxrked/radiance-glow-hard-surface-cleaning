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
import { IndexTop } from "@/assets/components/pages/Index/IndexTop";
import { IndexServices } from "@/assets/components/pages/Index/IndexServices";
import { IndexAbout } from "@/assets/components/pages/Index/IndexAbout";
import { IndexContact } from "@/assets/components/pages/Index/IndexContact";

// Style Imports
import "../assets/styles/modules/Index/Index.module.css";

export default function Home() {
  const router = useRouter();

  // Triggering exit animations
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  return (
    <div id="PAGE" className="overrides_Index page full-second">
      <PageHead />
      <MobileNavMenu disableLink="/" />

      <main id="PAGE_CNT">
        <NavTop />
        <DesktopNav disableLink="/" />
        <MobileNav disableLink="/" />
        <IndexTop />
        <IndexServices />
        <IndexAbout />
        <IndexContact />
      </main>
    </div>
  );
}
