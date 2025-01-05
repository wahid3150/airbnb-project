const express = require("express");
const router = express.Router();
const List = require("../models/list");
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const { listingSchema } = require("../validation/schemaValidation");

const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

router.get(
  "/",
  wrapAsync(async (req, res) => {
    const allListings = await List.find({});
    res.render("listings/index.ejs", { allListings });
  })
);

//New Routes
router.get("/new", (req, res) => {
  res.render("listings/new.ejs");
});

//Show Routes
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await List.findById(id).populate("reviews");
    res.render("listings/show.ejs", { listing });
  })
);

//Create Routes
router.post(
  "/",
  validateListing,
  wrapAsync(async (req, res, next) => {
    console.log("Received Post request:", req.body);
    const newListing = new List(req.body);
    await newListing.save();
    console.log("Listing Added to database:", newListing);
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
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const editListing = await List.findById(id);
    res.render("listings/edit.ejs", { editListing });
  })
);

//Update Route
router.put(
  "/:id",
  validateListing,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await List.findByIdAndUpdate(id, { ...req.body });
    res.redirect(`/listings/${id}`);
  })
);

//Delete Routes
router.delete(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const deletedListing = await List.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
  })
);

module.exports = router;
