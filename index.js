const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const List = require("./models/list");
const path = require("path");

const app = express();

app.use(morgan("dev"));
dotenv.config();

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

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/listings", async (req, res) => {
  const allListings = await List.find({});
  res.render("index.ejs", { allListings });
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
