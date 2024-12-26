const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const List = require("./models/list");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const app = express();
app.engine("ejs", ejsMate);
app.use(methodOverride("_method"));
app.use(morgan("dev"));
dotenv.config();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const uri = process.env.MONGO_URI;

main()
  .then(() => {
    console.log("Connected to Database".bgGreen.white);
  })
  .catch(() => {
    console.log("Failed to connect to database".bgRed.bold);
  });

async function main() {
  await mongoose.connect(uri);
}

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

app.get("/listings", async (req, res) => {
  const allListings = await List.find({});
  res.render("listings/index.ejs", { allListings });
});

//New Routes
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

//Show Routes
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await List.findById(id);
  res.render("listings/show.ejs", { listing });
});

//Edit Route
app.get("/listings/:id/edit", async (req, res) => {
  let { id } = req.params;
  const editListing = await List.findById(id);
  res.render("listings/edit.ejs", { editListing });
});

//Update Route
app.put("/listings/:id", async (req, res) => {
  let { id } = req.params;
  await List.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect(`/listings/${id}`);
});

//Create Routes
app.post("/listings", async (req, res) => {
  const newListing = new List(req.body.listing);
  await newListing.save();
  res.redirect("/listings");
});

//===>>> 2nd Method to Create routes
// app.post("/listings", async (req, res) => {
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

//Delete Routes
app.delete("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const deletedListing = await List.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect("/listings");
});

// app.get("/testListing", async (req, res) => {
//   let sampleList = new List({
//     title: "My new bedroom",
//     description: "New hostel living bedroom",
//     price: 1000,
//     location: "Peshawar",
//     country: "Pakistan",
//   });
//   await sampleList.save();
//   console.log("Sample was saved");
//   res.send("Testing Successful");
// });

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgBlue.white);
});
