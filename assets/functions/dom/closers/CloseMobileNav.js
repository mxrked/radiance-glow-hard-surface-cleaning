/**
 *
 *  This is to close the mobile nav
 *
 */

import RemoveStorageVariable from "../../data/storage/RemoveStorageVariable";

export default function CloseMobileNav() {
  const DARKEN = document.getElementById("mobileNavMenuDarken");
  const MAIN = document.getElementById("mobileNavMenuMain");
  const CNT = document.getElementById("mobileNavMenuMainCnt");

  DARKEN.style.pointerEvents = "none";
  MAIN.style.pointerEvents = "none";
  MAIN.style.overflowY = "hidden";

  CNT.style.opacity = 0;
  CNT.style.visibility = "hidden";

  setTimeout(() => {
    MAIN.style.transform = "translateX(100%)";
  }, 1100);

  setTimeout(() => {
    DARKEN.style.opacity = 0;
    DARKEN.style.visibility = "hidden";
  }, 1400);

  setTimeout(() => {
    RemoveStorageVariable("session", "Mobile Nav Opened");

    document.body.style.pointerEvents = "auto";
    document.body.style.overflowY = "auto";
  }, 2400);
}
