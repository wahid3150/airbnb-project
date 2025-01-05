const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");
const listings = require("./routes/listings");
const reviews = require("./routes/reviews");
const session = require("express-session");
const flash = require("connect-flash");

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

const sessionOptions = {
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

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

app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);

//Add new route for all invalid routes request
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found!"));
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong" } = err;
  res.status(statusCode).render("error.ejs", { message });
  // res.status(statusCode).send(message);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgBlue.white);
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
