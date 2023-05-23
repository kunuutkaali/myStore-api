const mongoose = require('mongoose')
const Inventory = require('../models/inventory');

module.exports = {
  /* Get alle inventory items */
  getAllInventory: async(req, res, next)=>{
    try {
      const products = await Inventory.
      find().
      populate({
        path: 'product',
        select: 'name',
        populate: {
          path: 'category',
          select: 'name'
        }
      })
      res.products = products
      next()
    } catch (error) {
      res.status(500).json(error)
    }
  },
  /* POST new product */
  postProduct: async(req, res, next)=>{
    try {
      let product = new Inventory({
        product: req.body.product
      })
      const createdProduct = await product.save();
      res.createdProduct = createdProduct;
      next()
    } catch (error) {
      res.json(error)
    }
  },
  /* DELETE a product from inventory */
  deleteProduct: async (req, res, next)=>{
    try {
      let deleteInventory = await Inventory.deleteOne({_id:req.body.id})
      res.deleteInventory = deleteInventory;
      next()
    } catch (error) {
      res.json(error)
    }
  },
  /* Update a product in the inventory */
  patchProduct: async (req, res, next)=>{
    try {
      let updatedProduct = await Inventory.updateOne({
        _id: req.body.id
      }, {
        product:req.body.product,
        inStock: req.body.inStock,
        inOrder: req.body.inOrder
      })
      res.updatedProduct = updatedProduct;
      next()
    } catch (error) {
      res.json(error)
    }
  }
}