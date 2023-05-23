const mongoose = require('mongoose')
const Product = require('../models/product')
const Category = require('../models/productCategory')


module.exports = {
  /* Get one product */
  getProduct: async (req, res, next) => {
    try {
      const product = await Product.find({_id: req.body.id});
      res.product = product
      next()
    } catch (error) {
      res.json(error);
    }
  },
  /* Get all products */
  getProducts: async (req, res, next) => {
    try {
      const products = await Product.find({});
      res.products = products
      next()
    } catch (error) {
      res.json(error);
    }
  },
  postProduct: async (req, res, next) => {
    try {
      let product = new Product({
        name: req.body.name,
        description: req.body.description,
        eannr: req.body.eannr,
        category: req.body.category
      })
      const newProduct = await product.save();
      res.newProduct = newProduct;
      next()
    } catch (error) {
      res.json(error)
    }
  },
  deleteProduct: async (req, res, next)=>{
    try {
      let deleted = await Product.deleteOne({_id:req.body.id})
      console.log(deleted);
      next()
    } catch (error) {
      res.json(error);
    }
  },
  patchProduct: async (req, res, next)=>{
    try {
      let updatedProduct = await Product.findOneAndUpdate({_id: req.body.id}, {
        name:req.body.name,
        description: req.body.description,
        eannr: req.body.eannr,
        category:req.body.category
      },{returnDocument: 'after'})
      res.updatedProduct = updatedProduct
      next()
    } catch (error) {
      res.json(error);
    }
  }
}