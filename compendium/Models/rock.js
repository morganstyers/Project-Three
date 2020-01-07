const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Schema
const rockSchema = new Schema ({
    category: { type: String, required: true },
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    condition: { type: String, required: true },
    description: { type: String, required: true },
    image: { data: Buffer, contentType: String }
  
  })
  
  const Rock = mongoose.model("Rock", rockSchema);
  
  module.exports = Rock;