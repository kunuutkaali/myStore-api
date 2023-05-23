const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  eannr: {
    type: Number
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductCategory'
  }
})
module.exports = mongoose.model(
  'Product', 
  productSchema, 
  'products'
  )