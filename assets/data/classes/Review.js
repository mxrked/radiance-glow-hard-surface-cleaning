/**
 *
 *  This is the Review class
 *
 */

export default class Review {
  constructor(reviewID, reviewPfp, reviewName, reviewText) {
    this._reviewID = reviewID;
    this._reviewPfp = reviewPfp;
    this._reviewName = reviewName;
    this._reviewText = reviewText;
  }

  get getReviewID() {
    return this._reviewID;
  }
  get getReviewPfp() {
    return this._reviewPfp;
  }
  get getReviewName() {
    return this._reviewName;
  }
  get getReviewText() {
    return this._reviewText;
  }
}
