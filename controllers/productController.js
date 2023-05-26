const mongoose = require('mongoose')
const Product = require('../models/product')
const Category = require('../models/productCategory')


module.exports = {
  /* Get one product */
  getProduct: async (req, res, next) => {
    try {
      const product = await Product.find({_id: req.query.id});
      res.product = product
      next()
    } catch (error) {
      res.json(error);
    }
  },
  /* Get products */
  getProducts: async (req, res, next) => {
    let skip = req.query.skip ? req.query.skip : 0;
    let limit = req.query.limit ? req.query.limit : 10;
    /* if category is selected */
    if(req.query.category){
      let categoryId = req.query.category;
      let selectedCategoryIds = []
      selectedCategoryIds.push(categoryId);
      try {
        /* Get all categories with the select cat id as parentcat id */
        let foundCategories = await Category.find({parentCategory: categoryId}, {_id:1})
        if(foundCategories.length > 0){
          foundCategories.forEach(categori => selectedCategoryIds.push(categori._id))
        }
        try {
          const query = { category: { $in: selectedCategoryIds } }
          res.products = await Product.find(query).populate('category').limit(limit).skip(skip)
          next();
        } catch (error) {
          res.status(400).json({'Error code:': error.code});
        }
      } catch (error) {
        /* Error during getting categories */
        res.status(400).json({'Error code:': error.code});
      }
    }else{
      /* No category selected */
      try {
        const result = await Product.find().populate('category').limit(limit).skip(skip)
        res.products = result
        next();
      } catch (error) {
        res.status(400).json({'Error code:': error.code});
      }
    }
  },
  /* Post new product */
  postProduct: async (req, res, next) => {
    try {
      let product = new Product({
        name: req.body.name,
        description: req.body.description,
        eannr: req.body.eannr,
        category: req.body.category,
        price: req.body.price,
        price_retail: req.body.price_retail
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
        category:req.body.category,
        price: req.body.price,
        price_retail: req.body.price_retail
      },{returnDocument: 'after'})
      res.updatedProduct = updatedProduct
      next()
    } catch (error) {
      res.json(error);
    }
  }
}