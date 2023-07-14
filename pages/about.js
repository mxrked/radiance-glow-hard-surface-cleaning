// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports

// Style Imports
import "../assets/styles/modules/About/About.module.css";

export default function About() {
  const router = useRouter();

  return (
    <div id="PAGE" className="overrides_About page full-second">
      <main id="PAGE_CNT"></main>
    </div>
  );
}
