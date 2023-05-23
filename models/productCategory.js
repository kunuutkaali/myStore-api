const mongoose = require('mongoose');

const productCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  parentCategory: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref:'ProductCategory'
  }
})
module.exports = mongoose.model('ProductCategory', productCategorySchema, 'productCategory') 