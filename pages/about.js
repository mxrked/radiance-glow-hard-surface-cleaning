// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { NavTop } from "@/assets/components/global/Nav/Both/NavTop";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";
import { MobileNav } from "@/assets/components/global/Nav/Mobile/MobileNav";
import { MobileNavMenu } from "@/assets/components/global/Nav/Mobile/MobileNavMenu";

// Style Imports
import "../assets/styles/modules/About/About.module.css";

export default function About() {
  const router = useRouter();

  return (
    <div id="PAGE" className="overrides_About page full-second">
      <PageHead />
      <MobileNavMenu disableLink="/about" />

      <main id="PAGE_CNT">
        <NavTop />
        <DesktopNav disableLink="/about" />
        <MobileNav disableLink="/about" />
      </main>
    </div>
  );
}
