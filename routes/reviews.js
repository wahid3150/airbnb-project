const express = require("express");
const router = express.Router({ mergeParams: true });
const List = require("../models/list");
const Review = require("../models/review");
const wrapAsync = require("../utils/wrapAsync");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware");

//Post request
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(async (req, res) => {
    let list = await List.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    list.reviews.push(newReview);
    await newReview.save();
    await list.save();
    req.flash("success", "New Review created!");
    res.redirect(`/listings/${list._id}`);
  })
);

//Delete Review Route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;
    await List.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review deleted!");
    res.redirect(`/listings/${id}`);
  })
);

module.exports = router;
