const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/127.0.0.1:27017/compendiumdb"
);

const collectionSeed = [
  {
    category: "Rachel Pics",
    name: "Hard Style",
    quantity: 1,
    condition: 'Excellent',
    description: 'Hard style at EB',
    image: './Assets/Images/Rachel-Hard-Style.jpeg'
  }, 
];

db.Collection
  .remove({})
  .then(() => db.Collection.collection.insertMany(collectionSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
