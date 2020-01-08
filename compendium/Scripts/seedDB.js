const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/compendiumdb"
);

const rockSeed = [
  {
    category: "Rocks",
    name: "Limestone",
    quantity: "1",
    condition: "Excellent",
    description: "Super limey",
    image: "./assets/images/limestone.jpeg"
  },
  {
    category: "Rocks",
    name: "Bedrock",
    quantity: "1",
    condition: "Good",
    description: "Yabba Dabba Doo",
    image: "./assets/images/bedrock.jpeg"
  }, 
];

db.Rock
  .remove({})
  .then(() => db.Rock.collection.insertMany(rockSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
