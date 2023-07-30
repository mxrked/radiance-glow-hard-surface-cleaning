/**
 *
 *  This is the About Video
 *
 */

import { FaPause, FaPlay } from "react-icons/fa";
import { TbReload } from "react-icons/tb";

import { ABOUT_TOP_VIDEO } from "@/assets/cdns/CDNVideos";

import styles from "../../../styles/modules/About/About.module.css";

export const AboutVideo = () => {
  return (
    <section id="aboutVideo" className={`${styles.about_video}`}>
      <div className={`${styles.about_video_inner}`}>
        <video
          className="orientation-change-element half-second"
          //controls
          src={ABOUT_TOP_VIDEO}
          title="Radiance Glow HSC Video."
          aria-label="Radiance Glow HSC Video."
          // loop
          onMouseEnter={(e) => {
            // Displays the darken
            document.getElementById("darken").style.opacity = 1;
            document.getElementById("darken").style.visibility = "visible";
          }}
          onEnded={(e) => {
            // Displays the reset button
            document.getElementById("playBtn").style.display = "none";
            document.getElementById("pauseBtn").style.display = "none";
            document.getElementById("resetBtn").style.display = "flex";
            document.getElementById("darken").style.opacity = 1;
            document.getElementById("darken").style.visibility = "visible";
          }}
        />

        <div
          id="darken"
          className={`${styles.darken} half-second`}
          onMouseLeave={(e) => {
            // Prevents the darken to stay when the video is playing
            if (
              !document.getElementById("aboutVideo").querySelector("video")
                .paused
            ) {
              e.currentTarget.style.opacity = 0;
              e.currentTarget.style.visibility = "hidden";
            } else {
              e.currentTarget.style.opacity = 1;
              e.currentTarget.style.visibility = "visible";

              document.getElementById("pauseBtn").style.display = "none";
              document.getElementById("playBtn").style.display = "flex";
            }
          }}
        >
          <button
            onMouseEnter={(e) => {
              document.getElementById("darken").style.backgroundColor =
                "rgba(0,0,0,0.7)";
            }}
            onMouseLeave={(e) => {
              document.getElementById("darken").style.backgroundColor =
                "rgba(0,0,0,0.6)";
            }}
            onClick={(e) => {
              // Hiding/Displaying btns
              e.currentTarget.style.display = "none";
              document.getElementById("playBtn").style.display = "flex";

              // Pausing video
              document
                .getElementById("aboutVideo")
                .querySelector("video")
                .pause();
            }}
            id="pauseBtn"
            className={`${styles.pause_btn} ${styles.darken_btn} orientation-change-element half-second`}
          >
            <FaPause className={`${styles.icon}`} />
          </button>
          <button
            onMouseEnter={(e) => {
              document.getElementById("darken").style.backgroundColor =
                "rgba(0,0,0,0.7)";
            }}
            onMouseLeave={(e) => {
              document.getElementById("darken").style.backgroundColor =
                "rgba(0,0,0,0.6)";
            }}
            onClick={(e) => {
              // Hiding/Displaying btns
              e.currentTarget.style.display = "none";
              document.getElementById("pauseBtn").style.display = "flex";

              // Playing video

              document
                .getElementById("aboutVideo")
                .querySelector("video").volume = 0.3;

              document
                .getElementById("aboutVideo")
                .querySelector("video")
                .play();
            }}
            id="playBtn"
            className={`${styles.play_btn} ${styles.darken_btn} orientation-change-element half-second`}
          >
            <FaPlay className={`${styles.icon}`} />
          </button>
          <button
            onMouseEnter={(e) => {
              document.getElementById("darken").style.backgroundColor =
                "rgba(0,0,0,0.7)";
            }}
            onMouseLeave={(e) => {
              document.getElementById("darken").style.backgroundColor =
                "rgba(0,0,0,0.6)";
            }}
            onClick={(e) => {
              // Hiding/Displaying btns
              e.currentTarget.style.display = "none";
              document.getElementById("pauseBtn").style.display = "flex";

              // Resetting video

              document
                .getElementById("aboutVideo")
                .querySelector("video").volume = 0.3;

              document
                .getElementById("aboutVideo")
                .querySelector("video")
                .play();
            }}
            id="resetBtn"
            className={`${styles.reset_btn} ${styles.darken_btn} orientation-change-element half-second`}
          >
            <TbReload className={`${styles.icon}`} />
          </button>
        </div>
      </div>
    </section>
  );
};
