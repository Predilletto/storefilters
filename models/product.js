const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name must be provived"],
  },
  price: {
    type: Number,
    required: [true, "Product price must be provived"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdTime: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "marcos", "liddy", "caressa"],
      message: "{VALUE} not supported.",
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
