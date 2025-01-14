const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");
const initData = require("./data");
const List = require("../models/list");

dotenv.config();
const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/wahid";

main()
  .then(() => {
    console.log("Connected to Database".bgGreen.white);
  })
  .catch((error) => {
    console.error("Failed to connect to database".bgRed.bold, error);
    process.exit(1);
  });

async function main() {
  await mongoose.connect(uri);
}

const initDB = async () => {
  await List.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "677bca503e044077a2cd144c",
  }));
  //this upper line code is added for adding owner object in data.js instead of adding
  //individually because it takes long time to add owner object with valid user database id
  await List.insertMany(initData.data);
  console.log("Data was initialized");
};

initDB();
