const mongoose = require('mongoose');

const inventory = mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Product"
  },
  inStock: {
    type: Number,
    default: 0
  },
  inOrder: {
    type: Number,
    defafault: 0
  }
})

module.exports = mongoose.model('Inventory', inventory, 'inventory')