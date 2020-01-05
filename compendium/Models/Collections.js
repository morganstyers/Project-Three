const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Schema
const CollectionsSchema = new Schema ({
    category: { type: String, required: true },
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    condition: { type: String, required: true },
    description: { type: String, required: true },
    image: { data: Buffer, contentType: String, required: true }
  
  })
  // Model
//   const Collections = mongoose.model('Collections', CollectionsSchema);

  module.exports = Collections;