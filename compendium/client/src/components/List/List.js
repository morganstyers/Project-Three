const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rockSchema = new Schema({
    category: { type: String, required: true },
    name: { type: String, required: true },
    quantity: String,
    condition: String,
    description: String,
    image: String
});

const Rock = mongoose.model("Rock", rockSchema);

module.exports = Rock;