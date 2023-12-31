/**
 *
 *  This is the page's meta data and tab settings
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import Script from "next/script";
import * as gtag from "../../../../gtag";

import {
  INDEX_KWS,
  ABOUT_KWS,
  CONTACT_KWS,
} from "@/assets/data/variables/ARRAYS";

export const PageHead = () => {
  const router = useRouter();

  //! Descriptions
  const INDEX_DESC =
    "Radiance Glow: Your top choice for hard surface cleaning in High Point, NC. From NC pressure washing to carpet and upholstery cleaning, experience the brilliance. Serving Greensboro, Winston Salem, High Point, and beyond. Contact us for a radiantly clean home or office!";
  const ABOUT_DESC =
    "Radiance Glow: Experience the radiance and glow of Radiance Glow HSC. Discover Chip Holden and our exceptional NC cleaning services, including pressure washing, tile and grout, carpet cleaning, and upholstery cleaning.";
  const CONTACT_DESC =
    "Radiance Glow: Contact Radiance Glow HSC for professional hard surface cleaning services. Book a service or appointment to experience the radiance and glow we bring to your surfaces. Get in touch with Chip Holden for all your cleaning needs.";
  const DESCS = [INDEX_DESC, ABOUT_DESC, CONTACT_DESC];

  let desc;
  let kws;
  let title;
  let robots;
  let url;

  // Index Page
  if (router.pathname == "/") {
    title =
      "Radiance Glow HSC - Pressure Washing, Carpet Cleaning, Upholstery for North Carolina";
    robots = "index, follow";
    url = router.pathname;

    if (INDEX_DESC.length > 0) {
      desc = DESCS[0];
    } else {
      desc = DESCS[0];
    }

    kws = INDEX_KWS;
  }

  // About Page
  if (router.pathname == "/about") {
    title = "Radiance Glow HSC - About";
    robots = "index, follow";
    url = router.pathname;

    if (ABOUT_DESC.length > 0) {
      desc = DESCS[1];
    } else {
      desc = DESCS[1];
    }

    kws = ABOUT_KWS;
  }
  // Contact Page
  if (router.pathname == "/contact") {
    title = "Radiance Glow HSC - Contact";
    robots = "index, follow";
    url = router.pathname;

    if (CONTACT_DESC.length > 0) {
      desc = DESCS[2];
    } else {
      desc = DESCS[2];
    }

    kws = CONTACT_KWS;
  }

  // 404 Page
  if (router.pathname == "/404") {
    title = "Radiance Glow HSC - 404";
    robots = "no index, no follow";
    desc = "No description";
    kws = "No keywords";
    url = router.pathname;
  }

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Head id="pageHead">
      <title>{title}</title>
      <meta name="keywords" content={kws} />
      <meta name="description" content={desc} />
      <meta name="robots" content={robots} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:url" content={url} />
      {/**
      <meta
        name="google-site-verification"
        content="aPd101rbxmZ5gRWC4D6m_kW5i3UVNrrgnmA6CrJWz20"
      />
      */}
      {/**
        <meta
        name="google-site-verification"
        content="V5Rtva_ZUQGbD75j-mxlBzvediiQnPt2hEi7YaPPAEE"
      />
        */}
      <link rel="canonical" href={url} />
      <link
        rel="shortcut icon"
        href="https://raw.githubusercontent.com/mxrked/freelance_projects_CDN/main/radiance-glow-hard-surface-cleaning/icons/tab-icons/favicon.ico"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://raw.githubusercontent.com/mxrked/freelance_projects_CDN/main/radiance-glow-hard-surface-cleaning/icons/tab-icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://raw.githubusercontent.com/mxrked/freelance_projects_CDN/main/radiance-glow-hard-surface-cleaning/icons/tab-icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://raw.githubusercontent.com/mxrked/freelance_projects_CDN/main/radiance-glow-hard-surface-cleaning/icons/tab-icons/favicon-16x16.png"
      />

      {/** GOOGLE ANALYTICS - G4 Property */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-P1SWCNDVWK"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-P1SWCNDVWK'); 
        `,
        }}
      ></script>

      {/**
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-P1SWCNDVWK"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-P1SWCNDVWK'); 
        `,
        }}
      ></script>

    <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-53779304-1"
      ></script>
      <script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'UA-53779304-1');
      </script>
    
      */}
    </Head>
  );
};
