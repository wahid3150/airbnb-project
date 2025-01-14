const express = require("express");
const router = express.Router();
const List = require("../models/list");
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn, isOwner, validateListing } = require("../middleware");

router.get(
  "/",
  wrapAsync(async (req, res) => {
    const allListings = await List.find({});
    res.render("listings/index.ejs", { allListings });
  })
);

//New Routes
router.get("/new", isLoggedIn, (req, res) => {
  res.render("listings/new.ejs");
});

//Show Routes
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await List.findById(id)
      .populate({
        path: "reviews",
        populate: {
          path: "author",
        },
      })
      .populate("owner");
    //Added populated method for showing owner with review mean who's added review
    if (!listing) {
      req.flash("error", "Listing you requested for does not exist");
      return res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
  })
);

//Create Routes
router.post(
  "/",
  isLoggedIn,
  validateListing,
  wrapAsync(async (req, res, next) => {
    const newListing = new List(req.body);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New listing created!");
    res.status(302).redirect("/listings");
  })
);
//===>>> 2nd Method to Create routes
// router.post("/", async (req, res) => {
//   // Destructure properties from req.body
//   let { title, description, image, price, country, location } = req.body;

// Create a new List instance using destructured variables
//   const newListing = new List({
//     title,
//     description,
//     image,
//     price,
//     country,
//     location,
//   });

//   await newListing.save(); // Save to database
//   res.redirect("/listings"); // Redirect to listings page
// });

//Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const editListing = await List.findById(id);
    // req.flash("success", "Listing edited successfully!");
    if (!editListing) {
      req.flash("error", "Listing you requested for does not exist!");
      return res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { editListing });
  })
);

//Update Route
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  validateListing,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await List.findByIdAndUpdate(id, { ...req.body });
    req.flash("success", "Listing updated!");
    res.redirect(`/listings/${id}`);
  })
);

//Delete Routes
router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const deletedListing = await List.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "listing deleted!");
    res.redirect("/listings");
  })
);

module.exports = router;
