// This file is used to hold some objects

import {
  PFP_REVIEW_1,
  PFP_REVIEW_2,
  PFP_REVIEW_3,
  PFP_REVIEW_4,
} from "../../cdns/CDNImgs";

import Review from "../classes/Review";

const REVIEW_1 = new Review(
  "R_1",
  PFP_REVIEW_1,
  "Nick Urbina",
  "Radiance Carpet cleaning will be the only company that comes to my home from now on."
);
const REVIEW_2 = new Review(
  "R_2",
  PFP_REVIEW_2,
  "Daniela Trias",
  "Chip did an excellent work cleaning the tiles of my house, especially the kitchen area."
);
const REVIEW_3 = new Review(
  "R_3",
  PFP_REVIEW_3,
  "Dale Carter",
  "Chip will treat your house like it's his own. This is my third time using his services in the last 3 years."
);
const REVIEW_4 = new Review(
  "R_4",
  PFP_REVIEW_4,
  "Sharon Campbell Fields",
  "I was ready to replace my 12 year old living room carpet. Chip came and cleaned it and it looks absolutely fantastic!"
);

export { REVIEW_1, REVIEW_2, REVIEW_3, REVIEW_4 };
