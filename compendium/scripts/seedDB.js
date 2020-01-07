const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://127.0.0.1:27017/compendiumdb"
);

const bookSeed = [
  {
    category: "Rocks",
    name: "Crystal",
    quantity:"5",
    condition:  "Great",
    description: "Great",
    image: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiR7amco_DmAhVDXK0KHYynC5cQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.quora.com%2FWhat-is-the-difference-between-minerals-and-crystals&psig=AOvVaw0n2hMCclprYN-IHR_1LUI0&ust=1578444791586356"
  },
  {
    category: "Rocks",
    name: "Crystal",
    quantity:"",
    condition:  "Great",
    description: "Great",
    image: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiR7amco_DmAhVDXK0KHYynC5cQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.quora.com%2FWhat-is-the-difference-between-minerals-and-crystals&psig=AOvVaw0n2hMCclprYN-IHR_1LUI0&ust=1578444791586356"
  },
  {
    category: "Rocks",
    name: "Crystal",
    quantity:"",
    condition:  "Great",
    description: "Great",
    image: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiR7amco_DmAhVDXK0KHYynC5cQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.quora.com%2FWhat-is-the-difference-between-minerals-and-crystals&psig=AOvVaw0n2hMCclprYN-IHR_1LUI0&ust=1578444791586356"
  },
  {
    category: "Rocks",
    name: "Crystal",
    quantity:"",
    condition:  "Great",
    description: "Great",
    image: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiR7amco_DmAhVDXK0KHYynC5cQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.quora.com%2FWhat-is-the-difference-between-minerals-and-crystals&psig=AOvVaw0n2hMCclprYN-IHR_1LUI0&ust=1578444791586356"
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
