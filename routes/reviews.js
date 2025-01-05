const express = require("express");
const router = express.Router({ mergeParams: true });
const List = require("../models/list");
const Review = require("../models/review");
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const { reviewSchema } = require("../validation/schemaValidation");

const validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(404, errMsg);
  } else {
    next();
  }
};

//Post request
router.post(
  "/",
  validateReview,
  wrapAsync(async (req, res) => {
    let list = await List.findById(req.params.id);
    let newReview = new Review(req.body.review);
    list.reviews.push(newReview);
    await newReview.save();
    await list.save();
    res.redirect(`/listings/${list._id}`);
  })
);

//Delete Review Route
router.delete(
  "/:reviewId",
  wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;
    await List.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`);
  })
);

module.exports = router;
