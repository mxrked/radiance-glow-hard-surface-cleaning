// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports

// Style Imports
import "../assets/styles/modules/404/404.module.css";

export default function NotFound() {
  const router = useRouter();

  return (
    <div id="PAGE" className="overrides_404 page full-second">
      <main id="PAGE_CNT"></main>
    </div>
  );
}
